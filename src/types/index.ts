export interface ProjectMedia {
  thumbnail?: string;
  videoWalkthrough?: string;
  videoAspectRatio?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Frontend" | "E-Commerce" | "Mobile";
  featured: boolean;
  completedDate: string;
  techStack: string[];
  description: string;
  keyFeatures: string[];
  metrics?: string[];
  liveUrl: string;
  githubUrl?: string;
  media: ProjectMedia;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialized";
    highlight?: boolean;
  }[];
}

export interface Profile {
  name: string;
  role: string;
  status: string;
  bio: string;
  subBio: string;
  location: string;
  avatar: string;
  cover: string;
  experienceYears: string;
  stats: {
    label: string;
    value: string;
  }[];
  socials: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
    telegram?: string;
    email: string;
  };
}
