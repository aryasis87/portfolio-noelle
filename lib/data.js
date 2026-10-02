// Konten terpusat portfolio Noelle (light / monochrome).
// Persona fiktif. Proyek = situs demo yang live; tidak ada klien, testimoni, atau logo merek sungguhan.

export const profile = {
  "name": "Noelle",
  "role": "UI/UX Designer",
  "location": "Jakarta, Indonesia",
  "email": "hello@noelle.example",
  "avatar": "/images/hero.webp",
  "about": "/images/about.webp",
  "intro": "Hi, I’m Noelle — a UI/UX designer who makes everyday tools calmer.",
  "bioShort": "I design productivity and booking tools that respect people’s time — from the first sketch to the last edge case.",
  "bio": [
    "I’m Noelle, a UI/UX designer based in Jakarta. Most of my work is everyday software: to-do lists, booking flows, comparison tools — products people open between other things.",
    "I care about the boring details that make those tools trustworthy: what happens at midnight, what a date means in local time, what the empty state says. The six projects here are live; you can open each one and judge for yourself."
  ],
  "socials": []
};

export const nav = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "About",
    "href": "/about"
  },
  {
    "label": "Work",
    "href": "/work"
  },
  {
    "label": "Blog",
    "href": "/blog"
  },
  {
    "label": "Contact",
    "href": "/contact"
  }
];

export const stats = [
  {
    "value": "6",
    "label": "Live projects"
  },
  {
    "value": "9",
    "label": "Years practising"
  },
  {
    "value": "4",
    "label": "Services"
  },
  {
    "value": "3",
    "label": "Articles"
  }
];

export const services = [
  {
    "title": "Product Design",
    "description": "Flows, wireframes, and UI for web apps — from the first sketch to the edge cases."
  },
  {
    "title": "Design Systems",
    "description": "Tokens, components, and light & dark themes that pass contrast checks.",
    "highlight": true
  },
  {
    "title": "Booking & Scheduling UX",
    "description": "Calendars, slots, and time zones that behave the way people expect."
  },
  {
    "title": "Prototyping",
    "description": "Clickable prototypes in code to test interactions before committing."
  }
];

export const skills = [
  {
    "group": "Design",
    "items": [
      "UI/UX",
      "Figma",
      "Wireframing",
      "Design Systems",
      "User Research"
    ]
  },
  {
    "group": "Delivery",
    "items": [
      "Prototyping",
      "Accessibility",
      "Usability Testing",
      "Handoff"
    ]
  },
  {
    "group": "Code",
    "items": [
      "HTML/CSS",
      "Tailwind",
      "React basics"
    ]
  }
];

export const experience = [
  {
    "role": "Independent UI/UX Designer",
    "company": "Freelance",
    "period": "2022 — Present",
    "desc": "Product and UI design for productivity and booking tools, including the six projects on this site."
  },
  {
    "role": "Product Designer",
    "company": "Product team at a Jakarta software company",
    "period": "2019 — 2022",
    "desc": "Designed scheduling features and maintained a component library with the engineering team."
  },
  {
    "role": "Junior UI Designer",
    "company": "Small digital agency",
    "period": "2017 — 2019",
    "desc": "Interfaces for marketing sites and first mobile apps."
  }
];

export const education = [
  {
    "degree": "B.Des. Visual Communication",
    "school": "Art & design faculty, Jakarta",
    "period": "2013 — 2017"
  }
];

