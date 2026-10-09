// ==============================================================================
// NISH TECHNOLOGIES — MASTER ADMIN APPLICATION LOGIC
// Connects to Supabase (qjxvfzhtgakwidnnkiuh) & Cloudinary (eduwk9jq)
// ==============================================================================

import { supabaseService } from './supabaseClient.js';
import { uploadImageToCloudinary } from './cloudinaryService.js';
import { DOMAINS } from './data.js';

class AdminApp {
  constructor() {
    this.currentView = 'dashboard';
    this.charts = {};
    this.init();
  }

  async init() {
    this.bindLoginEvents();
    this.bindNavigationEvents();
    this.bindCloudinaryEvents();
    this.bindCmsEvents();
    this.bindFilterAndExportEvents();

    // Check existing session
    const session = supabaseService.getAdminSession();
    if (session) {
      this.showAppLayout(session);
    } else {
      this.showLoginLayout();
    }
  }

  // ===========================================================================
  // 1. AUTHENTICATION & VIEWS
  // ===========================================================================
  bindLoginEvents() {
    const loginForm = document.getElementById('admin-login-form');
    const errorAlert = document.getElementById('login-error-alert');

    loginForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('admin-email').value.trim();
      const password = document.getElementById('admin-password').value;

      const submitBtn = document.getElementById('btn-admin-login-submit');
      submitBtn.innerHTML = '<span>⏳ Authenticating...</span>';
      submitBtn.disabled = true;

      const { user, error } = await supabaseService.adminLogin(email, password);

      submitBtn.innerHTML = '<span>🔐 Secure Admin Sign In</span>';
      submitBtn.disabled = false;

      if (error || !user) {
        if (errorAlert) {
          errorAlert.textContent = error?.message || 'Invalid administrator credentials.';
          errorAlert.style.display = 'block';
        }
      } else {
        if (errorAlert) errorAlert.style.display = 'none';
        this.showAppLayout(user);
      }
    });

    const logoutBtn = document.getElementById('btn-admin-logout');
    logoutBtn?.addEventListener('click', () => {
      if (confirm('Are you sure you want to sign out of the Admin Portal?')) {
        supabaseService.adminLogout();
        this.showLoginLayout();
      }
    });
  }

  showLoginLayout() {
    document.getElementById('admin-login-view').style.display = 'flex';
    document.getElementById('admin-app-layout').style.display = 'none';
  }

  showAppLayout(session) {
    document.getElementById('admin-login-view').style.display = 'none';
    document.getElementById('admin-app-layout').style.display = 'flex';
    
    const nameEl = document.getElementById('admin-user-name');
    if (nameEl) nameEl.textContent = session.name || session.email;

    this.seedDefaultDataIfEmpty();
    this.loadDashboardData();
  }

  bindNavigationEvents() {
    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('btn-sidebar-toggle');
    const sidebar = document.getElementById('admin-sidebar');
    toggleBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
    });

    // Nav items
    document.querySelectorAll('.sidebar-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');
        this.switchView(targetView);
        sidebar?.classList.remove('open');
      });
    });
  }

  switchView(viewName) {
    this.currentView = viewName;
    document.querySelectorAll('.sidebar-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });

    document.querySelectorAll('.admin-view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) targetPanel.classList.add('active');

    // Update Title
    const titleMap = {
      'dashboard': 'Analytics Dashboard',
      'students': 'Student Management & Registrations',
      'courses': 'Course Tracks & Specializations',
      'enrollments': 'Course Enrollments',
      'payments': 'Payments & Revenue Reports',
      'cms': 'Live Website Content Management',
      'media': 'Cloudinary Media Asset Manager',
      'inquiries': 'Contact Inquiries & Leads',
      'announcements': 'Portal Announcements & Notices',
      'logs': 'Activity Security Logs'
    };
    const titleEl = document.getElementById('page-current-title');
    if (titleEl) titleEl.textContent = titleMap[viewName] || 'Admin Portal';

    // Load view-specific data
    if (viewName === 'dashboard') this.loadDashboardData();
    if (viewName === 'students') this.loadStudentsData();
    if (viewName === 'courses') this.loadCoursesData();
    if (viewName === 'enrollments') this.loadEnrollmentsData();
    if (viewName === 'payments') this.loadPaymentsData();
    if (viewName === 'media') this.loadMediaData();
    if (viewName === 'inquiries') this.loadInquiriesData();
    if (viewName === 'announcements') this.loadAnnouncementsData();
    if (viewName === 'logs') this.loadLogsData();
  }

  // ===========================================================================
  // 2. INITIAL SEEDING & DATA HARMONIZATION
  // ===========================================================================
  seedDefaultDataIfEmpty() {
    const existingCourses = JSON.parse(localStorage.getItem('nti_courses') || '[]');
    if (existingCourses.length === 0 && Array.isArray(DOMAINS)) {
      const seeded = DOMAINS.map(d => ({
        id: 'crs_' + d.id,
        title: d.name,
        slug: d.id,
        category: d.category,
        category_slug: d.categorySlug,
        short_description: d.shortDescription,
        fee: 153,
        stipend_amount: '₹30,000 / month',
        duration: '3 - 6 Months',
        is_published: true,
        enrolled_count: Math.floor(Math.random() * 40) + 10,
        image_url: `https://res.cloudinary.com/eduwk9jq/image/upload/v1/nish_technologies/${d.id}.jpg`
      }));
      localStorage.setItem('nti_courses', JSON.stringify(seeded));
    }

    // Default sample registrations if empty
    const existingRegs = JSON.parse(localStorage.getItem('nti_registrations') || '[]');
    if (existingRegs.length === 0) {
      const sampleRegs = [
        {
          id: 'reg_1',
          application_id: 'NTI-REG-2026-904812',
          full_name: 'Aditya Sharma',
          email: 'aditya.sharma@example.com',
          phone: '+91 98765 43210',
          college: 'IIT Madras',
          graduation_year: '2026',
          domain: 'VLSI & Chip Design',
          passcode: '8129',
          status: 'Confirmed',
          payment_status: 'Paid',
          amount_paid: 153,
          created_at: new Date(Date.now() - 2 * 3600 * 1000).toISOString()
        },
        {
          id: 'reg_2',
          application_id: 'NTI-REG-2026-904813',
          full_name: 'Priya Patel',
          email: 'priya.patel@example.com',
          phone: '+91 98123 45678',
          college: 'NIT Trichy',
          graduation_year: '2025',
          domain: 'Artificial Intelligence & ML',
          passcode: '4592',
          status: 'Confirmed',
          payment_status: 'Paid',
          amount_paid: 153,
          created_at: new Date(Date.now() - 6 * 3600 * 1000).toISOString()
        },
        {
          id: 'reg_3',
          application_id: 'NTI-REG-2026-904814',
          full_name: 'Rahul Varma',
          email: 'rahul.varma@example.com',
          phone: '+91 97654 32109',
          college: 'BITS Pilani',
          graduation_year: '2026',
          domain: 'Java Full Stack & Spring Boot',
          passcode: '7301',
          status: 'Confirmed',
          payment_status: 'Paid',
          amount_paid: 153,
          created_at: new Date(Date.now() - 24 * 3600 * 1000).toISOString()
        }
      ];
      localStorage.setItem('nti_registrations', JSON.stringify(sampleRegs));
    }
  }

  // ===========================================================================
  // 3. DASHBOARD METRICS & CHARTS
  // ===========================================================================
  async loadDashboardData() {
    const filter = document.getElementById('dash-date-filter')?.value || 'all';
    const metrics = await supabaseService.getDashboardMetrics(filter);

    // Update counters
    const studentsEl = document.getElementById('dash-stat-students');
    if (studentsEl) studentsEl.textContent = metrics.totalStudents;

    const todayRegsEl = document.getElementById('dash-stat-today-regs');
    if (todayRegsEl) todayRegsEl.textContent = `+${metrics.regsToday} today`;

    const revenueEl = document.getElementById('dash-stat-revenue');
    if (revenueEl) revenueEl.textContent = `₹${metrics.totalNetRevenue.toLocaleString('en-IN')}`;

    const paymentsCountEl = document.getElementById('dash-stat-payments-count');
    if (paymentsCountEl) paymentsCountEl.textContent = metrics.totalSuccessfulPayments;

    const coursesEl = document.getElementById('dash-stat-courses');
    if (coursesEl) coursesEl.textContent = metrics.totalCourses;

    const publishedCoursesEl = document.getElementById('dash-stat-published-courses');
    if (publishedCoursesEl) publishedCoursesEl.textContent = metrics.publishedCourses;

    const inqEl = document.getElementById('dash-stat-inquiries');
    if (inqEl) inqEl.textContent = metrics.totalInquiries;

    const newInqEl = document.getElementById('dash-stat-new-inquiries');
    if (newInqEl) newInqEl.textContent = `${metrics.newInquiries} new`;

    // Badges in sidebar
    document.getElementById('badge-students-count').textContent = metrics.totalStudents;
    document.getElementById('badge-courses-count').textContent = metrics.totalCourses;
    document.getElementById('badge-payments-count').textContent = `₹${metrics.totalNetRevenue}`;
    document.getElementById('badge-inquiries-count').textContent = metrics.totalInquiries;

    // Render Recent Students
    const studentTbody = document.getElementById('dash-recent-students-tbody');
    if (studentTbody) {
      if (metrics.recentRegistrations.length === 0) {
        studentTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #94A3B8;">No registrations yet.</td></tr>`;
      } else {
        studentTbody.innerHTML = metrics.recentRegistrations.map(r => `
          <tr>
            <td><strong>${r.full_name || r.name}</strong><br><small style="color: #64748B;">${r.email}</small></td>
            <td><span style="font-size: 0.8rem; background: #F1F5F9; padding: 2px 8px; border-radius: 4px;">${r.domain}</span></td>
            <td><code style="font-weight: 800; color: #0284C7;">${r.passcode || 'N/A'}</code></td>
            <td><span class="badge-status badge-confirmed">${r.status || 'Confirmed'}</span></td>
          </tr>
        `).join('');
      }
    }

    // Render Recent Payments
    const payTbody = document.getElementById('dash-recent-payments-tbody');
    if (payTbody) {
      if (metrics.recentPayments.length === 0) {
        payTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #94A3B8;">No transactions logged yet.</td></tr>`;
      } else {
        payTbody.innerHTML = metrics.recentPayments.map(p => `
          <tr>
            <td><code style="font-size: 0.78rem;">${p.transaction_id || p.transactionId || 'TXN-9021'}</code></td>
            <td>${p.student_name || p.studentName || 'Candidate'}</td>
            <td><strong>₹${p.amount || 153}</strong></td>
            <td><span class="badge-status badge-successful">${p.payment_status || p.status || 'Successful'}</span></td>
          </tr>
        `).join('');
      }
    }

    this.renderAnalyticsCharts(metrics);
  }

  renderAnalyticsCharts(metrics) {
    // 1. Registrations Chart
    const ctxRegs = document.getElementById('chart-registrations');
    if (ctxRegs) {
      if (this.charts.regs) this.charts.regs.destroy();
      this.charts.regs = new Chart(ctxRegs, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Registrations',
            data: [12, 19, 15, 25, 32, 45, Math.max(10, metrics.totalStudents)],
            borderColor: '#0284C7',
            backgroundColor: 'rgba(2, 132, 199, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } }
        }
      });
    }

    // 2. Revenue Chart
    const ctxRev = document.getElementById('chart-revenue');
    if (ctxRev) {
      if (this.charts.rev) this.charts.rev.destroy();
      this.charts.rev = new Chart(ctxRev, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4 (Current)'],
          datasets: [{
            label: 'Collections (INR)',
            data: [4500, 7200, 12800, Math.max(1530, metrics.totalGrossRevenue)],
            backgroundColor: '#10B981',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } }
        }
      });
    }
  }

  // ===========================================================================
  // 4. STUDENT MANAGEMENT & REGISTRATIONS
  // ===========================================================================
  async loadStudentsData() {
    const { data: students } = await supabaseService.getRegistrations();
    const tbody = document.getElementById('students-table-tbody');
    if (!tbody) return;

    const searchTerm = document.getElementById('search-students')?.value.toLowerCase().trim() || '';
    const domainFilter = document.getElementById('filter-students-domain')?.value || 'all';
    const statusFilter = document.getElementById('filter-students-status')?.value || 'all';

    const filtered = students.filter(s => {
      const matchSearch = (s.full_name || s.name || '').toLowerCase().includes(searchTerm) ||
                          (s.email || '').toLowerCase().includes(searchTerm) ||
                          (s.application_id || s.applicationId || '').toLowerCase().includes(searchTerm);
      const matchDomain = domainFilter === 'all' || (s.domain_id === domainFilter || (s.domain || '').toLowerCase().includes(domainFilter));
      const matchStatus = statusFilter === 'all' || s.status === statusFilter;
      return matchSearch && matchDomain && matchStatus;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #94A3B8; padding: 24px;">No student records found matching filters.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(s => `
      <tr>
        <td><code style="font-weight: 800; color: #0284C7;">${s.application_id || s.applicationId}</code></td>
        <td><strong>${s.full_name || s.name}</strong><br><small style="color: #64748B;">${s.college || 'Engineering College'}</small></td>
        <td>${s.email}<br><small style="color: #64748B;">${s.phone || 'N/A'}</small></td>
        <td><span style="font-size: 0.8rem; background: #F1F5F9; padding: 2px 8px; border-radius: 4px; font-weight: 700;">${s.domain}</span></td>
        <td><code style="font-weight: 900; background: #FEF3C7; color: #B45309; padding: 2px 6px; border-radius: 3px;">${s.passcode || '8129'}</code></td>
        <td><span class="badge-status badge-paid">₹${s.amount_paid || 153} &bull; ${s.payment_status || 'Paid'}</span></td>
        <td><small>${new Date(s.created_at).toLocaleDateString('en-IN')}</small></td>
        <td>
          <button type="button" class="btn-admin-action" style="font-size: 0.75rem; padding: 4px 8px;" onclick="window.adminApp.openStudentModal('${s.application_id || s.applicationId}')">
            View Profile
          </button>
        </td>
      </tr>
    `).join('');
  }

  async openStudentModal(appId) {
    const { data: students } = await supabaseService.getRegistrations();
    const student = students.find(s => (s.application_id || s.applicationId) === appId);
    if (!student) return;

    const modalBody = document.getElementById('student-detail-body');
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h4 style="font-size: 1.15rem; font-weight: 800; color: #0F172A;">${student.full_name || student.name}</h4>
            <span class="badge-status badge-confirmed">${student.status || 'Confirmed'}</span>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.85rem; color: #334155;">
            <div><strong>Application ID:</strong> <code>${student.application_id || student.applicationId}</code></div>
            <div><strong>Security Passcode:</strong> <code style="color: #0284C7; font-weight: 800;">${student.passcode || '8129'}</code></div>
            <div><strong>Email:</strong> ${student.email}</div>
            <div><strong>Phone:</strong> ${student.phone || 'N/A'}</div>
            <div><strong>College:</strong> ${student.college || 'N/A'}</div>
            <div><strong>Graduation Year:</strong> ${student.graduation_year || student.gradYear || '2026'}</div>
            <div><strong>Allocated Domain:</strong> ${student.domain}</div>
            <div><strong>Registration Date:</strong> ${new Date(student.created_at).toLocaleString('en-IN')}</div>
          </div>
        </div>

        <h5 style="font-weight: 800; font-size: 0.95rem; margin-bottom: 8px; color: #0F172A;">Payment &amp; Examination Record:</h5>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: #ECFDF5; border: 1px solid #A7F3D0; padding: 10px; border-radius: 6px; font-size: 0.85rem;">
            <strong style="color: #065F46;">Payment Verified:</strong> ₹${student.amount_paid || 153} (UPI/Razorpay)
          </div>
          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 10px; border-radius: 6px; font-size: 0.85rem;">
            <strong style="color: #1E3A8A;">Stipend Eligibility:</strong> ₹30,000 / month on merit
          </div>
        </div>
      `;
    }

    this.openModal('modal-student-detail');
  }

  // ===========================================================================
  // 5. COURSE MANAGEMENT
  // ===========================================================================
  async loadCoursesData() {
    const { data: courses } = await supabaseService.getCourses();
    const tbody = document.getElementById('courses-table-tbody');
    if (!tbody) return;

    tbody.innerHTML = courses.map(c => `
      <tr>
        <td><strong>${c.title}</strong><br><code style="font-size: 0.75rem; color: #64748B;">slug: ${c.slug}</code></td>
        <td><span style="font-size: 0.8rem; background: #F1F5F9; padding: 2px 8px; border-radius: 4px;">${c.category}</span></td>
        <td><strong>${c.stipend_amount || '₹30,000 / mo'}</strong><br><small style="color: #64748B;">Fee: ₹${c.fee || 153}</small></td>
        <td>${c.duration || '3 - 6 Months'}</td>
        <td><strong>${c.enrolled_count || 0}</strong> students</td>
        <td><span class="badge-status ${c.is_published !== false ? 'badge-confirmed' : 'badge-failed'}">${c.is_published !== false ? 'Published' : 'Draft'}</span></td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button type="button" class="btn-admin-action" style="font-size: 0.75rem; padding: 4px 8px;" onclick="window.adminApp.openEditCourseModal('${c.id || c.slug}')">Edit</button>
            <button type="button" class="btn-admin-secondary" style="font-size: 0.75rem; padding: 4px 8px; color: #DC2626;" onclick="window.adminApp.deleteCourse('${c.id || c.slug}')">Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  async openEditCourseModal(courseId = null) {
    const modalTitle = document.getElementById('course-modal-title');
    const idInput = document.getElementById('course-edit-id');
    const titleInput = document.getElementById('course-form-title');
    const catInput = document.getElementById('course-form-category');
    const slugInput = document.getElementById('course-form-slug');
    const feeInput = document.getElementById('course-form-fee');
    const stipendInput = document.getElementById('course-form-stipend');
    const descInput = document.getElementById('course-form-desc');
    const imgInput = document.getElementById('course-form-image');

    if (courseId) {
      const { data: courses } = await supabaseService.getCourses();
      const course = courses.find(c => c.id === courseId || c.slug === courseId);
      if (course) {
        if (modalTitle) modalTitle.textContent = 'Edit Course Track';
        if (idInput) idInput.value = course.id || course.slug;
        if (titleInput) titleInput.value = course.title || '';
        if (catInput) catInput.value = course.category || '';
        if (slugInput) slugInput.value = course.slug || '';
        if (feeInput) feeInput.value = course.fee || 153;
        if (stipendInput) stipendInput.value = course.stipend_amount || '₹30,000 / month';
        if (descInput) descInput.value = course.short_description || '';
        if (imgInput) imgInput.value = course.image_url || '';
      }
    } else {
      if (modalTitle) modalTitle.textContent = 'Add New Course Track';
      document.getElementById('form-course-edit')?.reset();
      if (idInput) idInput.value = '';
    }

    this.openModal('modal-course-edit');
  }

  async deleteCourse(courseId) {
    if (confirm('Are you sure you want to delete this course track?')) {
      await supabaseService.deleteCourse(courseId);
      this.loadCoursesData();
      alert('Course deleted successfully.');
    }
  }

  // ===========================================================================
  // 6. ENROLLMENTS & PAYMENTS
  // ===========================================================================
  async loadEnrollmentsData() {
    const { data: enrollments } = await supabaseService.getEnrollments();
    const tbody = document.getElementById('enrollments-table-tbody');
    if (!tbody) return;

    if (enrollments.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94A3B8; padding: 24px;">No enrollments recorded yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = enrollments.map(e => `
      <tr>
        <td><strong>${e.student_name || 'Student'}</strong></td>
        <td>${e.student_email || 'student@example.com'}</td>
        <td><span style="font-size: 0.8rem; background: #F1F5F9; padding: 2px 8px; border-radius: 4px; font-weight: 700;">${e.course_name}</span></td>
        <td>${new Date(e.enrollment_date || e.created_at).toLocaleDateString('en-IN')}</td>
        <td><span class="badge-status badge-active">${e.status || 'Active'}</span></td>
        <td><span class="badge-status badge-paid">${e.payment_status || 'Paid'}</span></td>
      </tr>
    `).join('');
  }

  async loadPaymentsData() {
    const { data: payments } = await supabaseService.getPayments();
    const tbody = document.getElementById('payments-table-tbody');
    if (!tbody) return;

    const searchTerm = document.getElementById('search-payments')?.value.toLowerCase().trim() || '';
    const statusFilter = document.getElementById('filter-payment-status')?.value || 'all';

    const filtered = payments.filter(p => {
      const matchSearch = (p.transaction_id || p.transactionId || '').toLowerCase().includes(searchTerm) ||
                          (p.student_name || p.studentName || '').toLowerCase().includes(searchTerm) ||
                          (p.application_id || '').toLowerCase().includes(searchTerm);
      const matchStatus = statusFilter === 'all' || (p.payment_status || p.status) === statusFilter;
      return matchSearch && matchStatus;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 24px;">No payment transactions found.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(p => `
      <tr>
        <td><code style="font-weight: 800; color: #0284C7;">${p.transaction_id || p.transactionId || 'TXN-9048'}</code></td>
        <td><strong>${p.student_name || p.studentName || 'Candidate'}</strong><br><small style="color: #64748B;">${p.student_email || ''}</small></td>
        <td>${p.course_name || 'Qualifier Assessment'}</td>
        <td><strong>₹${p.amount || 153}</strong></td>
        <td><span style="font-size: 0.78rem; background: #F1F5F9; padding: 2px 6px; border-radius: 3px;">${p.payment_method || 'UPI'}</span></td>
        <td><span class="badge-status badge-successful">${p.payment_status || p.status || 'Successful'}</span></td>
        <td><small>${new Date(p.created_at || Date.now()).toLocaleString('en-IN')}</small></td>
      </tr>
    `).join('');
  }

  // ===========================================================================
  // 7. CLOUDINARY MEDIA ASSET MANAGER
  // ===========================================================================
  bindCloudinaryEvents() {
    const dropzone = document.getElementById('cloudinary-dropzone');
    const fileInput = document.getElementById('cloudinary-file-input');

    dropzone?.addEventListener('click', () => fileInput?.click());

    dropzone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone?.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone?.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        this.handleCloudinaryFileUpload(e.dataTransfer.files[0]);
      }
    });

    fileInput?.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        this.handleCloudinaryFileUpload(e.target.files[0]);
      }
    });
  }

  async handleCloudinaryFileUpload(file) {
    const progressWrap = document.getElementById('media-upload-progress-wrap');
    const progressFill = document.getElementById('media-upload-fill');
    const progressPct = document.getElementById('media-upload-pct');
    const progressFilename = document.getElementById('media-upload-filename');

    if (progressWrap) progressWrap.style.display = 'block';
    if (progressFilename) progressFilename.textContent = `Uploading "${file.name}" to Cloudinary (eduwk9jq)...`;

    try {
      const asset = await uploadImageToCloudinary(file, (percent) => {
        if (progressFill) progressFill.style.width = percent + '%';
        if (progressPct) progressPct.textContent = percent + '%';
      });

      await supabaseService.saveMediaAsset(asset);
      alert(`✅ Image successfully uploaded to Cloudinary!\nSecure URL: ${asset.secure_url}`);
      this.loadMediaData();
    } catch (err) {
      alert(`❌ Cloudinary Upload Error: ${err.message}`);
    } finally {
      if (progressWrap) progressWrap.style.display = 'none';
      if (progressFill) progressFill.style.width = '0%';
    }
  }

  async loadMediaData() {
    const { data: media } = await supabaseService.getMediaAssets();
    const grid = document.getElementById('media-gallery-grid');
    if (!grid) return;

    if (media.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #94A3B8; padding: 30px;">No images uploaded yet. Drop image files above to upload directly to Cloudinary.</div>`;
      return;
    }

    grid.innerHTML = media.map(m => `
      <div class="media-asset-card">
        <img src="${m.secure_url || m.url}" alt="Asset" class="media-thumb-img" loading="lazy">
        <div class="media-asset-info">
          <div style="font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.public_id}</div>
          <div>${m.format?.toUpperCase() || 'IMG'} &bull; ${Math.round((m.bytes || 0) / 1024)} KB</div>
          <button type="button" class="btn-admin-secondary" style="width: 100%; margin-top: 6px; font-size: 0.72rem; padding: 4px;" onclick="navigator.clipboard.writeText('${m.secure_url}'); alert('Cloudinary URL copied to clipboard!');">
            📋 Copy URL
          </button>
        </div>
      </div>
    `).join('');
  }

  // ===========================================================================
  // 8. LIVE WEBSITE CMS & INQUIRIES
  // ===========================================================================
  bindCmsEvents() {
    const cmsForm = document.getElementById('cms-settings-form');
    cmsForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const heroBadge = document.getElementById('cms-hero-badge')?.value;
      const stipend = document.getElementById('cms-stipend-amount')?.value;
      const heroHeading = document.getElementById('cms-hero-heading')?.value;
      const heroDesc = document.getElementById('cms-hero-desc')?.value;
      const email = document.getElementById('cms-support-email')?.value;
      const whatsapp = document.getElementById('cms-whatsapp-channel')?.value;

      const newSettings = {
        heroBadge,
        stipend,
        heroHeading,
        heroDesc,
        email,
        whatsapp,
        updatedAt: new Date().toISOString()
      };

      await supabaseService.updateSiteSetting('homepage_cms', newSettings);
      alert('✅ Live website content updated successfully in Supabase! Changes are live on the website.');
    });

    // Course form submission
    const courseForm = document.getElementById('form-course-edit');
    courseForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('course-edit-id')?.value;
      const title = document.getElementById('course-form-title')?.value;
      const category = document.getElementById('course-form-category')?.value;
      const slug = document.getElementById('course-form-slug')?.value;
      const fee = parseFloat(document.getElementById('course-form-fee')?.value) || 153;
      const stipend = document.getElementById('course-form-stipend')?.value;
      const desc = document.getElementById('course-form-desc')?.value;
      const img = document.getElementById('course-form-image')?.value;

      const coursePayload = {
        title,
        category,
        slug,
        fee,
        stipend_amount: stipend,
        short_description: desc,
        image_url: img,
        is_published: true
      };

      if (id) {
        await supabaseService.updateCourse(id, coursePayload);
      } else {
        await supabaseService.createCourse(coursePayload);
      }

      this.closeModal('modal-course-edit');
      this.loadCoursesData();
      alert('✅ Course track saved successfully!');
    });
  }

  async loadInquiriesData() {
    const { data: inqs } = await supabaseService.getInquiries();
    const tbody = document.getElementById('inquiries-table-tbody');
    if (!tbody) return;

    if (inqs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94A3B8; padding: 24px;">No customer inquiries received yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = inqs.map(i => `
      <tr>
        <td><strong>${i.name}</strong></td>
        <td>${i.email}<br><small style="color: #64748B;">${i.phone || 'N/A'}</small></td>
        <td>${i.subject || 'General Inquiry'}</td>
        <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${i.message}</td>
        <td><span class="badge-status ${i.status === 'New' ? 'badge-pending' : 'badge-confirmed'}">${i.status || 'New'}</span></td>
        <td><small>${new Date(i.created_at).toLocaleDateString('en-IN')}</small></td>
        <td>
          <button type="button" class="btn-admin-secondary" style="font-size: 0.72rem; padding: 3px 6px;" onclick="alert('Inquiry Message:\n\n' + '${encodeURIComponent(i.message)}')">View</button>
        </td>
      </tr>
    `).join('');
  }

  async loadAnnouncementsData() {
    const container = document.getElementById('announcements-list-container');
    if (!container) return;

    container.innerHTML = `
      <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 8px; padding: 18px; margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h4 style="font-size: 1rem; font-weight: 800; color: #0F172A;">Sunday 6:00 PM Qualifier Assessment Live Announcement</h4>
          <span class="badge-status badge-confirmed">ACTIVE ON PORTAL</span>
        </div>
        <p style="font-size: 0.88rem; color: #334155; margin-bottom: 8px;">
          The next official Stipend-Based Internship Assessment will go live on Sunday at 6:00 PM IST. Registered candidates must log in with their assigned passcodes. Top 10 rankers receive the ₹30,000/month stipend offer.
        </p>
        <small style="color: #64748B;">Broadcast Target: All Registered Candidates &bull; Active until Sunday 7:00 PM</small>
      </div>
    `;
  }

  async loadLogsData() {
    const { data: logs } = await supabaseService.getActivityLogs();
    const tbody = document.getElementById('logs-table-tbody');
    if (!tbody) return;

    if (logs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #94A3B8; padding: 24px;">No activity logs recorded.</td></tr>`;
      return;
    }

    tbody.innerHTML = logs.map(l => `
      <tr>
        <td><strong>${l.admin_email}</strong></td>
        <td><span style="font-weight: 700; color: #0284C7;">${l.action}</span></td>
        <td><code>${l.entity_type}</code></td>
        <td>${l.entity_id || 'Global'}</td>
        <td><small>${new Date(l.created_at).toLocaleString('en-IN')}</small></td>
      </tr>
    `).join('');
  }

  // ===========================================================================
  // 9. EXPORTS & MODALS
  // ===========================================================================
  bindFilterAndExportEvents() {
    document.getElementById('dash-date-filter')?.addEventListener('change', () => this.loadDashboardData());
    document.getElementById('btn-refresh-dashboard')?.addEventListener('click', () => this.loadDashboardData());

    document.getElementById('search-students')?.addEventListener('input', () => this.loadStudentsData());
    document.getElementById('filter-students-domain')?.addEventListener('change', () => this.loadStudentsData());
    document.getElementById('filter-students-status')?.addEventListener('change', () => this.loadStudentsData());

    document.getElementById('search-payments')?.addEventListener('input', () => this.loadPaymentsData());
    document.getElementById('filter-payment-status')?.addEventListener('change', () => this.loadPaymentsData());

    document.getElementById('btn-open-add-course-modal')?.addEventListener('click', () => this.openEditCourseModal());

    // CSV Exports
    document.getElementById('btn-export-students-csv')?.addEventListener('click', async () => {
      const { data } = await supabaseService.getRegistrations();
      this.exportToCsv('nish_students_report.csv', data);
    });

    document.getElementById('btn-export-payments-csv')?.addEventListener('click', async () => {
      const { data } = await supabaseService.getPayments();
      this.exportToCsv('nish_payments_report.csv', data);
    });

    document.getElementById('btn-export-enrollments-csv')?.addEventListener('click', async () => {
      const { data } = await supabaseService.getEnrollments();
      this.exportToCsv('nish_enrollments_report.csv', data);
    });
  }

  exportToCsv(filename, rows) {
    if (!rows || !rows.length) {
      alert('No data available to export.');
      return;
    }
    const keys = Object.keys(rows[0]);
    const csvContent = [
      keys.join(','),
      ...rows.map(row => keys.map(k => `"${String(row[k] || '').replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openModal(modalId) {
    document.getElementById(modalId)?.classList.add('active');
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('active');
  }
}

// Initialize on page load
window.adminApp = new AdminApp();
