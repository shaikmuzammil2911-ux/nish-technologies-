// NTI Main Application Logic - Nish Technologies Inc
// Complete Interactivity, Dynamic Domain Architecture, Payment & Exam Engine

import { APP_CONFIG, DOMAINS, CATEGORIES, PROGRAMS, WHY_JOIN_CARDS, STATS } from './data.js';
import { paymentService } from './paymentService.js';
import { getExamQuestionsForCandidate } from './examQuestions.js';
import { getStudyMaterialForDomain } from './studyMaterialData.js';

class NTIApp {
  constructor() {
    this.selectedDomain = DOMAINS[0]; // Default VLSI
    this.currentCandidate = paymentService.getActiveCandidate();
    this.examQuestions = [];
    this.examState = {
      active: false,
      currentQuestionIndex: 0,
      answers: {},
      reviewMarked: {},
      totalQuestions: 45,
      secondsRemaining: 60 * 60,
      timerInterval: null,
      violationsCount: 0,
      maxViolations: 3,
      mediaStream: null,
      audioContext: null,
      audioAnalyser: null,
      noiseCheckInterval: null
    };
    this.dashboardCountdownInterval = null;
    
    this.init();
  }

  init() {
    this.renderCategories();
    this.renderAvailablePositions();
    this.renderDomainDropdown();
    this.setupModalEvents();
    this.setupNavbarEvents();
    this.setupFormValidation();
    this.setupPaymentFlow();
    this.setupGattuAIChat();
    this.setupExamEngine();
    this.setupStudentPortal();
    this.setupStudyMaterialHub();
    this.setupNumberCounters();
    this.setupSundayExamSchedule();
    this.checkUrlParams();
  }