export const projects = [
  {
    "slug": "classic-todo",
    "url": "https://todo-classic.vercel.app",
    "title": "Hari Ini",
    "client": "A to-do list for one day at a time",
    "category": "Product",
    "role": "Product & UI design",
    "year": "2026",
    "image": "/images/work/classic-todo.webp",
    "summary": "A task list that only cares about today — and lets yesterday go.",
    "challenge": "Daily lists quietly turn into backlogs. The goal was a list that resets every midnight without losing what still matters.",
    "work": [
      "Quick-add reads \"Call client 14.00 !\" as a time and a priority, with a preview before saving.",
      "Unfinished tasks carry over with a gentle \"carried for N days\" tag.",
      "A seven-day recap with a streak replaces an ever-growing archive."
    ],
    "outcome": "One list, one day: finished tasks move to the recap, the rest follow you into tomorrow.",
    "desc": "A task list that only cares about today — and lets yesterday go.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "kanban-board",
    "url": "https://todo-kanban-one.vercel.app",
    "title": "Lajur",
    "client": "A kanban board with a WIP limit",
    "category": "Product",
    "role": "Interaction design",
    "year": "2026",
    "image": "/images/work/kanban-board.webp",
    "summary": "A three-lane board that says no after three cards in progress.",
    "challenge": "Boards look busy long before work moves. The design had to make flow visible, not activity.",
    "work": [
      "A work-in-progress limit of three, with a warning when it is exceeded.",
      "Card details with checklists that drive the progress bar, due dates, and moving lanes without dragging.",
      "A stats page for lead time, cycle time, and cards that have been stuck too long."
    ],
    "outcome": "Dragging works with a mouse, a long press on touch screens, and the keyboard.",
    "desc": "A three-lane board that says no after three cards in progress.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "task-manager",
    "url": "https://todo-manager-ivory-seven.vercel.app",
    "title": "Tuntas",
    "client": "A task manager with a calendar",
    "category": "Product",
    "role": "UX & UI design",
    "year": "2026",
    "image": "/images/work/task-manager.webp",
    "summary": "Priorities, due dates, and labels — read the way people actually talk about time.",
    "challenge": "Absolute dates hide urgency. \"Oct 3\" says less than \"tomorrow\" or \"two days late\".",
    "work": [
      "Due dates shown relatively and compared against the local (WIB) date.",
      "Summary cards that double as filters for today and overdue tasks.",
      "A monthly calendar, plus renaming a label across every task at once."
    ],
    "outcome": "A manager that fits both work and household errands without separate modes.",
    "desc": "Priorities, due dates, and labels — read the way people actually talk about time.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "klinik",
    "url": "https://reservasi-klinik-rose.vercel.app",
    "title": "Klinik Rumpun Waras",
    "client": "Appointment booking for a family clinic",
    "category": "Service design",
    "role": "Service & UI design",
    "year": "2026",
    "image": "/images/work/klinik.webp",
    "summary": "Doctor-first booking that only offers days each doctor actually practises.",
    "challenge": "Generic booking calendars invite appointments on days a doctor is not in.",
    "work": [
      "A weekly practice schedule per doctor drives the selectable dates.",
      "Thirty-minute slots with a queue number and a \"come 15 minutes early\" note.",
      "Preparation checklists per specialty, and an emergency notice above the form."
    ],
    "outcome": "Patients see fewer choices — and every choice is a real one.",
    "desc": "Doctor-first booking that only offers days each doctor actually practises.",
    "tags": [
      "Service design",
      "Live"
    ]
  },
  {
    "slug": "homigo",
    "url": "https://properti-homigo.vercel.app",
    "title": "Homigo",
    "client": "Marketplace for first homes and rentals",
    "category": "Product",
    "role": "UX design",
    "year": "2026",
    "image": "/images/work/homigo.webp",
    "summary": "Comparing a mortgage and a rent on the same monthly scale.",
    "challenge": "First-time buyers compare listings across different units: price, rent per month, rent per year.",
    "work": [
      "A side-by-side comparison of two to three listings, with the best value in each row marked.",
      "Monthly outflow puts instalments and rent in the same column.",
      "Price filters that normalise yearly rent to a monthly figure."
    ],
    "outcome": "A shareable comparison link replaces a spreadsheet.",
    "desc": "Comparing a mortgage and a rent on the same monthly scale.",
    "tags": [
      "Product",
      "Live"
    ]
  },
  {
    "slug": "restoran",
    "url": "https://reservasi-restoran-gilt.vercel.app",
    "title": "Pawon Lirih",
    "client": "Table booking on a floor plan",
    "category": "Service design",
    "role": "Interaction design",
    "year": "2026",
    "image": "/images/work/restoran.webp",
    "summary": "Choosing a table the way you would in the room: by looking at it.",
    "challenge": "Lists of table numbers mean nothing to guests; the floor plan is what they remember.",
    "work": [
      "A floor map with zones and seat counts; tables too small for the party switch off.",
      "Closed days and slots that have passed are disabled in local time.",
      "A group booking page that estimates the bill with tax and a deposit."
    ],
    "outcome": "Booking feels like walking in and picking a seat.",
    "desc": "Choosing a table the way you would in the room: by looking at it.",
    "tags": [
      "Service design",
      "Live"
    ]
  }
];

