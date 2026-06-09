import BlogImg from "../assets/blog.jpeg";
import PortfolioImg from "../assets/portfolio1.jpeg"
import AboutContent from "../sections/AboutContent";
import ExperienceContent from "../sections/ExperienceContent";
import SkillsContent from "../sections/SkillsContent";
import ProjectsContent from "../sections/ProjectsContent";
import ContactContent from "../sections/ContactContent";

import avatar from "../assets/avatar.jpeg";
import benifex from "../assets/benifex.png";
import lexmark from "../assets/lexmark.png";
import accenture from "../assets/accenture.png";

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava, FaGit, FaDocker } from "react-icons/fa";

export const sections = [
  { id: "about", title: "About", component: AboutContent },
  { id: "experience", title: "Experience", component: ExperienceContent },
  { id: "skills", title: "Skills", component: SkillsContent },
  { id: "projects", title: "Projects", component: ProjectsContent },
  { id: "contact", title: "Contact Me", component: ContactContent },
];

export const sectionIds = ["hero", ...sections.map(s => s.id)];

export const navItems = sections.map(s => s.id);

export const aboutData = {
  name: "Jade Louise",
  description1:
    "A passionate Full Stack Developer specializing in React, Spring Boot, and Java. I enjoy turning complex problems into intuitive, user-friendly applications.",
  description2:
    "While my professional work focuses on backend systems, I actively develop React-based projects in my personal time to strengthen my frontend skills and deliver complete end-to-end applications.",
  email: "jadelouiseyu@gmail.com",
  phone: "0956 598 0727",
  birthday: "February 25, 2000",
  education: "BS in Computer Engineering",
  resume: "/resume.pdf",
  avatar: avatar,
};

export const experienceData = [
  {
    role: "Associate Backend Engineer",
    company: "Benifex Philippines, Inc.",
    period: "March 2025 - April 2026",
    logo: benifex,
    highlights: [
      "Developed and maintained microservices (Java, Spring Boot) for large-scale employee data integration. Designed a secure Connect Gateway allowing third-party clients to push employee data via RESTful APIs, enforcing validation and using an OAS contract-first schema.",
      "Leveraged GCP Cloud Scheduler to orchestrate scheduled ingestion of employee data from third-party HRIS systems, publishing to downstream services via Pub/Sub with Outboxer pattern for reliable real-time processing.",      
    ],
  },
  {
    role: "Software Engineer",
    company: "Lexmark Research & Development",
    period: "September 2022 - March 2025",
    logo: lexmark,
    highlights: [
      "Developed a cloud-based app to streamline document workflows (emailing, redacting, translating, cloud uploads), enhancing efficiency and user experience.",
      "Maintained on-premise and cloud print management systems while supporting frontend and backend tasks.",
    ]
  },
  {
    role: "Technical Intern",
    company: "Accenture, Inc.",
    period: "December 2021 - March 2022",
    logo: accenture,
    highlights: [
      "Automated systematic data selection, filtering, and evaluation in Excel using VBA, reducing the process from 2-4 hours of manual work to just 10 seconds — an 88% time savings."
    ]
  },
];

export const socialLinks = [
  {
    icon: "FaGithub",
    url: "https://github.com/jyu-codes",
    label: "GitHub",
  },
  {
    icon: "FaLinkedin",
    url: "https://linkedin.com/in/jadelouiseyu",
    label: "LinkedIn",
  },
  {
    icon: "FaEnvelope",
    url: "mailto:jadelouiseyu@gmail.com",
    label: "Email",
  },
];

export const skills = [
  {
    category: "Frontend Tools & Libraries",
    items: [
      { name: "React", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "HTML", level: 4 },
      { name: "CSS", level: 4 },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Java", level: 5 },
      { name: "Spring Boot", level: 4 },
      { name: "RESTful APIs", level: 4 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 5 },
      { name: "MongoDB / Redis", level: 4 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git / GitHub / SVN", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Kubernetes", level: 3 },
      { name: "Jenkins/CircleCI", level: 3 },
    ],
  },
  {
    category: "Testing & Quality",
    items: [
      { name: "Jest / React Testing Library", level: 3 },
      { name: "JUnit / Mockito", level: 5 },
      { name: "Newman", level: 5 },
      { name: "Selenium", level: 4 },
    ],
  },
  {
    category: "Design & Prototyping",
    items: [
      { name: "Figma", level: 4 },
      { name: "Canva", level: 4 },
    ],
  }
];

export const projects = [
  {
    title: "Portfolio Template",
    description: "Portfolio template project from Coursera’s Meta Advanced React course, focused on implementing reusable React components and integrating Chakra UI for UI styling, along with Formik and Yup for form handling and validation.",
    image: PortfolioImg,
    liveUrl: ""
  },
  {
    title: "Blog App",
    description: "A single-page blogging platform built with React. Features include creating, editing, and deleting posts, dynamic routing, and responsive design",
    image: BlogImg,
    liveUrl: "https://github.com/jyu-codes/react_blog_app"
  },
  {
    title: "Capstone Project",
    description: "A full-stack web application.",
    image: "",
    liveUrl: ""
  },
];