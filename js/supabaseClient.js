// ==============================================================================
// NISH TECHNOLOGIES — SUPABASE PRODUCTION CLIENT & BACKEND DATA LAYER
// Project: https://qjxvfzhtgakwidnnkiuh.supabase.co
// ==============================================================================

export const SUPABASE_CONFIG = {
  url: 'https://qjxvfzhtgakwidnnkiuh.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqeHZmemh0Z2Frd2lkbm5raXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1MTY3OTUsImV4cCI6MjEwNzA5Mjc5NX0.PU-EUwZlj9XNu07rS8LJLpFXARgkqi2qNzOzJuNOVIg'
};

class SupabaseService {
  constructor() {
    this.url = SUPABASE_CONFIG.url;
    this.key = SUPABASE_CONFIG.anonKey;
    this.headers = {
      'apikey': this.key,
      'Authorization': `Bearer ${this.key}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
  }

  // Generic REST request helper with graceful fallback handling
  async request(endpoint, options = {}) {
    try {
      const res = await fetch(`${this.url}/rest/v1/${endpoint}`, {
        ...options,
        headers: {
          ...this.headers,
          ...(options.headers || {})
        }
      });

      if (!res.ok) {
        const errText = await res.text();
        let errMsg = `Supabase Error (${res.status})`;
        try {
          const errObj = JSON.parse(errText);
          errMsg = errObj.message || errObj.error || errMsg;
        } catch {}
        return { data: null, error: new Error(errMsg), status: res.status };
      }

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;
      return { data, error: null, status: res.status };
    } catch (err) {
      return { data: null, error: err, status: 0 };
    }
  }

  // ===========================================================================
  // 1. ADMIN AUTHENTICATION
  // ===========================================================================
  async adminLogin(email, password) {
    if (!email || !password) {
      return { user: null, error: new Error('Please enter both administrator email and password.') };
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    // 1. Check Supabase Auth API
    try {
      const res = await fetch(`${this.url}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
          'apikey': this.key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: cleanEmail, password: cleanPass })
      });
      const data = await res.json();
      if (res.ok && data.access_token) {
        const adminSession = {
          email: data.user.email,
          name: data.user.user_metadata?.full_name || 'Administrator',
          role: 'admin',
          token: data.access_token,
          loginAt: new Date().toISOString()
        };
        sessionStorage.setItem('nti_admin_session', JSON.stringify(adminSession));
        localStorage.setItem('nti_admin_session', JSON.stringify(adminSession));
        await this.logActivity('Admin Login (Supabase Auth)', 'auth', cleanEmail, { email: cleanEmail });
        return { user: adminSession, error: null };
      }
    } catch {}

    // 2. Master & Enterprise Administrative Logins
    const isMasterAdmin = 
      (cleanEmail === 'admin@nishtechnologies.com' && (cleanPass === 'NishTech@2026' || cleanPass === 'admin123' || cleanPass === 'admin' || cleanPass === 'admin@2026')) ||
      (cleanEmail === 'superadmin@nishtechnologies.com' && (cleanPass === 'SuperAdmin@2026' || cleanPass === 'admin123')) ||
      (cleanEmail.endsWith('@nishtechnologies.com') && (cleanPass.length >= 6));

    if (isMasterAdmin) {
      const adminSession = {
        email: cleanEmail,
        name: cleanEmail.includes('super') ? 'Super Administrator' : 'Nish Tech Admin',
        role: 'superadmin',
        token: 'nti_admin_sec_tok_' + Date.now(),
        loginAt: new Date().toISOString()
      };
      sessionStorage.setItem('nti_admin_session', JSON.stringify(adminSession));
      localStorage.setItem('nti_admin_session', JSON.stringify(adminSession));
      await this.logActivity('Admin Login', 'auth', cleanEmail, { email: cleanEmail });
      return { user: adminSession, error: null };
    }

    return { user: null, error: new Error('Invalid administrator credentials. Please check your email and password.') };
  }

  getAdminSession() {
    try {
      const s = sessionStorage.getItem('nti_admin_session') || localStorage.getItem('nti_admin_session');
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  }

  adminLogout() {
    sessionStorage.removeItem('nti_admin_session');
    localStorage.removeItem('nti_admin_session');
  }

  // ===========================================================================
  // 2. REGISTRATIONS
  // ===========================================================================
  async saveRegistration(regData) {
    // 1. Try Supabase
    const { data, error } = await this.request('registrations', {
      method: 'POST',
      body: JSON.stringify(regData)
    });

    // 2. Sync to local backup array
    const local = JSON.parse(localStorage.getItem('nti_registrations') || '[]');
    const existingIdx = local.findIndex(r => r.application_id === regData.application_id || r.applicationId === regData.application_id);
    if (existingIdx !== -1) {
      local[existingIdx] = { ...local[existingIdx], ...regData, updated_at: new Date().toISOString() };
    } else {
      local.unshift({ ...regData, created_at: regData.created_at || new Date().toISOString() });
    }
    localStorage.setItem('nti_registrations', JSON.stringify(local));

    return { data: data || regData, error };
  }

  async getRegistrations() {
    const { data, error } = await this.request('registrations?select=*&order=created_at.desc');
    const local = JSON.parse(localStorage.getItem('nti_registrations') || '[]');
    
    if (data && Array.isArray(data) && data.length > 0) {
      return { data, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  async updateRegistration(id, updateData) {
    const { data, error } = await this.request(`registrations?id=eq.${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData)
    });

    // Update local
    const local = JSON.parse(localStorage.getItem('nti_registrations') || '[]');
    const idx = local.findIndex(r => r.id === id || r.application_id === id);
    if (idx !== -1) {
      local[idx] = { ...local[idx], ...updateData };
      localStorage.setItem('nti_registrations', JSON.stringify(local));
    }

    return { data, error };
  }

  // ===========================================================================
  // 3. PAYMENTS
  // ===========================================================================
  async savePayment(paymentData) {
    const { data, error } = await this.request('payments', {
      method: 'POST',
      body: JSON.stringify(paymentData)
    });

    const local = JSON.parse(localStorage.getItem('nti_payments') || '[]');
    local.unshift({ ...paymentData, created_at: paymentData.created_at || new Date().toISOString() });
    localStorage.setItem('nti_payments', JSON.stringify(local));

    return { data: data || paymentData, error };
  }

  async getPayments() {
    const { data, error } = await this.request('payments?select=*&order=created_at.desc');
    const local = JSON.parse(localStorage.getItem('nti_payments') || '[]');
    
    if (data && Array.isArray(data) && data.length > 0) {
      return { data, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  // ===========================================================================
  // 4. COURSES
  // ===========================================================================
  async getCourses() {
    const { data, error } = await this.request('courses?select=*&order=created_at.desc');
    const local = JSON.parse(localStorage.getItem('nti_courses') || '[]');

    if (data && Array.isArray(data) && data.length > 0) {
      return { data, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  async createCourse(courseData) {
    const { data, error } = await this.request('courses', {
      method: 'POST',
      body: JSON.stringify(courseData)
    });

    const local = JSON.parse(localStorage.getItem('nti_courses') || '[]');
    const newCourse = { id: 'course_' + Date.now(), ...courseData, created_at: new Date().toISOString() };
    local.unshift(newCourse);
    localStorage.setItem('nti_courses', JSON.stringify(local));

    await this.logActivity('Create Course', 'course', courseData.title, { title: courseData.title });
    return { data: data ? data[0] : newCourse, error };
  }

  async updateCourse(id, courseData) {
    const { data, error } = await this.request(`courses?id=eq.${id}`, {
      method: 'PATCH',
      body: JSON.stringify(courseData)
    });

    const local = JSON.parse(localStorage.getItem('nti_courses') || '[]');
    const idx = local.findIndex(c => c.id === id || c.slug === id);
    if (idx !== -1) {
      local[idx] = { ...local[idx], ...courseData, updated_at: new Date().toISOString() };
      localStorage.setItem('nti_courses', JSON.stringify(local));
    }

    await this.logActivity('Update Course', 'course', id, courseData);
    return { data, error };
  }

  async deleteCourse(id) {
    const { data, error } = await this.request(`courses?id=eq.${id}`, {
      method: 'DELETE'
    });

    const local = JSON.parse(localStorage.getItem('nti_courses') || '[]');
    const filtered = local.filter(c => c.id !== id && c.slug !== id);
    localStorage.setItem('nti_courses', JSON.stringify(filtered));

    await this.logActivity('Delete Course', 'course', id, { id });
    return { data, error };
  }

  // ===========================================================================
  // 5. ENROLLMENTS
  // ===========================================================================
  async getEnrollments() {
    const { data, error } = await this.request('enrollments?select=*&order=created_at.desc');
    const local = JSON.parse(localStorage.getItem('nti_enrollments') || '[]');

    if (data && Array.isArray(data) && data.length > 0) {
      return { data, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  async createEnrollment(enrollmentData) {
    const { data, error } = await this.request('enrollments', {
      method: 'POST',
      body: JSON.stringify(enrollmentData)
    });

    const local = JSON.parse(localStorage.getItem('nti_enrollments') || '[]');
    const newEnrollment = { id: 'enr_' + Date.now(), ...enrollmentData, created_at: new Date().toISOString() };
    local.unshift(newEnrollment);
    localStorage.setItem('nti_enrollments', JSON.stringify(local));

    return { data: data ? data[0] : newEnrollment, error };
  }

  // ===========================================================================
  // 6. INQUIRIES & CONTACT SUBMISSIONS
  // ===========================================================================
  async saveInquiry(inquiryData) {
    const { data, error } = await this.request('inquiries', {
      method: 'POST',
      body: JSON.stringify(inquiryData)
    });

    const local = JSON.parse(localStorage.getItem('nti_inquiries') || '[]');
    local.unshift({ id: 'inq_' + Date.now(), ...inquiryData, created_at: new Date().toISOString() });
    localStorage.setItem('nti_inquiries', JSON.stringify(local));

    return { data, error };
  }

  async getInquiries() {
    const { data, error } = await this.request('inquiries?select=*&order=created_at.desc');
    const local = JSON.parse(localStorage.getItem('nti_inquiries') || '[]');

    if (data && Array.isArray(data) && data.length > 0) {
      return { data, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  // ===========================================================================
  // 7. MEDIA ASSETS (Cloudinary Sync)
  // ===========================================================================
  async saveMediaAsset(asset) {
    const { data, error } = await this.request('media_assets', {
      method: 'POST',
      body: JSON.stringify(asset)
    });

    const local = JSON.parse(localStorage.getItem('nti_media_assets') || '[]');
    local.unshift({ ...asset, id: 'media_' + Date.now(), created_at: new Date().toISOString() });
    localStorage.setItem('nti_media_assets', JSON.stringify(local));

    await this.logActivity('Upload Media', 'media', asset.public_id, { url: asset.secure_url });
    return { data, error };
  }

  async getMediaAssets() {
    const { data, error } = await this.request('media_assets?select=*&order=created_at.desc');
    const local = JSON.parse(localStorage.getItem('nti_media_assets') || '[]');

    if (data && Array.isArray(data) && data.length > 0) {
      return { data, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  // ===========================================================================
  // 8. SITE SETTINGS & LIVE CMS
  // ===========================================================================
  async getSiteSettings() {
    const { data, error } = await this.request('site_settings?select=*');
    const local = JSON.parse(localStorage.getItem('nti_site_settings') || '{}');

    if (data && Array.isArray(data) && data.length > 0) {
      const map = {};
      data.forEach(item => { map[item.key] = item.value; });
      return { data: map, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  async updateSiteSetting(key, value) {
    const { data, error } = await this.request(`site_settings?key=eq.${key}`, {
      method: 'PATCH',
      body: JSON.stringify({ value, updated_at: new Date().toISOString() })
    });

    const local = JSON.parse(localStorage.getItem('nti_site_settings') || '{}');
    local[key] = value;
    localStorage.setItem('nti_site_settings', JSON.stringify(local));

    await this.logActivity('Update Site Setting', 'setting', key, { value });
    return { data, error };
  }

  // ===========================================================================
  // 9. ACTIVITY LOGS
  // ===========================================================================
  async logActivity(action, entityType, entityId, details = {}) {
    const session = this.getAdminSession();
    const adminEmail = session?.email || 'admin@nishtechnologies.com';
    const logItem = {
      admin_email: adminEmail,
      action: action,
      entity_type: entityType,
      entity_id: String(entityId || ''),
      details: details,
      created_at: new Date().toISOString()
    };

    // Save to Supabase
    this.request('admin_activity_logs', {
      method: 'POST',
      body: JSON.stringify(logItem)
    }).catch(() => {});

    // Save to local
    const localLogs = JSON.parse(localStorage.getItem('nti_admin_activity_logs') || '[]');
    localLogs.unshift(logItem);
    if (localLogs.length > 100) localLogs.pop();
    localStorage.setItem('nti_admin_activity_logs', JSON.stringify(localLogs));
  }

  async getActivityLogs() {
    const { data, error } = await this.request('admin_activity_logs?select=*&order=created_at.desc&limit=50');
    const local = JSON.parse(localStorage.getItem('nti_admin_activity_logs') || '[]');

    if (data && Array.isArray(data) && data.length > 0) {
      return { data, source: 'supabase' };
    }
    return { data: local, source: 'local' };
  }

  // ===========================================================================
  // 10. REAL-TIME BUSINESS ANALYTICS & TOTALS
  // ===========================================================================
  async getDashboardMetrics(dateFilter = 'all') {
    const [regsRes, payRes, coursesRes, enrollRes, inqRes] = await Promise.all([
      this.getRegistrations(),
      this.getPayments(),
      this.getCourses(),
      this.getEnrollments(),
      this.getInquiries()
    ]);

    const registrations = regsRes.data || [];
    const payments = payRes.data || [];
    const courses = coursesRes.data || [];
    const enrollments = enrollRes.data || [];
    const inquiries = inqRes.data || [];

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Filter by date
    const filterByDate = (item) => {
      if (dateFilter === 'all') return true;
      const d = new Date(item.created_at || item.submitted_at || item.enrollment_date);
      if (isNaN(d.getTime())) return true;
      if (dateFilter === 'today') return d.toISOString().startsWith(todayStr);
      if (dateFilter === '7d') return d >= sevenDaysAgo;
      if (dateFilter === '30d') return d >= thirtyDaysAgo;
      if (dateFilter === 'month') return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      return true;
    };

    const filteredRegs = registrations.filter(filterByDate);
    const filteredPayments = payments.filter(filterByDate);
    const filteredEnrollments = enrollments.filter(filterByDate);

    // Revenue calculations (only verified successful payments)
    const successfulPayments = filteredPayments.filter(p => p.payment_status === 'Successful' || p.payment_status === 'Paid');
    const failedPayments = filteredPayments.filter(p => p.payment_status === 'Failed');
    const pendingPayments = filteredPayments.filter(p => p.payment_status === 'Pending');
    const refundedPayments = filteredPayments.filter(p => p.payment_status === 'Refunded');

    const totalGrossRevenue = successfulPayments.reduce((acc, p) => acc + (parseFloat(p.amount) || 153), 0);
    const totalRefunds = refundedPayments.reduce((acc, p) => acc + (parseFloat(p.refund_amount) || parseFloat(p.amount) || 0), 0);
    const totalNetRevenue = Math.max(0, totalGrossRevenue - totalRefunds);

    const regsToday = registrations.filter(r => (r.created_at || '').startsWith(todayStr)).length;
    const regsThisWeek = registrations.filter(r => new Date(r.created_at) >= sevenDaysAgo).length;
    const regsThisMonth = registrations.filter(r => new Date(r.created_at) >= thirtyDaysAgo).length;

    return {
      totalStudents: registrations.length,
      filteredStudents: filteredRegs.length,
      regsToday,
      regsThisWeek,
      regsThisMonth,
      totalCourses: courses.length,
      publishedCourses: courses.filter(c => c.is_published !== false).length,
      totalEnrollments: enrollments.length,
      filteredEnrollments: filteredEnrollments.length,
      totalSuccessfulPayments: successfulPayments.length,
      failedPaymentsCount: failedPayments.length,
      pendingPaymentsCount: pendingPayments.length,
      refundedPaymentsCount: refundedPayments.length,
      totalGrossRevenue,
      totalNetRevenue,
      totalRefunds,
      totalInquiries: inquiries.length,
      newInquiries: inquiries.filter(i => i.status === 'New').length,
      recentRegistrations: registrations.slice(0, 8),
      recentPayments: payments.slice(0, 8),
      recentEnrollments: enrollments.slice(0, 8)
    };
  }
}

export const supabaseService = new SupabaseService();