export const posts = [
  {
    "slug": "a-list-that-forgets",
    "date": "Sep 18, 2026",
    "title": "Designing a list that forgets",
    "category": "Product",
    "read": "4 min",
    "excerpt": "Why Hari Ini lets finished tasks disappear at midnight — and what happens to the rest.",
    "body": [
      "Most to-do apps are built to remember. Every task you ever wrote stays somewhere, and the list slowly turns into a museum of good intentions.",
      "For Hari Ini I started from the opposite question: what if the list only cared about today? Finished tasks stay visible until midnight, then move to a seven-day recap. Unfinished ones follow you into tomorrow, with a quiet \"carried for 2 days\" tag.",
      "That tag does more work than any notification. Seeing a task carried for four days is a gentle nudge to finish it, move it, or admit it is not happening.",
      "The design lesson: forgetting is a feature when it is predictable. People trust a list that clears itself at a known time far more than one that clears itself \"smartly\"."
    ]
  },
  {
    "slug": "three-cards-at-a-time",
    "date": "Aug 27, 2026",
    "title": "Why our kanban says no after three",
    "category": "Systems",
    "read": "5 min",
    "excerpt": "A work-in-progress limit is the smallest feature with the biggest effect on a board.",
    "body": [
      "When I tested early versions of Lajur, the \"in progress\" lane was always the longest. Everyone was busy and nothing was finishing.",
      "So the lane got a limit of three. Add a fourth card and the lane turns red with a short message: finish something first. It is not a hard block — sometimes a fourth card is honest — but it makes the cost visible.",
      "The stats page closes the loop. Lead time and cycle time show whether the limit is working, and an \"age\" list points at cards that have been stuck for more than three days.",
      "Limits feel restrictive in a design review and liberating in real use. That gap is worth testing early."
    ]
  },
  {
    "slug": "dates-are-ux",
    "date": "Aug 6, 2026",
    "title": "Dates are a UX problem",
    "category": "UX",
    "read": "4 min",
    "excerpt": "\"Tomorrow\" and \"two days late\" beat \"Oct 3\" every time — but only if the clock is right.",
    "body": [
      "In Tuntas, due dates read the way people talk: \"today\", \"tomorrow\", \"Thursday\", \"two days late\". Absolute dates appear only when the task is further away.",
      "The hard part was not the copy, it was the clock. A date saved as midnight UTC shows up as yesterday for half the world. Every date in the app is stored as a plain calendar day and compared with today in local (WIB) time.",
      "I also stopped baking dates into sample data. Demo tasks are generated relative to the day you first open the app, so the example never says \"overdue since June\".",
      "If your interface talks about time, test it at 06:59 in the morning. That is where the bugs live."
    ]
  }
];

export const testimonial = null;

export const testimonials = [];

export const clients = [
  "Hari Ini",
  "Lajur",
  "Tuntas",
  "Klinik Rumpun Waras",
  "Homigo",
  "Pawon Lirih"
];

export const process = [
  {
    "step": "01",
    "title": "Listen",
    "desc": "What do people already do, and where does it break?"
  },
  {
    "step": "02",
    "title": "Model",
    "desc": "Write down the rules — time, money, capacity — before drawing screens."
  },
  {
    "step": "03",
    "title": "Design & build",
    "desc": "Prototype in code, test on a phone, check both themes."
  },
  {
    "step": "04",
    "title": "Ship & look again",
    "desc": "Launch, watch real use, fix the edge cases."
  }
];

export const faqs = [
  {
    "q": "Are these real client projects?",
    "a": "They are live demo projects built for this portfolio template. Every one of them can be opened and used."
  },
  {
    "q": "What do you work on?",
    "a": "I design productivity and booking tools that respect people’s time — from the first sketch to the last edge case."
  },
  {
    "q": "How do I start?",
    "a": "Send a short note through the contact page: what you are making, who it is for, and when you need it."
  }
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const getPost = (slug) => posts.find((p) => p.slug === slug);
