export interface HomepageAchievementBlock {
  id: string;
  category: string;
  title: string;
  number: string;
  description: string;
  label: string;
  image?: string;
  link?: string;
}

export interface DetailedAchievementItem {
  id: string;
  title: string;
  description: string;
  metadata?: string;
  image?: string;
  link?: string;
}

export interface AchievementCategory {
  id: string;
  categoryTitle: string;
  description: string;
  items: DetailedAchievementItem[];
}

export const homepageAchievements: HomepageAchievementBlock[] = [
  {
    id: 'hackathons',
    category: 'HACKATHONS WON',
    title: 'Hackathon Recognitions & Awards',
    number: '01',
    description: 'Competitive software hackathons and rapid prototyping challenges showcasing high-speed technical problem solving and software architecture.',
    label: 'COMPETITIVE ENGINEERING',
  },
  {
    id: 'presentations',
    category: 'PRESENTATIONS WON',
    title: 'Technical Presentations & Demos',
    number: '02',
    description: 'Technical project demonstrations, database architecture defenses, and academic presentations evaluating software utility and execution.',
    label: 'TECHNICAL DEFENSE',
  },
  {
    id: 'experiences',
    category: 'OTHER ACHIEVEMENTS & EXPERIENCES',
    title: 'Industry Internships & Milestones',
    number: '03',
    description: 'Practical industry exposure including a software development internship alongside technical milestones and collaborative development projects.',
    label: 'PRACTICAL EXPERIENCE',
  },
];

export const detailedAchievements: AchievementCategory[] = [
  {
    id: 'awards-hackathons',
    categoryTitle: 'Awards & Hackathons',
    description: 'Recognitions, competitive engineering wins, and software build hackathons.',
    items: [
      {
        id: 'hackathon-first-place',
        title: 'Hackathon Award Winner',
        description: 'First place recognition for rapid product engineering and AI-assisted safety system architecture.',
        metadata: 'Competitive Hackathon • Software Engineering',
      },
      {
        id: 'technical-innovation',
        title: 'Technical Innovation Recognition',
        description: 'Awarded for exceptional user experience design and backend integration in student developer challenge.',
        metadata: 'Software Showcase • Product Architecture',
      },
    ],
  },
  {
    id: 'presentations',
    categoryTitle: 'Presentations & Demos',
    description: 'Project showcases, technical defenses, and academic engineering presentations.',
    items: [
      {
        id: 'dbms-project-defense',
        title: 'Civic Technology DBMS Project Presentation',
        description: 'Engineered and presented relational database architecture and AI complaint triage algorithm to faculty panel.',
        metadata: 'DBMS Project Defense • System Design',
      },
      {
        id: 'ai-product-showcase',
        title: 'Applied AI Product Architecture Defense',
        description: 'Demonstrated real-time mobile safety sensors and Gemini API product integration.',
        metadata: 'Product Showcase • AI Systems',
      },
    ],
  },
  {
    id: 'experiences',
    categoryTitle: 'Experiences & Internships',
    description: 'Software development internships, research collaborations, and engineering milestones.',
    items: [
      {
        id: 'software-internship-1mo',
        title: 'Software Engineering Internship',
        description: 'One-month software development internship focused on application development, codebase refactoring, and full-stack API integration.',
        metadata: 'Software Engineering • Industry Experience',
      },
      {
        id: 'student-builder-milestone',
        title: 'Independent Software Studio Milestones',
        description: 'Built and published six distinct software projects spanning AI, safety, cybersecurity, and productivity tools.',
        metadata: 'Studio Development • Full-Stack Engineering',
      },
    ],
  },
];
