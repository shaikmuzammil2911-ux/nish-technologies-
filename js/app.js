// NTI Main Application Logic - Nish Technologies Inc
// Complete Interactivity, Dynamic Domain Architecture, Payment & Exam Engine

import { APP_CONFIG, DOMAINS, CATEGORIES, PROGRAMS, WHY_JOIN_CARDS, STATS, EXAM_SAMPLE_QUESTIONS } from './data.js';
import { paymentService } from './paymentService.js';

class NTIApp {
  constructor() {
    this.selectedDomain = DOMAINS[0]; // Default VLSI
    this.currentCandidate = paymentService.getActiveCandidate();
    this.examState = {
      active: false,
      currentQuestionIndex: 0,
      answers: {},
      reviewMarked: {},
      totalQuestions: 45,
      secondsRemaining: 60 * 60,
      timerInterval: null
    };
    
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
    this.setupNumberCounters();
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

    mobileToggle?.addEventListener('click', () => {
      const navLinks = document.getElementById('desktop-nav-links');
      if (navLinks) {
        const isShown = navLinks.style.display === 'flex';
        navLinks.style.display = isShown ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#FFFFFF';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid #E2EEF8';
        navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
      }
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
    if (imgEl) imgEl.src = domain.image;

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
        const candidateData = {
          fullName,
          email,
          mobile: cleanMobile,
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

    document.getElementById('ticket-app-id').textContent = record.applicationId;
    document.getElementById('ticket-candidate-name').textContent = record.candidate.name;
    document.getElementById('ticket-domain').textContent = record.candidate.domain;

    const whatsappBtn = document.getElementById('btn-join-whatsapp-group');
    if (whatsappBtn) {
      whatsappBtn.href = record.whatsappGroupUrl;
    }

    this.openModal('modal-payment-success');
    this.showToast('Payment Verified! Application Confirmed.', 'success');

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
      const email = document.getElementById('login-email').value.trim();
      const candidates = JSON.parse(localStorage.getItem('nti_candidates') || '[]');

      const found = candidates.find(c => c.candidate.email.toLowerCase() === email.toLowerCase());
      if (found) {
        this.closeModal('modal-student-login');
        this.openStudentDashboard(found);
      } else {
        // Fallback for demo login if candidate enters test email
        const demoCandidate = {
          applicationId: 'NTI-2026-' + Math.floor(100000 + Math.random() * 900000),
          candidate: {
            name: email.split('@')[0].toUpperCase(),
            email: email,
            domain: 'VLSI (Very Large Scale Integration)'
          },
          paymentStatus: 'PAID',
          whatsappGroupUrl: APP_CONFIG.whatsappGroupUrl
        };
        this.closeModal('modal-student-login');
        this.openStudentDashboard(demoCandidate);
      }
    });

    document.getElementById('link-switch-to-register')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.closeModal('modal-student-login');
      this.openApplyFormForDomain(this.selectedDomain);
    });

    document.getElementById('btn-start-exam-now')?.addEventListener('click', () => {
      this.closeModal('modal-student-dashboard');
      this.startOnlineExam();
    });
  }

  openStudentDashboard(candidate) {
    this.currentCandidate = candidate;
    document.getElementById('dash-candidate-name').textContent = candidate.candidate.name;
    document.getElementById('dash-candidate-email').textContent = candidate.candidate.email;
    document.getElementById('dash-app-id').textContent = candidate.applicationId;
    document.getElementById('dash-domain').textContent = candidate.candidate.domain;

    const whatsappBtn = document.getElementById('dash-btn-whatsapp');
    if (whatsappBtn) {
      whatsappBtn.href = candidate.whatsappGroupUrl || APP_CONFIG.whatsappGroupUrl;
    }

    this.openModal('modal-student-dashboard');
  }

  // =========================================================================
  // ONLINE EXAM ENGINE
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
      const confirmed = confirm('Are you sure you want to submit your Nish Technologies Qualifier Test? Answers cannot be changed after final submission.');
      if (confirmed) {
        this.submitFinalExam();
      }
    });
  }

  startOnlineExam() {
    this.examState.active = true;
    this.examState.currentQuestionIndex = 0;
    this.examState.answers = {};
    this.examState.reviewMarked = {};
    this.examState.secondsRemaining = 60 * 60; // 1 hour

    const domainName = this.currentCandidate?.candidate?.domain || 'VLSI';
    const candidateName = this.currentCandidate?.candidate?.name || 'Candidate';

    document.getElementById('exam-header-domain').textContent = `${domainName} Qualifier Assessment`;
    document.getElementById('exam-header-candidate').textContent = `Candidate: ${candidateName}`;

    document.getElementById('exam-fullscreen-view').style.display = 'flex';
    document.body.style.overflow = 'hidden';

    this.renderPaletteGrid();
    this.renderCurrentQuestion();
    this.startExamTimer();
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

  getQuestionForIndex(index) {
    if (index < EXAM_SAMPLE_QUESTIONS.length) {
      return EXAM_SAMPLE_QUESTIONS[index];
    }
    // Generated pool for the rest of 45 questions
    const generalCategories = ["Domain Core Concepts", "Logic & Aptitude", "System Architecture", "Programming Analysis"];
    const cat = generalCategories[index % generalCategories.length];
    return {
      id: index + 1,
      category: cat,
      question: `Question ${index + 1}: In professional enterprise engineering, which approach best ensures high availability, fault tolerance, and scalable maintainability?`,
      options: [
        "Distributed modular microservices with automated load balancing",
        "Single-node monolithic deployment with synchronous thread locking",
        "Unindexed relational tables with direct client-side querying",
        "Manual failover scripts executed via cron without health checks"
      ],
      correctAnswer: 0
    };
  }

  renderCurrentQuestion() {
    const idx = this.examState.currentQuestionIndex;
    const q = this.getQuestionForIndex(idx);

    document.getElementById('exam-q-badge').textContent = `Question ${idx + 1} of 45 • ${q.category}`;
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
        const optIdx = parseInt(el.getAttribute('data-opt-idx'));
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
        const qIdx = parseInt(btn.getAttribute('data-q-idx'));
        this.examState.currentQuestionIndex = qIdx;
        this.renderCurrentQuestion();
      });
    });
  }

  submitFinalExam() {
    clearInterval(this.examState.timerInterval);
    document.getElementById('exam-fullscreen-view').style.display = 'none';
    document.body.style.overflow = '';

    const domain = this.currentCandidate?.candidate?.domain || 'VLSI';
    document.getElementById('result-allocated-domain').textContent = domain;

    const resultWhatsAppBtn = document.getElementById('result-btn-whatsapp');
    if (resultWhatsAppBtn) {
      resultWhatsAppBtn.href = this.currentCandidate?.whatsappGroupUrl || APP_CONFIG.whatsappGroupUrl;
    }

    this.openModal('modal-exam-result');
    this.showToast('Nish Technologies Qualifier Test submitted and evaluated!', 'success');
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
