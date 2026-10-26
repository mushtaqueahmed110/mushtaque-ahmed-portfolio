export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Web App' | 'Design & System';
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  turnaround: string;
}

export interface SkillItem {
  name: string;
  tag: string;
  summary: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: SkillItem[];
}

export const PERSONAL_INFO = {
  name: 'Mushtaque Ahmed',
  fullName: 'Mushtaque Ahmed',
  title: 'Full-Stack Web Developer & Software Engineer',
  phone: '+92 328 9677360',
  whatsappUrl: 'https://wa.me/923289677360?text=Hello%20Mushtaque%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  email: 'mushtaqueahmed.edu@gmail.com',
  availability: 'Available for freelance projects and developer contracts',
  linkedin: 'https://www.linkedin.com/in/mushtaque-ahmed-6197253b5',
  bio: `I am Mushtaque Ahmed, a Full-Stack Web Developer focused on building clean, high-performance websites, web applications, and management systems. My work covers frontend user interfaces with React and Tailwind CSS, backend REST APIs with Node.js and Express, and intuitive UI/UX designs. I prioritize responsive layouts, clean code structure, and reliable communication.`,
  detailedBio: `As a software engineer, I enjoy solving practical problems through web technologies and design. I pay close attention to mobile responsiveness—making sure navigation menus, forms, and layouts work seamlessly on all screens. Whether developing full-stack web applications, e-commerce stores, custom management systems, or UI/UX interfaces in Figma, I write clean, maintainable code and deliver dependable results.`
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'developer-portfolio-cms',
    title: 'Developer Portfolio + CMS',
    category: 'Full-Stack',
    shortDesc: 'A responsive developer portfolio integrated with a content management system for managing case studies and dynamic updates.',
    fullDesc: 'Developed using React and Tailwind CSS on the frontend with a Node.js and Express backend. Includes an administrative area for managing articles, dynamic project categorization, and responsive dark mode presentation.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Administrative portal for updating and publishing content',
      'Dynamic markdown editor with real-time formatting preview',
      'Project categorization and instant search filtering',
      'Mobile-tested responsive layout with zero layout shifts'
    ]
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Full-Stack',
    shortDesc: 'A complete online shopping platform featuring real-time product filtering, shopping cart state, and order tracking.',
    fullDesc: 'An end-to-end e-commerce solution engineered with React and a scalable Node.js/Express API. Includes product catalog browsing with multi-parameter filtering, stock tracking, persistent cart state, and an order management overview.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Real-time search, price range filtering, and category sorting',
      'Shopping cart state management with local persistence',
      'Relational database schema for catalog items and orders',
      'Admin order overview table with status updating'
    ]
  },
  {
    id: 'project-management-app',
    title: 'Project Management App',
    category: 'Web App',
    shortDesc: 'A collaborative task and sprint management tool with interactive Kanban workflow boards and progress tracking.',
    fullDesc: 'A productivity web application designed to help teams track work items. Features status columns for task progression (To Do, In Progress, Under Review, Completed), priority tagging, due dates, and search filters.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    features: [
      'Interactive Kanban workflow with status transitions',
      'Task details with priority levels, assignment labels, and due dates',
      'Search and filter controls by project and priority',
      'Responsive design tested for desktop and touch-friendly mobile screens'
    ]
  },
  {
    id: 'ai-chatbot-platform',
    title: 'AI Chatbot Platform',
    category: 'Full-Stack',
    shortDesc: 'A conversational assistant web application with streaming responses, conversation history management, and clean chat UI.',
    fullDesc: 'A conversational application built with a responsive React frontend and an Express server. Features real-time token streaming, formatted code block syntax highlighting, multi-conversation history tabs, and parameter controls.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    features: [
      'Real-time streaming text interface with markdown formatting',
      'Sidebar conversation history with rename and clear actions',
      'Prompt management and model parameter configuration settings',
      'Clean mobile chat layout with smooth auto-scroll'
    ]
  },
  {
    id: 'saas-admin-dashboard',
    title: 'SaaS Admin Dashboard',
    category: 'Frontend',
    shortDesc: 'An administrative analytics console with data visualization, user role management, and exportable reports.',
    fullDesc: 'A clean business dashboard created for software platforms. Features metric overview cards, user directory tables with role badges, search filtering, and responsive navigation suitable for both monitors and tablets.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    features: [
      'Overview metric cards for active users, monthly revenue, and health',
      'User management data table with search and role filters',
      'Responsive sidebar navigation with collapsed icon mode',
      'Clean dark-themed UI adhering to high contrast readability'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    categoryKey: 'frontend',
    description: 'Modern user interface development focusing on responsiveness, performance, and accessibility.',
    skills: [
      { name: 'React.js', tag: 'Core Framework', summary: 'Building component architectures, reusable UI elements, state hooks, and routing' },
      { name: 'TypeScript', tag: 'Type Safety', summary: 'Strict typing, robust component interfaces, refactoring confidence, and clean code' },
      { name: 'Tailwind CSS', tag: 'Modern Styling', summary: 'Utility-first styling, dark mode tokens, fluid spacing, and custom theme systems' },
      { name: 'JavaScript (ES6+)', tag: 'Core Language', summary: 'Async/await routines, DOM manipulation, closures, event delegation, and JSON handling' },
      { name: 'HTML5 Semantic Web', tag: 'Structure', summary: 'Clean semantic hierarchy, SEO meta structure, and accessible document outline' },
      { name: 'CSS3 Grid & Flexbox', tag: 'Layout Engine', summary: 'Advanced multi-column responsive grids, flex layouts, and zero layout shift' }
    ]
  },
  {
    title: 'Backend & Server Architecture',
    categoryKey: 'backend',
    description: 'Scalable server-side development, endpoint routing, middleware, and authentication.',
    skills: [
      { name: 'Node.js', tag: 'Runtime Engine', summary: 'Server scripts, asynchronous I/O, event-driven processes, and package integration' },
      { name: 'Express.js', tag: 'API Framework', summary: 'RESTful API routing, request validation, error-handling middleware, and CORS policies' },
      { name: 'RESTful API Design', tag: 'Architecture', summary: 'Standard HTTP methods, clean JSON endpoint contracts, status codes, and query params' },
      { name: 'Authentication & Security', tag: 'Server Security', summary: 'JWT token validation, password hashing with bcrypt, protected routes, and headers' }
    ]
  },
  {
    title: 'Databases & Storage',
    categoryKey: 'database',
    description: 'Relational and document storage design, query optimization, and structured schemas.',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational DB', summary: 'Relational table design, foreign key constraints, joins, indexing, and transactional integrity' },
      { name: 'SQL Querying', tag: 'Data Language', summary: 'Writing efficient select, filter, aggregate, update, and deletion queries' },
      { name: 'MongoDB', tag: 'Document DB', summary: 'NoSQL collections, flexible document models, and schema modeling' },
      { name: 'Data Modeling & CRUD', tag: 'System Design', summary: 'Entity relationships, schema normalization, input sanitization, and data validations' }
    ]
  },
  {
    title: 'UI/UX & Creative Design',
    categoryKey: 'design',
    description: 'User experience design, interactive wireframing, component libraries, and branding assets.',
    skills: [
      { name: 'Figma UI/UX Design', tag: 'Design Tool', summary: 'High-fidelity wireframes, responsive mobile/desktop variants, and developer handoff' },
      { name: 'Design Systems & Tokens', tag: 'UI Architecture', summary: 'Consistent color scales, typographic hierarchy, spacing tokens, and component sets' },
      { name: 'Wireframing & Prototyping', tag: 'UX Workflow', summary: 'User journey mapping, low-to-high fidelity screen flows, and interactive prototypes' },
      { name: 'Graphic Design & Branding', tag: 'Brand Identity', summary: 'Logo design, brand guides, vector graphics, and digital marketing banners' }
    ]
  },
  {
    title: 'Development Tools & Workflow',
    categoryKey: 'tooling',
    description: 'Industry-standard version control, code editors, debugging tools, and build pipelines.',
    skills: [
      { name: 'Git & Version Control', tag: 'Version Control', summary: 'Commit workflows, feature branches, merging, pull requests, and history management' },
      { name: 'GitHub Ecosystem', tag: 'Collaboration', summary: 'Remote code repositories, team collaboration, code reviews, and issue tracking' },
      { name: 'VS Code & Tooling', tag: 'Development', summary: 'Configured extensions, linting rules, debugging consoles, and terminal scripting' },
      { name: 'Browser DevTools', tag: 'Profiling', summary: 'DOM inspection, responsive viewport testing, network analysis, and console debugging' }
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'fullstack-web-development',
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development connecting responsive frontend interfaces in React and Tailwind CSS with scalable Node.js and Express backend architectures.',
    deliverables: [
      'Responsive React frontend user interface',
      'Node.js REST API with structured routing and controllers',
      'Database integration (PostgreSQL or MongoDB)',
      'Secure authentication, session handling, and form validation',
      'Clean source code structure and deployment setup'
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    turnaround: '2 - 3 Weeks'
  },
  {
    id: 'ecommerce-website-development',
    title: 'E-Commerce Website Development',
    description: 'Complete e-commerce store setups with product catalogs, shopping cart flows, checkout integrations, and product management features.',
    deliverables: [
      'Product catalog with search, categorization, and filtering',
      'Shopping cart state management and checkout integration',
      'Mobile-optimized shopping experience on all devices',
      'Administrative order and inventory management view'
    ],
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    turnaround: '2 - 3 Weeks'
  },
  {
    id: 'uiux-design-figma',
    title: 'UI/UX Design (Figma)',
    description: 'User-centered interface design and interactive prototypes crafted in Figma with attention to layout grid systems, typography, and mobile ergonomics.',
    deliverables: [
      'Modern, custom wireframes and high-fidelity screen mockups',
      'Mobile and desktop responsive screen variants',
      'Component design systems with consistent typography and color palettes',
      'Interactive Figma prototypes ready for development handoff'
    ],
    techStack: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping'],
    turnaround: '5 - 10 Days'
  },
  {
    id: 'graphic-design-branding',
    title: 'Graphic Design & Branding',
    description: 'Distinctive visual identity assets, logos, social media graphics, and brand styling tailored to elevate your business presence.',
    deliverables: [
      'Custom logo design and vector brand marks',
      'Brand style guide (color palette, typography rules, brand assets)',
      'Digital banners, social media assets, and promotional graphics',
      'High-resolution vector exports (SVG, PNG, PDF)'
    ],
    techStack: ['Branding', 'Vector Design', 'Visual Identity', 'Typography'],
    turnaround: '3 - 7 Days'
  },
  {
    id: 'management-system-development',
    title: 'Management System Development',
    description: 'Custom internal tools, dashboards, CRM/ERP management systems, and workflow utilities engineered to automate and organize business operations.',
    deliverables: [
      'Custom database schemas with relational integrity',
      'User management with role-based access permissions',
      'Interactive data tables with search, sorting, and pagination',
      'Operational status tracking, logs, and activity reports'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
    turnaround: '2 - 4 Weeks'
  }
];

export const FAQS = [
  {
    q: 'How do we communicate during a project?',
    a: 'We communicate directly through WhatsApp or Email. I share regular progress updates and test links so you can review the work step by step.'
  },
  {
    q: 'Can you work on both design (Figma) and development?',
    a: 'Yes. I handle both UI/UX design in Figma and front-to-back development, ensuring the final website matches the design accurately.'
  },
  {
    q: 'Will the website work properly on mobile phones?',
    a: 'Yes. I test on various screen sizes to make sure the mobile navigation drawer opens properly, buttons are easy to tap, and layouts adapt smoothly.'
  },
  {
    q: 'How do I receive the completed code or design assets?',
    a: 'I provide the source code in a clean zip archive or repository, along with all Figma design files, exports, and simple deployment instructions.'
  }
];
