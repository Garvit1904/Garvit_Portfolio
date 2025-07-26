export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    courses: string[];
}
export interface Activity {
  title: string;
  description: string;
  image: string;
}

export interface Theme {
  name: string;
  [key: string]: string;
}
