export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  accuracy?: number;
  recall?: number;
  featured?: boolean;
  status?: 'in-progress' | 'upcoming' | 'completed';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa?: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability: string;
}

export interface StatusItem {
  icon: 'graduation' | 'briefcase' | 'code' | 'rocket';
  text: string;
}

export interface LearningMilestone {
  title: string;
  year?: string;
}

export interface AboutStat {
  label: string;
  value: string;
  icon: 'briefcase' | 'graduation' | 'map-pin';
}

export interface PortfolioData {
  personal: {
    name: string;
    initials: string;
    title: string;
    tagline: string;
    bio: string;
    careerObjective: string;
    motto: string;
    location: string;
    availabilityBadge: string;
    resumeUrl: string;
    typewriterPhrases: string[];
    aboutTags: string[];
  };
  currentStatus: StatusItem[];
  aboutStats: AboutStat[];
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  skills: Skill[];
  currentlyLearning: string[];
  softSkills: string[];
  learningJourney: LearningMilestone[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  techStack: TechCategory[];
  achievements: Achievement[];
  contact: ContactInfo;
}
