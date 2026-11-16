// SOURCE: updated resume (Mo_Aslam_Khan_CV.pdf). Edit here to change site content.
export const profile = {
  name: 'Mo Aslam Khan',
  role: 'Full Stack Developer',
  email: 'khanaslampathan142@gmail.com',
  phone: '+91 8619582376',
  location: 'Mehsana, India',
  linkedin: 'https://linkedin.com/in/mo-aslam-khan',
  github: 'https://github.com/AslamKhanpathan142',
  resume: '/resume.pdf',
}

export const summary =
  'Full Stack Developer with hands-on experience building responsive web applications using React.js, Node.js, Express.js and Python. Experienced in developing RESTful APIs, implementing authentication and RBAC, and integrating AI-powered document processing workflows using OCR, Redis and Google Gemini API. Strong foundation in database management, application development and problem-solving, with an interest in building scalable, AI-enabled software solutions.'

export const skills = [
  { title: 'Frontend', icon: 'LuMonitor', items: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React Router', 'React Native', 'Responsive Design'] },
  { title: 'Backend', icon: 'LuServer', items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'API Integration', 'Authentication', 'Role-Based Access Control (RBAC)', 'Queue-Based Workers'] },
  { title: 'Databases', icon: 'LuDatabase', items: ['MongoDB', 'SQL', 'Supabase', 'Redis', 'CRUD Operations'] },
  { title: 'AI & Automation', icon: 'LuSparkles', items: ['Generative AI', 'Gemini API', 'OCR', 'Document Processing', 'Lovable'] },
  { title: 'Stack & Tools', icon: 'LuWrench', items: ['MERN Stack', 'Git', 'GitHub', 'Postman', 'VS Code'] },
  { title: 'Core', icon: 'LuBookOpen', items: ['Object-Oriented Programming (Java)', 'DBMS'] },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'AARAV TENDER CONSULTANT PRIVATE LIMITED',
    place: 'Mehsana, India',
    period: '04/2026 – Present',
    points: [
      'Built end-to-end web applications with React.js, JavaScript, HTML and CSS, delivering responsive, cross-browser compatible user interfaces.',
      'Developed an AI-powered tender processing pipeline using Python, Redis, OCR tools and the Gemini API for document extraction, cleaning and summarization.',
      'Designed backend workflows for tender handling, covering PDF processing, multilingual OCR, queue-based workers and structured data storage for tender analysis.',
    ],
  },
  {
    role: 'Web Development',
    company: 'CODTECH IT SOLUTIONS PRIVATE LIMITED',
    place: '',
    period: '05/2025 – 07/2025',
    points: [
      'Developed responsive web applications with React.js, JavaScript and component-based architecture, integrating REST APIs for dynamic data rendering.',
      'Implemented client-side routing with React Router and used Node.js and Git/GitHub for version control.',
    ],
  },
]

export const education = {
  degree: 'BCA in Computer Applications',
  school: 'Ganpat University',
  period: '07/2023 – 04/2026',
  detail: 'CGPA: 8.90',
  coursework: 'Web Development, DBMS, OOP in Java, Programming Languages',
}

export const certifications = [{ title: 'Basic Software Development', issuer: 'Coursera', period: '04/2025 – 05/2025' }]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]
