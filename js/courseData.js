// NTI Course Learning Management System Data Store - Nish Technologies Inc
// Inspired by modern Topmate Course Player Architecture (e.g. /seeker/course/python-full-stack-web-development?m=5&c=4)
// Comprehensive 6-Module Curriculum with Videos, Rich Technical Content, Code Labs & Assessments

export const PYTHON_FULLSTACK_COURSE = {
  id: "python-full-stack-web-development",
  slug: "python-full-stack-web-development",
  title: "Python Full Stack Web Development",
  subtitle: "End-to-End Mastery: HTML/CSS/JS, Python Core & OOP, Django Framework, Database Architecture & Cloud Deployment",
  instructor: "Nish Technologies Inc &bull; Verified Faculty",
  instructorRole: "Senior Principal Architect & Lead Engineering Faculty",
  instructorAvatar: "assets/nti-logo-clean.png",
  rating: 4.9,
  reviewsCount: 1480,
  enrolledCount: "14,200+ Learners Enrolled",
  totalModules: 6,
  totalChapters: 24,
  durationHours: "38+ Hours of On-Demand Content",
  level: "Beginner to Advanced Enterprise Level",
  certificateTitle: "Verified Digital Certificate in Python Full Stack Web Development",
  whatsappChannelUrl: "https://whatsapp.com/channel/0029Vb9EdXyGU3BCLhfpAa43",
  pricing: {
    courseFee: 200,
    platformFee: 4,
    total: 204,
    currency: "INR",
    currencySymbol: "₹"
  },
  modules: [
    {
      moduleIndex: 1,
      title: "Module 1: Introduction to Programming & Python Basics",
      description: "Python environment configuration, variables, memory models, conditional logic, and control loops.",
      chapters: [
        {
          chapterIndex: 1,
          title: "1.1 - Python Ecosystem Setup, Virtual Environments & VS Code",
          duration: "25 min",
          type: "video",
          videoId: "_uQrJ0TkZlc",
          difficulty: "Beginner",
          summary: "Setting up Python 3.12, understanding python interpreter, setting up isolated virtual environments with venv, and configuring VS Code with linting and formatters.",
          notes: [
            "Understanding how Python bytecode (.pyc) is interpreted by CPython virtual machine.",
            "Creating and activating virtual environments (`python -m venv venv` / `source venv/bin/activate` or `.\\venv\\Scripts\\activate`).",
            "Managing dependencies cleanly with `pip install`, `pip freeze > requirements.txt`, and PyPI."
          ],
          codeSnippet: `# 1. Create an isolated virtual environment
python -m venv .venv

# 2. Activate environment (Windows PowerShell)
.\\.venv\\Scripts\\Activate.ps1

# 3. Upgrade pip and install essential development packages
pip install --upgrade pip
pip install requests black flake8

# 4. Verify Python environment
python -c "import sys; print('Python active path:', sys.executable)"`,
          codeLanguage: "bash",
          exercise: "Initialize a new project folder named `my_fullstack_app`, generate a virtual environment, activate it, and freeze an empty `requirements.txt`.",
          resources: [
            { name: "Python 3.12 Setup Guide.pdf", size: "1.2 MB", type: "PDF" },
            { name: "VS Code Python Extensions Pack.txt", size: "4 KB", type: "TXT" }
          ]
        },
        {
          chapterIndex: 2,
          title: "1.2 - Variables, Data Types, Dynamic Typing & Arithmetic Operators",
          duration: "30 min",
          type: "video",
          videoId: "kqtD5dpn9C8",
          difficulty: "Beginner",
          summary: "Explore dynamic typing in Python, fundamental data types (int, float, str, bool, None), type casting, and operator precedence.",
          notes: [
            "Python is dynamically typed: variable names are references pointing to memory objects.",
            "Immutable types vs mutable types: strings, integers, and tuples cannot be altered in-place.",
            "String formatting best practices: use f-strings (`f'{name} is {age} years old'`)."
          ],
          codeSnippet: `# Dynamic typing and memory references
user_id = 10492
user_name = "Aarav Sharma"
is_active = True
account_balance = 45250.75

# String interpolation with modern f-strings
summary = f"User [{user_id}] {user_name} | Active: {is_active} | Balance: ₹{account_balance:,.2f}"
print(summary)

# Safe type casting and input validation
try:
    user_input = "200"
    course_fee = int(user_input)
    platform_fee = 4
    total_payable = course_fee + platform_fee
    print(f"Total Amount: ₹{total_payable}")
except ValueError as e:
    print(f"Invalid input type: {e}")`,
          codeLanguage: "python",
          exercise: "Write a script that calculates a student's total marks, percentage, and formats the output into a verified slip using f-strings.",
          resources: [
            { name: "Python Data Types Cheatsheet.pdf", size: "850 KB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 3,
          title: "1.3 - Conditional Branching (if, elif, else) & Match-Case Logic",
          duration: "35 min",
          type: "video",
          videoId: "AWek49wXGzI",
          difficulty: "Beginner",
          summary: "Master multi-way decision trees, boolean logical operators (and, or, not), truthy/falsy evaluation, and Python 3.10+ Structural Pattern Matching.",
          notes: [
            "Truthy vs Falsy values: Empty collections (`[]`, `{}`, `''`), `0`, and `None` evaluate to `False`.",
            "Short-circuit evaluation: Python stops checking conditions as soon as the outcome is guaranteed.",
            "Use Python 3.10+ `match-case` syntax for clean state and command routing instead of long if-elif chains."
          ],
          codeSnippet: `def evaluate_candidate_admission(score: float, program: str) -> dict:
    match program.lower():
        case "internship program":
            if score >= 85:
                return {"status": "QUALIFIED", "stipend": "₹30,000/mo", "badge": "Top Performer"}
            elif score >= 65:
                return {"status": "QUALIFIED", "stipend": "Standard Track", "badge": "Pass"}
            else:
                return {"status": "RETRY_CYCLE", "stipend": "None", "badge": "Needs Improvement"}
        case "course program":
            return {"status": "ENROLLED", "access": "Full Lifetime Access", "badge": "Full Stack"}
        case _:
            return {"status": "INVALID_PROGRAM", "error": "Unknown program specification"}

print(evaluate_candidate_admission(92, "internship program"))`,
          codeLanguage: "python",
          exercise: "Build an eligibility validator for candidate discount coupon codes utilizing structural match-case.",
          resources: [
            { name: "Conditionals & Logic Cheatsheet.pdf", size: "620 KB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 4,
          title: "1.4 - Loops (for, while), Iterators, Range & List Comprehensions",
          duration: "40 min",
          type: "video",
          videoId: "6iF8Xb7Z3wQ",
          difficulty: "Beginner",
          summary: "Iterate over collections with for loops, control flow with break/continue/else, generator ranges, and compact Pythonic list comprehensions.",
          notes: [
            "The `for-else` block: the `else` block executes strictly when the loop completes without encountering a `break`.",
            "List comprehensions provide cleaner syntax and run faster than manual append loops in CPython.",
            "The `enumerate()` and `zip()` built-ins allow elegant indexed iterations and multi-list pairing."
          ],
          codeSnippet: `# List Comprehensions vs Standard Loops
candidates = [
    {"name": "Muzammil", "score": 94, "domain": "Python Full Stack"},
    {"name": "Sneha", "score": 88, "domain": "AI & ML"},
    {"name": "Rohan", "score": 58, "domain": "VLSI"},
    {"name": "Kavya", "score": 79, "domain": "Java"}
]

# Extract top performers (score >= 80)
top_performers = [c["name"] for c in candidates if c["score"] >= 80]
print("Top 10 Stipend Contenders:", top_performers)

# Enumerate with custom index offset
for rank, student in enumerate(sorted(candidates, key=lambda x: x["score"], reverse=True), start=1):
    print(f"Rank #{rank}: {student['name']} - {student['score']}% [{student['domain']}]")`,
          codeLanguage: "python",
          exercise: "Create a dictionary comprehension that categorizes an array of test marks into letter grades (A, B, C, F).",
          resources: [
            { name: "Python Iteration Patterns.pdf", size: "780 KB", type: "PDF" }
          ]
        }
      ]
    },
    {
      moduleIndex: 2,
      title: "Module 2: Advanced Python & Object-Oriented Programming (OOP)",
      description: "Functions, closures, decorators, advanced data structures, classes, inheritance, polymorphism, and robust exception handling.",
      chapters: [
        {
          chapterIndex: 1,
          title: "2.1 - Functions, Scope, *args, **kwargs & Custom Decorators",
          duration: "35 min",
          type: "video",
          videoId: "u-OmVr_fT4s",
          difficulty: "Intermediate",
          summary: "First-class functions, LEGB scope resolution, variable arguments (*args, **kwargs), and writing execution-timing decorators.",
          notes: [
            "Functions are first-class citizens in Python: they can be passed as arguments, assigned to variables, and returned from other functions.",
            "Decorators wrap target functions to inject cross-cutting concerns like logging, authentication, and execution metrics.",
            "`functools.wraps` preserves function metadata (docstring, function name) when decorating."
          ],
          codeSnippet: `import time
from functools import wraps

def audit_log(action_name: str):
    """Custom parameterised decorator for audit logging."""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            start = time.perf_counter()
            print(f"[AUDIT] Starting '{action_name}' with args={args}...")
            result = func(*args, **kwargs)
            duration = (time.perf_counter() - start) * 1000
            print(f"[AUDIT] '{action_name}' completed in {duration:.2f}ms")
            return result
        return wrapper
    return decorator

@audit_log("Candidate Enrollment")
def enroll_student(email: str, fee: float, platform_fee: float = 4.0):
    total = fee + platform_fee
    return {"email": email, "paid": total, "status": "CONFIRMED"}

receipt = enroll_student("student@nish.com", 200.0)
print("Receipt:", receipt)`,
          codeLanguage: "python",
          exercise: "Write a `@retry(times=3)` decorator that retries a failing function before re-raising the exception.",
          resources: [
            { name: "Decorators & Metaprogramming Guide.pdf", size: "1.1 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 2,
          title: "2.2 - Deep Dive into Data Structures: Lists, Tuples, Sets & Dictionaries",
          duration: "40 min",
          type: "video",
          videoId: "daefaLgNkw0",
          difficulty: "Intermediate",
          summary: "Time complexity analysis (O(1) dictionary hash lookups vs O(N) list searches), set operations, and collections module (defaultdict, Counter).",
          notes: [
            "Dictionaries in Python 3.7+ maintain insertion order and provide average O(1) key lookups via hash tables.",
            "Sets provide fast membership tests and mathematical set operations (`union`, `intersection`, `difference`).",
            "`collections.defaultdict` avoids tedious `if key not in dict` checks."
          ],
          codeSnippet: `from collections import defaultdict, Counter

# Real-world domain enrollment aggregation
registrations = [
    ("python", "Aarav"), ("vlsi", "Sneha"), ("python", "Muzammil"),
    ("ai-ml", "Kavya"), ("python", "Zain"), ("vlsi", "Vikram")
]

# Group students by domain using defaultdict
domain_roster = defaultdict(list)
for domain, student in registrations:
    domain_roster[domain].append(student)

print("Enrolled Students per Domain:")
for dom, roster in domain_roster.items():
    print(f" - {dom.upper()}: {len(roster)} students -> {', '.join(roster)}")

# Count domain popularity
counts = Counter(dom for dom, _ in registrations)
print("Most Popular Domain:", counts.most_common(1))`,
          codeLanguage: "python",
          exercise: "Build an in-memory caching dictionary with an LRU (Least Recently Used) eviction policy using `collections.OrderedDict`.",
          resources: [
            { name: "Python Collections & Big-O Guide.pdf", size: "920 KB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 3,
          title: "2.3 - Object-Oriented Programming: Classes, Inheritance & Encapsulation",
          duration: "45 min",
          type: "video",
          videoId: "JeznW_7DlB0",
          difficulty: "Intermediate",
          summary: "Constructors (__init__), instance methods, classmethods, staticmethods, private attributes (__attr), property getters/setters, and inheritance.",
          notes: [
            "Encapsulation: Use `@property` getters and setters for controlled data mutations.",
            "Inheritance and `super()`: Reuse base class behavior while maintaining clean method resolution order (MRO).",
            "Magic / Dunder methods: Implement `__str__`, `__repr__`, and `__eq__` for intuitive object semantics."
          ],
          codeSnippet: `class Candidate:
    institution = "Nish Technologies Inc"

    def __init__(self, application_id: str, name: str, domain: str, pin: str = "1234"):
        self.application_id = application_id
        self.name = name
        self.domain = domain
        self._security_pin = pin  # Encapsulated attribute
        self._exam_score = None

    @property
    def exam_score(self):
        return self._exam_score

    @exam_score.setter
    def exam_score(self, val: float):
        if not (0 <= val <= 100):
            raise ValueError("Score must be between 0 and 100")
        self._exam_score = val

    def verify_credentials(self, pin: str) -> bool:
        return self._security_pin == pin

    def __repr__(self):
        return f"<Candidate id={self.application_id} name={self.name} domain={self.domain}>"

c = Candidate("NTI-REG-2026-10492", "Muzammil", "Python Full Stack")
c.exam_score = 96.5
print(c, "Qualified for Stipend:", c.exam_score >= 85)`,
          codeLanguage: "python",
          exercise: "Implement an inheritance hierarchy with a base `Course` class and specialized subclasses `PythonFullStackCourse` and `VLSICourse`.",
          resources: [
            { name: "OOP Architecture Blueprint.pdf", size: "1.4 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 4,
          title: "2.4 - Exception Handling, Custom Exceptions & Robust File I/O",
          duration: "35 min",
          type: "video",
          videoId: "NIWwJbo-9_8",
          difficulty: "Intermediate",
          summary: "Defensive programming with try-except-else-finally blocks, creating domain custom exception hierarchies, and context managers (with open()).",
          notes: [
            "Always catch specific exceptions (e.g. `FileNotFoundError`, `KeyError`) instead of bare `except:`.",
            "The `with` statement ensures deterministic resource cleanup even when unhandled exceptions occur.",
            "Creating custom exception classes provides meaningful domain debugging logs."
          ],
          codeSnippet: `class InsufficientPaymentError(Exception):
    """Raised when student payment does not match course and platform fee."""
    pass

def process_course_enrollment(amount_received: float):
    REQUIRED_TOTAL = 204.0  # ₹200 course + ₹4 platform
    if amount_received < REQUIRED_TOTAL:
        shortfall = REQUIRED_TOTAL - amount_received
        raise InsufficientPaymentError(f"Insufficient funds! Shortfall of ₹{shortfall:.2f}. Total required: ₹{REQUIRED_TOTAL}")
    
    # Context manager for writing verified audit ledger
    with open("enrollments.log", "a", encoding="utf-8") as f:
        f.write(f"ENROLLED: Verified payment of ₹{amount_received:.2f}\\n")
    return {"status": "SUCCESS", "unlocked": True}

try:
    process_course_enrollment(204.0)
    print("Course access unlocked successfully!")
except InsufficientPaymentError as err:
    print(f"Transaction Aborted: {err}")`,
          codeLanguage: "python",
          exercise: "Build a JSON student database loader with schema validation and custom `InvalidStudentDataException`.",
          resources: [
            { name: "Exception Handling Standards.pdf", size: "750 KB", type: "PDF" }
          ]
        }
      ]
    },
    {
      moduleIndex: 3,
      title: "Module 3: Modern Frontend Web Development Fundamentals",
      description: "HTML5 semantic page structuring, responsive CSS3 styling, Flexbox & Grid layouts, and modern JavaScript (ES6+).",
      chapters: [
        {
          chapterIndex: 1,
          title: "3.1 - HTML5 Semantic Markup, Web Accessibility & Modern Forms",
          duration: "30 min",
          type: "video",
          videoId: "pQN-pnXPaVg",
          difficulty: "Beginner",
          summary: "Build accessible web pages with HTML5 semantics (header, nav, main, article, section, footer), ARIA roles, and form controls.",
          notes: [
            "Semantic HTML enhances SEO ranking and screen reader accessibility.",
            "Utilize correct input types (`email`, `tel`, `number`, `date`) for native browser validation on mobile.",
            "Associate form labels using `for='input-id'` for accessible touch targets."
          ],
          codeSnippet: `<!-- Accessible Candidate Registration Form Structure -->
<section class="registration-card" aria-labelledby="form-heading">
  <header>
    <h2 id="form-heading">Python Full Stack Course Enrollment</h2>
    <p>Complete payment of ₹204 (₹200 Course + ₹4 Platform Fee)</p>
  </header>

  <form id="enrollment-form" novalidate>
    <div class="form-group">
      <label for="student-name">Full Legal Name *</label>
      <input type="text" id="student-name" name="name" required placeholder="e.g. Shaik Muzammil">
    </div>

    <div class="form-group">
      <label for="student-email">Email Address *</label>
      <input type="email" id="student-email" name="email" required placeholder="student@example.com">
    </div>

    <button type="submit" class="btn-enroll">
      Proceed to Secure Payment (₹204) &rarr;
    </button>
  </form>
</section>`,
          codeLanguage: "html",
          exercise: "Create an accessible responsive HTML5 layout featuring a sticky navigation bar, course syllabus accordion, and video container.",
          resources: [
            { name: "HTML5 Semantic CheatSheet.pdf", size: "640 KB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 2,
          title: "3.2 - CSS3 Styling, Box Model, Flexbox & CSS Grid Mastery",
          duration: "40 min",
          type: "video",
          videoId: "1Rs2ND1ryYc",
          difficulty: "Intermediate",
          summary: "Master CSS specificity, custom properties (CSS variables), Flexbox 1D layout alignments, and CSS Grid 2D responsive grids.",
          notes: [
            "Use CSS Custom Properties (`--primary: #0066FF`) for consistent theme tokens.",
            "Flexbox is ideal for directional distribution (navbars, cards, button groups).",
            "CSS Grid is ideal for overall page scaffolding and responsive auto-fill cards (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`)."
          ],
          codeSnippet: `:root {
  --primary: #0066FF;
  --primary-hover: #0052CC;
  --bg-page: #F8FAFD;
  --card-radius: 12px;
}

/* Responsive Topmate-Style Course Layout Grid */
.course-viewer-container {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 24px;
  min-height: 100vh;
  background-color: var(--bg-page);
}

@media (max-width: 992px) {
  .course-viewer-container {
    grid-template-columns: 1fr;
  }
}

.lesson-sidebar {
  background: #FFFFFF;
  border-right: 1px solid #E2EEF8;
  padding: 20px;
  overflow-y: auto;
}

.lesson-content {
  padding: 30px;
  background: #FFFFFF;
  border-radius: var(--card-radius);
  box-shadow: 0 4px 16px rgba(10, 25, 49, 0.05);
}`,
          codeLanguage: "css",
          exercise: "Build a responsive course navigation sidebar featuring collapsible accordion modules with active chapter indicators.",
          resources: [
            { name: "CSS Flexbox & Grid Visual Guide.pdf", size: "1.8 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 3,
          title: "3.3 - Responsive Web Design, Media Queries & Glassmorphism UI",
          duration: "35 min",
          type: "video",
          videoId: "srvUrASNj0s",
          difficulty: "Intermediate",
          summary: "Mobile-first CSS engineering, viewport meta configuration, breakpoints, and crafting modern frosted-glass effects.",
          notes: [
            "Always develop with mobile-first breakpoints (`@media (min-width: 768px)`).",
            "Glassmorphism leverages `backdrop-filter: blur(12px)` and semi-transparent RGBA borders.",
            "Ensure typography scales smoothly using `clamp(1rem, 2.5vw, 1.8rem)`."
          ],
          codeSnippet: `/* Modern Glassmorphic Badge & Sticky Top Header */
.course-sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(226, 238, 248, 0.8);
}

.course-progress-bar {
  width: 180px;
  height: 8px;
  background: #EBF3FF;
  border-radius: 9999px;
  overflow: hidden;
}

.course-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0066FF 0%, #10B981 100%);
  transition: width 0.4s ease;
}`,
          codeLanguage: "css",
          exercise: "Implement a dark/light mode toggle with CSS custom properties and persistent state in localStorage.",
          resources: [
            { name: "Responsive UI Patterns.pdf", size: "1.2 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 4,
          title: "3.4 - Modern JavaScript (ES6+): DOM Manipulation, Fetch API & Async/Await",
          duration: "45 min",
          type: "video",
          videoId: "hdI2bqOjy3c",
          difficulty: "Intermediate",
          summary: "Arrow functions, object destructuring, spread operators, dynamic DOM rendering, Promises, and asynchronous REST API communications.",
          notes: [
            "Always use `const` and `let` to prevent hoisting bugs associated with `var`.",
            "Asynchronous operations: `async/await` turns promise chains into clean, synchronous-looking code.",
            "Safely handle network and server failures with `try-catch` around `fetch()` calls."
          ],
          codeSnippet: `// Asynchronously load course chapter data and update UI
async function loadCourseChapter(moduleId, chapterId) {
  try {
    const url = \`/api/course/python-fullstack?m=\${moduleId}&c=\${chapterId}\`;
    console.log(\`Fetching chapter: \${url}\`);

    // Simulate reactive state transition
    const chapterData = {
      title: \`Chapter \${moduleId}.\${chapterId}\`,
      completed: true,
      timestamp: new Date().toISOString()
    };

    // Update query params in browser URL without reloading
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('m', moduleId);
    newUrl.searchParams.set('c', chapterId);
    window.history.pushState({}, '', newUrl);

    // Save student course progress
    localStorage.setItem('nti_course_progress', JSON.stringify({
      currentModule: moduleId,
      currentChapter: chapterId,
      lastAccessed: Date.now()
    }));

    return chapterData;
  } catch (err) {
    console.error("Failed to load course lesson:", err);
  }
}`,
          codeLanguage: "javascript",
          exercise: "Write an interactive course video player controller that persists timestamp bookmarks in `localStorage`.",
          resources: [
            { name: "Modern JavaScript ES6+ Handbook.pdf", size: "1.6 MB", type: "PDF" }
          ]
        }
      ]
    },
    {
      moduleIndex: 4,
      title: "Module 4: Backend Engineering with Django & Flask",
      description: "MVC/MTV design pattern, Django routing, dynamic templates, ModelForms, CSRF security, and session authentication.",
      chapters: [
        {
          chapterIndex: 1,
          title: "4.1 - Introduction to Web Frameworks & Django MTV Architecture",
          duration: "35 min",
          type: "video",
          videoId: "F5mRW0jo-U4",
          difficulty: "Intermediate",
          summary: "Understanding the HTTP request-response cycle, Django's Model-Template-View architecture, settings.py configuration, and manage.py.",
          notes: [
            "MTV Pattern: Model (Data layer & ORM), Template (HTML presentation), View (Business logic & controller).",
            "`settings.py` manages database connections, static files, installed apps, and middleware pipelines.",
            "WSGI and ASGI interfaces bridge Python application servers (Gunicorn/Uvicorn) with web servers (Nginx)."
          ],
          codeSnippet: `# Creating and launching a production-ready Django project
django-admin startproject config .
python manage.py startapp core

# Add core app to INSTALLED_APPS in config/settings.py:
# INSTALLED_APPS = [
#     'django.contrib.admin',
#     'django.contrib.auth',
#     'django.contrib.contenttypes',
#     'django.contrib.sessions',
#     'django.contrib.messages',
#     'django.contrib.staticfiles',
#     'core',  # Custom domain application
# ]`,
          codeLanguage: "python",
          exercise: "Initialize a Django project with split settings (`base.py`, `development.py`, `production.py`) and an environment variable loader.",
          resources: [
            { name: "Django Architecture Overview.pdf", size: "1.3 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 2,
          title: "4.2 - URL Routing, Dynamic View Handlers & Template Inheritance",
          duration: "40 min",
          type: "video",
          videoId: "rHux0gMZ3Eg",
          difficulty: "Intermediate",
          summary: "Configuring urlconf regexes and path converters, writing function-based and class-based views, and template inheritance with Jinja tags.",
          notes: [
            "Keep URL patterns decoupled: use `include()` to delegate sub-routing to application `urls.py`.",
            "Base templates with `{% block content %}` eliminate code duplication across pages.",
            "Always use `reverse()` or `{% url 'route-name' %}` instead of hardcoded URL strings."
          ],
          codeSnippet: `# core/urls.py
from django.urls import path
from . import views

app_name = "course"

urlpatterns = [
    path("", views.CourseListView.as_view(), name="list"),
    path("<slug:slug>/", views.course_detail_view, name="detail"),
    path("<slug:slug>/module/<int:m>/chapter/<int:c>/", views.chapter_player_view, name="player"),
]

# core/views.py
from django.shortcuts import render, get_object_or_404
from django.http import HttpRequest, HttpResponse

def chapter_player_view(request: HttpRequest, slug: str, m: int, c: int) -> HttpResponse:
    context = {
        "course_slug": slug,
        "module_index": m,
        "chapter_index": c,
        "whatsapp_channel": "https://whatsapp.com/channel/0029Vb9EdXyGU3BCLhfpAa43"
    }
    return render(request, "course/player.html", context)`,
          codeLanguage: "python",
          exercise: "Build a dynamic chapter player view with breadcrumb generation and automatic previous/next lesson linking.",
          resources: [
            { name: "Django URL Routing & Views Guide.pdf", size: "980 KB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 3,
          title: "4.3 - Django Forms, ModelForms, Validation & CSRF Protection",
          duration: "40 min",
          type: "video",
          videoId: "wVnibPEpHY0",
          difficulty: "Intermediate",
          summary: "Create two-way data bound HTML forms, ModelForm automation, field-level and form-level clean methods, and CSRF token security.",
          notes: [
            "CSRF Tokens: Django automatically injects cryptographic tokens to protect POST endpoints from cross-site request forgery.",
            "Form cleaning: Define `clean_<fieldname>()` for specific validation logic (e.g. validating phone numbers or payment proofs).",
            "ModelForms synchronize database constraints directly with HTML input fields."
          ],
          codeSnippet: `from django import forms
from django.core.exceptions import ValidationError
from .models import EnrollmentOrder

class CourseEnrollmentForm(forms.ModelForm):
    class Meta:
        model = EnrollmentOrder
        fields = ['student_name', 'email', 'mobile', 'program', 'security_pin']
        widgets = {
            'security_pin': forms.PasswordInput(attrs={'placeholder': 'Create 4-digit PIN'}),
        }

    def clean_mobile(self):
        mobile = self.cleaned_data.get('mobile')
        if len(mobile) != 10 or not mobile.isdigit():
            raise ValidationError("Please enter a valid 10-digit Indian mobile number.")
        return mobile

    def clean(self):
        cleaned_data = super().clean()
        program = cleaned_data.get('program')
        if program == 'Course Program':
            cleaned_data['fee'] = 200.0
            cleaned_data['platform_fee'] = 4.0
        return cleaned_data`,
          codeLanguage: "python",
          exercise: "Build an interactive registration ModelForm with AJAX submission and error pill rendering.",
          resources: [
            { name: "Django Forms & Validation.pdf", size: "890 KB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 4,
          title: "4.4 - User Authentication, Session Security & REST API Overview",
          duration: "45 min",
          type: "video",
          videoId: "T1I6BnvG71M",
          difficulty: "Intermediate",
          summary: "Django's built-in auth system, passwords hashing with PBKDF2/Argon2, user login/logout, permission gates (@login_required), and Django REST Framework overview.",
          notes: [
            "Passwords are never stored in plain text: Django uses salt + PBKDF2 with SHA-256 by default.",
            "Session tokens are transmitted via HttpOnly, Secure cookies to mitigate XSS interception.",
            "Django REST Framework (DRF) serializers transform querysets into JSON payloads for frontend client consumption."
          ],
          codeSnippet: `from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.http import require_POST

@require_POST
def student_auth_api(request):
    app_id = request.POST.get('application_id')
    pin = request.POST.get('security_pin')
    
    # Authenticate student session
    if app_id and pin:
        request.session['student_app_id'] = app_id
        request.session['enrolled_domain'] = "Python Full Stack"
        return JsonResponse({"status": "SUCCESS", "message": "Authenticated"})
    return JsonResponse({"status": "FAILED", "error": "Invalid credentials"}, status=401)

@login_required(login_url='/login/')
def protected_course_content(request):
    return render(request, "course/master_curriculum.html")`,
          codeLanguage: "python",
          exercise: "Implement role-based authorization restricting lesson assessment answers strictly to paid candidates.",
          resources: [
            { name: "Django Auth & Security Hardening.pdf", size: "1.5 MB", type: "PDF" }
          ]
        }
      ]
    },
    {
      moduleIndex: 5,
      title: "Module 5: Database Architecture, ORM & Storage Integration",
      description: "Relational database modeling, PostgreSQL/MySQL, Django ORM, query optimizations, migrations, and index tuning.",
      chapters: [
        {
          chapterIndex: 1,
          title: "5.1 - Relational Database Fundamentals, PostgreSQL Setup & Schema Design",
          duration: "35 min",
          type: "video",
          videoId: "qw--VYLpxG4",
          difficulty: "Advanced",
          summary: "Relational modeling, primary and foreign key constraints, ACID properties, PostgreSQL installation, and pgAdmin administration.",
          notes: [
            "ACID Properties: Atomicity, Consistency, Isolation, Durability guarantee enterprise transaction reliability.",
            "Normalization (1NF, 2NF, 3NF): Eliminate redundant data duplication across tables.",
            "PostgreSQL features robust indexing, JSONB storage, and connection scalability."
          ],
          codeSnippet: `-- Candidate & Course Enrollment Database Schema
CREATE TABLE candidates (
    id SERIAL PRIMARY KEY,
    application_id VARCHAR(32) UNIQUE NOT NULL,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(160) UNIQUE NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    domain VARCHAR(64) NOT NULL,
    program VARCHAR(64) NOT NULL DEFAULT 'Course Program',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE course_progress (
    id SERIAL PRIMARY KEY,
    candidate_id INT REFERENCES candidates(id) ON DELETE CASCADE,
    course_slug VARCHAR(100) NOT NULL,
    module_index INT NOT NULL,
    chapter_index INT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(candidate_id, course_slug, module_index, chapter_index)
);`,
          codeLanguage: "sql",
          exercise: "Design a 3NF relational schema for a multi-instructor learning management platform with payments and certificates.",
          resources: [
            { name: "PostgreSQL Production Architecture.pdf", size: "1.7 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 2,
          title: "5.2 - Django ORM Models, Field Types & Relational Mappings",
          duration: "40 min",
          type: "video",
          videoId: "kO2K258L_5Y",
          difficulty: "Advanced",
          summary: "Define Python classes as database tables, field types (CharField, IntegerField, DecimalField), and relational links (ForeignKey, OneToOne, ManyToMany).",
          notes: [
            "Django ORM translates Python objects into parameterized SQL queries preventing SQL Injection.",
            "`on_delete=models.CASCADE` vs `models.PROTECT`: choose cascading behavior carefully to preserve financial audit trails.",
            "`related_name` allows intuitive reverse relation lookups (`candidate.enrollments.all()`)."
          ],
          codeSnippet: `from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    fee = models.DecimalField(max_digits=8, decimal_places=2, default=200.00)
    platform_fee = models.DecimalField(max_digits=8, decimal_places=2, default=4.00)

    @property
    def total_fee(self):
        return self.fee + self.platform_fee

    def __str__(self):
        return self.title

class Enrollment(models.Model):
    PAYMENT_CHOICES = [('PENDING', 'Pending'), ('PAID', 'Paid Verified')]
    
    application_id = models.CharField(max_length=32, unique=True)
    student_name = models.CharField(max_length=150)
    email = models.EmailField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="enrollments")
    amount_paid = models.DecimalField(max_digits=8, decimal_places=2)
    payment_status = models.CharField(max_length=20, choices=PAYMENT_CHOICES, default='PAID')
    enrolled_at = models.DateTimeField(auto_now_add=True)`,
          codeLanguage: "python",
          exercise: "Create a ManyToMany relationship between Students and Certifications with intermediate metadata (issued date, score).",
          resources: [
            { name: "Django ORM Modeling Mastery.pdf", size: "1.4 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 3,
          title: "5.3 - Advanced QuerySets, Aggregations, Transactions & Raw SQL",
          duration: "45 min",
          type: "video",
          videoId: "0d9xS2xL_8g",
          difficulty: "Advanced",
          summary: "QuerySet chaining, Q objects for complex OR filters, F expressions for database-level atomic operations, and atomic transactions.",
          notes: [
            "QuerySets are lazy: SQL queries are executed strictly when evaluated (iteration, slicing, len).",
            "Use `F()` expressions to increment counters atomically in the database without race conditions.",
            "Wrap payment processing and license allocation inside `transaction.atomic()` blocks."
          ],
          codeSnippet: `from django.db import transaction
from django.db.models import Q, F, Count, Avg
from .models import Enrollment, Course

# 1. Complex filtered QuerySet with Q objects
eligible_students = Enrollment.objects.filter(
    Q(course__slug="python-full-stack-web-development") & 
    (Q(payment_status="PAID") | Q(amount_paid__gte=204.00))
)

# 2. Atomic Payment Verification Transaction
@transaction.atomic
def verify_payment_and_grant_access(order_id, txn_id):
    order = Enrollment.objects.select_for_update().get(application_id=order_id)
    order.payment_status = 'PAID'
    order.amount_paid = 204.00
    order.save()
    
    # Update candidate total counter atomically
    Course.objects.filter(id=order.course_id).update(enrolled_count=F('enrolled_count') + 1)
    return order`,
          codeLanguage: "python",
          exercise: "Write an aggregation query computing total course revenue, average student assessment score, and domain enrollment counts.",
          resources: [
            { name: "QuerySets & Transactions Guide.pdf", size: "1.1 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 4,
          title: "5.4 - Database Migrations, Indexes, Connection Pooling & ORM Optimization",
          duration: "48 min",
          type: "video",
          videoId: "m_rA2_k9X7k",
          difficulty: "Advanced",
          summary: "The definitive guide to Django migrations lifecycle, creating composite and B-Tree indexes, resolving N+1 query bottlenecks via select_related & prefetch_related, database connection pooling with PgBouncer, and production query analysis with EXPLAIN ANALYZE.",
          notes: [
            "The N+1 Query Problem: Accessing foreign keys inside a loop triggers N secondary SQL queries. Resolve with `select_related()` (SQL JOIN) for 1-1 / 1-N foreign keys, and `prefetch_related()` (separate in-memory query) for N-N relations.",
            "Migrations Lifecycle: `makemigrations` creates migration files from model diffs; `migrate` applies unapplied migrations against DB tables; always check SQL with `sqlmigrate` before running on production.",
            "Indexing Strategy: Add B-Tree indexes (`db_index=True` or `models.Index(fields=['slug', 'status'])`) on columns queried frequently in `WHERE` and `ORDER BY` clauses.",
            "Connection Pooling: Use PgBouncer or Django's `CONN_MAX_AGE` (e.g. 600s) to reuse established TCP database connections instead of reopening handshakes on every HTTP request."
          ],
          codeSnippet: `from django.db import models
from django.db.models import Prefetch

# 1. High-Performance Model with Composite Indexing
class CourseProgress(models.Model):
    candidate = models.ForeignKey('Candidate', on_delete=models.CASCADE, related_name='progress_records')
    course_slug = models.SlugField(max_length=120, db_index=True)
    module_index = models.PositiveSmallIntegerField()
    chapter_index = models.PositiveSmallIntegerField()
    is_completed = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        # Composite B-Tree index for ultra-fast lookup (m=5&c=4 query)
        indexes = [
            models.Index(fields=['candidate', 'course_slug', 'module_index', 'chapter_index'], name='idx_candidate_course_loc'),
            models.Index(fields=['course_slug', 'is_completed'], name='idx_course_completion')
        ]
        unique_together = ('candidate', 'course_slug', 'module_index', 'chapter_index')

# 2. Eliminating N+1 Query Bottleneck
def get_student_dashboard_optimized(student_id):
    # BAD (N+1 queries):
    # students = Candidate.objects.all()
    # for s in students: print(s.course.title) -> Fires 1 + N queries!

    # OPTIMIZED (Single query via select_related):
    candidate_profile = Candidate.objects.select_related('active_course').prefetch_related(
        Prefetch('progress_records', queryset=CourseProgress.objects.filter(is_completed=True))
    ).get(application_id=student_id)

    return candidate_profile

# 3. settings.py Connection Pooling Optimization
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nti_platform_prod',
        'USER': 'nti_admin',
        'PASSWORD': 'prod_secure_password',
        'HOST': 'db.nishtechnologies.internal',
        'PORT': '5432',
        'CONN_MAX_AGE': 600,  # Maintain persistent connections for 10 minutes
        'OPTIONS': {
            'sslmode': 'require',
        }
    }
}`,
          codeLanguage: "python",
          exercise: "Profile an existing slow view with `django-debug-toolbar`, detect duplicate queries, and refactor using `select_related` and custom indexes.",
          resources: [
            { name: "Django Database Optimization & Migrations Masterclass.pdf", size: "2.4 MB", type: "PDF" },
            { name: "Production PostgreSQL PgBouncer Config.conf", size: "12 KB", type: "CONF" },
            { name: "Schema Migration Script 0005_indexing.sql", size: "8 KB", type: "SQL" }
          ]
        }
      ]
    },
    {
      moduleIndex: 6,
      title: "Module 6: Capstone Project, Cloud Deployment & Certification",
      description: "End-to-end full stack application, Git/GitHub CI/CD, Docker containerization, production cloud deployment, and final assessment exam.",
      chapters: [
        {
          chapterIndex: 1,
          title: "6.1 - Capstone Project: End-to-End Enterprise Full Stack Web Application",
          duration: "55 min",
          type: "video",
          videoId: "a4K3sW8eF6s",
          difficulty: "Advanced",
          summary: "Architecting the full stack application integrating Frontend responsive UI, Django backend REST APIs, PostgreSQL database, and payment gateways.",
          notes: [
            "Decouple application concerns into modular architecture.",
            "Implement standardized API response contracts `{success: true, data: {...}}`.",
            "Write integration tests validating business workflows from registration through payment."
          ],
          codeSnippet: `# Capstone Project Health Check & Status Endpoint
from django.http import JsonResponse
from django.db import connection

def system_health_status(request):
    db_ok = True
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1;")
    except Exception:
        db_ok = False

    return JsonResponse({
        "system": "Nish Technologies Learning & Qualifier Platform",
        "version": "2.4.0",
        "database_connected": db_ok,
        "whatsapp_channel_configured": True,
        "whatsapp_channel_url": "https://whatsapp.com/channel/0029Vb9EdXyGU3BCLhfpAa43"
    })`,
          codeLanguage: "python",
          exercise: "Build the complete end-to-end checkout and course playback pipeline with automated email notifications.",
          resources: [
            { name: "Capstone Project Architecture Blueprint.pdf", size: "3.1 MB", type: "PDF" },
            { name: "Full Stack Starter Repository.zip", size: "14.2 MB", type: "ZIP" }
          ]
        },
        {
          chapterIndex: 2,
          title: "6.2 - Version Control with Git, GitHub Collaboration & CI/CD Actions",
          duration: "40 min",
          type: "video",
          videoId: "RGOj5yH7evk",
          difficulty: "Intermediate",
          summary: "Git workflows, branch protection rules, resolving merge conflicts, and automated GitHub Actions workflows for continuous integration.",
          notes: [
            "Branching strategy: Keep `main` stable, develop on feature branches (`feature/course-player`).",
            "Write clear, imperative commit messages (`feat: add topmate style course viewer`).",
            "GitHub Actions automatically runs linter, test suite, and build checks on push."
          ],
          codeSnippet: `# .github/workflows/ci.yml
name: Python Full Stack CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.12'
    - name: Install Dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run Test Suite
      run: python -m pytest tests/`,
          codeLanguage: "yaml",
          exercise: "Set up a GitHub Actions workflow that lints Python code with `flake8` and verifies JavaScript build scripts.",
          resources: [
            { name: "Git & GitHub Pro Cheatsheet.pdf", size: "820 KB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 3,
          title: "6.3 - Production Cloud Deployment on Render, AWS & PythonAnywhere",
          duration: "45 min",
          type: "video",
          videoId: "b-0yS2Bv46w",
          difficulty: "Advanced",
          summary: "Containerizing with Docker, configuring Gunicorn WSGI workers, Whitenoise static asset hosting, HTTPS TLS certificates, and cloud deployment.",
          notes: [
            "Never commit secrets to git: read credentials from environment variables (`os.environ.get('SECRET_KEY')`).",
            "Gunicorn worker calculation formula: `(2 * CPU cores) + 1`.",
            "Use WhiteNoise or AWS S3 CloudFront to serve static CSS, JavaScript, and media assets."
          ],
          codeSnippet: `# Dockerfile for Production Python Web App
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

# Collect static assets
RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]`,
          codeLanguage: "dockerfile",
          exercise: "Deploy your Python Full Stack project to Render or AWS Lightsail with automatic custom domain SSL.",
          resources: [
            { name: "Cloud Production Deployment Playbook.pdf", size: "2.1 MB", type: "PDF" }
          ]
        },
        {
          chapterIndex: 4,
          title: "6.4 - Final Course Assessment Exam & Verifiable Digital Certification",
          duration: "60 min",
          type: "interactive",
          videoId: "8j0UDiN7my4",
          difficulty: "Certification Exam",
          summary: "Take the comprehensive 45-question certification qualifier assessment covering full-stack concepts, score >= 65% to generate your verifiable NTI Certificate of Completion.",
          notes: [
            "The final qualifier assessment consists of 45 multi-choice questions covering Aptitude, Python, Django, Databases, and Frontend.",
            "A minimum score of 65% awards the Official Verifiable Nish Technologies Digital Certificate.",
            "Top 10 Performers are additionally eligible for the ₹30,000/month stipend internship offer."
          ],
          codeSnippet: `// Certificate Verification Engine
function generateDigitalCertificate(candidate, score) {
  return {
    certificateId: "NTI-CERT-2026-" + Math.floor(100000 + Math.random() * 900000),
    recipientName: candidate.name,
    domain: "Python Full Stack Web Development",
    scoreAggregate: score + "%",
    verificationUrl: "https://nishtechnologies.com/verify?cert=" + candidate.applicationId,
    issuedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    status: "VERIFIED & ACCREDITED"
  };
}`,
          codeLanguage: "javascript",
          exercise: "Click 'Launch Final Qualifier Exam' to begin your AI-proctored certification test.",
          resources: [
            { name: "Final Assessment Preparation Blueprint.pdf", size: "1.9 MB", type: "PDF" }
          ]
        }
      ]
    }
  ]
};

/**
 * Returns full course curriculum for any domain.
 * If Python Full Stack is requested, returns the flagship PYTHON_FULLSTACK_COURSE.
 * For other domains (VLSI, AI/ML, Java, etc.), dynamically constructs an authentic 6-module curriculum.
 */
export function getCourseForDomain(domainIdentifier) {
  const query = (domainIdentifier || "").toLowerCase();
  
  if (query.includes("python") || query.includes("full-stack") || query.includes("full stack") || query.includes("web")) {
    return PYTHON_FULLSTACK_COURSE;
  }

  // Generate customized domain course for any other domain
  const cleanTitle = domainIdentifier || "Technology Specialization";
  return {
    id: cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    slug: cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    title: `${cleanTitle} Professional Course`,
    subtitle: `Comprehensive Industry Track: Theory, Live Projects, Architecture & Certification`,
    instructor: "Nish Technologies Inc &bull; Verified Faculty",
    instructorRole: "Senior Industry Technical Lead",
    instructorAvatar: "assets/nti-logo-clean.png",
    rating: 4.9,
    reviewsCount: 890,
    enrolledCount: "8,500+ Learners",
    totalModules: 6,
    totalChapters: 24,
    durationHours: "32+ Hours Content",
    level: "All Levels",
    certificateTitle: `Verified Certificate in ${cleanTitle}`,
    whatsappChannelUrl: "https://whatsapp.com/channel/0029Vb9EdXyGU3BCLhfpAa43",
    pricing: {
      courseFee: 200,
      platformFee: 4,
      total: 204,
      currency: "INR",
      currencySymbol: "₹"
    },
    modules: [
      {
        moduleIndex: 1,
        title: `Module 1: Foundations of ${cleanTitle} & Environment Setup`,
        description: `Core paradigms, design tools, workspace configuration, and essential fundamentals.`,
        chapters: [
          {
            chapterIndex: 1,
            title: `1.1 - Introduction to ${cleanTitle} & Industry Landscape`,
            duration: "25 min",
            type: "video",
            videoId: "rfscVS0vtbw",
            summary: `Overview of industry trends, enterprise adoption, and roadmap to mastery.`,
            notes: [`Foundational concepts in ${cleanTitle}`, `Industry standards and tooling ecosystem`],
            codeSnippet: `// Initialize ${cleanTitle} workspace\nconsole.log("Welcome to ${cleanTitle} Mastery at NTI");`,
            codeLanguage: "javascript",
            resources: [{ name: `${cleanTitle} Roadmap.pdf`, size: "1.1 MB", type: "PDF" }]
          },
          {
            chapterIndex: 2,
            title: `1.2 - Tooling, SDKs & Workspace Configuration`,
            duration: "30 min",
            type: "video",
            videoId: "kqtD5dpn9C8",
            summary: `Installing compilers, linters, runtime environments, and simulators.`,
            notes: [`Configuring local dev environment`, `Setting up package managers`],
            codeSnippet: `# Setup ${cleanTitle} runtime environment\npip install --upgrade pip`,
            codeLanguage: "bash",
            resources: [{ name: "Setup Checklist.pdf", size: "650 KB", type: "PDF" }]
          },
          {
            chapterIndex: 3,
            title: `1.3 - Core Architectural Concepts & Fundamentals`,
            duration: "35 min",
            type: "video",
            videoId: "AWek49wXGzI",
            summary: `Deep dive into the core building blocks and mathematical foundations.`,
            notes: [`Memory management and latency considerations`, `Execution flow and pipelines`],
            codeSnippet: `// Core architecture principles\nfunction initArchitecture() { return { status: 'OPTIMAL' }; }`,
            codeLanguage: "javascript",
            resources: [{ name: "Core Fundamentals.pdf", size: "820 KB", type: "PDF" }]
          },
          {
            chapterIndex: 4,
            title: `1.4 - Hands-On Lab: Your First Practical Implementation`,
            duration: "40 min",
            type: "video",
            videoId: "6iF8Xb7Z3wQ",
            summary: `Step-by-step code walkthrough building a baseline working prototype.`,
            notes: [`Validating syntax and logic`, `Running unit test assertions`],
            codeSnippet: `def baseline_test():\n    assert True\n    print("${cleanTitle} test passed!")`,
            codeLanguage: "python",
            resources: [{ name: "Starter Lab Code.zip", size: "2.4 MB", type: "ZIP" }]
          }
        ]
      },
      {
        moduleIndex: 2,
        title: `Module 2: Advanced Design Patterns & Core Methodologies in ${cleanTitle}`,
        description: `Mastering intermediate frameworks, data structures, and architectural standards.`,
        chapters: [
          { chapterIndex: 1, title: `2.1 - Advanced Data Structures & Memory Optimization`, duration: "35 min", type: "video", videoId: "u-OmVr_fT4s", summary: `Optimizing memory footprint and processing speed.`, notes: [`Cache locality`, `Algorithmic efficiency`], codeSnippet: `// Advanced Data Structures`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 2, title: `2.2 - Design Patterns & Architectural Modularity`, duration: "40 min", type: "video", videoId: "daefaLgNkw0", summary: `Applying factory, singleton, and observer patterns.`, notes: [`Modularity`, `Separation of concerns`], codeSnippet: `// Design Patterns Implementation`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 3, title: `2.3 - Error Handling, Logging & Defensive Engineering`, duration: "45 min", type: "video", videoId: "JeznW_7DlB0", summary: `Robust telemetry, error catching, and fail-safe designs.`, notes: [`Telemetry`, `Graceful degradation`], codeSnippet: `// Defensive Engineering`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 4, title: `2.4 - Practical Lab: Modular System Integration`, duration: "45 min", type: "video", videoId: "NIWwJbo-9_8", summary: `Combining modular blocks into a cohesive subsystem.`, notes: [`Integration testing`, `Profiling`], codeSnippet: `// Integration Lab`, codeLanguage: "javascript", resources: [] }
        ]
      },
      {
        moduleIndex: 3,
        title: `Module 3: Subsystem Architecture & Integration Frameworks`,
        description: `Building scalable interfaces, protocols, and data exchange pipelines.`,
        chapters: [
          { chapterIndex: 1, title: `3.1 - Interface Contracts & API Design`, duration: "35 min", type: "video", videoId: "pQN-pnXPaVg", summary: `Designing clean interfaces and data contracts.`, notes: [`Contract specification`, `API ergonomics`], codeSnippet: `// Interface Contracts`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 2, title: `3.2 - Data Serialization, Protocols & Validation`, duration: "40 min", type: "video", videoId: "1Rs2ND1ryYc", summary: `Parsing, serialization, and schema validation.`, notes: [`JSON/Protobuf parsing`, `Schema gates`], codeSnippet: `// Serialization Protocols`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 3, title: `3.3 - Performance Tuning & Benchmarking`, duration: "35 min", type: "video", videoId: "srvUrASNj0s", summary: `Profiling throughput, memory leaks, and CPU cycles.`, notes: [`Flame graphs`, `Benchmarking suites`], codeSnippet: `// Benchmarking Harness`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 4, title: `3.4 - Practical Lab: High-Throughput Pipeline`, duration: "45 min", type: "video", videoId: "hdI2bqOjy3c", summary: `Building an optimized data streaming pipeline.`, notes: [`Asynchronous buffers`, `Backpressure handling`], codeSnippet: `// High Throughput Lab`, codeLanguage: "javascript", resources: [] }
        ]
      },
      {
        moduleIndex: 4,
        title: `Module 4: Enterprise Tooling, Security & Quality Assurance`,
        description: `Static analysis, security hardening, automated test suites, and compliance.`,
        chapters: [
          { chapterIndex: 1, title: `4.1 - Security Principles & Threat Modeling`, duration: "35 min", type: "video", videoId: "F5mRW0jo-U4", summary: `Identifying vulnerabilities and implementing defense in depth.`, notes: [`Least privilege`, `Encryption at rest`], codeSnippet: `// Security Hardening`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 2, title: `4.2 - Automated Unit & Integration Testing`, duration: "40 min", type: "video", videoId: "rHux0gMZ3Eg", summary: `Writing resilient test suites with mock frameworks.`, notes: [`Code coverage benchmarks`, `Edge-case regression`], codeSnippet: `// Automated Test Suite`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 3, title: `4.3 - Static Code Analysis & Linting Workflows`, duration: "35 min", type: "video", videoId: "wVnibPEpHY0", summary: `Enforcing strict code quality with automated linters.`, notes: [`AST analysis`, `Complexity thresholds`], codeSnippet: `// Linter Rules Config`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 4, title: `4.4 - Practical Lab: End-to-End Test Automation`, duration: "45 min", type: "video", videoId: "T1I6BnvG71M", summary: `Running continuous automated test pipelines.`, notes: [`Regression pipelines`, `Test reports`], codeSnippet: `// End to End Test Lab`, codeLanguage: "javascript", resources: [] }
        ]
      },
      {
        moduleIndex: 5,
        title: `Module 5: Database Architecture, Storage & Persistence Layers`,
        description: `Relational & NoSQL persistence, ORM integration, query optimization, migrations, and caching.`,
        chapters: [
          { chapterIndex: 1, title: `5.1 - Persistence Architecture & Database Selection`, duration: "35 min", type: "video", videoId: "qw--VYLpxG4", summary: `Choosing the optimal storage engine for high-traffic workloads.`, notes: [`ACID vs BASE`, `Storage engines`], codeSnippet: `// DB Selection`, codeLanguage: "sql", resources: [] },
          { chapterIndex: 2, title: `5.2 - ORM Models & Relational Schema Mapping`, duration: "40 min", type: "video", videoId: "kO2K258L_5Y", summary: `Mapping domain entities to database relations.`, notes: [`Entity relationships`, `Foreign key indexing`], codeSnippet: `// ORM Models`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 3, title: `5.3 - Query Optimization, Transactions & Indexing`, duration: "45 min", type: "video", videoId: "0d9xS2xL_8g", summary: `Optimizing slow queries and locking mechanisms.`, notes: [`B-Tree indexes`, `Transaction isolation`], codeSnippet: `// Query Tuning`, codeLanguage: "sql", resources: [] },
          { 
            chapterIndex: 4, 
            title: `5.4 - Database Migrations, Indexes, Connection Pooling & ORM Optimization`, 
            duration: "48 min", 
            type: "video", 
            videoId: "m_rA2_k9X7k", 
            summary: `Automated schema migrations, connection pooling with persistent handles, resolving N+1 bottlenecks, and production DB tuning.`, 
            notes: [`Migration safety protocols`, `Connection pool sizing (e.g. PgBouncer)`, `Query execution plans (EXPLAIN ANALYZE)`], 
            codeSnippet: `-- Schema Migrations and Indexing Optimization\nCREATE INDEX idx_domain_perf ON domain_records (category, status, created_at DESC);\n\n-- Connection Pool Configuration\nmax_connections = 100\nshared_buffers = 4GB`, 
            codeLanguage: "sql", 
            resources: [{ name: "Database Migrations & Tuning Guide.pdf", size: "1.9 MB", type: "PDF" }] 
          }
        ]
      },
      {
        moduleIndex: 6,
        title: `Module 6: Capstone Project, Production Deployment & Certification`,
        description: `Full real-world project delivery, cloud deployment, and final assessment certification.`,
        chapters: [
          { chapterIndex: 1, title: `6.1 - Capstone Real-World Project Specification`, duration: "50 min", type: "video", videoId: "a4K3sW8eF6s", summary: `Building a portfolio-ready enterprise system.`, notes: [`Functional requirements`, `Architecture documentation`], codeSnippet: `// Capstone Architecture`, codeLanguage: "javascript", resources: [] },
          { chapterIndex: 2, title: `6.2 - Version Control with Git & CI/CD Pipelines`, duration: "40 min", type: "video", videoId: "RGOj5yH7evk", summary: `Automating builds, packaging, and releases.`, notes: [`Release tagging`, `GitHub Actions`], codeSnippet: `// CI/CD Config`, codeLanguage: "yaml", resources: [] },
          { chapterIndex: 3, title: `6.3 - Production Cloud Deployment & Monitoring`, duration: "45 min", type: "video", videoId: "b-0yS2Bv46w", summary: `Deploying to cloud infrastructure with logging.`, notes: [`Cloud infrastructure`, `Monitoring alerts`], codeSnippet: `// Deployment Spec`, codeLanguage: "dockerfile", resources: [] },
          { chapterIndex: 4, title: `6.4 - Final Assessment Exam & Digital Certification`, duration: "60 min", type: "interactive", videoId: "8j0UDiN7my4", summary: `Take the official domain qualifier test to earn your verified certificate.`, notes: [`45 MCQs`, `65% qualifying benchmark`], codeSnippet: `// Verification Link`, codeLanguage: "javascript", resources: [] }
        ]
      }
    ]
  };
}
