import type { Translations } from './es'

const en: Translations = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    available: 'Open to new opportunities',
    subtitle:
      'Full Stack Developer with 4+ years building scalable applications in manufacturing, food and technology industries.',
    cta1: 'View experience',
    cta2: 'Get in touch',
    phrases: [
      'Full Stack Developer',
      'React & Node.js',
      'DevOps & CI/CD',
      'Docker · Kubernetes',
      'AWS · Cloud',
      'AI & Claude Code',
      'TypeScript Enthusiast',
    ],
    stats: [
      { value: '4+', label: 'Years exp.' },
      { value: '5',  label: 'Companies' },
      { value: '15+', label: 'Technologies' },
      { value: 'B2', label: 'English' },
    ],
  },
  about: {
    label: 'About me',
    title: 'I build impactful solutions in real-world environments',
    paragraphs: [
      'I am a <b>Full Stack Developer</b> with over 4 years of experience in web development and enterprise application projects. My career spans manufacturing, food and technology industries.',
      'I have solid command of <b>React, Node.js and PostgreSQL</b> for full-stack development, complemented by Angular, .NET and multiple database engines.',
      'I am passionate about modern infrastructure: I work with <b>Docker, Kubernetes, Helm and CI/CD</b>, with hands-on AWS experience. I also integrate <b>AI (Claude Code)</b> to boost team productivity.',
      'English level <b>B2</b>, fluent in international technical environments. Agile methodologies: Scrum / Kanban.',
    ],
    highlights: [
      { icon: '⚡', title: 'Full Stack',    desc: 'React/Angular on the frontend, Node.js/.NET on the backend. Scalable end-to-end architecture.' },
      { icon: '🐳', title: 'DevOps & Cloud', desc: 'Docker, Kubernetes, Helm, CI/CD and AWS. Reliable and automated deployments.' },
      { icon: '🤖', title: 'AI & Agents',    desc: 'Building AI agents with Claude Code and designing prompts/skills to automate the development cycle.' },
      { icon: '🗄️', title: 'Databases',     desc: 'PostgreSQL, MySQL, SQL Server and MongoDB. Query optimization and schema design.' },
    ],
  },
  skills: {
    label: 'Tech stack',
    title: 'Skills & Technologies',
    desc: 'Tools built through real projects across multiple industries and teams.',
    groups: [
      { icon: '⚛',  name: 'Frontend',        color: '#61DAFB', tags: [{ name: 'React', hot: true }, { name: 'TypeScript', hot: true }, { name: 'Angular' }, { name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }] },
      { icon: '⬡',  name: 'Backend',         color: '#68A063', tags: [{ name: 'Node.js', hot: true }, { name: 'TypeScript', hot: true }, { name: '.NET' }, { name: 'C#' }, { name: 'Python' }, { name: 'C' }] },
      { icon: '🗄',  name: 'Databases',       color: '#336791', tags: [{ name: 'PostgreSQL', hot: true }, { name: 'MySQL' }, { name: 'SQL Server' }, { name: 'MongoDB' }] },
      { icon: '🐳',  name: 'DevOps & Cloud',  color: '#2496ED', tags: [{ name: 'Docker', hot: true }, { name: 'Kubernetes', hot: true }, { name: 'Helm' }, { name: 'CI/CD' }, { name: 'AWS' }, { name: 'Linux' }, { name: 'Git' }] },
      { icon: '🤖',  name: 'AI & Agents',     color: '#FF6B9D', tags: [{ name: 'Claude Code', hot: true }, { name: 'AI Agents' }, { name: 'Prompts' }, { name: 'Skills' }] },
      { icon: '📊',  name: 'Data & Methods',  color: '#F2C811', tags: [{ name: 'Power BI' }, { name: 'Scrum' }, { name: 'Kanban' }, { name: 'GitHub' }, { name: 'Code Review' }] },
    ],
  },
  experience: {
    label: 'Career',
    title: 'Professional Experience',
    desc: '4+ years building software solutions in real enterprise environments.',
    jobs: [
      {
        role: 'Full Stack Developer',
        company: 'Fracttal Colombia S.A.S.',
        from: 'Nov 2025', to: 'Sep 2026', location: 'Medellín, CO',
        bullets: [
          'Full stack development with React (frontend) and Node.js (backend) under Scrum/Kanban.',
          'PostgreSQL database design and maintenance with critical query optimization.',
          'CI/CD pipeline implementation and management for continuous feature delivery.',
          'Building AI agents with Claude Code to automate the team\'s development cycle.',
          'Architecture decisions for scalable and maintainable systems.',
          'Code reviews that reduced production bugs and improved overall code quality.',
        ],
        chips: ['React', 'Node.js', 'PostgreSQL', 'CI/CD', 'Claude Code', 'AI Agents'],
      },
      {
        role: 'Software Developer · Data Analyst',
        company: 'Cárnicos y Alimentos Pollocoa',
        from: 'Feb 2025', to: 'Sep 2025', location: 'Colombia',
        bullets: [
          'Web application development with Angular and Node.js for internal processes and e-commerce.',
          'MySQL and MongoDB database administration and optimization.',
          'Docker-based DevOps, reducing production errors through automated deployments.',
          'Power BI reports and dashboards supporting management decision-making.',
        ],
        chips: ['Angular', 'Node.js', 'MySQL', 'MongoDB', 'Docker', 'Power BI'],
      },
      {
        role: 'Software Developer · Data Analyst',
        company: 'Industrias Metálicas Corsan',
        from: 'Dec 2023', to: 'Jun 2024', location: 'Colombia',
        bullets: [
          '.NET and SQL Server development to automate previously manual administrative processes.',
          'Database management and maintenance with integrity and availability improvements.',
          'Reduced resolution time for technical incidents reported by end users.',
        ],
        chips: ['.NET', 'C#', 'SQL Server'],
      },
      {
        role: 'Software Developer',
        company: 'Montacargas AM&M',
        from: 'Apr 2022', to: 'Oct 2022', location: 'Colombia',
        bullets: [
          'C# and SQL development for operational areas, improving inventory control.',
          'SQL query optimization that reduced database response times.',
          'Technical documentation and support for key system users.',
        ],
        chips: ['C#', 'SQL'],
      },
    ],
  },
  education: {
    label: 'Education',
    title: 'Education',
    desc: 'Solid academic foundation combined with practical certifications and continuous learning.',
    items: [
      { year: '2018 — 2020', degree: 'Full-Stack Development', institution: 'Holberton School · Medellín, Colombia' },
      { year: '2020 — 2021', degree: 'Software Developer',      institution: 'Certification · Coursera + Udemy' },
      { year: 'Ongoing',     degree: 'Languages',               institution: 'Native Spanish · English B2' },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's work together",
    intro: 'I am available for new opportunities, freelance projects or technical collaborations. Drop me a message.',
    available: 'Available',
    role: 'Full Stack Developer',
    stack: 'React · Node.js · DevOps · AI',
    location: 'Medellín, Colombia 🇨🇴',
    links: [
      { icon: '✉', bg: 'accent',   label: 'Email',   value: 'cresrugi@gmail.com' },
      { icon: 'in', bg: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/cristian-rua' },
      { icon: '⌥', bg: 'github',   label: 'GitHub',  value: 'github.com/cresrugi' },
      { icon: '☎', bg: 'whatsapp', label: 'Phone',   value: '+57 302 529 2749' },
    ],
  },
  footer: {
    text: 'Cristian Esteban Rua Giraldo — Full Stack Developer — 2026',
  },
}

export default en
