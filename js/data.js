// NTI Platform Data Store - Nish Technologies Inc
// Reusable, Dynamic Data Architecture for Domains, Programs, Exam & Settings

export const APP_CONFIG = {
  brandName: "NISH TECHNOLOGIES INC",
  shortBrand: "NTI",
  tagline: "Learn | Build | Grow",
  examName: "Nish Technologies Qualifier Test",
  shortExamName: "NTI Qualifier Test",
  examDate: "11th October 2026 (Sunday) | 6 PM - 7 PM",
  examDurationMinutes: 60,
  totalExamQuestions: 45,
  stipendAmount: "₹30,000/month",
  pricing: {
    examFee: 150,
    platformFee: 3,
    total: 153,
    currencySymbol: "₹"
  },
  whatsappGroupUrl: "https://chat.whatsapp.com/invite/NTI-Qualifier-Official-Batch-2026",
  supportEmail: "hr@nishtechnologies.com",
  supportPhone: "+91 98765 43210",
  headquarters: "8-7/72, Plot No 51, Opp. Naveena School, Hastinapuram Central, Hyderabad, 500 079, Telangana",
  branchOffice: "Office No. 305, Al Durrah Tower, Sharjah, UAE"
};

export const DOMAINS = [
  {
    id: "vlsi",
    name: "VLSI (Very Large Scale Integration)",
    category: "IT & Software",
    categorySlug: "it-software",
    shortTitle: "VLSI",
    tagline: "Design the chips that power the future.",
    shortDescription: "VLSI is a high-demand domain in the semiconductor industry. Learn chip design, digital electronics, and hardware design using industry tools.",
    fullDescription: "VLSI is a high-demand domain in the semiconductor industry. Learn chip design, digital electronics, and hardware design using industry tools and work on real-world projects. Students gain hands-on exposure to RTL design, logic synthesis, static timing analysis, and FPGA implementation.",
    skills: [
      "Digital Electronics & Logic Design",
      "Verilog / SystemVerilog",
      "FPGA & ASIC Design",
      "Industry-Based Projects"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "B.Tech / B.Sc / Diploma (ECE, EEE, CSE)",
    image: "assets/vlsi-chip.png",
    iconColor: "#0066FF",
    bgColor: "#EBF3FF",
    stipend: "₹30,000/month after qualification",
    projects: ["16-bit RISC Processor in Verilog", "FIFO Memory Architecture", "Traffic Light Controller on FPGA"]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    category: "AI & Machine Learning",
    categorySlug: "ai-ml",
    shortTitle: "AI & ML",
    tagline: "Build intelligent systems that solve real problems.",
    shortDescription: "Master predictive modeling, neural networks, computer vision, and NLP with industry-grade Python frameworks.",
    fullDescription: "Immerse yourself into generative AI, supervised/unsupervised machine learning, deep neural networks, and computer vision. Work with TensorFlow, PyTorch, Scikit-learn, and deploy scalable ML models onto cloud production environments.",
    skills: [
      "Python, NumPy & Pandas",
      "Supervised & Unsupervised Learning",
      "Deep Learning (PyTorch & TensorFlow)",
      "Model Deployment & MLOps"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "B.Tech / BCA / B.Sc / MCA / M.Tech",
    image: "assets/hero-student.png",
    iconColor: "#7928CA",
    bgColor: "#F5EBFF",
    stipend: "₹30,000/month after qualification",
    projects: ["Autonomous Computer Vision Defect Detector", "Healthcare Predictive Diagnostic Model", "LLM-Powered Chat Assistant"]
  },
  {
    id: "java",
    name: "Java Enterprise Programming",
    category: "IT & Software",
    categorySlug: "it-software",
    shortTitle: "Java Programming",
    tagline: "Architect robust enterprise backend applications.",
    shortDescription: "Learn Core Java, OOPs, Spring Boot, Microservices, and REST APIs for scalable enterprise software.",
    fullDescription: "Dive deep into modern Java ecosystem. Develop production-ready microservices with Spring Boot, hibernate ORM, relational databases, Docker containerization, and enterprise security frameworks.",
    skills: [
      "Core Java & Multithreading",
      "Spring Boot & Hibernate",
      "Microservices Architecture",
      "RESTful API & Database Integration"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / Engineering / BCA / MCA",
    image: "assets/hero-student.png",
    iconColor: "#007396",
    bgColor: "#E6F7FF",
    stipend: "₹30,000/month after qualification",
    projects: ["Fintech Core Banking Microservices", "E-Commerce Payment Orchestration Engine", "Inventory Management Portal"]
  },
  {
    id: "python",
    name: "Python Programming & Automation",
    category: "IT & Software",
    categorySlug: "it-software",
    shortTitle: "Python Programming",
    tagline: "Write clean, powerful code for automation and software.",
    shortDescription: "Master Python fundamentals, OOPs, web automation, Fast API, and scripting for modern tech workflows.",
    fullDescription: "From foundational syntax to complex web services and automation pipelines, this domain teaches you how to leverage Python for backend servers, data pipelines, web scraping, and workflow automation.",
    skills: [
      "Advanced Python & Data Structures",
      "FastAPI & Django Frameworks",
      "Selenium & Web Scraping",
      "Automated Scripting & Testing"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / B.Tech / BCA / B.Sc",
    image: "assets/hero-student.png",
    iconColor: "#FFB000",
    bgColor: "#FFF8E7",
    stipend: "₹30,000/month after qualification",
    projects: ["High-speed Data Scraping Engine", "Automated QA Test Pipeline", "REST API Backend with FastAPI"]
  },
  {
    id: "iot",
    name: "Internet of Things (IoT)",
    category: "Mechanical",
    categorySlug: "mechanical",
    shortTitle: "Internet of Things",
    tagline: "Bridge the physical and digital worlds.",
    shortDescription: "Work with microcontrollers, sensor integration, MQTT protocols, and cloud IoT dashboards.",
    fullDescription: "Learn to design connected smart devices. Gain hands-on exposure to ESP32, Arduino, Raspberry Pi, wireless protocols (Zigbee, BLE, LoRaWAN), and AWS IoT Core.",
    skills: [
      "Microcontroller Programming (C/C++)",
      "Sensor Interfacing & Actuators",
      "MQTT, HTTP & WebSockets",
      "Cloud IoT Integration (AWS IoT)"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "ECE, EEE, Mech, CSE Students & Freshers",
    image: "assets/vlsi-chip.png",
    iconColor: "#00B074",
    bgColor: "#E8FAF4",
    stipend: "₹30,000/month after qualification",
    projects: ["Smart Industrial Monitoring Node", "Energy Meter with Cloud Analytics", "Automated Agriculture Sensor Hub"]
  },
  {
    id: "embedded-systems",
    name: "Embedded Systems Engineering",
    category: "IT & Software",
    categorySlug: "it-software",
    shortTitle: "Embedded Systems",
    tagline: "Program the hardware that runs mission-critical devices.",
    shortDescription: "Develop firmware using Embedded C, RTOS, ARM Cortex, and communication peripherals like UART, SPI, I2C.",
    fullDescription: "Master the intersection of software and hardware. Gain deep knowledge of low-level hardware registers, FreeRTOS scheduling, device drivers, and real-time debugging tools.",
    skills: [
      "Embedded C & ARM Cortex Architecture",
      "RTOS (FreeRTOS) Concepts",
      "Communication Protocols (SPI, I2C, CAN)",
      "Hardware Debugging & Oscilloscopes"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "ECE, EEE, Instrumentation & E&I",
    image: "assets/vlsi-chip.png",
    iconColor: "#009688",
    bgColor: "#E0F2F1",
    stipend: "₹30,000/month after qualification",
    projects: ["Automotive CAN Bus Telemetry System", "RTOS Task Scheduler on STM32", "Medical Sensor Firmware Device"]
  },
  {
    id: "dotnet",
    name: ".NET Core & Cloud Applications",
    category: "IT & Software",
    categorySlug: "it-software",
    shortTitle: ".NET",
    tagline: "Build high-performance C# enterprise solutions.",
    shortDescription: "Master C#, ASP.NET Core, Entity Framework, Azure deployment, and microservice architectures.",
    fullDescription: "Work with Microsoft's cutting-edge .NET 8 ecosystem. Build cloud-native web APIs, secure authentication systems with Azure AD, and scalable backend infrastructure.",
    skills: [
      "C# & Object-Oriented Principles",
      "ASP.NET Core Web APIs",
      "Entity Framework Core & SQL Server",
      "Azure App Services & CI/CD"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / Computer Science / IT",
    image: "assets/hero-student.png",
    iconColor: "#512BD4",
    bgColor: "#F0ECFC",
    stipend: "₹30,000/month after qualification",
    projects: ["Enterprise Resource Planning (ERP) API", "Healthcare Patient Record Portal", "Distributed Authentication Gateway"]
  },
  {
    id: "big-data",
    name: "Big Data & Data Engineering",
    category: "Data Science",
    categorySlug: "data-science",
    shortTitle: "Big Data",
    tagline: "Harness massive datasets with modern data pipelines.",
    shortDescription: "Master Hadoop, Apache Spark, Kafka streaming, and data lakehouse architectures.",
    fullDescription: "Learn how modern tech enterprises process terabytes of data in real-time. Build ETL pipelines, manage distributed clusters, and write distributed query transformations.",
    skills: [
      "Apache Spark & PySpark",
      "Kafka Real-Time Streaming",
      "Hadoop HDFS & Hive",
      "Snowflake & Data Warehousing"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "B.Tech, BCA, MCA, B.Sc (Maths/Stats/CS)",
    image: "assets/hero-student.png",
    iconColor: "#0288D1",
    bgColor: "#E1F5FE",
    stipend: "₹30,000/month after qualification",
    projects: ["Real-time Clickstream Analysis Engine", "Financial Transaction Fraud ETL", "Lakehouse Pipeline on Databricks"]
  },
  {
    id: "blockchain",
    name: "Blockchain Technology & Web3",
    category: "IT & Software",
    categorySlug: "it-software",
    shortTitle: "Blockchain Technology",
    tagline: "Pioneer decentralized protocols and smart contracts.",
    shortDescription: "Learn Solidity, Ethereum, smart contract auditing, DeFi protocols, and Web3 integration.",
    fullDescription: "Step into the decentralized web. Develop and audit secure smart contracts, understand consensus mechanisms, build decentralized applications (dApps), and integrate with wallet providers.",
    skills: [
      "Solidity & Smart Contract Development",
      "Hardhat, Foundry & Web3.js / Ethers.js",
      "Decentralized Storage (IPFS)",
      "Security Auditing & Gas Optimization"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Engineering / Computer Science / IT Graduates",
    image: "assets/hero-student.png",
    iconColor: "#E91E63",
    bgColor: "#FCE4EC",
    stipend: "₹30,000/month after qualification",
    projects: ["Decentralized Credential Verification", "Automated Escrow Smart Contract", "Cross-Chain Token Swap Protocol"]
  },
  {
    id: "power-bi",
    name: "Power BI & Business Intelligence",
    category: "Finance & Accounts",
    categorySlug: "finance-accounts",
    shortTitle: "Power BI",
    tagline: "Turn raw business data into actionable executive insights.",
    shortDescription: "Master DAX calculations, interactive dashboard design, data modeling, and business storytelling.",
    fullDescription: "Transform complex corporate datasets into intuitive visual dashboards. Learn Power Query ETL, advanced DAX expressions, KPI tracking, and automated reporting.",
    skills: [
      "Power Query & ETL Data Modeling",
      "Advanced DAX Formulas & Measures",
      "Interactive Dashboard & KPI Design",
      "SQL Querying & Executive Reporting"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Commerce, Management, Engineering & Science",
    image: "assets/hero-student.png",
    iconColor: "#F2C811",
    bgColor: "#FEF9E7",
    stipend: "₹30,000/month after qualification",
    projects: ["Executive Sales Performance Dashboard", "Supply Chain Inventory BI Tool", "Financial Profit & Loss Analyzer"]
  },
  {
    id: "full-stack",
    name: "Full Stack Web Development",
    category: "Web Development",
    categorySlug: "web-development",
    shortTitle: "Full Stack Web Development",
    tagline: "Craft end-to-end scalable web applications.",
    shortDescription: "Learn modern React, Node.js, Express, PostgreSQL/MongoDB, and cloud hosting.",
    fullDescription: "Become an industry-ready full-stack engineer. Build lightning-fast frontends, robust REST & GraphQL APIs, secure JWT auth, and database schemas with seamless production deployments.",
    skills: [
      "React.js, Next.js & Modern JavaScript",
      "Node.js, Express & Serverless APIs",
      "PostgreSQL, MongoDB & Prisma ORM",
      "Authentication, CI/CD & Cloud Deployment"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / College Student / Freshers",
    image: "assets/hero-student.png",
    iconColor: "#0284C7",
    bgColor: "#E0F2FE",
    stipend: "₹30,000/month after qualification",
    projects: ["Multi-Tenant SaaS Management Platform", "Real-Time Collaboration Workspace", "EdTech Course & Exam Engine"]
  },
  {
    id: "ui-ux",
    name: "UI/UX & Product Design",
    category: "UI/UX Design",
    categorySlug: "ui-ux-design",
    shortTitle: "UI/UX Design",
    tagline: "Design intuitive and delightful digital experiences.",
    shortDescription: "Master user research, wireframing, high-fidelity Figma prototyping, and design systems.",
    fullDescription: "Learn user-centric design principles that top tech firms look for. Conduct user testing, craft micro-interactions, build comprehensive design systems, and present portfolio case studies.",
    skills: [
      "User Research & Journey Mapping",
      "Figma Advanced Prototyping & Components",
      "Design Systems & Responsive Layouts",
      "Usability Testing & Design Handoff"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate with passion for visual design",
    image: "assets/hero-student.png",
    iconColor: "#EC4899",
    bgColor: "#FDF2F8",
    stipend: "₹30,000/month after qualification",
    projects: ["Fintech Neo-Banking Mobile App UI", "B2B SaaS Analytics Design System", "E-Learning Gamified Web Experience"]
  },
  {
    id: "app-dev",
    name: "Cross-Platform App Development",
    category: "IT & Software",
    categorySlug: "it-software",
    shortTitle: "App Development",
    tagline: "Build native-feeling iOS and Android applications.",
    shortDescription: "Develop high-performance apps using Flutter / React Native with state management and native device integrations.",
    fullDescription: "Learn to deploy cross-platform mobile apps to Google Play Store and Apple App Store. Master responsive mobile layouts, camera/GPS hardware APIs, offline caching, and push notifications.",
    skills: [
      "Flutter & Dart / React Native",
      "State Management (Riverpod / Redux)",
      "RESTful API & Local Storage (SQLite)",
      "App Store & Play Store Deployment"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Engineering / BCA / B.Sc / Tech Graduates",
    image: "assets/hero-student.png",
    iconColor: "#06B6D4",
    bgColor: "#ECFEFF",
    stipend: "₹30,000/month after qualification",
    projects: ["On-Demand Logistics Tracker App", "Personal Finance & Budgeting App", "Social Fitness Tracker with GPS"]
  },
  {
    id: "data-science",
    name: "Data Science & Advanced Analytics",
    category: "Data Science",
    categorySlug: "data-science",
    shortTitle: "Data Science",
    tagline: "Extract actionable intelligence from complex data.",
    shortDescription: "Master statistical modeling, hypothesis testing, machine learning pipelines, and Python analytics.",
    fullDescription: "Learn end-to-end data science workflows. From exploratory data analysis (EDA) to statistical inference, feature engineering, and predictive model evaluation on real business datasets.",
    skills: [
      "Statistical Analysis & Hypothesis Testing",
      "Exploratory Data Analysis (EDA)",
      "Predictive Modeling (Scikit-Learn)",
      "Data Storytelling & Executive Presentations"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Engineering, Mathematics, Statistics, MCA, B.Sc",
    image: "assets/hero-student.png",
    iconColor: "#10B981",
    bgColor: "#ECFDF5",
    stipend: "₹30,000/month after qualification",
    projects: ["Customer Churn Prediction Model", "Retail Demand Forecasting Engine", "Sentimental Analysis on Social Data"]
  },
  {
    id: "data-analyst",
    name: "Data Analyst & Business Insights",
    category: "Data Science",
    categorySlug: "data-science",
    shortTitle: "Data Analyst",
    tagline: "Solve business puzzles with SQL, Excel & Tableau.",
    shortDescription: "Learn SQL data querying, advanced Excel modeling, Tableau visualizations, and metric storytelling.",
    fullDescription: "Become the bridge between data and strategic leadership decisions. Learn how to write complex SQL joins, build financial models in Excel, and craft interactive Tableau dashboards.",
    skills: [
      "Advanced SQL Queries & Joins",
      "Advanced Excel (VLOOKUP, Pivot, Macros)",
      "Tableau & Power BI Dashboarding",
      "Business Metrics & KPI Analysis"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / B.Com / B.Tech / B.Sc / BBA",
    image: "assets/hero-student.png",
    iconColor: "#3B82F6",
    bgColor: "#EFF6FF",
    stipend: "₹30,000/month after qualification",
    projects: ["Sales Conversion Optimization Report", "Operations Cost-Benefit Analysis", "Marketing Campaign ROI Dashboard"]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing & Growth Hacking",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    shortTitle: "Digital Marketing",
    tagline: "Scale customer acquisition with modern marketing channels.",
    shortDescription: "Master SEO, Google Ads, Meta Ads, funnel optimization, and data-driven marketing analytics.",
    fullDescription: "Master modern multi-channel marketing campaigns. Learn paid advertising strategy, conversion rate optimization (CRO), search engine algorithms, email automations, and growth analytics.",
    skills: [
      "Search Engine Optimization (SEO & SEM)",
      "Meta Ads & Google Ads Management",
      "Content Strategy & Copywriting",
      "Google Analytics 4 & Attribution Models"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / BBA / MBA / B.Com / B.A",
    image: "assets/hero-student.png",
    iconColor: "#8B5CF6",
    bgColor: "#F5F3FF",
    stipend: "₹30,000/month after qualification",
    projects: ["Live E-Commerce Ad Campaign (ROAS 4x)", "Organic SEO Traffic Ranking Strategy", "Lead Nurture Email Funnel"]
  },
  {
    id: "graphic-design",
    name: "Graphic Design & Brand Identity",
    category: "Graphic Design",
    categorySlug: "graphic-design",
    shortTitle: "Graphic Design",
    tagline: "Create iconic visual identities and brand assets.",
    shortDescription: "Master Adobe Photoshop, Illustrator, typography, social media branding, and visual marketing assets.",
    fullDescription: "Turn creative ideas into striking brand visuals. Learn typography rules, color harmony, vector illustration, vector logo design, and marketing campaign assets for print and digital media.",
    skills: [
      "Adobe Photoshop & Illustrator Mastery",
      "Brand Identity & Logo Design",
      "Social Media Creatives & Ad Layouts",
      "Print Media & Packaging Graphics"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / Creative Seekers",
    image: "assets/hero-student.png",
    iconColor: "#F97316",
    bgColor: "#FFF7ED",
    stipend: "₹30,000/month after qualification",
    projects: ["Complete Brand Identity Package", "Social Media 30-Day Campaign Kit", "Corporate Annual Report Layout"]
  },
  {
    id: "content-writing",
    name: "Content Writing & Technical Copywriting",
    category: "Content Writing",
    categorySlug: "content-writing",
    shortTitle: "Content Writing",
    tagline: "Craft compelling stories and high-converting copy.",
    shortDescription: "Learn SEO content writing, technical copywriting, white papers, storytelling, and editorial workflows.",
    fullDescription: "Discover how high-growth tech companies communicate value. Learn how to craft SEO-optimized articles, whitepapers, social threads, landing page copy, and press releases that captivate audiences.",
    skills: [
      "SEO Content Writing & Keyword Strategy",
      "Conversion Copywriting & Landing Pages",
      "Technical Documentation & Case Studies",
      "Brand Voice & Editorial Proofreading"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / B.A / Mass Comm / Freshers",
    image: "assets/hero-student.png",
    iconColor: "#0284C7",
    bgColor: "#F0F9FF",
    stipend: "₹30,000/month after qualification",
    projects: ["Tech Company Thought Leadership Series", "High-Converting SaaS Landing Page Copy", "B2B Tech Case Study"]
  },
  {
    id: "hr-management",
    name: "HR Management & Talent Acquisition",
    category: "HR & Management",
    categorySlug: "hr-management",
    shortTitle: "HR & Management",
    tagline: "Drive organizational excellence through people operations.",
    shortDescription: "Learn talent sourcing, tech recruitment, payroll management, employee engagement, and HR compliance.",
    fullDescription: "Gain practical experience in end-to-end recruitment pipelines, talent attraction strategies, onboarding, HR analytics, employee performance cycles, and modern HR tech tools.",
    skills: [
      "Talent Sourcing & LinkedIn Recruiter",
      "Interviewing & Assessment Methodologies",
      "Employee Relations & Onboarding",
      "HR Analytics & Statutory Compliance"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "MBA / BBA / B.Com / Any Graduate",
    image: "assets/hero-student.png",
    iconColor: "#D946EF",
    bgColor: "#FDF4FF",
    stipend: "₹30,000/month after qualification",
    projects: ["Tech Hiring Pipeline Sourcing Sprint", "Employee Engagement Playbook", "Compensation & Benefits Benchmarking"]
  },
  {
    id: "finance-accounts",
    name: "Corporate Finance & Accounts",
    category: "Finance & Accounts",
    categorySlug: "finance-accounts",
    shortTitle: "Finance & Accounts",
    tagline: "Master financial modeling and corporate accounting.",
    shortDescription: "Learn financial statement analysis, GST, Tally Prime, budgeting, and corporate valuation.",
    fullDescription: "Develop strong financial analytical capabilities. Learn corporate financial modeling, tax calculations, audit procedures, balance sheet reconciliation, and working capital optimization.",
    skills: [
      "Financial Modeling & Forecasting",
      "Tally Prime & ERP Accounting",
      "GST, TDS & Taxation Compliance",
      "Variance Analysis & Budgeting"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "B.Com / M.Com / MBA (Finance) / BBA",
    image: "assets/hero-student.png",
    iconColor: "#EAB308",
    bgColor: "#FEFCE8",
    stipend: "₹30,000/month after qualification",
    projects: ["3-Statement Financial Forecasting Model", "Corporate GST Reconciliation Audit", "Working Capital Optimization Plan"]
  },
  {
    id: "sales-business",
    name: "Sales & Business Development",
    category: "Sales & Business",
    categorySlug: "sales-business",
    shortTitle: "Sales & Business",
    tagline: "Accelerate revenue growth through strategic partnerships.",
    shortDescription: "Master B2B enterprise sales, lead qualification, CRM management, objection handling, and negotiations.",
    fullDescription: "Learn consultative selling frameworks used by top software and tech firms. Build prospect lists, execute cold outreach, conduct product demos, handle objections, and close deals.",
    skills: [
      "B2B Lead Generation & Prospecting",
      "CRM Software (HubSpot / Salesforce)",
      "Discovery Calls & Product Demos",
      "Negotiation & Closing Strategies"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "Any Graduate / MBA / BBA / Enthusiastic Communicators",
    image: "assets/hero-student.png",
    iconColor: "#3B82F6",
    bgColor: "#EFF6FF",
    stipend: "₹30,000/month after qualification",
    projects: ["B2B Outbound Campaign Pipeline", "Enterprise Sales Pitch Deck", "Client Win-Back Strategy"]
  },
  {
    id: "mechanical",
    name: "Mechanical CAD/CAM & Automation",
    category: "Mechanical",
    categorySlug: "mechanical",
    shortTitle: "Mechanical",
    tagline: "Engineer precision components with 3D CAD modeling.",
    shortDescription: "Master SolidWorks, AutoCAD, GD&T, FEA simulations, and manufacturing engineering.",
    fullDescription: "Gain practical industry skills in 3D product design, parametric modeling, mechanical drafting, stress analysis using FEA, and design for manufacturing (DFM).",
    skills: [
      "SolidWorks & AutoCAD 2D/3D",
      "Geometric Dimensioning & Tolerancing (GD&T)",
      "Finite Element Analysis (FEA / ANSYS)",
      "Design for Manufacturing (DFM)"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "B.Tech / Diploma (Mechanical / Automobile / Production)",
    image: "assets/vlsi-chip.png",
    iconColor: "#8B5CF6",
    bgColor: "#F5F3FF",
    stipend: "₹30,000/month after qualification",
    projects: ["Automotive Chassis FEA Stress Analysis", "Parametric Gearbox Assembly Model", "Hydraulic Actuator CAD Draft"]
  },
  {
    id: "civil",
    name: "Civil & Structural Design",
    category: "Civil",
    categorySlug: "civil",
    shortTitle: "Civil",
    tagline: "Design resilient infrastructure for tomorrow's cities.",
    shortDescription: "Learn AutoCAD Civil, STAAD Pro, structural analysis, quantity surveying, and BIM fundamentals.",
    fullDescription: "Learn modern structural design standards and BIM workflows. Model reinforced concrete structures, perform seismic load calculations in STAAD.Pro, and prepare construction blueprints.",
    skills: [
      "AutoCAD Civil & Revit Architecture",
      "STAAD.Pro Structural Analysis",
      "Quantity Surveying & Estimation",
      "IS Code Compliance & Foundation Design"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "B.Tech / Diploma (Civil Engineering)",
    image: "assets/vlsi-chip.png",
    iconColor: "#10B981",
    bgColor: "#ECFDF5",
    stipend: "₹30,000/month after qualification",
    projects: ["G+5 Residential RCC Structural Design", "Highway Intersection Alignment Plan", "BIM 3D Model for Commercial Complex"]
  },
  {
    id: "bca-bsc",
    name: "Computer Applications (BCA / B.Sc. IT)",
    category: "BCA / B.Sc.",
    categorySlug: "bca-bsc",
    shortTitle: "BCA / B.Sc.",
    tagline: "Foundation to specialized technology careers.",
    shortDescription: "Tailored foundation in data structures, web technologies, database administration, and software testing.",
    fullDescription: "Specially designed program for BCA & B.Sc graduates to accelerate transition into top tech roles. Learn practical software development, algorithms, SQL databases, and agile methodologies.",
    skills: [
      "Data Structures & Core Algorithms",
      "Web Technologies (HTML, CSS, JS, React)",
      "Database Management (MySQL, MongoDB)",
      "Software Testing & Git Collaboration"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "BCA, B.Sc Computer Science / IT / Electronics",
    image: "assets/hero-student.png",
    iconColor: "#0284C7",
    bgColor: "#E0F2FE",
    stipend: "₹30,000/month after qualification",
    projects: ["Full-Stack Student Management System", "Automated Inventory Tracker", "Responsive Community Web Portal"]
  },
  {
    id: "mba",
    name: "MBA & Strategic Leadership",
    category: "MBA",
    categorySlug: "mba",
    shortTitle: "MBA",
    tagline: "Lead teams, projects and corporate initiatives.",
    shortDescription: "Master business strategy, project management, financial modeling, and corporate leadership.",
    fullDescription: "Prepare for high-impact management consulting and project leadership roles. Learn business model innovation, Agile scrum management, strategic marketing, and executive presentations.",
    skills: [
      "Corporate Strategy & Business Modeling",
      "Agile & Scrum Project Management",
      "Financial Evaluation & Risk Management",
      "Executive Communication & Stakeholder Management"
    ],
    duration: "3 – 6 Months",
    mode: "Online / Hybrid",
    eligibility: "MBA, PGDM, BBA or Final Year Management Students",
    image: "assets/hero-student.png",
    iconColor: "#7C3AED",
    bgColor: "#EDE9FE",
    stipend: "₹30,000/month after qualification",
    projects: ["Tech Startup Go-To-Market Strategy", "Corporate Digital Transformation Roadmap", "Product Market Fit Analysis"]
  }
];

export const CATEGORIES = [
  { name: "IT & Software", count: "12+ Domains", icon: "monitor", color: "#0066FF", bg: "#EBF3FF" },
  { name: "Data Science", count: "4+ Domains", icon: "chart", color: "#00B074", bg: "#E8FAF4" },
  { name: "AI & Machine Learning", count: "3+ Domains", icon: "brain", color: "#8B5CF6", bg: "#F5F3FF" },
  { name: "Web Development", count: "5+ Domains", icon: "code", color: "#0284C7", bg: "#E0F2FE" },
  { name: "UI/UX Design", count: "2+ Domains", icon: "palette", color: "#EC4899", bg: "#FDF2F8" },
  { name: "Digital Marketing", count: "3+ Domains", icon: "megaphone", color: "#6366F1", bg: "#EEF2FF" },
  { name: "Graphic Design", count: "2+ Domains", icon: "pencil", color: "#F97316", bg: "#FFF7ED" },
  { name: "Content Writing", count: "2+ Domains", icon: "document", color: "#0EA5E9", bg: "#F0F9FF" },
  { name: "HR & Management", count: "3+ Domains", icon: "users", color: "#D946EF", bg: "#FDF4FF" },
  { name: "Finance & Accounts", count: "3+ Domains", icon: "coins", color: "#EAB308", bg: "#FEFCE8" },
  { name: "Sales & Business", count: "2+ Domains", icon: "trending", color: "#2563EB", bg: "#EFF6FF" },
  { name: "Mechanical", count: "2+ Domains", icon: "cog", color: "#7C3AED", bg: "#F5F3FF" },
  { name: "Civil", count: "2+ Domains", icon: "building", color: "#059669", bg: "#ECFDF5" },
  { name: "BCA / B.Sc.", count: "3+ Domains", icon: "academic", color: "#0284C7", bg: "#E0F2FE" },
  { name: "MBA", count: "3+ Domains", icon: "cap", color: "#9333EA", bg: "#FAF5FF" },
  { name: "And 10+ More", count: "Explore All", icon: "plus", color: "#0066FF", bg: "#EBF3FF", isAction: true }
];

export const PROGRAMS = [
  {
    id: "internship",
    title: "Internship Program",
    subtitle: "Gain hands-on experience & ₹30,000/mo stipend",
    description: "Work directly on live client projects with dedicated 1-on-1 industry mentorship, weekly code reviews, and stipend-based compensation upon qualifier completion.",
    duration: "3 – 6 Months",
    badge: "Most Popular",
    icon: "cap"
  },
  {
    id: "certification",
    title: "Certification Programs",
    subtitle: "Get industry recognized credentials",
    description: "Rigorous skill verification pathways validated by top technology partners. Build an undeniable portfolio showcasing verified repositories and live deployments.",
    duration: "2 – 4 Months",
    badge: "Accredited",
    icon: "shield"
  },
  {
    id: "job",
    title: "Job Program",
    subtitle: "Get placed with top tech companies",
    description: "Direct talent pipeline connecting qualified graduates to leading multinational enterprises and funded high-growth startups with mock interviews and resume optimization.",
    duration: "Direct Placement",
    badge: "100% Support",
    icon: "briefcase"
  }
];

export const WHY_JOIN_CARDS = [
  {
    id: "projects",
    icon: "rocket",
    title: "Real-world Projects",
    description: "Work on live projects and gain hands-on experience with the latest technologies."
  },
  {
    id: "mentorship",
    icon: "user-tie",
    title: "Expert Mentorship",
    description: "Learn directly from industry professionals who will guide you throughout your journey."
  },
  {
    id: "certification",
    icon: "shield-check",
    title: "Certification",
    description: "Receive a recognized certificate upon successful completion of the internship program."
  },
  {
    id: "skills",
    icon: "code-bracket",
    title: "Skill Development",
    description: "Enhance your technical skills and soft skills in a professional environment."
  },
  {
    id: "placement",
    icon: "office-building",
    title: "Placement Support",
    description: "Get guidance and support for future career opportunities."
  },
  {
    id: "flexible",
    icon: "star",
    title: "Flexible Learning",
    description: "Learn at your own pace with flexible schedules."
  }
];

export const STATS = [
  { value: "25+", label: "Domains", sub: "Wide range of career paths", icon: "sparkles" },
  { value: "10K+", label: "Students", sub: "Have built their careers", icon: "users" },
  { value: "100%", label: "Placement Support", sub: "Guidance for your future", icon: "briefcase" },
  { value: "Trusted", label: "Platform", sub: "Safe & Secure learning", icon: "shield-check" }
];

export const EXAM_SAMPLE_QUESTIONS = [
  {
    id: 1,
    domain: "general",
    question: "If a train travels 360 km in 4 hours, and then increases its speed by 25% for the next 3 hours, what is the total distance covered?",
    options: ["697.5 km", "630 km", "700 km", "720 km"],
    correctAnswer: 0,
    category: "Quantitative Aptitude"
  },
  {
    id: 2,
    domain: "general",
    question: "Which of the following data structures operates on a First-In, First-Out (FIFO) principle?",
    options: ["Stack", "Queue", "Binary Tree", "Hash Map"],
    correctAnswer: 1,
    category: "Computer Science Fundamentals"
  },
  {
    id: 3,
    domain: "general",
    question: "In object-oriented programming, what principle allows a single interface to represent different underlying forms?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    correctAnswer: 2,
    category: "Technical Fundamentals"
  },
  {
    id: 4,
    domain: "general",
    question: "Complete the series: 3, 7, 15, 31, 63, ___?",
    options: ["95", "127", "128", "131"],
    correctAnswer: 1,
    category: "Logical Reasoning"
  },
  {
    id: 5,
    domain: "vlsi",
    question: "In digital logic and CMOS design, what is the primary cause of static power dissipation?",
    options: ["Subthreshold leakage current", "Charging and discharging of load capacitance", "Clock tree switching", "Short-circuit current during transitions"],
    correctAnswer: 0,
    category: "VLSI Architecture"
  },
  {
    id: 6,
    domain: "ai-ml",
    question: "Which regularisation technique randomly deactivates a fraction of neurons during training to prevent overfitting?",
    options: ["L1 Regularization", "Batch Normalization", "Dropout", "Early Stopping"],
    correctAnswer: 2,
    category: "AI & Machine Learning"
  },
  {
    id: 7,
    domain: "web-dev",
    question: "In modern HTTP/2 and HTTP/3 protocols, what key advantage replaces HTTP/1.1 head-of-line blocking?",
    options: ["Binary multiplexing over a single connection", "Plain text caching", "Synchronous polling", "Stateless cookies"],
    correctAnswer: 0,
    category: "Web Architecture"
  },
  {
    id: 8,
    domain: "general",
    question: "What is the worst-case time complexity of QuickSort algorithm?",
    options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
    correctAnswer: 2,
    category: "Algorithms & Aptitude"
  }
];
