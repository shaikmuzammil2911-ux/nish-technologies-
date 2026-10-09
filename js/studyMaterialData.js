// NTI Study & Practice Preparation Material Hub - Nish Technologies Inc
// Comprehensive Theory, Key Concepts, Question-Answer Banks, and In-Depth Explanations
// Unlocked exclusively via Candidate Security Passcode

export const APTITUDE_STUDY_MODULES = [
  {
    topic: "Quantitative Aptitude: Speed, Time & Distance",
    icon: "⏱️",
    summary: "Fundamental concepts involving speed conversions (km/h to m/s by multiplying 5/18), relative speed of objects moving in same or opposite directions, and train/platform crossing mechanics.",
    keyFormulas: [
      "Speed = Distance / Time",
      "Conversion: 1 km/h = 5/18 m/s | 1 m/s = 18/5 km/h",
      "Relative Speed (Opposite Direction) = S1 + S2",
      "Relative Speed (Same Direction) = |S1 - S2|",
      "Train crossing stationary platform: Distance = Length(Train) + Length(Platform)"
    ],
    practiceQuestions: [
      {
        question: "A train traveling at 72 km/h crosses a 250m long platform in 26 seconds. Calculate the length of the train.",
        options: ["270 meters", "240 meters", "300 meters", "220 meters"],
        correctAnswer: "270 meters",
        explanation: "1. Convert speed to m/s: 72 × (5/18) = 20 m/s.\n2. Total distance traveled in 26 seconds = Speed × Time = 20 m/s × 26 s = 520 meters.\n3. Total distance = Train Length + Platform Length.\n4. Train Length = 520m - 250m = 270 meters."
      },
      {
        question: "Two trains of lengths 140m and 160m are running towards each other on parallel tracks at 60 km/h and 48 km/h. How long will they take to cross each other completely?",
        options: ["10 seconds", "12 seconds", "15 seconds", "8 seconds"],
        correctAnswer: "10 seconds",
        explanation: "1. Total distance = 140m + 160m = 300m.\n2. Relative speed = 60 + 48 = 108 km/h.\n3. Convert to m/s: 108 × (5/18) = 30 m/s.\n4. Time taken = Distance / Relative Speed = 300 / 30 = 10 seconds."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Work, Time & Efficiency",
    icon: "🛠️",
    summary: "Work-rate problems where total work is represented as 1 unit or LCM of days. Inverse proportionality between efficiency and days taken.",
    keyFormulas: [
      "If A completes work in n days, 1 day work = 1/n",
      "Combined 1 day work of A & B = 1/A + 1/B = (A + B) / (A × B)",
      "Total time taken together = (A × B) / (A + B) days",
      "Work Done = Efficiency × Time"
    ],
    practiceQuestions: [
      {
        question: "Worker A completes a project in 12 days, and Worker B in 18 days. If they work together for 4 days, what fraction of work remains unfinished?",
        options: ["4/9", "5/9", "1/3", "2/5"],
        correctAnswer: "4/9",
        explanation: "1. Rate of A = 1/12 per day. Rate of B = 1/18 per day.\n2. Combined 1-day work = 1/12 + 1/18 = (3 + 2)/36 = 5/36.\n3. Work completed in 4 days = 4 × (5/36) = 20/36 = 5/9.\n4. Remaining unfinished work = 1 - 5/9 = 4/9."
      }
    ]
  },
  {
    topic: "Logical Reasoning: Number & Letter Sequences",
    icon: "🔢",
    summary: "Techniques to identify arithmetic, geometric, alternating differences, prime numbers, squares/cubes, and multi-step recurrence series.",
    keyFormulas: [
      "Check differences between consecutive terms (d1, d2, d3...)",
      "Look for multiplication + constant addition/subtraction: (x × n) ± c",
      "Check alternating odd/even position patterns or square/cube offsets: n² ± k, n³ ± k"
    ],
    practiceQuestions: [
      {
        question: "Find the missing number in the series: 4, 11, 30, 85, 248, ___?",
        options: ["735", "744", "729", "741"],
        correctAnswer: "735",
        explanation: "Recurrence pattern: (Previous Term × 3) - Consecutive Odd Number:\n• 4 × 3 - 1 = 11\n• 11 × 3 - 3 = 30\n• 30 × 3 - 5 = 85\n• 85 × 3 - 7 = 248\n• 248 × 3 - 9 = 744 - 9 = 735."
      }
    ]
  },
  {
    topic: "Logical Reasoning: Direction Sense & Blood Relations",
    icon: "🧭",
    summary: "Visualizing standard compass directions (North, East, South, West) with clockwise/counter-clockwise 90° turns and tree diagrams for family lineages.",
    keyFormulas: [
      "Right turn = 90° Clockwise | Left turn = 90° Anti-Clockwise",
      "Shortest displacement = √(Δx² + Δy²) via Pythagorean theorem",
      "Family tree conventions: Circle for female, Square/Box for male, Double horizontal line for married couple"
    ],
    practiceQuestions: [
      {
        question: "A candidate starts at point P, walks 10m North, turns Right and walks 6m, turns Right again and walks 18m, then turns Left and walks 6m. How far is the candidate from point P in a straight line?",
        options: ["14.42 meters", "10 meters", "12 meters", "16 meters"],
        correctAnswer: "14.42 meters",
        explanation: "1. North-South displacement: +10m (North) - 18m (South) = -8m (8m South).\n2. East-West displacement: +6m (East) + 6m (East) = +12m (12m East).\n3. Straight-line distance = √(8² + 12²) = √(64 + 144) = √208 ≈ 14.42 meters."
      }
    ]
  },
  {
    topic: "Data Interpretation: Percentages, Ratios & Graphs",
    icon: "📊",
    summary: "Techniques for rapid approximation, percentage change calculations, table analysis, and bar/pie chart breakdown.",
    keyFormulas: [
      "Percentage Change = (|Final - Initial| / Initial) × 100%",
      "Ratio comparison: a/b vs c/d using cross multiplication",
      "Pie chart degree conversion: Value = (Degrees / 360) × Total"
    ],
    practiceQuestions: [
      {
        question: "If a company's revenue increased by 25% in 2024 and then decreased by 20% in 2025, what is the net overall percentage change over the two-year period?",
        options: ["0% (No change)", "5% increase", "5% decrease", "2% increase"],
        correctAnswer: "0% (No change)",
        explanation: "Let initial revenue be 100.\n1. After 25% increase: 100 + 25 = 125.\n2. After 20% decrease on 125: 125 - (0.20 × 125) = 125 - 25 = 100.\n3. Net percentage change = (100 - 100)/100 = 0%."
      }
    ]
  }
];

export const DOMAIN_STUDY_GUIDES = {
  'content-writing': {
    domainName: 'Content Writing & Copywriting',
    category: 'Creative & Digital Media',
    icon: '✍️',
    overview: 'Content Writing combines audience empathy, clear narrative structure, SEO optimization, and persuasive copywriting frameworks to drive engagement and organic visibility.',
    coreModules: [
      {
        title: 'SEO Content Fundamentals & Keyword Density',
        concepts: 'Understanding Search Intent (Informational, Navigational, Commercial, Transactional). On-page SEO includes Title tags (<60 chars), Meta descriptions (<160 chars), H1-H3 hierarchy, keyword density (ideal 1-2%), and internal/external linking.',
        practice: [
          {
            q: 'What is the optimal keyword density recommended in modern SEO writing to prevent search engine keyword stuffing penalties?',
            ans: '1% to 2%',
            detail: 'Keyword stuffing (exceeding 3-4%) triggers algorithmic penalties from Google search systems. Modern natural language processing (NLP) algorithms prioritize semantic context, LSI keywords, and high readability scores over repetitive keywords.'
          },
          {
            q: 'In digital copywriting, what does the AIDA marketing framework stand for?',
            ans: 'Attention, Interest, Desire, Action',
            detail: 'AIDA is a classic four-stage psychological model: 1. Attention (Catch the headline), 2. Interest (Present relatable pain points), 3. Desire (Showcase transformation/benefits), 4. Action (Clear Call-To-Action CTA).'
          }
        ]
      },
      {
        title: 'Copywriting Frameworks: PAS, FAB & Storytelling',
        concepts: 'PAS (Problem, Agitate, Solution) is effective for landing pages and email marketing. FAB (Features, Advantages, Benefits) transforms dry technical specs into emotionally compelling user outcomes.',
        practice: [
          {
            q: 'Which formula focuses on highlighting user pain points before presenting the product solution?',
            ans: 'PAS (Problem, Agitation, Solution)',
            detail: 'PAS first identifies a specific friction point, gently agitates the emotional or financial cost of inaction, and concludes by positioning the product/service as the ultimate relief.'
          }
        ]
      }
    ]
  },
  'vlsi': {
    domainName: 'VLSI (Very Large Scale Integration)',
    category: 'Core Semiconductor',
    icon: '🔬',
    overview: 'VLSI engineering spans RTL design in Verilog/SystemVerilog, digital synthesis, Static Timing Analysis (STA), FPGA prototyping, and ASIC physical design.',
    coreModules: [
      {
        title: 'Digital Electronics & CMOS Logic Design',
        concepts: 'Combinational vs Sequential circuits, Setup and Hold time constraints, Clock domain crossing (CDC), Setup Slack = T_period - (T_cq + T_comb + T_setup), Hold Slack = T_cq + T_comb - T_hold.',
        practice: [
          {
            q: 'In digital synchronous circuit design, what condition causes a Setup Time violation?',
            ans: 'Data arrives too late before the active clock edge',
            detail: 'Setup time (T_setup) is the minimum time data must remain stable BEFORE the active clock edge. If combinational propagation delay is too long, setup time is violated, resulting in metastability.'
          },
          {
            q: 'Which Verilog block is used to synthesize sequential synchronous flip-flop registers?',
            ans: 'always @(posedge clk or negedge rst_n)',
            detail: 'Synchronous edge-triggered circuits require sensitivity lists specifying edge triggers (posedge or negedge). Non-blocking assignments (<=) are mandatory inside sequential always blocks.'
          }
        ]
      }
    ]
  },
  'ai-ml': {
    domainName: 'Artificial Intelligence & Machine Learning',
    category: 'AI & Data Science',
    icon: '🤖',
    overview: 'Covers Supervised/Unsupervised learning, Deep Learning neural networks, Transformers, Gradient Descent optimization, Regularization (L1/L2), and model evaluation metrics (Precision, Recall, F1, ROC-AUC).',
    coreModules: [
      {
        title: 'Machine Learning Model Optimization & Metrics',
        concepts: 'Bias-Variance tradeoff, Overfitting mitigation using Dropout and L2 weight decay, Loss functions (Cross-Entropy, MSE), Confusion Matrix analysis.',
        practice: [
          {
            q: 'When evaluating a medical diagnosis classifier with highly imbalanced class distribution (99% negative, 1% positive), which metric is most reliable?',
            ans: 'Precision-Recall F1-Score / PR-AUC',
            detail: 'Accuracy is misleading on imbalanced datasets because a trivial model predicting negative for all inputs achieves 99% accuracy while failing completely on true positive detection. F1-Score balances Precision and Recall.'
          }
        ]
      }
    ]
  },
  'full-stack': {
    domainName: 'Full Stack Web Development',
    category: 'IT & Software',
    icon: '🌐',
    overview: 'Modern full stack architectures leveraging React/Next.js, Node.js/Express, REST/GraphQL APIs, SQL/NoSQL databases, asynchronous event loops, and cloud CI/CD pipelines.',
    coreModules: [
      {
        title: 'JavaScript Event Loop & Async Architecture',
        concepts: 'Call Stack, Microtask Queue (Promises, process.nextTick), Macrotask Queue (setTimeout, setInterval, I/O), Database indexing (B-Tree), JWT authentication flow.',
        practice: [
          {
            q: 'In the Node.js / Browser event loop, which queue has highest execution priority after synchronous code completes?',
            ans: 'Microtask Queue (Promise callbacks)',
            detail: 'Microtasks (Promises, queueMicrotask) are drained completely before the event loop advances to execute macrotasks (such as setTimeout or setImmediate).'
          }
        ]
      }
    ]
  },
  'python': {
    domainName: 'Python Full Stack & Automation',
    category: 'IT & Software',
    icon: '🐍',
    overview: 'Core Python data structures (Lists, Dicts, Sets), Generators, Decorators, GIL (Global Interpreter Lock), Multiprocessing vs Multithreading, Django/FastAPI frameworks.',
    coreModules: [
      {
        title: 'Python Memory Management & Performance',
        concepts: 'CPython reference counting and generational garbage collection, List comprehensions vs Generators for O(1) memory iteration, GIL impacts on CPU-bound tasks.',
        practice: [
          {
            q: 'What is the primary memory advantage of using a Generator Expression over a List Comprehension in Python?',
            ans: 'Generators yield items lazily on demand without storing the full sequence in RAM',
            detail: 'Generators use lazy evaluation and maintain only the current state in memory (O(1) space complexity), making them ideal for streaming gigabyte-scale datasets.'
          }
        ]
      }
    ]
  }
};

/**
 * Generates combined comprehensive study material for any domain
 */
export function getStudyMaterialForDomain(domainIdentifier) {
  const normKey = (domainIdentifier || '').toLowerCase().replace(/[^a-z0-9-]/g, '-');
  
  // Find matching domain guide or construct fallback from DB
  let domainGuide = DOMAIN_STUDY_GUIDES[normKey];
  if (!domainGuide) {
    // Try matching partial key
    const foundKey = Object.keys(DOMAIN_STUDY_GUIDES).find(k => normKey.includes(k) || k.includes(normKey));
    if (foundKey) {
      domainGuide = DOMAIN_STUDY_GUIDES[foundKey];
    } else {
      // Fallback domain guide constructed dynamically
      domainGuide = {
        domainName: domainIdentifier || 'Specialized Technical Domain',
        category: 'Technology & Engineering',
        icon: '⚡',
        overview: `Comprehensive study syllabus and problem-solving practice for ${domainIdentifier}. Covers core domain architecture, industrial standard tooling, hands-on implementations, and qualifier examination strategies.`,
        coreModules: [
          {
            title: `${domainIdentifier} Technical Foundation & Principles`,
            concepts: `Foundational concepts, industry best practices, performance optimization, and real-world project deployment standards in ${domainIdentifier}.`,
            practice: [
              {
                q: `What is the primary objective of industry standards and automated testing pipelines in modern ${domainIdentifier}?`,
                ans: 'To guarantee system reliability, prevent regressions, and ensure scalable maintainability.',
                detail: 'Standardized workflows and automated test coverage allow teams to deliver high-quality production code with reduced error margins.'
              },
              {
                q: `How do professional practitioners in ${domainIdentifier} approach performance bottleneck diagnosis?`,
                ans: 'By conducting systematic benchmarking, profiling resource utilization, and optimizing critical execution paths.',
                detail: 'Profiling before optimizing ensures engineering effort is focused precisely where latency or memory overhead is highest.'
              }
            ]
          }
        ]
      };
    }
  }

  return {
    aptitudeModules: APTITUDE_STUDY_MODULES,
    domainGuide: domainGuide,
    examGuidance: {
      totalQuestions: 45,
      aptitudeCount: 20,
      domainCount: 25,
      durationMinutes: 60,
      scheduleDay: 'Sunday',
      scheduleTime: '6:00 PM – 7:00 PM IST',
      proctoringGuidelines: [
        "Maintain web camera and microphone permissions enabled throughout the 60-minute duration.",
        "Keep your face centered and well-lit in the video frame.",
        "Do not switch browser tabs or minimize the test window — tab switches trigger the RED MALPRACTICE SIGNAL.",
        "Ensure a quiet environment; background speech and smartphone copying attempts result in immediate session revocation.",
        "Top 10 performers across all domains receive the ₹30,000/month stipend-based internship!"
      ]
    }
  };
}
