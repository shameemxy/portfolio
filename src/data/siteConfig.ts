export interface SiteConfig {
  name: string;
  field: string;
  role: string;
  headline: string;
  subheadline: string;
  aboutThesis: string;
  aboutDetails: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    resume?: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Shameem',
  field: 'Computer Science and Engineering',
  role: 'Computer science student and software builder',
  headline: 'Building thoughtful software products.',
  subheadline: 'AI-powered applications, developer tools, safety systems, and software built around real-world problems.',
  aboutThesis: "I'm Shameem, a computer science student and software builder focused on creating useful software across AI, product development, mobile applications, developer tools, safety systems, management platforms, civic technology, and cybersecurity.",
  aboutDetails: "I enjoy turning ideas into working products, experimenting quickly with AI-assisted development, and going deeper into the engineering behind the systems I build.",
  socials: {
    github: 'https://github.com/shameemxy',
    linkedin: 'https://www.linkedin.com/in/shameem-muhammad-aaa65937b/',
    email: 'shameem.ixe@gmail.com',
    resume: '/resume/Shameem_Muhammed_Resume.pdf',
  },
  navigation: [
    { label: 'WORK', href: '/#work' },
    { label: 'STORY', href: '/#story' },
    { label: 'ARCHIVE', href: '/#archive' },
    { label: 'ACHIEVEMENTS', href: '/#achievements' },
    { label: 'LAB', href: '/#lab' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'CONTACT', href: '/#contact' },
  ],
};
