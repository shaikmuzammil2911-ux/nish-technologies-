-- ==============================================================================
-- NISH TECHNOLOGIES — COMPLETE SUPABASE PRODUCTION DATABASE SCHEMA
-- Project: https://qjxvfzhtgakwidnnkiuh.supabase.co
-- ==============================================================================

-- 1. PROFILES (Admin and Student Accounts)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin', 'evaluator', 'superadmin')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. COURSES / INTERNSHIP TRACKS
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  category_slug TEXT,
  short_description TEXT,
  overview TEXT,
  duration TEXT DEFAULT '3 - 6 Months',
  eligibility TEXT DEFAULT 'B.Tech / B.E / M.Tech / MCA / Graduates',
  fee NUMERIC(10,2) DEFAULT 153.00,
  currency TEXT DEFAULT 'INR',
  stipend_amount TEXT DEFAULT '₹30,000 / month',
  image_url TEXT,
  is_published BOOLEAN DEFAULT true,
  enrolled_count INTEGER DEFAULT 0,
  syllabus JSONB DEFAULT '[]'::jsonb,
  career_paths JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. STUDENT REGISTRATIONS & APPLICATIONS
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT,
  graduation_year TEXT,
  domain TEXT NOT NULL,
  domain_id TEXT,
  status TEXT DEFAULT 'Confirmed' CHECK (status IN ('Pending', 'Confirmed', 'Verified', 'Cancelled', 'Disqualified')),
  passcode TEXT,
  payment_status TEXT DEFAULT 'Paid' CHECK (payment_status IN ('Pending', 'Paid', 'Failed', 'Refunded')),
  amount_paid NUMERIC(10,2) DEFAULT 153.00,
  transaction_id TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. COURSE ENROLLMENTS
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  student_phone TEXT,
  course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
  course_name TEXT NOT NULL,
  enrollment_date TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  status TEXT DEFAULT 'Active' CHECK (status IN ('Pending', 'Awaiting Payment', 'Confirmed', 'Active', 'Completed', 'Cancelled', 'Refunded')),
  payment_status TEXT DEFAULT 'Paid' CHECK (payment_status IN ('Pending', 'Paid', 'Failed', 'Refunded')),
  amount NUMERIC(10,2) DEFAULT 153.00,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. PAYMENTS & FINANCIAL TRANSACTIONS
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id TEXT NOT NULL UNIQUE,
  order_id TEXT,
  application_id TEXT,
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  student_phone TEXT,
  course_name TEXT NOT NULL,
  amount NUMERIC(10,2) NOT NULL DEFAULT 153.00,
  currency TEXT DEFAULT 'INR',
  payment_method TEXT DEFAULT 'UPI / Razorpay',
  payment_status TEXT NOT NULL DEFAULT 'Successful' CHECK (payment_status IN ('Successful', 'Pending', 'Failed', 'Refunded', 'Partial Refund')),
  gateway_ref TEXT,
  receipt_url TEXT,
  refund_amount NUMERIC(10,2) DEFAULT 0.00,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. EXAM SUBMISSIONS & RESULTS
CREATE TABLE IF NOT EXISTS public.exam_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id TEXT NOT NULL,
  student_name TEXT,
  student_email TEXT,
  domain TEXT NOT NULL,
  total_score INTEGER NOT NULL,
  aptitude_score INTEGER NOT NULL,
  domain_score INTEGER NOT NULL,
  attempted_count INTEGER NOT NULL,
  violations_count INTEGER DEFAULT 0,
  answers JSONB DEFAULT '{}'::jsonb,
  is_qualified BOOLEAN DEFAULT false,
  submitted_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. SITE PAGES & LIVE CMS CONTENT
CREATE TABLE IF NOT EXISTS public.site_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  hero_heading TEXT,
  hero_subheading TEXT,
  hero_badge TEXT,
  cta_text TEXT,
  cta_link TEXT,
  is_published BOOLEAN DEFAULT true,
  content_json JSONB DEFAULT '{}'::jsonb,
  seo_title TEXT,
  seo_description TEXT,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. GLOBAL SITE SETTINGS
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. PROMOTIONAL BANNERS & ANNOUNCEMENTS
CREATE TABLE IF NOT EXISTS public.banners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  badge_text TEXT DEFAULT 'OFFICIAL',
  link_url TEXT,
  is_active BOOLEAN DEFAULT true,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10. CLOUDINARY MEDIA ASSETS
