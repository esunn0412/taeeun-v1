export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ExperienceType {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url?: string;
  github?: string;
}
