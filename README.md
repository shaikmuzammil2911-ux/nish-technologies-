# Nish Technologies Inc (NTI) — Stipend-Based Internship & Qualifier Platform

Professional technology-company internship and assessment portal built for **Nish Technologies Inc (NTI)**.

## 🌟 Overview & Key Features

- **Brand & Visuals**: Premium NTI Blue & White tech aesthetic (`#0066FF`), modern typography (Plus Jakarta Sans), micro-interactions, responsive mobile-first architecture.
- **Dynamic Domain Architecture**: 25+ dynamic technology domains (VLSI, AI & ML, Java, Python, IoT, Embedded Systems, .NET, Big Data, Blockchain, Power BI, Full Stack Web Development, UI/UX Design, App Development, Data Science, Data Analyst, etc.) with unified modal experiences and syllabus breakdowns.
- **Strict Pricing Policy**:
  - Examination pricing is strictly hidden from the public homepage, hero section, domain cards, benefits, and footer.
  - The examination fee only reveals upon application completion:
    - **Exam Fee**: ₹150
    - **Platform Fee**: ₹3
    - **Total**: ₹153
- **Secure Payment & Verified WhatsApp Flow**:
  - Modular `PaymentService` architecture with order generation, checkout interface (UPI, Debit/Credit Card, Net Banking), and server-side signature verification hooks.
  - Candidate records transition to `PAID` upon verified transaction.
  - WhatsApp official batch group links are protected and **only unlocked after verified payment**.
- **Interactive Fullscreen Online Exam Engine**:
  - Nish Technologies Qualifier Test assessment engine with 45 MCQ questions, domain-specific & quantitative aptitude question pools, 60-minute countdown timer, question palette navigation, and mark-for-review capabilities.
- **Student Portal & Unlocked Internship Opportunity**:
  - Live candidate dashboard with application verification badge.
  - Instant qualification results unlocking stipend-based internship placement (**₹30,000/month stipend**) with industry mentorship.
- **Gattu Master AI Companion**:
  - Interactive AI assistant answering student queries on domain syllabus, exam pattern, and interview preparation.

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/shaikmuzammil2911-ux/nish-technologies-.git

# Navigate into project directory
cd nish-technologies-

# Start local server
npm start
# or open index.html directly in any modern browser
```

The application will run at `http://localhost:3000`.

---

## 📁 Project Structure

```text
├── assets/                          # Pixel-perfect brand assets and illustrations
│   ├── nti-logo.png                 # Official NTI logo
│   ├── hero-student.png             # Hero graphic with badges
│   ├── why-join-illustration.png    # Why Join platform illustration
│   ├── qualifier-banner-graphic.png # Qualifier test assessment graphic
│   ├── vlsi-chip.png                # VLSI circuit graphic
│   ├── gattu-robot.png              # Gattu Master AI robot companion
│   └── leadership-graphic.png       # Leadership opportunity graphic
├── css/
│   └── styles.css                   # Responsive NTI blue design system
├── js/
│   ├── data.js                      # Dynamic domain store, question bank, config
│   ├── paymentService.js            # Payment gateway abstraction & verification
│   └── app.js                       # Main controller, modal managers, exam & AI engine
├── index.html                       # Semantic HTML5 entry page
├── package.json                     # Project manifest and dev server scripts
└── README.md                        # Documentation
```

---

© 2025 Nish Technologies Inc. All rights reserved.
**Learn | Build | Grow**
