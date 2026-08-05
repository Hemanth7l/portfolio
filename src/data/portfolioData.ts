import type { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Hemanth B.',
    initials: 'HB',
    title: 'AI & Data Science Student | Data Analytics Intern | Aspiring AI Engineer',
    tagline:
      'Learning, building, and growing through real-world experience and continuous improvement.',
    bio: "I'm Hemanth B., a B.Tech student in Artificial Intelligence & Data Science at Gojan School of Business and Technology (Anna University). I'm passionate about Artificial Intelligence, Data Science, and Software Development. Currently, I'm learning C++, Python, Data Structures & Algorithms, SQL, and Machine Learning while gaining practical industry experience through internships. I'm committed to continuously improving my technical skills and building projects that solve real-world problems.",
    careerObjective:
      'To build a successful career in Artificial Intelligence and Data Science by continuously learning emerging technologies, solving real-world problems, and developing innovative software solutions that create meaningful impact.',
    motto: 'Learning consistently, building confidently, and growing through every challenge.',
    location: 'Tiruvallur, Tamil Nadu, India',
    availabilityBadge: 'Open to internships & collaborations',
    resumeUrl: '/resume.pdf',
    typewriterPhrases: [
      'AI & Data Science Student',
      'Data Analytics Intern',
      'Aspiring AI Engineer',
      'Python Learner',
      'Problem Solver',
    ],
    aboutTags: [
      'Artificial Intelligence',
      'Data Science',
      'Python',
      'Machine Learning',
      'Web Development',
      'Problem Solving',
    ],
  },

  currentStatus: [
    { icon: 'graduation', text: 'B.Tech AI & Data Science Student (3rd Year)' },
    { icon: 'briefcase', text: 'Data Analytics Intern at Semozhix Tech. LLP' },
    { icon: 'code', text: 'Currently Learning: C++, Python, DSA, SQL & Machine Learning' },
    { icon: 'rocket', text: 'Actively Building: Portfolio Website & AI/Data Science Projects' },
  ],

  aboutStats: [
    { icon: 'graduation', label: 'Status', value: 'B.Tech Student' },
    { icon: 'briefcase', label: 'Focus', value: 'AI & Data Science' },
    { icon: 'map-pin', label: 'Location', value: 'Tiruvallur, TN' },
  ],

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/Hemanth7l', icon: 'github' },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hemanth-b-86350a346',
      icon: 'linkedin',
    },
    { platform: 'X/Twitter', url: 'https://x.com', icon: 'twitter' },
    { platform: 'Email', url: 'mailto:hemanth2k6@gmail.com', icon: 'mail' },
  ],

  skills: [
    { name: 'C++ (Learning)', level: 42, category: 'Programming' },
    { name: 'Python (Learning)', level: 48, category: 'Programming' },
    { name: 'HTML', level: 65, category: 'Programming' },
    { name: 'CSS', level: 60, category: 'Programming' },
    { name: 'JavaScript (Learning)', level: 40, category: 'Programming' },
    { name: 'SQL (Learning)', level: 45, category: 'Programming' },
    { name: 'AI Fundamentals', level: 55, category: 'AI & Data' },
    { name: 'Data Analytics', level: 58, category: 'AI & Data' },
    { name: 'Data Science', level: 52, category: 'AI & Data' },
    { name: 'Machine Learning (Learning)', level: 38, category: 'AI & Data' },
    { name: 'Data Visualization (Learning)', level: 42, category: 'AI & Data' },
    { name: 'VS Code', level: 72, category: 'Tools' },
    { name: 'MySQL', level: 48, category: 'Tools' },
    { name: 'Power BI', level: 52, category: 'Tools' },
    { name: 'Tableau', level: 48, category: 'Tools' },
    { name: 'GitHub', level: 58, category: 'Tools' },
    { name: 'Microsoft Office', level: 68, category: 'Tools' },
  ],

  currentlyLearning: [
    'C++',
    'Python',
    'Data Structures & Algorithms',
    'SQL',
    'Git & GitHub',
    'Machine Learning',
    'Web Development',
    'Problem Solving',
  ],

  softSkills: [
    'Problem Solving',
    'Quick Learner',
    'Analytical Thinking',
    'Adaptability',
    'Teamwork',
    'Time Management',
    'Continuous Learning',
  ],

  learningJourney: [
    { title: 'Robotics Workshop', year: '2024' },
    { title: 'AI Poster Competition — Fiesta 2025', year: '2025' },
    { title: 'Data Science Internship at VIPS.Tech', year: '2025' },
    { title: 'Data Analytics Internship at Semozhix Tech. LLP', year: '2026' },
    { title: 'Learning C++ & Python', year: '2026' },
    { title: 'Building Real-World Projects', year: '2026' },
    { title: 'Preparing for AI & Software Engineering Careers' },
  ],

  projects: [
    {
      id: 'p1',
      title: 'Personal Portfolio Website',
      description:
        'Developing a modern portfolio to showcase my education, internships, certifications, and future projects.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      githubUrl: 'https://github.com/Hemanth7l',
      featured: true,
      status: 'in-progress',
    },
    {
      id: 'p2',
      title: 'AI Chatbot',
      description: 'An intelligent chatbot powered by AI — planned as part of my growing project portfolio.',
      tech: ['Python', 'AI', 'NLP'],
      status: 'upcoming',
    },
    {
      id: 'p3',
      title: 'Data Analytics Dashboard',
      description:
        'Interactive dashboard for data visualization and business insights using analytics tools.',
      tech: ['Python', 'Power BI', 'SQL'],
      status: 'upcoming',
    },
    {
      id: 'p4',
      title: 'Weather Application',
      description: 'A web application to display real-time weather data with a clean user interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      status: 'upcoming',
    },
    {
      id: 'p5',
      title: 'Student Management System',
      description: 'A system to manage student records, grades, and academic information efficiently.',
      tech: ['Python', 'SQL', 'Web Development'],
      status: 'upcoming',
    },
    {
      id: 'p6',
      title: 'Machine Learning Projects',
      description:
        'Hands-on ML projects covering classification, regression, and data-driven problem solving.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      status: 'upcoming',
    },
  ],

  experience: [
    {
      id: 'e1',
      role: 'Data Analytics Intern',
      company: 'Semozhix Tech. LLP',
      period: 'July 2026 — August 2026',
      location: 'Remote',
      current: true,
      highlights: [
        'Data Collection & Cleaning',
        'Data Analysis & Business Intelligence',
        'Dashboard & Report Creation',
        'Data Visualization',
        'Analytical Thinking & Team Collaboration',
      ],
    },
    {
      id: 'e2',
      role: 'Data Science & Analytics Intern',
      company: 'VIPS.Tech',
      period: 'July 2025',
      location: 'Remote',
      highlights: [
        'Learned Data Science & Analytics fundamentals',
        'Gained professional workplace exposure',
        'Strengthened analytical thinking skills',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) — Artificial Intelligence & Data Science',
      institution: 'Gojan School of Business and Technology (Anna University)',
      period: '2024 — 2028',
      location: 'Chennai, India',
      highlights: [
        'Specializing in AI, Data Science, and Software Development',
        'Actively building projects and gaining industry internship experience',
      ],
    },
    {
      degree: 'Higher Secondary Education (HSC)',
      institution: 'Government Higher Secondary School (TN Board)',
      period: '2023 — 2024',
      location: 'Tamil Nadu, India',
      highlights: ['Completed higher secondary education with focus on science stream'],
    },
    {
      degree: 'Secondary School Education (SSLC)',
      institution: 'Government Higher Secondary School (TN Board)',
      period: '2021 — 2022',
      location: 'Tamil Nadu, India',
      highlights: ['Completed secondary school education'],
    },
  ],

  certifications: [
    {
      name: 'Data Analytics Internship Certificate',
      issuer: 'Semozhix Tech. LLP',
      date: '2026',
    },
    {
      name: 'Robotics Workshop Certificate',
      issuer: 'Workshop Program',
      date: '2024',
    },
    {
      name: 'Poster Competition Certificate',
      issuer: 'Fiesta 2025 — Mastering AI for Entrepreneurship',
      date: '2025',
    },
    {
      name: 'Academic Participation Certificates',
      issuer: 'Various Academic Programs',
      date: '2024 — 2026',
    },
  ],

  techStack: [
    {
      category: 'Programming',
      items: ['C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    },
    {
      category: 'AI & Data',
      items: [
        'Artificial Intelligence',
        'Data Analytics',
        'Data Science',
        'Machine Learning',
        'Data Visualization',
      ],
    },
    {
      category: 'Tools',
      items: ['VS Code', 'MySQL', 'Power BI', 'Tableau', 'GitHub', 'Microsoft Office'],
    },
    {
      category: 'Currently Learning',
      items: [
        'C++',
        'Python',
        'DSA',
        'SQL',
        'Git & GitHub',
        'Machine Learning',
        'Web Development',
      ],
    },
  ],

  achievements: [
    {
      title: 'Data Analytics Intern',
      description: 'Selected for Data Analytics Internship at Semozhix Tech. LLP.',
      year: '2026',
    },
    {
      title: 'Data Science Internship Completed',
      description: 'Completed Data Science & Analytics Internship at VIPS.Tech.',
      year: '2025',
    },
    {
      title: 'Robotics Workshop',
      description: 'Participated in hands-on Robotics Workshop.',
      year: '2024',
    },
    {
      title: 'Poster Competition — Fiesta 2025',
      description: 'Participated in Poster Competition on Mastering AI for Entrepreneurship.',
      year: '2025',
    },
  ],

  contact: {
    email: 'hemanth2k6@gmail.com',
    phone: '+91 8072933431',
    location: 'Tiruvallur, Tamil Nadu, India',
    availability: 'Open to internships & collaborations',
  },
};