CREATE TABLE IF NOT EXISTS public.media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  public_id TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  secure_url TEXT NOT NULL,
  format TEXT,
  width INTEGER,
  height INTEGER,
  bytes INTEGER,
  asset_type TEXT DEFAULT 'image',
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 11. INQUIRIES & CONTACT FORMS
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'In Progress', 'Resolved', 'Closed')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 12. ADMIN ACTIVITY AUDIT LOGS
CREATE TABLE IF NOT EXISTS public.admin_activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_email TEXT NOT NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  details JSONB DEFAULT '{}'::jsonb,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- INDEXES FOR MAXIMUM QUERY PERFORMANCE
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_registrations_app_id ON public.registrations(application_id);
CREATE INDEX IF NOT EXISTS idx_registrations_email ON public.registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON public.registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_payments_tx_id ON public.payments(transaction_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON public.payments(created_at);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON public.courses(slug);
CREATE INDEX IF NOT EXISTS idx_enrollments_student ON public.enrollments(student_email);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries(status);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_activity_logs ENABLE ROW LEVEL SECURITY;

-- Allow public read of published courses, site_pages, banners, site_settings
CREATE POLICY "Public can read published courses" ON public.courses FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read site pages" ON public.site_pages FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read active banners" ON public.banners FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read public settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public can insert registrations" ON public.registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert payments" ON public.payments FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert exam submissions" ON public.exam_submissions FOR INSERT WITH CHECK (true);

-- Enable full admin access for authenticated service role and anon public client
CREATE POLICY "Anon can full access courses for admin" ON public.courses FOR ALL USING (true);
CREATE POLICY "Anon can read registrations" ON public.registrations FOR ALL USING (true);
CREATE POLICY "Anon can read payments" ON public.payments FOR ALL USING (true);
CREATE POLICY "Anon can read enrollments" ON public.enrollments FOR ALL USING (true);
CREATE POLICY "Anon can read profiles" ON public.profiles FOR ALL USING (true);
CREATE POLICY "Anon can read site_pages" ON public.site_pages FOR ALL USING (true);
CREATE POLICY "Anon can read site_settings" ON public.site_settings FOR ALL USING (true);
CREATE POLICY "Anon can read media_assets" ON public.media_assets FOR ALL USING (true);
CREATE POLICY "Anon can read inquiries" ON public.inquiries FOR ALL USING (true);
CREATE POLICY "Anon can read banners" ON public.banners FOR ALL USING (true);
CREATE POLICY "Anon can read admin_activity_logs" ON public.admin_activity_logs FOR ALL USING (true);
CREATE POLICY "Anon can read exam_submissions" ON public.exam_submissions FOR ALL USING (true);

-- ==============================================================================
-- INITIAL SEED DATA
-- ==============================================================================
INSERT INTO public.site_settings (key, value, description)
VALUES 
  ('exam_schedule', '{"day": "Sunday", "time": "6:00 PM - 7:00 PM IST", "duration_minutes": 60, "stipend": "₹30,000 / month", "top_rankers": 10}'::jsonb, 'Global Qualifier Exam Schedule Configuration'),
  ('contact_info', '{"email": "support@nishtechnologies.com", "phone": "+91 98765 43210", "whatsapp_channel": "https://whatsapp.com/channel/0029Va9NTIOfficialChannel"}'::jsonb, 'Official Nish Technologies Contact Details'),
  ('pricing_config', '{"base_fee": 150, "platform_fee": 3, "total_fee": 153, "currency": "INR"}'::jsonb, 'Standard Candidate Assessment Fee')
ON CONFLICT (key) DO NOTHING;

INSERT INTO public.courses (title, slug, category, category_slug, short_description, stipend_amount, is_published)
VALUES 
  ('VLSI & Chip Design (Semiconductor Engineering)', 'vlsi', 'Hardware & Electronics', 'hardware-electronics', 'Digital RTL design, Verilog, Static Timing Analysis (STA), FPGA prototyping, and ASIC physical layout.', '₹30,000 / month', true),
  ('Artificial Intelligence & Machine Learning', 'ai-ml', 'Data Science & AI', 'data-science-ai', 'Supervised learning, deep neural networks, CNNs, Transformers, PyTorch, and production MLOps.', '₹30,000 / month', true),
  ('Java Enterprise Full-Stack & Spring Boot', 'java', 'Software Engineering', 'software-engineering', 'Java 21, Spring Boot, Microservices, Hibernate ORM, RESTful APIs, and cloud microservices.', '₹30,000 / month', true),
  ('Python Full-Stack & FastAPI Engineering', 'python', 'Software Engineering', 'software-engineering', 'Python asynchronous programming, FastAPI, Django, PostgreSQL, and scalable API microservices.', '₹30,000 / month', true),
  ('Modern Full-Stack Web Development (MERN)', 'full-stack', 'Software Engineering', 'software-engineering', 'React 18+, Next.js, Node.js, Express, MongoDB, Redux Toolkit, and Docker deployment.', '₹30,000 / month', true),
  ('Cyber Security & Cloud Infrastructure Defense', 'cyber-security', 'Cyber Security', 'cyber-security', 'Ethical hacking, penetration testing, OWASP Top 10, network defense, SIEM, and SOC analytics.', '₹30,000 / month', true),
  ('Cloud Architecture & DevOps Engineering', 'cloud-computing', 'Cloud Computing', 'cloud-computing', 'AWS/Azure cloud architecture, Docker containerization, Kubernetes (K8s), and Terraform IaC.', '₹30,000 / month', true),
  ('Data Science & Big Data Analytics', 'data-science', 'Data Science & AI', 'data-science-ai', 'Exploratory data analysis, statistical modeling, machine learning, Pandas, Tableau, and SQL.', '₹30,000 / month', true)
ON CONFLICT (slug) DO NOTHING;
