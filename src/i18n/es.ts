const es = {
  nav: {
    about: 'Sobre mí',
    skills: 'Skills',
    experience: 'Experiencia',
    education: 'Educación',
    contact: 'Contacto',
  },
  hero: {
    available: 'Disponible para nuevas oportunidades',
    subtitle:
      'Full Stack Developer con más de 4 años construyendo aplicaciones escalables en manufactura, alimentos y tecnología.',
    cta1: 'Ver experiencia',
    cta2: 'Contactar',
    phrases: [
      'Full Stack Developer',
      'React & Node.js',
      'DevOps & CI/CD',
      'Docker · Kubernetes',
      'AWS · Cloud',
      'IA & Claude Code',
      'TypeScript · Clean Code',
      'Problem Solver',
    ],
    stats: [
      { value: '4+', label: 'Años exp.' },
      { value: '5',  label: 'Empresas' },
      { value: '15+', label: 'Tecnologías' },
      { value: 'B2', label: 'Inglés' },
    ],
  },
  about: {
    label: 'Sobre mí',
    title: 'Construyo soluciones que impactan en entornos reales',
    paragraphs: [
      'Soy un <b>Full Stack Developer</b> con más de 4 años de experiencia en proyectos de desarrollo web y aplicaciones empresariales. Mi trayectoria abarca industrias de manufactura, alimentos y tecnología.',
      'Tengo dominio sólido en <b>React, Node.js y PostgreSQL</b> para desarrollo full stack, complementado con Angular, .NET y múltiples motores de bases de datos.',
      'Me apasiona la infraestructura moderna: trabajo con <b>Docker, Kubernetes, Helm y CI/CD</b>, con experiencia práctica en AWS. También integro <b>IA (Claude Code)</b> para potenciar la productividad de los equipos.',
      'Nivel de inglés <b>B2</b>, comunicación fluida en entornos técnicos internacionales. Metodologías ágiles Scrum / Kanban.',
    ],
    highlights: [
      { icon: '⚡', title: 'Full Stack Completo', desc: 'React/Angular en frontend, Node.js/.NET en backend. Arquitectura escalable de punta a punta.' },
      { icon: '🐳', title: 'DevOps & Cloud',     desc: 'Docker, Kubernetes, Helm, CI/CD y AWS. Despliegues confiables y automatizados.' },
      { icon: '🤖', title: 'IA & Agentes',        desc: 'Construcción de agentes con Claude Code y diseño de prompts/skills para automatizar el ciclo de desarrollo.' },
      { icon: '🗄️', title: 'Bases de Datos',     desc: 'PostgreSQL, MySQL, SQL Server y MongoDB. Optimización de queries y diseño de esquemas.' },
    ],
  },
  skills: {
    label: 'Stack técnico',
    title: 'Habilidades & Tecnologías',
    desc: 'Herramientas construidas en proyectos reales a lo largo de múltiples industrias y equipos.',
    groups: [
      { icon: '⚛',  name: 'Frontend',             color: '#61DAFB', tags: [{ name: 'React', hot: true }, { name: 'TypeScript', hot: true }, { name: 'Angular' }, { name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }] },
      { icon: '⬡',  name: 'Backend',              color: '#68A063', tags: [{ name: 'Node.js', hot: true }, { name: 'TypeScript', hot: true }, { name: '.NET' }, { name: 'C#' }, { name: 'Python' }, { name: 'C' }] },
      { icon: '🗄',  name: 'Bases de Datos',       color: '#336791', tags: [{ name: 'PostgreSQL', hot: true }, { name: 'MySQL' }, { name: 'SQL Server' }, { name: 'MongoDB' }] },
      { icon: '🐳',  name: 'DevOps & Cloud',       color: '#2496ED', tags: [{ name: 'Docker', hot: true }, { name: 'Kubernetes', hot: true }, { name: 'Helm' }, { name: 'CI/CD' }, { name: 'AWS' }, { name: 'Linux' }, { name: 'Git' }] },
      { icon: '🤖',  name: 'IA & Agentes',         color: '#FF6B9D', tags: [{ name: 'Claude Code', hot: true }, { name: 'Agentes IA' }, { name: 'Prompts' }, { name: 'Skills' }] },
      { icon: '📊',  name: 'Datos & Metodologías', color: '#F2C811', tags: [{ name: 'Power BI' }, { name: 'Scrum' }, { name: 'Kanban' }, { name: 'GitHub' }, { name: 'Code Review' }] },
    ],
  },
  experience: {
    label: 'Trayectoria',
    title: 'Experiencia Profesional',
    desc: 'Más de 4 años construyendo soluciones de software en entornos empresariales reales.',
    jobs: [
      {
        role: 'Desarrollador Full Stack',
        company: 'Fracttal Colombia S.A.S.',
        from: 'Nov 2025', to: 'Sep 2026', location: 'Medellín, CO',
        bullets: [
          'Desarrollo full stack con React (frontend) y Node.js (backend) bajo Scrum/Kanban.',
          'Diseño y mantenimiento de bases de datos PostgreSQL con optimización de queries críticos.',
          'Implementación y gestión de pipelines CI/CD para entrega continua de funcionalidades.',
          'Construcción de agentes de IA con Claude Code para automatizar el ciclo de desarrollo.',
          'Participación en decisiones de arquitectura para sistemas escalables y mantenibles.',
          'Code reviews exhaustivos que redujeron errores antes de llegar a producción.',
        ],
        chips: ['React', 'Node.js', 'PostgreSQL', 'CI/CD', 'Claude Code', 'Agentes IA'],
      },
      {
        role: 'Software Developer · Data Analyst',
        company: 'Cárnicos y Alimentos Pollocoa',
        from: 'Feb 2025', to: 'Sep 2025', location: 'Colombia',
        bullets: [
          'Desarrollo de aplicaciones web con Angular y Node.js para procesos internos y e-commerce.',
          'Administración y optimización de bases de datos MySQL y MongoDB.',
          'DevOps con Docker, reduciendo errores en producción mediante despliegues automatizados.',
          'Reportes y dashboards en Power BI para toma de decisiones gerenciales.',
        ],
        chips: ['Angular', 'Node.js', 'MySQL', 'MongoDB', 'Docker', 'Power BI'],
      },
      {
        role: 'Software Developer · Data Analyst',
        company: 'Industrias Metálicas Corsan',
        from: 'Dic 2023', to: 'Jun 2024', location: 'Colombia',
        bullets: [
          'Desarrollo en .NET y SQL Server para automatizar procesos administrativos manuales.',
          'Gestión y mantenimiento de bases de datos con mejoras en integridad y disponibilidad.',
          'Reducción de tiempos de resolución de incidencias técnicas reportadas por usuarios.',
        ],
        chips: ['.NET', 'C#', 'SQL Server'],
      },
      {
        role: 'Software Developer',
        company: 'Montacargas AM&M',
        from: 'Abr 2022', to: 'Oct 2022', location: 'Colombia',
        bullets: [
          'Desarrollo en C# y SQL para áreas operativas, mejorando el control de inventarios.',
          'Optimización de consultas SQL que redujeron tiempos de respuesta de la base de datos.',
          'Documentación técnica y soporte a usuarios clave del sistema.',
        ],
        chips: ['C#', 'SQL'],
      },
    ],
  },
  education: {
    label: 'Formación',
    title: 'Educación',
    desc: 'Base académica sólida combinada con certificaciones prácticas y aprendizaje continuo.',
    items: [
      { year: '2018 — 2020', degree: 'Full-Stack Development',     institution: 'Holberton School · Medellín, Colombia' },
      { year: '2020 — 2021', degree: 'Software Developer',          institution: 'Certificación · Coursera + Udemy' },
      { year: 'Continuo',    degree: 'Idiomas',                     institution: 'Español Nativo · Inglés B2' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: '¿Trabajamos juntos?',
    intro: 'Estoy disponible para nuevas oportunidades, proyectos freelance o colaboraciones técnicas. Escríbeme y charlamos.',
    available: 'Disponible',
    role: 'Full Stack Developer',
    stack: 'React · Node.js · DevOps · IA',
    location: 'Medellín, Colombia 🇨🇴',
    links: [
      { icon: '✉', bg: 'accent',   label: 'Email',    value: 'cresrugi@gmail.com' },
      { icon: 'in', bg: 'linkedin', label: 'LinkedIn',  value: 'linkedin.com/in/cristian-rua' },
      { icon: '⌥', bg: 'github',   label: 'GitHub',   value: 'github.com/cresrugi' },
      { icon: '☎', bg: 'whatsapp', label: 'Teléfono', value: '+57 302 529 2749' },
    ],
  },
  footer: {
    text: 'Cristian Esteban Rua Giraldo — Full Stack Developer — 2026',
  },
} as const

export default es
export type Translations = typeof es
