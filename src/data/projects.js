export const projectCategories = [
  "All",
  "Business Management",
  "System Development",
  "Web Applications"
];

export const projects = [
  {
    id: "pension-pos-system",
    title: "PensionPOS System",
    category: "Business Management",
    categoryBadge: "Hospitality Management System",
    description: "A full-stack hospitality management solution designed for high-turnover establishments. It features real-time room booking, guest tracking, and billing automation.",
    longDescription: "PensionPOS System is a full-stack hospitality management solution designed specifically for high-turnover establishments such as pensions, inns, and boutique hotels. Features real-time room status tracking, automated billing, booking calendars, guest history management, and financial reporting.",
    image: "/pension.png",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "REST API"],
    keyFeatures: [
      "Real-time room availability & booking dashboard",
      "Automated guest check-in, check-out, and billing calculation",
      "Detailed financial transaction logs and income breakdown",
      "Role-based access control for receptionists and management"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "retail-pos-system",
    title: "RetailPOS System",
    category: "Business Management",
    categoryBadge: "Retail Management System",
    description: "RetailPOS is a robust, web-based management solution tailored for modern retail operations. It combines a high-speed Point of Sale interface with deep back-office controls.",
    longDescription: "RetailPOS is a robust, web-based management solution tailored for modern retail operations. It combines a high-speed Point of Sale interface with deep back-office controls, designed specifically to handle the complexities of multi-location businesses.\n\n• Granular Inventory Lifecycle: Manages stock from Supplier Deliveries to Branch Transfers and sales.\n• Financial & Expense Tracking: Integrates dedicated Expenses module and GCash Transaction manager.\n• Shift & Cashier Accountability: Strict Shift Management tracking starting balances, expected vs actual sales.\n• Operational Transparency: Comprehensive Activity Log recording sensitive actions with snapshots.",
    image: "/POS.png",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Fetch API"],
    keyFeatures: [
      "Granular Inventory Lifecycle & barcode scanning",
      "Integrated Expense Tracking & GCash Transaction manager",
      "Cashier Shift Management & automated cash-on-hand calculation",
      "Full audit trail & Activity Logging with before/after snapshots"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "profit-monitor-system",
    title: "ProfitMonitor System",
    category: "Business Management",
    categoryBadge: "Inventory & Sales Management",
    description: "A comprehensive inventory and sales management system designed for retail. Features a high-speed POS interface and visual profit analytics.",
    longDescription: "ProfitMonitor System is a comprehensive inventory and sales management platform built for retail businesses looking to maximize profit margins. Integrates visual profit analytics via Chart.js, stock reorder forecasting, fast checkout capabilities, and expense analytics.",
    image: "/profitmonitoring.png",
    technologies: ["PHP", "MySQL", "JavaScript", "Chart.js", "Tailwind CSS"],
    keyFeatures: [
      "Interactive Chart.js revenue and profit margin analytics",
      "Real-time sales counter and automated stock deductions",
      "Low-stock notifications and supplier order tracking",
      "Detailed profit vs. expense comparative reports"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "service-reservation-monitoring-system",
    title: "Service Reservation & Monitoring System",
    category: "System Development",
    categoryBadge: "Reservation & Tracking System",
    description: "A robust web-based management application designed to streamline the scheduling and tracking of service appointments and dispatch operations.",
    longDescription: "A robust web-based management application designed to streamline the scheduling, assignment, and real-time tracking of service reservations. Equipped with Leaflet map integrations for location monitoring, PWA support for mobile workers, and PDO database security.",
    image: "/reservation.png",
    technologies: ["Java", "MySQL", "PWA", "PHP", "BOOTSTRAP5", "LEAFLET", "PDO"],
    keyFeatures: [
      "Interactive booking calendar & automated appointment confirmation",
      "Leaflet interactive map for service dispatch & location tracking",
      "PWA capabilities for offline access and mobile usability",
      "Comprehensive service history and client management"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "ice-cream-pos-system",
    title: "Ice Cream POS System",
    category: "Business Management",
    categoryBadge: "Point-of-Sale System",
    description: "A modern, web-based Point-of-Sale (POS) system tailored for ice cream parlors. It streamlines ordering, flavor customization, and inventory tracking.",
    longDescription: "A modern, web-based Point-of-Sale (POS) system tailored for ice cream parlors and dessert shops. Streamlines order entry with rapid flavor/topping modifiers, tracks perishable ingredient stock in real-time, and generates daily sales performance summaries.",
    image: "/ice shop.png",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    keyFeatures: [
      "Customizable flavor, scoop, and topping order builder",
      "Fast checkout interface optimized for quick-service counters",
      "Ingredient-level inventory tracking and wastage logs",
      "Daily shift sales reconciliation and receipt generation"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "fin-smart-expense-tracker",
    title: "Fin: Smart Expense Tracker",
    category: "Web Applications",
    categoryBadge: "AI Financial Management",
    description: "A modern, AI-powered financial management system designed to simplify expense tracking, budgeting, and spending insights.",
    longDescription: "Fin: Smart Expense Tracker is a modern, AI-powered financial management application designed to simplify personal and business expense tracking. Features smart categorization, budget alerts, progressive web app (PWA) installation, and intuitive graphical spending summaries.",
    image: "/track_exp.png",
    technologies: ["JAVASCRIPT", "MySQL", "PHP", "TAILWIND CSS", "PWA"],
    keyFeatures: [
      "Smart category auto-tagging and budget threshold alerts",
      "PWA support for instant home screen install & offline tracking",
      "Interactive visual charts for monthly spending patterns",
      "Secure user authentication and multi-account balance tracking"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  }
];