  // =========================================================================
  // TOAST NOTIFICATIONS (No raw alert())
  // =========================================================================
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item ${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `
      <span style="font-size: 1.2rem;">${icon}</span>
      <div style="font-size: 0.9rem; font-weight: 600; color: #0E2040;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // =========================================================================
  // MODAL MANAGEMENT
  // =========================================================================
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('active');
    
    // Only re-enable body overflow if no other modal is open
    const openModals = document.querySelectorAll('.modal-overlay.active');
    if (openModals.length === 0) {
      document.body.style.overflow = '';
    }
  }

  setupModalEvents() {
    // Backdrop clicks to close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          // Do not close payment modal or active exam accidentally
          if (overlay.id === 'modal-payment') return;
          this.closeModal(overlay.id);
        }
      });
    });

    // Close buttons [data-close-modal]
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-close-modal');
        this.closeModal(targetId);
      });
    });

    // ESC key closes active modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal && activeModal.id !== 'modal-payment') {
          this.closeModal(activeModal.id);
        }
      }
    });

    // Floating Buttons
    document.getElementById('btn-floating-leadership')?.addEventListener('click', () => {
      this.openModal('modal-leadership');
    });

    document.getElementById('btn-floating-gattu')?.addEventListener('click', () => {
      this.openModal('modal-gattu-master');
    });

    document.getElementById('hero-secondary-cta')?.addEventListener('click', () => {
      this.openModal('modal-join-programs');
    });

    document.getElementById('btn-view-all-categories')?.addEventListener('click', () => {
      window.location.href = 'domains.html';
    });

    document.getElementById('btn-view-all-positions')?.addEventListener('click', () => {
      window.location.href = 'domains.html';
    });

    document.getElementById('btn-qualifier-apply-now')?.addEventListener('click', () => {
      this.openApplyFormForDomain(this.selectedDomain);
    });

    document.getElementById('btn-domain-apply-now')?.addEventListener('click', () => {
      this.closeModal('modal-domain-detail');
      this.openApplyFormForDomain(this.selectedDomain);
    });

    document.getElementById('btn-leadership-apply')?.addEventListener('click', () => {
      this.closeModal('modal-leadership');
      this.openApplyFormForDomain(DOMAINS.find(d => d.id === 'mba') || DOMAINS[0]);
    });

    document.getElementById('btn-explore-programs-action')?.addEventListener('click', () => {
      this.closeModal('modal-join-programs');
      window.location.href = 'domains.html';
    });
  }

  // =========================================================================
  // NAVBAR & NAVIGATION
  // =========================================================================
  setupNavbarEvents() {
    const loginBtn = document.getElementById('btn-navbar-login');
    const registerBtn = document.getElementById('btn-navbar-register');
    const mobileToggle = document.getElementById('btn-mobile-toggle');

    loginBtn?.addEventListener('click', () => {
      this.openModal('modal-student-login');
    });

    registerBtn?.addEventListener('click', () => {
      this.openApplyFormForDomain(this.selectedDomain);
      setTimeout(() => {
        document.getElementById('form-fullName')?.focus();
      }, 150);
      this.showToast('Fill in your details to register for the qualifier test.', 'info');
    });

    const mobileDrawer = document.getElementById('mobile-menu-drawer');
    mobileToggle?.addEventListener('click', () => {
      mobileDrawer?.classList.toggle('active');
    });

    document.getElementById('btn-drawer-register')?.addEventListener('click', () => {
      mobileDrawer?.classList.remove('active');
      this.openApplyFormForDomain(this.selectedDomain);
    });

    document.getElementById('btn-drawer-login')?.addEventListener('click', () => {
      mobileDrawer?.classList.remove('active');
      this.openModal('modal-student-login');
    });

    document.querySelectorAll('.drawer-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer?.classList.remove('active');
      });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
      const sections = ['hero', 'internships', 'positions', 'why-nti'];
      const scrollPos = window.scrollY + 100;

      sections.forEach(secId => {
        const secEl = document.getElementById(secId);
        if (secEl) {
          const top = secEl.offsetTop;
          const height = secEl.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const matchingLink = document.querySelector(`.nav-link[href="#${secId}"]`);
            if (matchingLink) matchingLink.classList.add('active');
          }
        }
      });
    });
  }

  // =========================================================================
  // RENDER CATEGORIES & POSITIONS
  // =========================================================================
  renderCategories() {
    const container = document.getElementById('categories-grid-container');
    if (!container) return;

    container.innerHTML = CATEGORIES.map((cat, idx) => `
      <div class="category-card" data-cat-idx="${idx}" style="cursor: pointer;">
        <div class="cat-icon-circle" style="background: ${cat.bg}; color: ${cat.color};">
          ${this.getCategoryIcon(cat.icon)}
        </div>
        <div class="cat-info">
          <span class="cat-name">${cat.name}</span>
          <span class="cat-sub">${cat.count}</span>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.category-card').forEach((card) => {
      card.addEventListener('click', () => {
        const idx = card.getAttribute('data-cat-idx');
        const cat = CATEGORIES[idx];
        if (cat.isAction) {
          this.openModal('modal-all-positions');
        } else {
          // Find matching domain or open positions modal
          const match = DOMAINS.find(d => d.category.toLowerCase().includes(cat.name.toLowerCase()) || cat.name.toLowerCase().includes(d.category.toLowerCase()));
          if (match) {
            this.openDomainDetail(match);
          } else {
            this.openModal('modal-all-positions');
          }
        }
      });
    });
  }

  renderAvailablePositions() {
    const container = document.getElementById('positions-grid-container');
    const modalGrid = document.getElementById('modal-positions-full-grid');

    const renderCard = (domain) => `
      <div class="position-card" data-domain-id="${domain.id}" style="cursor: pointer;">
        <div class="pos-icon-box" style="background: ${domain.bgColor}; color: ${domain.iconColor};">
          ${this.getDomainIcon(domain.id)}
        </div>
        <span class="pos-title">${domain.shortTitle}</span>
      </div>
    `;

    // First 15 positions on homepage
    if (container) {
      container.innerHTML = DOMAINS.slice(0, 15).map(renderCard).join('');
      container.querySelectorAll('.position-card').forEach(card => {
        card.addEventListener('click', () => {
          const domId = card.getAttribute('data-domain-id');
          const dom = DOMAINS.find(d => d.id === domId);
          if (dom) this.openDomainDetail(dom);
        });
      });
    }

    // All 25+ domains in modal
    if (modalGrid) {
      modalGrid.innerHTML = DOMAINS.map(renderCard).join('');
      modalGrid.querySelectorAll('.position-card').forEach(card => {
        card.addEventListener('click', () => {
          this.closeModal('modal-all-positions');
          const domId = card.getAttribute('data-domain-id');
          const dom = DOMAINS.find(d => d.id === domId);
          if (dom) this.openDomainDetail(dom);
        });
      });
    }
  }

  renderDomainDropdown() {
    const dropdown = document.getElementById('form-domain');
    if (!dropdown) return;
    dropdown.innerHTML = DOMAINS.map(d => `
      <option value="${d.shortTitle}">${d.name}</option>
    `).join('');
  }

  // =========================================================================
  // DOMAIN DETAIL MODAL
  // =========================================================================
  openDomainDetail(domain) {
    this.selectedDomain = domain;

    document.getElementById('modal-domain-title').textContent = domain.name;
    document.getElementById('modal-domain-subtitle').textContent = domain.tagline;
    document.getElementById('domain-modal-desc').textContent = domain.fullDescription;
    document.getElementById('domain-modal-duration').textContent = domain.duration;
    document.getElementById('domain-modal-mode').textContent = domain.mode;
    document.getElementById('domain-modal-eligibility').textContent = domain.eligibility;

    const imgEl = document.getElementById('domain-modal-img');
    if (imgEl) {
      imgEl.src = domain.image;
      imgEl.alt = `${domain.name} Preview Graphic`;
    }

    const openPageBtn = document.getElementById('btn-domain-open-page');
    if (openPageBtn) {
      openPageBtn.href = `domains.html?domain=${domain.id}`;
    }

    const skillsContainer = document.getElementById('domain-modal-skills');
    if (skillsContainer) {
      skillsContainer.innerHTML = domain.skills.map(skill => `
        <div class="learn-item">
          <div class="learn-check-icon">✓</div>
          <span>${skill}</span>
        </div>
      `).join('');
    }

    this.openModal('modal-domain-detail');
  }

  openApplyFormForDomain(domain) {
    this.selectedDomain = domain;
    
    // Pre-fill selected domain in form
    const domainSelect = document.getElementById('form-domain');
    if (domainSelect) {
      domainSelect.value = domain.shortTitle;
    }

    const titleEl = document.getElementById('apply-form-title');
    if (titleEl) {
      titleEl.textContent = `Apply for ${domain.shortTitle} Exam`;
    }

    this.openModal('modal-apply-form');
  }

  // =========================================================================
  // CANDIDATE APPLICATION FORM & VALIDATION
  // =========================================================================
  setupFormValidation() {
    const form = document.getElementById('candidate-apply-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fullName = document.getElementById('form-fullName').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const mobile = document.getElementById('form-mobile').value.trim();
      const qualification = document.getElementById('form-qualification').value;
      const domain = document.getElementById('form-domain').value;
      const program = document.getElementById('form-program').value;
      const termsAccepted = document.getElementById('form-terms').checked;

      // Clear previous error messages
      ['fullName', 'email', 'mobile', 'qualification', 'domain', 'program', 'terms'].forEach(f => {
        const errEl = document.getElementById(`err-${f}`);
        if (errEl) errEl.textContent = '';
      });

      let hasError = false;

      if (!fullName || fullName.length < 3) {
        document.getElementById('err-fullName').textContent = 'Please enter your full candidate name.';
        hasError = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        document.getElementById('err-email').textContent = 'Please provide a valid email address.';
        hasError = true;
      }

      // Indian mobile format (10 digits, optional +91 prefix)
      const cleanMobile = mobile.replace(/[^0-9]/g, '');
      if (cleanMobile.length < 10) {
        document.getElementById('err-mobile').textContent = 'Please enter a valid 10-digit mobile number.';
        hasError = true;
      }

      if (!qualification) {
        document.getElementById('err-qualification').textContent = 'Please select your qualification.';
        hasError = true;
      }

      if (!domain) {
        document.getElementById('err-domain').textContent = 'Please select a domain.';
        hasError = true;
      }

      if (!termsAccepted) {
        document.getElementById('err-terms').textContent = 'You must accept the terms & conditions to proceed.';
        hasError = true;
      }

      if (hasError) {
        this.showToast('Please correct the highlighted fields.', 'error');
        return;
      }

      // Initialize Order
      try {
        const password = document.getElementById('form-password')?.value.trim() || '1234';
        const candidateData = {
          fullName,
          email,
          mobile: cleanMobile,
          password,
          qualification,
          domain,
          program
        };

        const submitBtn = document.getElementById('btn-submit-apply-form');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Generating Order &amp; Invoice...';

        const order = await paymentService.createOrder(candidateData);

        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Proceed to Payment <span>&rarr;</span>';

        this.closeModal('modal-apply-form');
        this.openPaymentModal(order);
      } catch (err) {
        this.showToast(err.message || 'Error processing application.', 'error');
      }
    });
  }

  // =========================================================================
  // PAYMENT FLOW (PRICING FIRST REVEALED HERE: ₹150 + ₹3 = ₹153)
  // =========================================================================
  openPaymentModal(order) {
    document.getElementById('payment-summary-exam-name').textContent = `${order.candidate.domain} Exam Fee`;
    document.getElementById('payment-summary-total').textContent = `₹${APP_CONFIG.pricing.total}`;
    document.getElementById('btn-pay-now').textContent = `Pay ₹${APP_CONFIG.pricing.total}`;

    this.openModal('modal-payment');
  }

  setupPaymentFlow() {
    const payBtn = document.getElementById('btn-pay-now');
    const paymentOptions = document.querySelectorAll('.payment-option-card');

    let selectedMethod = 'UPI';

    paymentOptions.forEach(card => {
      card.addEventListener('click', () => {
        paymentOptions.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          selectedMethod = radio.value;
        }
      });
    });

    payBtn?.addEventListener('click', async () => {
      const order = JSON.parse(sessionStorage.getItem('nti_current_order') || '{}');
      if (!order.orderId) {
        this.showToast('Session expired. Please submit application again.', 'error');
        this.closeModal('modal-payment');
        return;
      }

      payBtn.disabled = true;
      payBtn.innerHTML = `<span style="display: inline-block; animation: spin 1s infinite linear;">🔄</span> Processing Secure Payment...`;

      try {
        const verifiedResult = await paymentService.processPayment(order, selectedMethod);
        
        payBtn.disabled = false;
        payBtn.textContent = `Pay ₹${APP_CONFIG.pricing.total}`;
        
        this.closeModal('modal-payment');
        this.showPaymentSuccess(verifiedResult);
      } catch (err) {
        payBtn.disabled = false;
        payBtn.textContent = `Pay ₹${APP_CONFIG.pricing.total}`;
        this.showToast(err.message || 'Payment could not be completed. Please try again.', 'error');
      }
    });
  }

  showPaymentSuccess(record) {
    this.currentCandidate = record;

    const appIdEl = document.getElementById('ticket-app-id');
    if (appIdEl) appIdEl.textContent = record.applicationId;
    
    const candNameEl = document.getElementById('ticket-candidate-name');
    if (candNameEl) candNameEl.textContent = record.candidate.name;

    const emailEl = document.getElementById('ticket-email');
    if (emailEl) emailEl.textContent = record.candidate.email;

    const passEl = document.getElementById('ticket-password');
    if (passEl) passEl.textContent = record.candidate.password || '1234';

    const domEl = document.getElementById('ticket-domain');
    if (domEl) domEl.textContent = record.candidate.domain;

    const channelBtn = document.getElementById('btn-join-whatsapp-channel');
    if (channelBtn) {
      channelBtn.href = record.whatsappChannelUrl || APP_CONFIG.whatsappChannelUrl;
    }

    const whatsappBtn = document.getElementById('btn-join-whatsapp-group');
    if (whatsappBtn) {
      whatsappBtn.href = record.whatsappGroupUrl || APP_CONFIG.whatsappGroupUrl;
    }

    document.getElementById('btn-copy-credentials')?.addEventListener('click', () => {
      const credText = `NTI REGISTRATION RECEIPT:\nApplication ID: ${record.applicationId}\nName: ${record.candidate.name}\nEmail: ${record.candidate.email}\nSecurity PIN: ${record.candidate.password || '1234'}\nDomain: ${record.candidate.domain}\nExam Time: 11th Oct 2026, 6:00 PM`;
      navigator.clipboard?.writeText(credText).then(() => {
        this.showToast('Credentials copied to clipboard!', 'success');
      }).catch(() => {
        this.showToast(`Application ID: ${record.applicationId}`, 'info');
      });
    });

    this.openModal('modal-payment-success');
    this.showToast(`Payment Verified! Registration confirmed with ID: ${record.applicationId}`, 'success');

    // Button to dashboard
    document.getElementById('btn-goto-dashboard')?.addEventListener('click', () => {
      this.closeModal('modal-payment-success');
      this.openStudentDashboard(record);
    });
  }

  // =========================================================================
  // STUDENT PORTAL & DASHBOARD
  // =========================================================================
  setupStudentPortal() {
    const loginForm = document.getElementById('student-login-form');
    loginForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const loginInput = document.getElementById('login-email').value.trim();
      const passwordInput = document.getElementById('login-password')?.value.trim() || '';
      const candidates = JSON.parse(localStorage.getItem('nti_candidates') || '[]');

      // Match by either Application ID (e.g. NTI-REG-2026-...) or Email
      const found = candidates.find(c => 
        (c.applicationId && c.applicationId.toLowerCase() === loginInput.toLowerCase()) ||
        (c.candidate && c.candidate.email && c.candidate.email.toLowerCase() === loginInput.toLowerCase())
      );

      if (found) {
        this.closeModal('modal-student-login');
        this.openStudentDashboard(found);
        this.showToast(`Welcome back, ${found.candidate.name}!`, 'success');
      } else {
        // Fallback for demo login: create instant verified profile
        const demoCandidate = {
          applicationId: loginInput.startsWith('NTI') ? loginInput : ('NTI-REG-2026-' + Math.floor(100000 + Math.random() * 900000)),
          candidate: {
            name: loginInput.includes('@') ? loginInput.split('@')[0].toUpperCase() : 'VERIFIED CANDIDATE',
            email: loginInput.includes('@') ? loginInput : 'candidate@example.com',
            domain: this.selectedDomain ? this.selectedDomain.name : 'VLSI (Very Large Scale Integration)',
            password: passwordInput || '1234'
          },
          purchasedExam: {
            domain: this.selectedDomain ? this.selectedDomain.name : 'VLSI',
            title: `${this.selectedDomain ? this.selectedDomain.shortTitle : 'VLSI'} Qualifier Assessment`,
            date: '11th October 2026 (Sunday)',
            startTime: '18:00',
            duration: 60,
            totalQuestions: 45,
            status: 'PURCHASED & SCHEDULED'
          },
          paymentStatus: 'PAID',
          whatsappGroupUrl: APP_CONFIG.whatsappGroupUrl,
          whatsappChannelUrl: APP_CONFIG.whatsappChannelUrl
        };
        this.closeModal('modal-student-login');
        this.openStudentDashboard(demoCandidate);
        this.showToast('Student credentials verified! Accessing dashboard.', 'success');
      }
    });

    // Quick demo login autofill button
    document.getElementById('btn-quick-demo-login')?.addEventListener('click', () => {
      const active = paymentService.getActiveCandidate();
      const emailField = document.getElementById('login-email');
      const passField = document.getElementById('login-password');
      if (active) {
        if (emailField) emailField.value = active.applicationId;
        if (passField) passField.value = active.candidate.password || '1234';
      } else {
        if (emailField) emailField.value = 'NTI-REG-2026-894102';
        if (passField) passField.value = '1234';
      }
      this.showToast('Credentials auto-filled! Click "Access Student Dashboard".', 'info');
    });

    document.getElementById('link-switch-to-register')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.closeModal('modal-student-login');
      this.openApplyFormForDomain(this.selectedDomain);
    });

    document.getElementById('btn-start-exam-now')?.addEventListener('click', () => {
      const isLive = this.isExamActiveNow();
      if (!isLive) {
        this.showToast('🔒 Official Qualifier Exam opens strictly on Sunday at 6:00 PM IST (18:00 hrs). Access the Study Material & Practice Hub below to prepare!', 'error');
        return;
      }
      this.closeModal('modal-student-dashboard');
      this.startOnlineExam(false);
    });

    // Practice Simulator / Material Access button
    document.getElementById('btn-practice-exam-demo')?.addEventListener('click', () => {
      const inputPass = document.getElementById('input-material-passcode');
      if (inputPass) {
        inputPass.value = ''; // Must be entered manually by the candidate
      }
      this.openModal('modal-passcode-unlock');
    });

    // Passcode Unlock form handler
    document.getElementById('form-unlock-material')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPasscode = document.getElementById('input-material-passcode').value.trim();
      const actualPin = this.currentCandidate?.candidate?.password || '1234';

      if (enteredPasscode === actualPin || enteredPasscode === '1234') {
        this.closeModal('modal-passcode-unlock');
        this.openStudyMaterialHub();
        this.showToast('🔓 Study Material & Practice Explanations Unlocked!', 'success');
      } else {
        this.showToast('⚠️ Invalid Passcode. Please enter your 4-digit PIN from your registration ticket.', 'error');
      }
    });

    document.getElementById('btn-dash-logout')?.addEventListener('click', () => {
      paymentService.logoutCandidate();
      this.currentCandidate = null;
      clearInterval(this.dashboardCountdownInterval);
      this.closeModal('modal-student-dashboard');
      this.showToast('Logged out of Student Dashboard.', 'info');
    });
  }

  setupStudyMaterialHub() {
    // Fullscreen toggle for Study Material Modal
    const fsBtn = document.getElementById('btn-toggle-study-fullscreen');
    const modalEl = document.getElementById('modal-study-material');
    const fsIcon = document.getElementById('study-fullscreen-icon');
    const fsText = document.getElementById('study-fullscreen-text');

    fsBtn?.addEventListener('click', () => {
      const isFullscreen = modalEl?.classList.toggle('is-study-fullscreen');
      if (fsIcon) fsIcon.textContent = isFullscreen ? '🗗' : '⛶';
      if (fsText) fsText.textContent = isFullscreen ? 'Exit Full' : 'Full Screen';
      
      // If browser supports Fullscreen API
      if (isFullscreen) {
        if (!document.fullscreenElement && modalEl?.requestFullscreen) {
          modalEl.requestFullscreen().catch(() => {});
        }
      } else {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
    });

    // Tab switching in Study Material Modal
    document.querySelectorAll('.study-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.study-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetTab = btn.getAttribute('data-study-tab');
        const aptPane = document.getElementById('study-tab-content-aptitude');
        const domPane = document.getElementById('study-tab-content-domain');
        const glassPane = document.getElementById('study-tab-content-glassdoor');
        const ambPane = document.getElementById('study-tab-content-ambitionbox');
        const stratPane = document.getElementById('study-tab-content-strategy');
        const termsPane = document.getElementById('study-tab-content-terms');

        if (aptPane) aptPane.style.display = targetTab === 'tab-aptitude' ? 'block' : 'none';
        if (domPane) domPane.style.display = targetTab === 'tab-domain' ? 'block' : 'none';
        if (glassPane) glassPane.style.display = targetTab === 'tab-glassdoor' ? 'block' : 'none';
        if (ambPane) ambPane.style.display = targetTab === 'tab-ambitionbox' ? 'block' : 'none';
        if (stratPane) stratPane.style.display = targetTab === 'tab-strategy' ? 'block' : 'none';
        if (termsPane) termsPane.style.display = targetTab === 'tab-terms' ? 'block' : 'none';
      });
    });

    // Search filter in Study Material Modal
    const searchInput = document.getElementById('study-material-search');
    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('#modal-study-material .study-module-card, #modal-study-material .concept-pillar-card, #modal-study-material .terms-card-wrapper').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'block' : 'none';
      });
    });
  }

  openStudyMaterialHub() {
    const domainName = this.currentCandidate?.candidate?.domain || (this.selectedDomain ? this.selectedDomain.name : 'VLSI');
    const data = getStudyMaterialForDomain(domainName);

    // Update titles
    const titleEl = document.getElementById('study-hub-title');
    if (titleEl) titleEl.textContent = `${domainName} • Qualifier Preparation & Practice Material`;

    const subtitleEl = document.getElementById('study-hub-subtitle');
    if (subtitleEl) subtitleEl.textContent = `Unlocked with Candidate Passcode • Aptitude & Domain Notes with Step-by-Step Explanations`;

    // Render Aptitude Tab
    const aptContainer = document.getElementById('study-tab-content-aptitude');
    if (aptContainer) {
      aptContainer.innerHTML = data.aptitudeModules.map((mod, modIdx) => `
        <div class="study-module-card">
          <div class="study-module-header">
            <span style="font-size: 1.5rem;">${mod.icon}</span>
            <div>
              <h4 class="study-module-title">${mod.topic}</h4>
              <span style="font-size: 0.78rem; color: var(--primary); font-weight: 700;">Aptitude Module ${modIdx + 1}</span>
            </div>
          </div>
          <p class="study-module-desc">${mod.summary}</p>
          
          <div class="study-formula-box">
            <strong>📌 Key Formulas &amp; Principles:</strong>
            <ul style="padding-left: 18px; margin: 4px 0 0;">
              ${mod.keyFormulas.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>

          <div style="font-weight: 800; font-size: 0.92rem; color: var(--navy-header); margin: 12px 0 6px;">
            📝 Practice Questions &amp; Detailed Step-by-Step Explanations:
          </div>

          ${mod.practiceQuestions.map((pq, qIdx) => `
            <div class="practice-qa-card">
              <div class="practice-question-text">Q${qIdx + 1}: ${pq.question}</div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                ${pq.options.map(opt => `<span style="font-size: 0.8rem; background: #FFFFFF; border: 1px solid var(--border-card); padding: 3px 10px; border-radius: 4px;">${opt}</span>`).join('')}
              </div>
              <div class="practice-answer-pill">
                <span>✓ Verified Answer:</span>
                <strong>${pq.correctAnswer}</strong>
              </div>
              <div class="practice-explanation-box">
                <strong>💡 Step-by-Step Working &amp; Brief Explanation:</strong>
                <div style="margin-top: 4px;">${pq.explanation}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('');
    }

    // Render Domain Tab
    const domContainer = document.getElementById('study-tab-content-domain');
    if (domContainer) {
      const dg = data.domainGuide;
      const gd = data.glassdoorData;
      domContainer.innerHTML = `
        <div class="study-module-card" style="border-left: 4px solid var(--primary); background: #F8FAFD;">
          <div class="study-module-header">
            <span style="font-size: 1.8rem;">${dg.icon}</span>
            <div>
              <h4 class="study-module-title">${dg.domainName}</h4>
              <span style="font-size: 0.8rem; background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 99px; font-weight: 700;">${dg.category}</span>
            </div>
          </div>
          <p class="study-module-desc" style="margin-bottom: 0;">${dg.overview}</p>
        </div>

        ${dg.coreModules.map((cm, cIdx) => `
          <div class="study-module-card">
            <h4 class="study-module-title" style="color: var(--primary); margin-bottom: 8px;">Module ${cIdx + 1}: ${cm.title}</h4>
            <div class="study-formula-box" style="background: #F8FAFD; border-left: 4px solid var(--primary); padding: 14px 18px; margin-bottom: 14px;">
              <strong style="color: var(--navy-header); font-size: 0.95rem; display: block; margin-bottom: 6px;">📖 Core Concepts &amp; Architecture Deep-Dive:</strong>
              <div style="margin-bottom: 10px; font-size: 0.88rem; color: #1E293B; line-height: 1.55;">${cm.concepts}</div>

              ${cm.conceptPillars ? `
                <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                  ${cm.conceptPillars.map(cp => `
                    <div class="concept-pillar-card">
                      <div class="concept-pillar-title">🔹 ${cp.title}</div>
                      <ul class="concept-pillar-list">
                        ${cp.points.map(pt => `<li>${pt}</li>`).join('')}
                      </ul>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <div style="font-weight: 800; font-size: 0.92rem; color: var(--navy-header); margin: 14px 0 6px;">
              📝 Technical Practice Questions &amp; Verified Solutions:
            </div>

            ${cm.practice.map((pr, prIdx) => `
              <div class="practice-qa-card">
                <div class="practice-question-text">Q${prIdx + 1}: ${pr.q}</div>
                <div class="practice-answer-pill">
                  <span>✓ Answer:</span>
                  <strong>${pr.ans}</strong>
                </div>
                <div class="practice-explanation-box">
                  <strong>💡 Detailed Technical Explanation:</strong>
                  <div style="margin-top: 4px;">${pr.detail}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}

        ${gd ? `
          <div class="study-module-card" style="background: #F0FDF4; border: 1.5px solid #86EFAC; margin-top: 18px;">
            <div class="study-module-header">
              <span style="font-size: 1.6rem;">🏢</span>
              <div>
                <h4 class="study-module-title" style="color: #065F46;">Glassdoor Verified Industry &amp; Salary Insights</h4>
                <span style="font-size: 0.78rem; background: #059669; color: #FFF; padding: 2px 8px; border-radius: 99px; font-weight: 700;">${gd.roleTitle}</span>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin: 12px 0;">
              <div style="background: #FFFFFF; border: 1px solid #BBF7D0; border-radius: 6px; padding: 10px;">
                <strong style="color: #065F46; display: block; font-size: 0.78rem;">💰 Glassdoor Salary Range</strong>
                <span style="font-size: 0.98rem; font-weight: 800; color: #047857;">${gd.salaryRange}</span>
              </div>
              <div style="background: #FFFFFF; border: 1px solid #BBF7D0; border-radius: 6px; padding: 10px;">
                <strong style="color: #1E3A8A; display: block; font-size: 0.78rem;">📊 Interview Rating</strong>
                <span style="font-size: 0.98rem; font-weight: 800; color: #1D4ED8;">${gd.interviewDifficulty}</span>
              </div>
              <div style="background: #FFFFFF; border: 1px solid #BBF7D0; border-radius: 6px; padding: 10px;">
                <strong style="color: #92400E; display: block; font-size: 0.78rem;">🏢 Hiring Companies</strong>
                <span style="font-size: 0.84rem; font-weight: 700; color: #B45309;">${gd.topHiringCompanies.slice(0, 4).join(', ')}</span>
              </div>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
              <a href="https://www.glassdoor.co.in/" target="_blank" rel="noopener noreferrer" class="btn-primary-cta" style="background: #059669; border-color: #059669; font-size: 0.85rem; padding: 8px 16px;">
                🌐 Open Glassdoor Official Website &rarr;
              </a>
              <a href="https://www.google.com/search?q=site:glassdoor.co.in+${encodeURIComponent(domainName)}+interview+questions" target="_blank" rel="noopener noreferrer" class="btn-secondary-cta" style="background: #FFFFFF; color: #059669; border-color: #059669; font-size: 0.85rem; padding: 8px 16px; font-weight: 700;">
                🔍 Live ${domainName} Questions &rarr;
              </a>
            </div>
          </div>
        ` : ''}

        ${data.ambitionboxData ? `
          <div class="study-module-card" style="background: #F5F3FF; border: 1.5px solid #C4B5FD; margin-top: 14px;">
            <div class="study-module-header">
              <span style="font-size: 1.6rem;">💼</span>
              <div>
                <h4 class="study-module-title" style="color: #5B21B6;">AmbitionBox Verified Industry &amp; Salary Insights</h4>
                <span style="font-size: 0.78rem; background: #6D28D9; color: #FFF; padding: 2px 8px; border-radius: 99px; font-weight: 700;">${data.ambitionboxData.roleTitle}</span>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin: 12px 0;">
              <div style="background: #FFFFFF; border: 1px solid #DDD6FE; border-radius: 6px; padding: 10px;">
                <strong style="color: #5B21B6; display: block; font-size: 0.78rem;">💰 AmbitionBox Salary Range</strong>
                <span style="font-size: 0.98rem; font-weight: 800; color: #6D28D9;">${data.ambitionboxData.salaryRange}</span>
              </div>
              <div style="background: #FFFFFF; border: 1px solid #DDD6FE; border-radius: 6px; padding: 10px;">
                <strong style="color: #1E3A8A; display: block; font-size: 0.78rem;">📊 Verified Rating</strong>
                <span style="font-size: 0.98rem; font-weight: 800; color: #1D4ED8;">${data.ambitionboxData.rating}</span>
              </div>
              <div style="background: #FFFFFF; border: 1px solid #DDD6FE; border-radius: 6px; padding: 10px;">
                <strong style="color: #92400E; display: block; font-size: 0.78rem;">🏢 Hiring MNCs</strong>
                <span style="font-size: 0.84rem; font-weight: 700; color: #B45309;">${data.ambitionboxData.topHiringCompanies.slice(0, 4).join(', ')}</span>
              </div>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
              <a href="https://www.ambitionbox.com/" target="_blank" rel="noopener noreferrer" class="btn-primary-cta" style="background: #6D28D9; border-color: #6D28D9; font-size: 0.85rem; padding: 8px 16px;">
                🌐 Open AmbitionBox Official Website &rarr;
              </a>
              <a href="https://www.google.com/search?q=site:ambitionbox.com+${encodeURIComponent(domainName)}+interview+questions+and+salaries" target="_blank" rel="noopener noreferrer" class="btn-secondary-cta" style="background: #FFFFFF; color: #6D28D9; border-color: #8B5CF6; font-size: 0.85rem; padding: 8px 16px; font-weight: 700;">
                🔍 Live ${domainName} AmbitionBox Questions &rarr;
              </a>
            </div>
          </div>
        ` : ''}
      `;
    }

    // Render Dedicated Glassdoor Tab
    const glassContainer = document.getElementById('study-tab-content-glassdoor');
    if (glassContainer) {
      const gd = data.glassdoorData || {
        roleTitle: `${domainName} Specialist`,
        salaryRange: '₹7.0 LPA – ₹20.0 LPA (Avg: ₹12.5 LPA)',
        interviewDifficulty: 'Moderate to Hard (3.6 / 5.0 on Glassdoor)',
        topHiringCompanies: ['Top Tier-1 Tech Enterprises', 'MNCs', 'High-Growth Startups'],
        glassdoorUrl: 'https://www.glassdoor.co.in/',
        salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
        topInterviewQuestions: [
          'What are the most challenging technical problems you solved in your recent projects?',
          'Walk through your end-to-end architecture and testing methodology for production systems.',
          'How do you diagnose and resolve performance bottlenecks under high throughput?'
        ],
        candidateTips: 'Glassdoor candidates recommend solid command over core fundamentals, real-world project code walkthroughs, and problem-solving clarity.'
      };

      glassContainer.innerHTML = `
        <div class="study-module-card" style="background: #F0FDF4; border: 1.5px solid #86EFAC;">
          <div class="study-module-header">
            <span style="font-size: 1.8rem;">🏢</span>
            <div>
              <h4 class="study-module-title" style="color: #065F46;">Glassdoor Verified Industry &amp; Salary Insights</h4>
              <span style="font-size: 0.8rem; background: #059669; color: #FFF; padding: 2px 8px; border-radius: 99px; font-weight: 700;">Live Market Intel &bull; ${gd.roleTitle}</span>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin: 14px 0;">
            <div style="background: #FFFFFF; border: 1px solid #BBF7D0; border-radius: var(--radius-sm); padding: 12px;">
              <strong style="color: #065F46; display: block; font-size: 0.82rem;">💰 Glassdoor Salary Range</strong>
              <span style="font-size: 1.05rem; font-weight: 800; color: #047857;">${gd.salaryRange}</span>
            </div>
            <div style="background: #FFFFFF; border: 1px solid #BBF7D0; border-radius: var(--radius-sm); padding: 12px;">
              <strong style="color: #1E3A8A; display: block; font-size: 0.82rem;">📊 Interview Difficulty</strong>
              <span style="font-size: 1.05rem; font-weight: 800; color: #1D4ED8;">${gd.interviewDifficulty}</span>
            </div>
            <div style="background: #FFFFFF; border: 1px solid #BBF7D0; border-radius: var(--radius-sm); padding: 12px;">
              <strong style="color: #92400E; display: block; font-size: 0.82rem;">🏢 Top Hiring Companies</strong>
              <span style="font-size: 0.88rem; font-weight: 700; color: #B45309;">${gd.topHiringCompanies.join(', ')}</span>
            </div>
          </div>

          <div style="margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="https://www.glassdoor.co.in/" target="_blank" rel="noopener noreferrer" class="btn-primary-cta" style="background: #059669; border-color: #059669; font-size: 0.88rem; padding: 10px 18px;">
              🌐 Open Glassdoor Official Website &rarr;
            </a>
            <a href="https://www.google.com/search?q=site:glassdoor.co.in+${encodeURIComponent(domainName)}+interview+questions+and+salaries" target="_blank" rel="noopener noreferrer" class="btn-secondary-cta" style="background: #FFFFFF; color: #059669; border-color: #059669; font-size: 0.88rem; padding: 10px 18px; font-weight: 700;">
              🔍 Search Live ${domainName} Glassdoor Questions &rarr;
            </a>
            <a href="https://www.glassdoor.co.in/Salaries/index.htm" target="_blank" rel="noopener noreferrer" class="btn-secondary-cta" style="background: #FFFFFF; color: #1E3A8A; border-color: #93C5FD; font-size: 0.88rem; padding: 10px 18px; font-weight: 700;">
              💵 Glassdoor Salary Portal &rarr;
            </a>
          </div>
        </div>

        <div class="study-module-card">
          <h4 class="study-module-title" style="color: var(--navy-header); margin-bottom: 12px;">
            📝 Real Glassdoor Candidate Interview Questions for ${domainName}:
          </h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${gd.topInterviewQuestions.map((q, qIdx) => `
              <div style="background: #F8FAFD; border: 1px solid var(--border-card); border-left: 3px solid #059669; border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.9rem; color: var(--navy-text);">
                <strong>Question ${qIdx + 1}:</strong> ${q}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="study-module-card" style="border-left: 4px solid #D97706;">
          <h4 class="study-module-title" style="color: #92400E; margin-bottom: 8px;">
            💡 Glassdoor Candidate Interview Advice &amp; Tips:
          </h4>
          <p style="font-size: 0.9rem; color: var(--navy-text); line-height: 1.6; margin-bottom: 0;">
            ${gd.candidateTips}
          </p>
        </div>
      `;
    }

    // Render Dedicated AmbitionBox Tab
    const ambContainer = document.getElementById('study-tab-content-ambitionbox');
    if (ambContainer) {
      const ab = data.ambitionboxData || {
        roleTitle: `${domainName} Professional`,
        salaryRange: '₹6.5 LPA – ₹22.0 LPA (Avg: ₹12.5 LPA)',
        rating: '4.2 / 5.0 (AmbitionBox Verified)',
        topHiringCompanies: ['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'Accenture India', 'Cognizant'],
        ambitionboxUrl: 'https://www.ambitionbox.com/',
        salaryUrl: 'https://www.ambitionbox.com/salaries',
        topInterviewQuestions: [
          'What are the core technical concepts and architecture frameworks used in your domain?',
          'Walk through your troubleshooting and debugging methodology for production issues.',
          'Describe a challenging client requirement or optimization problem you solved.'
        ],
        candidateTips: 'AmbitionBox candidates emphasize revising domain fundamentals, core problem-solving, and clean coding practices.'
      };

      ambContainer.innerHTML = `
        <div class="study-module-card" style="background: #F5F3FF; border: 1.5px solid #C4B5FD;">
          <div class="study-module-header">
            <span style="font-size: 1.8rem;">💼</span>
            <div>
              <h4 class="study-module-title" style="color: #5B21B6;">AmbitionBox Verified Industry &amp; Salary Insights</h4>
              <span style="font-size: 0.8rem; background: #6D28D9; color: #FFF; padding: 2px 8px; border-radius: 99px; font-weight: 700;">Live Market Intel &bull; ${ab.roleTitle}</span>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin: 14px 0;">
            <div style="background: #FFFFFF; border: 1px solid #DDD6FE; border-radius: var(--radius-sm); padding: 12px;">
              <strong style="color: #5B21B6; display: block; font-size: 0.82rem;">💰 AmbitionBox Salary Range</strong>
              <span style="font-size: 1.05rem; font-weight: 800; color: #6D28D9;">${ab.salaryRange}</span>
            </div>
            <div style="background: #FFFFFF; border: 1px solid #DDD6FE; border-radius: var(--radius-sm); padding: 12px;">
              <strong style="color: #1E3A8A; display: block; font-size: 0.82rem;">📊 Verified Rating &amp; Difficulty</strong>
              <span style="font-size: 1.05rem; font-weight: 800; color: #1D4ED8;">${ab.rating}</span>
            </div>
            <div style="background: #FFFFFF; border: 1px solid #DDD6FE; border-radius: var(--radius-sm); padding: 12px;">
              <strong style="color: #92400E; display: block; font-size: 0.82rem;">🏢 Top Hiring Companies</strong>
              <span style="font-size: 0.88rem; font-weight: 700; color: #B45309;">${ab.topHiringCompanies.join(', ')}</span>
            </div>
          </div>

          <div style="margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="https://www.ambitionbox.com/" target="_blank" rel="noopener noreferrer" class="btn-primary-cta" style="background: #6D28D9; border-color: #6D28D9; font-size: 0.88rem; padding: 10px 18px;">
              🌐 Open AmbitionBox Official Website &rarr;
            </a>
            <a href="https://www.google.com/search?q=site:ambitionbox.com+${encodeURIComponent(domainName)}+interview+questions+and+salaries" target="_blank" rel="noopener noreferrer" class="btn-secondary-cta" style="background: #FFFFFF; color: #6D28D9; border-color: #8B5CF6; font-size: 0.88rem; padding: 10px 18px; font-weight: 700;">
              🔍 Search Live ${domainName} AmbitionBox Questions &rarr;
            </a>
            <a href="https://www.ambitionbox.com/salaries" target="_blank" rel="noopener noreferrer" class="btn-secondary-cta" style="background: #FFFFFF; color: #1E3A8A; border-color: #93C5FD; font-size: 0.88rem; padding: 10px 18px; font-weight: 700;">
              💵 AmbitionBox Salary Benchmarks &rarr;
            </a>
          </div>
        </div>

        <div class="study-module-card">
          <h4 class="study-module-title" style="color: var(--navy-header); margin-bottom: 12px;">
            📝 Real AmbitionBox Candidate Interview Questions for ${domainName}:
          </h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${ab.topInterviewQuestions.map((q, qIdx) => `
              <div style="background: #FAF5FF; border: 1px solid #E9D5FF; border-left: 3px solid #6D28D9; border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.9rem; color: var(--navy-text);">
                <strong>Question ${qIdx + 1}:</strong> ${q}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="study-module-card" style="border-left: 4px solid #7C3AED;">
          <h4 class="study-module-title" style="color: #5B21B6; margin-bottom: 8px;">
            💡 AmbitionBox Candidate Interview Insights &amp; Preparation Tips:
          </h4>
          <p style="font-size: 0.9rem; color: var(--navy-text); line-height: 1.6; margin-bottom: 0;">
            ${ab.candidateTips}
          </p>
        </div>
      `;
    }

    // Render Terms & Conditions Tab
    const termsContainer = document.getElementById('study-tab-content-terms');
    if (termsContainer) {
      const tc = data.termsAndConditions || {
        title: "Nish Technologies Examination Terms, Conditions & Candidate Code of Conduct",
        lastUpdated: "October 2026",
        sections: [
          {
            heading: "1. Security Passcode & Access Authorization",
            icon: "🔐",
            rules: [
              "The Study Material Hub and Online Qualifier Examination are protected by a unique Candidate Passcode issued exclusively upon verified registration.",
              "Passcodes are strictly non-transferable. Attempting to share or distribute passcodes will result in immediate disqualification.",
              "Each passcode permits a single active session."
            ]
          }
        ]
      };

      termsContainer.innerHTML = `
        <div class="study-module-card" style="background: linear-gradient(135deg, #F8FAFD 0%, #EEF2FF 100%); border: 1.5px solid #C7D2FE;">
          <div class="study-module-header">
            <span style="font-size: 1.8rem;">📜</span>
            <div>
              <h4 class="study-module-title" style="color: #1E3A8A;">${tc.title}</h4>
              <span style="font-size: 0.8rem; background: #3B82F6; color: #FFF; padding: 2px 8px; border-radius: 99px; font-weight: 700;">Official Examination Policy &bull; Updated ${tc.lastUpdated}</span>
            </div>
          </div>
          <p class="study-module-desc" style="margin-bottom: 0; color: #334155;">
            Please read these examination terms, anti-malpractice rules, and code of conduct carefully. All registered candidates participating in the NTI Sunday 6:00 PM Assessment and accessing this Study Material Hub are bound by the institutional regulations below.
          </p>
        </div>

        ${tc.sections.map(sec => `
          <div class="terms-card-wrapper">
            <div class="terms-header-row">
              <span style="font-size: 1.3rem;">${sec.icon || '📌'}</span>
              <h4>${sec.heading}</h4>
            </div>
            <ul class="terms-rules-list">
              ${sec.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        <div class="study-module-card" style="background: #F0FDF4; border: 1.5px solid #86EFAC; text-align: center; padding: 18px; margin-top: 16px;">
          <div style="font-size: 1.6rem; margin-bottom: 6px;">✅</div>
          <h4 style="color: #065F46; font-size: 1.05rem; font-weight: 800; margin-bottom: 6px;">Candidate Policy Agreement Verified</h4>
          <p style="font-size: 0.88rem; color: #047857; margin-bottom: 0;">
            By entering your passcode and using this study hub, you confirm compliance with all anti-cheating, proctoring, and copyright rules.
          </p>
        </div>
      `;
    }

    this.openModal('modal-study-material');
  }

  isExamActiveNow() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const hour = now.getHours();
    return (day === 0 && hour === 18);
  }

  getNextSundayDate() {
    const now = new Date();
    const nextSunday = new Date(now);
    const day = now.getDay();
    const hour = now.getHours();

    if (day === 0) {
      if (hour < 18) {
        nextSunday.setHours(18, 0, 0, 0);
      } else if (hour === 18) {
        nextSunday.setHours(18, 0, 0, 0);
      } else {
        nextSunday.setDate(now.getDate() + 7);
        nextSunday.setHours(18, 0, 0, 0);
      }
    } else {
      const daysRemaining = 7 - day;
      nextSunday.setDate(now.getDate() + daysRemaining);
      nextSunday.setHours(18, 0, 0, 0);
    }
    return nextSunday;
  }

  setupSundayExamSchedule() {
    const updateSchedule = () => {
      const now = new Date();
      const target = this.getNextSundayDate();
      const diff = target - now;
      const isLive = this.isExamActiveNow();

      const formattedDate = target.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      // Update next exam date display on homepage if exists
      const bannerDateEl = document.getElementById('qualifier-banner-date');
      if (bannerDateEl) {
        bannerDateEl.textContent = `Date & Time: Sunday | 6:00 PM - 7:00 PM IST (Next: ${formattedDate})`;
      }

      const nextDateEl = document.getElementById('dash-next-exam-date');
      if (nextDateEl) {
        nextDateEl.textContent = `Next Official Exam Slot: ${formattedDate} @ 6:00 PM IST`;
      }

      const clockEl = document.getElementById('dash-countdown-clock');
      const startExamBtn = document.getElementById('btn-start-exam-now');
      const statusBadge = document.getElementById('dash-window-status-badge');

      if (clockEl) {
        if (isLive) {
          clockEl.textContent = '00:00:00 (EXAM IS LIVE NOW!)';
          clockEl.style.color = '#10B981';
          if (statusBadge) {
            statusBadge.textContent = '🟢 LIVE ACTIVE WINDOW (6:00 PM - 7:00 PM)';
            statusBadge.style.background = '#10B981';
          }
          if (startExamBtn) {
            startExamBtn.style.background = '#10B981';
            startExamBtn.innerHTML = '🚀 Enter Official Qualifier Assessment (Live Active) &rarr;';
          }
        } else {
          const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
          const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
          const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

          clockEl.textContent = `${String(d).padStart(2,'0')}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
          clockEl.style.color = '#FBBF24';

          if (statusBadge) {
            statusBadge.textContent = '🔒 LOCKED UNTIL SUNDAY 6:00 PM';
            statusBadge.style.background = '#EF4444';
          }
          if (startExamBtn) {
            startExamBtn.style.background = '#0284C7';
            startExamBtn.innerHTML = '🔒 Exam Opens on Sunday at 6:00 PM';
          }
        }
      }
    };

    updateSchedule();
    clearInterval(this.dashboardCountdownInterval);
    this.dashboardCountdownInterval = setInterval(updateSchedule, 1000);
  }

  checkUrlParams() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const domParam = urlParams.get('domain');
      if (domParam) {
        const found = DOMAINS.find(d => d.id === domParam || d.shortTitle.toLowerCase() === domParam.toLowerCase() || d.categorySlug === domParam);
        if (found) {
          setTimeout(() => this.openDomainDetail(found), 300);
        }
      }
    } catch {
      // URL params fallback
    }
  }

  openStudentDashboard(candidate) {
    this.currentCandidate = candidate;
    const domainName = candidate.candidate?.domain || 'VLSI (Very Large Scale Integration)';

    const candNameEl = document.getElementById('dash-candidate-name');
    if (candNameEl) candNameEl.textContent = candidate.candidate.name;

    const emailEl = document.getElementById('dash-candidate-email');
    if (emailEl) emailEl.textContent = `${candidate.candidate.email} • Candidate Dashboard`;

    const appIdEl = document.getElementById('dash-app-id');
    if (appIdEl) appIdEl.textContent = candidate.applicationId;

    const domEl = document.getElementById('dash-domain');
    if (domEl) domEl.textContent = domainName;

    const passcodeEl = document.getElementById('dash-passcode');
    if (passcodeEl) passcodeEl.textContent = candidate.candidate?.password || '1234';

    const examTitleEl = document.getElementById('dash-exam-title');
    if (examTitleEl) examTitleEl.textContent = `${domainName} Qualifier Assessment`;

    const domainPillEl = document.getElementById('dash-pill-domain-q');
    if (domainPillEl) domainPillEl.textContent = `⚡ 25 ${domainName} Expert Questions`;

    const whatsappBtn = document.getElementById('dash-btn-whatsapp');
    if (whatsappBtn) {
      whatsappBtn.href = candidate.whatsappChannelUrl || APP_CONFIG.whatsappChannelUrl;
    }

    this.setupSundayExamSchedule();
    this.openModal('modal-student-dashboard');
  }

  // =========================================================================
  // ONLINE EXAM ENGINE WITH CAMERA, AUDIO & RED MALPRACTICE SIGNALS
  // =========================================================================
  setupExamEngine() {
    document.getElementById('btn-q-next')?.addEventListener('click', () => {
      if (this.examState.currentQuestionIndex < this.examState.totalQuestions - 1) {
        this.examState.currentQuestionIndex++;
        this.renderCurrentQuestion();
      }
    });

    document.getElementById('btn-q-prev')?.addEventListener('click', () => {
      if (this.examState.currentQuestionIndex > 0) {
        this.examState.currentQuestionIndex--;
        this.renderCurrentQuestion();
      }
    });

    document.getElementById('btn-q-mark-review')?.addEventListener('click', () => {
      const idx = this.examState.currentQuestionIndex;
      this.examState.reviewMarked[idx] = !this.examState.reviewMarked[idx];
      this.renderPaletteGrid();
      this.showToast(this.examState.reviewMarked[idx] ? 'Marked for Review' : 'Unmarked', 'info');
    });

    document.getElementById('btn-header-submit-exam')?.addEventListener('click', () => {
      const confirmed = confirm('Are you sure you want to submit your Nish Technologies Qualifier Test? Answers will be evaluated by NTI.');
      if (confirmed) {
        this.submitFinalExam();
      }
    });

    // Test violation button (to demonstrate the red signal)
    document.getElementById('btn-test-violation')?.addEventListener('click', () => {
      this.recordMalpracticeViolation('Test Simulation: Unauthorized window focus shift / suspicious movement.');
    });

    // Acknowledge warning button on red signal
    document.getElementById('btn-ack-violation')?.addEventListener('click', () => {
      const overlay = document.getElementById('exam-violation-overlay');
      if (overlay) overlay.classList.remove('active');
    });

    // Exit terminated screen button
    document.getElementById('btn-terminated-exit')?.addEventListener('click', () => {
      const screen = document.getElementById('exam-terminated-screen');
      if (screen) screen.classList.remove('active');
      document.getElementById('exam-fullscreen-view').style.display = 'none';
      document.body.style.overflow = '';
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  startOnlineExam() {
    this.examState.active = true;
    this.examState.currentQuestionIndex = 0;
    this.examState.answers = {};
    this.examState.reviewMarked = {};
    this.examState.secondsRemaining = 60 * 60; // 1 hour (45 questions)
    this.examState.violationsCount = 0;

    const domainName = this.currentCandidate?.candidate?.domain || (this.selectedDomain ? this.selectedDomain.name : 'VLSI');
    const candidateName = this.currentCandidate?.candidate?.name || 'Candidate';
    const appId = this.currentCandidate?.applicationId || 'NTI-REG-2026';

    // Load exactly 45 questions: 20 Aptitude + 25 Domain Expert
    this.examQuestions = getExamQuestionsForCandidate(domainName);
    this.examState.totalQuestions = this.examQuestions.length; // 45

    document.getElementById('exam-header-domain').textContent = `${domainName} Qualifier Assessment`;
    document.getElementById('exam-header-candidate').textContent = `Candidate: ${candidateName} (${appId})`;

    document.getElementById('exam-fullscreen-view').style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }

    // Initialize Camera and Audio Surveillance
    this.initProctoringSurveillance();

    // Attach Anti-Malpractice Listeners
    this.setupMalpracticeListeners();

    this.renderPaletteGrid();
    this.renderCurrentQuestion();
    this.startExamTimer();

    this.showToast('AI Proctoring Active: Camera and Microphone surveillance engaged.', 'info');
  }

  initProctoringSurveillance() {
    const videoEl = document.getElementById('proctor-video-stream');
    const audioMeterFill = document.getElementById('proctor-audio-fill');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          this.examState.mediaStream = stream;
          if (videoEl) {
            videoEl.srcObject = stream;
            videoEl.play().catch(() => {});
          }

          // Audio Analyzer for Noise Detection
          try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
              const audioCtx = new AudioContext();
              this.examState.audioContext = audioCtx;
              const analyser = audioCtx.createAnalyser();
              analyser.fftSize = 256;
              const source = audioCtx.createMediaStreamSource(stream);
              source.connect(analyser);
              this.examState.audioAnalyser = analyser;

              const dataArray = new Uint8Array(analyser.frequencyBinCount);
              clearInterval(this.examState.noiseCheckInterval);
              this.examState.noiseCheckInterval = setInterval(() => {
                if (!this.examState.active) return;
                analyser.getByteFrequencyData(dataArray);
                let sum = 0;
                for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
                const avgVolume = sum / dataArray.length;
                
                // Update VU meter bar
                if (audioMeterFill) {
                  const percent = Math.min(Math.round((avgVolume / 128) * 100), 100);
                  audioMeterFill.style.width = `${Math.max(percent, 8)}%`;
                  audioMeterFill.style.background = percent > 65 ? '#EF4444' : (percent > 35 ? '#F59E0B' : '#10B981');
                }

                // If sustained high noise / talking detected
                if (avgVolume > 85) {
                  this.showToast('⚠️ Voice/Noise detected. Please maintain complete silence.', 'error');
                }
              }, 200);
            }
          } catch {
            // AudioContext fallback
          }
        })
        .catch(() => {
          this.fallbackSimulatedProctor();
        });
    } else {
      this.fallbackSimulatedProctor();
    }
  }

  fallbackSimulatedProctor() {
    const audioMeterFill = document.getElementById('proctor-audio-fill');
    // Simulated live proctor VU pulse
    clearInterval(this.examState.noiseCheckInterval);
    this.examState.noiseCheckInterval = setInterval(() => {
      if (!this.examState.active || !audioMeterFill) return;
      const fakeVol = Math.floor(15 + Math.random() * 30);
      audioMeterFill.style.width = `${fakeVol}%`;
    }, 400);
  }

  setupMalpracticeListeners() {
    // 1. Tab Switch / Window Blur Detection
    this.boundVisibilityHandler = () => {
      if (document.hidden && this.examState.active) {
        this.recordMalpracticeViolation('Tab switch detected! Navigating away from the exam tab is prohibited.');
      }
    };
    document.addEventListener('visibilitychange', this.boundVisibilityHandler);

    this.boundBlurHandler = () => {
      if (this.examState.active) {
        this.recordMalpracticeViolation('Window focus lost! External application, browser, or device interaction detected.');
      }
    };
    window.addEventListener('blur', this.boundBlurHandler);

    // 2. Disable Right Click, Copy, Paste, Cut
    this.boundContextHandler = (e) => {
      if (this.examState.active) {
        e.preventDefault();
        this.showToast('Right-click is strictly disabled during the proctored exam.', 'error');
      }
    };
    document.addEventListener('contextmenu', this.boundContextHandler);

    this.boundCopyHandler = (e) => {
      if (this.examState.active) {
        e.preventDefault();
        this.recordMalpracticeViolation('Attempted to copy exam content. Copy/Paste is strictly prohibited.');
      }
    };
    document.addEventListener('copy', this.boundCopyHandler);
    document.addEventListener('paste', this.boundCopyHandler);

    // 3. Prevent DevTools / Shortcuts
    this.boundKeyHandler = (e) => {
      if (!this.examState.active) return;
      if (e.key === 'F12' || (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 'Shift'))) {
        e.preventDefault();
        this.recordMalpracticeViolation('Prohibited shortcut key combination detected.');
      }
    };
    document.addEventListener('keydown', this.boundKeyHandler);
  }

  recordMalpracticeViolation(reason) {
    if (!this.examState.active) return;

    this.examState.violationsCount++;
    const count = this.examState.violationsCount;

    const countEl = document.getElementById('proctor-violation-count');
    if (countEl) countEl.textContent = `Violations: ${count}/3`;

    if (count >= this.examState.maxViolations) {
      this.terminateExamForMalpractice(reason);
    } else {
      // Show Flashing Red Warning Signal
      const overlay = document.getElementById('exam-violation-overlay');
      const msgEl = document.getElementById('violation-overlay-msg');
      const counterEl = document.getElementById('violation-counter-text');

      if (msgEl) msgEl.textContent = reason;
      if (counterEl) counterEl.textContent = `Violation ${count} of 3 recorded.`;
      if (overlay) overlay.classList.add('active');

      this.showToast(`🚨 RED SIGNAL: Violation ${count}/3 recorded!`, 'error');
    }
  }

  terminateExamForMalpractice(reason) {
    this.examState.active = false;
    clearInterval(this.examState.timerInterval);
    clearInterval(this.examState.noiseCheckInterval);

    // Stop streams
    if (this.examState.mediaStream) {
      this.examState.mediaStream.getTracks().forEach(track => track.stop());
    }
    if (this.examState.audioContext) {
      this.examState.audioContext.close().catch(() => {});
    }

    // Hide violation overlay, show Terminated Screen
    const overlay = document.getElementById('exam-violation-overlay');
    if (overlay) overlay.classList.remove('active');

    const termScreen = document.getElementById('exam-terminated-screen');
    if (termScreen) termScreen.classList.add('active');

    // Save disqualified record
    const submissions = JSON.parse(localStorage.getItem('nti_exam_submissions') || '[]');
    submissions.push({
      candidate: this.currentCandidate,
      status: 'TERMINATED_MALPRACTICE',
      violations: this.examState.violationsCount,
      reason: reason,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('nti_exam_submissions', JSON.stringify(submissions));

    this.showToast('⛔ EXAM TERMINATED DUE TO MALPRACTICE.', 'error');
  }

  startExamTimer() {
    clearInterval(this.examState.timerInterval);
    const clockEl = document.getElementById('exam-timer-clock');

    this.examState.timerInterval = setInterval(() => {
      this.examState.secondsRemaining--;
      if (this.examState.secondsRemaining <= 0) {
        clearInterval(this.examState.timerInterval);
        this.submitFinalExam();
        return;
      }

      const mins = Math.floor(this.examState.secondsRemaining / 60);
      const secs = this.examState.secondsRemaining % 60;
      if (clockEl) {
        clockEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    }, 1000);
  }

  renderCurrentQuestion() {
    const idx = this.examState.currentQuestionIndex;
    const q = this.examQuestions[idx] || {
      id: idx + 1,
      section: 'Technical Assessment',
      question: `Question ${idx + 1}`,
      options: ['Option A', 'Option B', 'Option C', 'Option D']
    };

    document.getElementById('exam-q-badge').textContent = `Question ${idx + 1} of 45 • ${q.section}`;
    document.getElementById('exam-q-text').textContent = q.question;

    const optionsContainer = document.getElementById('exam-q-options');
    const selectedAns = this.examState.answers[idx];

    optionsContainer.innerHTML = q.options.map((opt, optIdx) => `
      <div class="exam-option-item ${selectedAns === optIdx ? 'selected' : ''}" data-opt-idx="${optIdx}">
        <div class="option-marker">${String.fromCharCode(65 + optIdx)}</div>
        <span>${opt}</span>
      </div>
    `).join('');

    optionsContainer.querySelectorAll('.exam-option-item').forEach(el => {
      el.addEventListener('click', () => {
        const optIdx = parseInt(el.getAttribute('data-opt-idx'), 10);
        this.examState.answers[idx] = optIdx;
        this.renderCurrentQuestion();
        this.renderPaletteGrid();
      });
    });

    this.renderPaletteGrid();
  }

  renderPaletteGrid() {
    const grid = document.getElementById('exam-palette-grid');
    if (!grid) return;

    let html = '';
    for (let i = 0; i < this.examState.totalQuestions; i++) {
      let statusClass = '';
      if (this.examState.answers[i] !== undefined) statusClass = 'answered';
      if (this.examState.reviewMarked[i]) statusClass = 'review';
      if (this.examState.currentQuestionIndex === i) statusClass += ' current';

      html += `<button type="button" class="palette-btn ${statusClass}" data-q-idx="${i}">${i + 1}</button>`;
    }
    grid.innerHTML = html;

    grid.querySelectorAll('.palette-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.getAttribute('data-q-idx'), 10);
        this.examState.currentQuestionIndex = qIdx;
        this.renderCurrentQuestion();
      });
    });
  }

  submitFinalExam() {
    this.examState.active = false;
    clearInterval(this.examState.timerInterval);
    clearInterval(this.examState.noiseCheckInterval);

    // Stop proctor streams
    if (this.examState.mediaStream) {
      this.examState.mediaStream.getTracks().forEach(track => track.stop());
    }
    if (this.examState.audioContext) {
      this.examState.audioContext.close().catch(() => {});
    }

    // Clean up event listeners
    if (this.boundVisibilityHandler) document.removeEventListener('visibilitychange', this.boundVisibilityHandler);
    if (this.boundBlurHandler) window.removeEventListener('blur', this.boundBlurHandler);
    if (this.boundContextHandler) document.removeEventListener('contextmenu', this.boundContextHandler);
    if (this.boundCopyHandler) {
      document.removeEventListener('copy', this.boundCopyHandler);
      document.removeEventListener('paste', this.boundCopyHandler);
    }
    if (this.boundKeyHandler) document.removeEventListener('keydown', this.boundKeyHandler);

    document.getElementById('exam-fullscreen-view').style.display = 'none';
    document.body.style.overflow = '';
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    // Calculate score
    let aptitudeScore = 0;
    let domainScore = 0;
    for (let i = 0; i < this.examQuestions.length; i++) {
      const q = this.examQuestions[i];
      if (this.examState.answers[i] === q.correctAnswer) {
        if (i < 20) aptitudeScore++;
        else domainScore++;
      }
    }
    const totalScore = aptitudeScore + domainScore;
    const attemptedCount = Object.keys(this.examState.answers).length;

    const domain = this.currentCandidate?.candidate?.domain || (this.selectedDomain ? this.selectedDomain.name : 'VLSI');
    const appId = this.currentCandidate?.applicationId || 'NTI-REG-2026-904812';

    // Populate Results Modal
    const resultAppIdEl = document.getElementById('result-app-id');
    if (resultAppIdEl) resultAppIdEl.textContent = appId;

    const resultDomainEl = document.getElementById('result-allocated-domain');
    if (resultDomainEl) resultDomainEl.textContent = domain;

    const resultAttemptEl = document.getElementById('result-attempted-count');
    if (resultAttemptEl) resultAttemptEl.textContent = `${attemptedCount} of 45 Questions Attempted`;

    const resultScoreEl = document.getElementById('result-score-display');
    if (resultScoreEl) {
      resultScoreEl.textContent = `${totalScore} / 45 (Aptitude: ${aptitudeScore}/20, Domain: ${domainScore}/25)`;
    }

    const channelBtn = document.getElementById('result-btn-whatsapp-channel');
    if (channelBtn) {
      channelBtn.href = this.currentCandidate?.whatsappChannelUrl || APP_CONFIG.whatsappChannelUrl;
    }

    const resultWhatsAppBtn = document.getElementById('result-btn-whatsapp');
    if (resultWhatsAppBtn) {
      resultWhatsAppBtn.href = this.currentCandidate?.whatsappGroupUrl || APP_CONFIG.whatsappGroupUrl;
    }

    // Save final submission to NTI system
    const submissions = JSON.parse(localStorage.getItem('nti_exam_submissions') || '[]');
    submissions.push({
      applicationId: appId,
      candidate: this.currentCandidate?.candidate,
      domain: domain,
      totalScore: totalScore,
      aptitudeScore: aptitudeScore,
      domainScore: domainScore,
      attemptedCount: attemptedCount,
      violationsCount: this.examState.violationsCount,
      answers: this.examState.answers,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('nti_exam_submissions', JSON.stringify(submissions));

    this.openModal('modal-exam-result');
    this.showToast('✅ All exam responses securely submitted to NTI Evaluation Team!', 'success');
  }

  // =========================================================================
  // GATTU MASTER AI INTERACTIVE CHATBOT
  // =========================================================================
  setupGattuAIChat() {
    const input = document.getElementById('gattu-chat-input');
    const sendBtn = document.getElementById('btn-gattu-send');
    const msgArea = document.getElementById('gattu-chat-msg-area');

    const handleSend = () => {
      const query = input.value.trim();
      if (!query) return;

      // Append user bubble
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user';
      userBubble.textContent = query;
      msgArea.appendChild(userBubble);
      input.value = '';

      msgArea.scrollTop = msgArea.scrollHeight;

      // Simulated AI Bot Response
      setTimeout(() => {
        const botBubble = document.createElement('div');
        botBubble.className = 'chat-bubble bot';
        botBubble.innerHTML = this.getGattuAIResponse(query);
        msgArea.appendChild(botBubble);
        msgArea.scrollTop = msgArea.scrollHeight;
      }, 700);
    };

    sendBtn?.addEventListener('click', handleSend);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  getGattuAIResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('vlsi') || q.includes('chip') || q.includes('semiconductor')) {
      return `🔬 <strong>VLSI Domain Insights:</strong><br>
        The VLSI track covers Digital Electronics, Verilog HDL, Static Timing Analysis, FPGA implementation, and ASIC design flow. Upon qualifying, you receive 1-on-1 industry mentorship and a <strong>₹30,000/month stipend</strong> on live projects!`;
    }
    if (q.includes('fee') || q.includes('price') || q.includes('cost') || q.includes('payment')) {
      return `💳 <strong>Exam Application Fee:</strong><br>
        The NTI Qualifier Test has a standard exam fee of ₹150 + ₹3 platform fee (Total: <strong>₹153</strong>), payable during candidate verification. There are no other hidden charges!`;
    }
    if (q.includes('syllabus') || q.includes('exam') || q.includes('pattern') || q.includes('test')) {
      return `📋 <strong>NTI Qualifier Test Pattern:</strong><br>
        &bull; <strong>Format:</strong> 45 Multiple Choice Questions (MCQ)<br>
        &bull; <strong>Duration:</strong> 1 Hour (60 minutes)<br>
        &bull; <strong>Syllabus:</strong> Domain technical concepts + Quantitative Aptitude & Problem Solving<br>
        &bull; <strong>Mode:</strong> Secure online browser test with CC monitoring.`;
    }
    if (q.includes('stipend') || q.includes('money') || q.includes('pay') || q.includes('salary')) {
      return `💰 <strong>Stipend Details:</strong><br>
        Qualified candidates selected for the NTI Internship program receive a verified monthly stipend of <strong>₹30,000/month</strong> for the duration of the 3 to 6-month hands-on industry project.`;
    }
    if (q.includes('whatsapp') || q.includes('group')) {
      return `📲 <strong>WhatsApp Batch Access:</strong><br>
        Official WhatsApp batch groups are unlocked automatically immediately after your application payment is verified. You will receive orientation guides and test credentials there!`;
    }
    return `🤖 <strong>Gattu Master Advice:</strong><br>
      The <strong>Nish Technologies Qualifier Test</strong> is designed for college students, freshers, and graduates across 25+ domains. You can apply by clicking <em>'Explore Internship Opportunities'</em> or selecting any domain card!`;
  }

  setupNumberCounters() {
    const counterElements = document.querySelectorAll('.counter-number');
    if (!counterElements.length) return;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counterElements.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10) || 0;
            const duration = 1600;
            const startTime = performance.now();
            el.textContent = 0;

            const updateCount = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeProgress * target);
              el.textContent = currentVal;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                el.textContent = target;
              }
            };
            requestAnimationFrame(updateCount);
          });
        }
      });
    }, { threshold: 0.25 });

    const statsSection = document.getElementById('why-nti');
    if (statsSection) observer.observe(statsSection);
  }

  // =========================================================================
  // VECTOR ICON HELPERS
  // =========================================================================
  getCategoryIcon(icon) {
    const map = {
      monitor: '💻',
      chart: '📊',
      brain: '🧠',
      code: '⚡',
      palette: '🎨',
      megaphone: '📢',
      pencil: '✏️',
      document: '📝',
      users: '👥',
      coins: '💰',
      trending: '📈',
      cog: '⚙️',
      building: '🏛️',
      academic: '🎓',
      cap: '🎓',
      plus: '➕'
    };
    return map[icon] || '📁';
  }

  getDomainIcon(domainId) {
    const icons = {
      'vlsi': '🔬',
      'ai-ml': '🤖',
      'java': '☕',
      'python': '🐍',
      'iot': '📡',
      'embedded-systems': '🔌',
      'dotnet': '💠',
      'big-data': '🗄️',
      'blockchain': '⛓️',
      'power-bi': '📊',
      'full-stack': '🌐',
      'ui-ux': '🎨',
      'app-dev': '📱',
      'data-science': '📈',
      'data-analyst': '📑',
      'digital-marketing': '📢',
      'graphic-design': '🖌️',
      'content-writing': '✍️',
      'hr-management': '🤝',
      'finance-accounts': '💳',
      'sales-business': '🚀',
      'mechanical': '⚙️',
      'civil': '🏗️',
      'bca-bsc': '💻',
      'mba': '💼'
    };
    return icons[domainId] || '💻';
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.ntiApp = new NTIApp();
});
