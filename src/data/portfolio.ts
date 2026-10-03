import type { Experience } from '../types/portfolio';

export const profile = {
  name: 'Yoga Anand',
  email: 'yogaanandkr@gmail.com',
  github: 'https://github.com/yogaanandkr',
  linkedin: 'https://www.linkedin.com/in/yoga-anand-b07809219/',
  resume: `${import.meta.env.BASE_URL}yogaanand_resume.pdf`,
} as const;
export const navigation = ['Experience', 'Skills', 'Contact'] as const;

export const experiences: readonly Experience[] = [
  {
    number: '01',
    client: 'FLIPKART · VIA SKETCH BRAHMA',
    title: 'Seller Dashboard',
    date: 'DEC 2025 — JUL 2026',
    details: [
      "Developed and maintained seller-facing features for Flipkart's Seller Dashboard, supporting high-traffic e-commerce operations.",

      'Engineered key workflows including Scan & Mark RTD, Warehouse Onboarding, Printer Settings, and Pharma/IMEI Update.',

      'Implemented Date-by-Dispatch (DBD) restrictions to enforce order-processing rules during peak sale events.',

      "Extended Flipkart's internal component library with reusable UI components to improve consistency and reduce duplicate development effort.",

      'Contributed to the Order Dashboard API migration, integrating updated backend services with existing frontend workflows.',

      'Resolved production defects and served as an on-call engineer, performing root cause analysis for seller-reported incidents.',

      'Collaborated with cross-functional teams to troubleshoot business-critical issues and deliver production-ready solutions.',

      "Participated in Flipkart's AI Product Development Lifecycle (PDLC) Workshop.",
    ],
    role: 'Product Engineer',
    skills: [
      'React.js',
      'GrahpQl',
      'Redux',
      'Typescript',
      'Javascript',
      'Styled Components',
      'Claude Code',
      'cursor',
    ],
  },
  {
    number: '02',
    client: 'TRIGENT SOFTWARE',
    title: 'Learning Management System',
    date: 'JUN 2024 — NOV 2025',
    details: [
      'Developed a role-based Learning Management System (LMS) from the ground up, contributing to both frontend and backend architecture.',

      'Built an interactive Course Builder supporting sections, lectures, assessments, file uploads, and URL-based learning resources.',

      'Integrated Google SSO/OAuth to enable secure user authentication and role-based access.',

      'Implemented AWS S3 and Google Drive API integrations for video uploads, file storage, and learning content management.',

      'Developed real-time upload tracking for video and document content using WebSockets.',

      'Built assessment workflows, automated certificate generation, LinkedIn certificate sharing, and email notification features.',

      'Integrated the LMS with HRMS to automate employee synchronization and streamline administrative workflows.',
    ],
    role: 'Software Engineer',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySql',
      'CI/CD',
      'Google SSO',
      'AWS S3',
      'Socket.io',
      'Websockets',
      'REST',
      'Redux',
      'Typescript',
      'Javascript',
      'Cursor',
      'Tailwind CSS',
    ],
  },
  {
    number: '03',
    client: 'BLUE.CLOUD',
    title: 'DevOps automation & analytics',
    date: 'JUL 2022 — OCT 2023',
    details: [
      "Developed frontend and backend features for ThoughtSpot's DevOps automation platform using React.js and Django.",

      'Contributed to workflow automation features aimed at improving operational efficiency and reducing manual processes.',

      'Designed Power BI KPI dashboards using Snowflake data to support business reporting and decision-making.',

      'Supported the METUS project through technical documentation, QA testing, and cross-functional collaboration.',
    ],
    role: 'Associate Analyst Specialist',
    skills: [
      'React.js',
      'Python',
      'Django',
      'Javascript',
      'Snowflake',
      'SQL',
      'Power BI',
      'ThoughtSpot',
      'DBT',
    ],
  },
];
export const skillGroups: Record<string, readonly string[]> = {
  Frontend: [
    'React.js',
    'TypeScript',
    'JavaScript',
    'Redux',
    'React Hooks',
    'HTML5',
    'CSS3',
    'Responsive UI',
  ],
  Backend: [
    'Node.js',
    'Express.js',
    'REST APIs',
    'GraphQL',
    'Authentication',
    'Socket.IO',
    'WebSockets',
    'MongoDB',
    'SQL',
  ],
  'Tools & cloud': [
    'Git',
    'GitHub',
    'AWS S3',
    'Postman',
    'npm',
    'Sequelize',
    'Snowflake',
    'Google Drive service accounts',
    'CI/CD',
  ],
};
