import React from "react";
import type {
  Project,
  SkillCategory,
  Experience,
  Education,
  Theme,
} from "./types";
import { GitHubIcon } from "./components/icons/GitHubIcon";
import { LinkedInIcon } from "./components/icons/LinkedInIcon";

export const EMAIL = "garvit.trjy@gmail.com";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Garvit1904",
    icon: (props: React.SVGProps<SVGSVGElement>) => <GitHubIcon {...props} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/garvitsolanki1904/",
    icon: (props: React.SVGProps<SVGSVGElement>) => <LinkedInIcon {...props} />,
  },
];

// export const THEMES: Theme[] = [
//   {
//     name: "indigo",
//     "50": "#eef2ff",
//     "100": "#e0e7ff",
//     "200": "#c7d2fe",
//     "300": "#a5b4fc",
//     "400": "#818cf8",
//     "500": "#b7b8c8ff",
//     "600": "#4f46e5",
//     "700": "#4338ca",
//     "800": "#3730a3",
//     "900": "#312e81",
//     "950": "#1e1b4b",
//   },
//   {
//     name: "sky",
//     "50": "#f0f9ff",
//     "100": "#e0f2fe",
//     "200": "#bae6fd",
//     "300": "#7dd3fc",
//     "400": "#38bdf8",
//     "500": "#0ea5e9",
//     "600": "#0284c7",
//     "700": "#0369a1",
//     "800": "#075985",
//     "900": "#0c4a6e",
//     "950": "#082f49",
//   },
//   {
//     name: "emerald",
//     "50": "#ecfdf5",
//     "100": "#d1fae5",
//     "200": "#a7f3d0",
//     "300": "#6ee7b7",
//     "400": "#34d399",
//     "500": "#10b981",
//     "600": "#059669",
//     "700": "#047857",
//     "800": "#065f46",
//     "900": "#064e3b",
//     "950": "#022c22",
//   },
//   {
//     name: "rose",
//     "50": "#fff1f2",
//     "100": "#ffe4e6",
//     "200": "#fecdd3",
//     "300": "#fda4af",
//     "400": "#fb7185",
//     "500": "#f43f5e",
//     "600": "#e11d48",
//     "700": "#be123c",
//     "800": "#9f1239",
//     "900": "#881337",
//     "950": "#5d1a2dff",
//   },
// ];
export const THEMES: Theme[] = [
  {
    name: "indigo",
    accent: "#6366f1", // modern primary
    gradient: ["#e0e7ff", "#6366f1", "#312e81"],
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1", // updated
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81",
    "950": "#1e1b4b"
  },
  {
    name: "sky",
    accent: "#0ea5e9",
    gradient: ["#e0f2fe", "#0ea5e9", "#082f49"],
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9", // clean and vibrant
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e",
    "950": "#082f49"
  },
  {
    name: "emerald",
    accent: "#10b981",
    gradient: ["#d1fae5", "#10b981", "#022c22"],
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981", // fresh green
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b",
    "950": "#022c22"
  },
  {
    name: "rose",
    accent: "#f43f5e",
    gradient: ["#ffe4e6", "#f43f5e", "#5d1a2d"],
    "50": "#fff1f2",
    "100": "#ffe4e6",
    "200": "#fecdd3",
    "300": "#fda4af",
    "400": "#fb7185",
    "500": "#f43f5e", // vibrant pink
    "600": "#e11d48",
    "700": "#be123c",
    "800": "#9f1239",
    "900": "#881337",
    "950": "#5d1a2d"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: " Programming",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    title: "AI-ML",
    skills: [
      { name: "Neural Network" },
      { name: "Deep Learning" },
      { name: "NLP Tech" },
      { name: "Modeling" },
    ],
  },
  {
    title: " Data Analytics & Visualization",
    skills: [
      { name: "Power BI" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "SQL" },
      { name: "Excel" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
    ],
  },
  {
    title: " Web Development",
    skills: [
      { name: "HTML" },
      { name: "CSS3" },
      { name: "ReactJs" },
      { name: "Flask" },
    ],
  },
  {
    title: "Computer Vision",
    skills: [
      { name: "Open CV" },
      { name: "Image Processing" },
      // { name: "Docker" },
    ],
  }, {
    title: "Tools & Platfroms",
    skills: [
      { name: "Jupyter Notebook" },
      { name: "GitHub" },
      { name: " Google Colab" },
      { name: "VsCode" },
      // { name: "Docker" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  
  {
    title: "AI Portfolio Generator",
    description:
      "A web app that helps users create portfolios through AI prompts, manual input, or GitHub import.",
    image: "https://github.com/Garvit1904/AI-PortfolioDeveloper/raw/main/Screenshots/Prompt.png",
    techStack: ["Python", "Flask", "NLP"],
    githubUrl: "https://github.com/Garvit1904/AI-PortfolioDeveloper",
    // liveUrl: "#",
  },
  {
    title: "Service Desk Application",
    description:
      "An AI-powered service desk app built with React and Firebase, featuring real-time data, role-based workflows, and a responsive light/dark mode UI.",
    image: "https://github.com/Garvit1904/Celebal_Technologies_Garvit/raw/main/Project/Service%20Desk%20Application/4.png",
    techStack: ["ReactJs", "Firebase"],
    githubUrl: "https://github.com/Garvit1904/Celebal_Technologies_Garvit/tree/main/Project/Service%20Desk%20Application",
  },
  {
    title: "Smart Driving Analytics",
    description:
      "Detects rash driving by analyzing sensor data using machine learning to visualize driving behavior.",
    image: "https://github.com/Garvit1904/Rash-Driving-Detector/raw/main/Screenshots/3.png",
    techStack: ["Neural Networks", "MIT App Developer", "Python"],
    githubUrl: "https://github.com/Garvit1904/Rash-Driving-Detector",
    liveUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce website with product listings, shopping cart, and a secure checkout process.",
    image: "https://github.com/Garvit1904/Celebal_Technologies_Garvit/raw/main/Assignment8/Modern-e-commerce/Screenshots/1.png",
    techStack: ["React", "Redux", "Firebase"],
    githubUrl: "https://github.com/Garvit1904/Celebal_Technologies_Garvit/tree/main/Assignment8/Modern-e-commerce",
  },
  {
    title: "Ola Booking Analysis",
    description:
      "An interactive Power BI dashboard to visualize trends, revenue segmentation, and customer behavior.",
    image: "https://sauravsngh01.github.io/ola.jpg",
    techStack: ["SQL", "Excel", "Power BI"],
    githubUrl: "#",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: " ReactJS Developer Intern",
    company: " Celebal Technologies",
    period: "Jun 2025 - Aug 20",
    description:
      "Developed dynamic, responsive UI components using ReactJS and TailwindCSS for client-facing dashboards and internal analytics tools.",
    responsibilities: [
      // " Developed dynamic, responsive UI components using ReactJS and TailwindCSS for client-facing dashboards and internal analytics tools.",
      " Integrated RESTful APIs to fetch and visualize data, enhancing the usability of insights-driven features.",
      // "Assisted in building a prototype for a dynamic portfolio builder using AI.",
      "Participated in agile development cycles, contributing to product ideation and bug fixing across sprints.",
    ],
  },
  {
    role: "AI-ML Intern",
    company: "AshnaAI",
    period: "May 2025 - Aug 2025",
    description:
      "Played a key role in the AI team within a fast-paced startup, concentrating on real-world machine learning solutions.",
    responsibilities: [
      " Applied Python, NumPy, Pandas, and Scikit-learn for data preprocessing, feature engineering, and model development in internal ML projects.",
      // "Developed an AI portfolio developer application using machine learning models",
      // "Collaborated on data preprocessing and feature engineering tasks.",
      "Developed and fine-tuned ML models for predictive analytics.",
      // "Led the development of Portfolio-Developer, an intelligent tool capable of generating portfolios from a user prompt, GitHub URL, or manual input—serving as the capstone project of the internship."
    ],
  },
  {
    role: "AI-ML Intern - R&D Team",
    company: "RoboAI Hub",
    period: "Jun 2024 - Aug 2024",
    description:
      "Contributed to the R&D team, focusing on implementing and testing machine learning models.",
    responsibilities: [
      "Developed and fine-tuned ML models for predictive analytics.",
      // " Applied Python, NumPy, Pandas, and Scikit-learn for data preprocessing, feature engineering, and model development in internal ML projects.",
      "Developed an AI portfolio developer application using machine learning models",
      "Collaborated on data preprocessing and feature engineering tasks.",
      "Led the development of Portfolio-Developer, an intelligent tool capable of generating portfolios from a user prompt, GitHub URL, or manual input—serving as the capstone project of the internship."
    ],
  },
];

export const EDUCATION_DATA: Education = {
  degree: " BE in Artificial Intelligence & Data Science",
  institution: "MBM University",
  period: "2022 - 2026",
  courses: [
    "Artificial Intelligence",
    "Machine Learning",
    "OOP",
    "Neural Networks",
    "Data Structures",
    "DBMS",
    "Web Development",
    "Operating Systems",
  ],
};
export const ACTIVITIES_DATA: Activity[] = [
  {
    title: "PR & Event Management",
    description: "As the Logistics and Management Coordinator for the 'ENCARTA' college fest, I led a team of volunteers and managed all operational details to ensure a successful event.",
    image: "/EC1.jpg",
  },
  
  {
    title: "SITE Hackathon",
    description: "Participated in the SITE and collaboratively built a functional project from scratch, gaining hands-on experience in real-world problem solving, full-cycle development, teamwork, and presenting innovative tech solutions under tight deadlines.",
    image: "/EC2.jpg",
  },{
    title: "Event Management",
    description: "Served as a coordinator for Khelo MBM, the annual inter-college sports event, managing event logistics, team coordination, and on-ground execution. Developed strong leadership, organizational, and communication skills while ensuring smooth and engaging participation across multiple sports.",
    image: "/EC4.jpg",
  },
  
  {
    title: "Participation in SIH ",
    description: "Participated in Smart India Hackathon; developed a complete project, gaining hands-on experience in real-world problem solving, development, and collaboration under tight deadlines.",
    image: "/EC11.jpg",
  },
];
