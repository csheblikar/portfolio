import { Experience, Project } from "./types";

export const siteMetadata = {
  title: "Chaithanya Heblikar | Mobile Engineer & HCI Researcher",
  author: {
    name: "Chaithanya Heblikar",
    github: "https://github.com/csheblikar",
    linkedin: "https://www.linkedin.com/in/csheblikar/",
  },
  tagline: "Mobile App Developer | Game Designer | Software Developer at NAU",
  description:
    "Blending code with creativity to craft apps that make a real-world impact.",
  siteUrl: "https://csheblikar.me",
};

export const projects: Project[] = [
  {
    title: "OpenAI Subtitle Generator",
    description:
      "A command-line tool that generates subtitle files from spoken audio in video files using OpenAI's transcription models.",
    url: "/projects/openai-subtitle-generator",
    skills: ["Python", "OpenAI", "ffmpeg"],
  },
  {
    title: "MovieFlix",
    description:
      "A mobile movie discovery app built with React Native and TypeScript, featuring a personalized movie feed based on user engagement metrics.",
    url: "/projects/movieflix",
    skills: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Appwrite"],
  },
  {
    title: "SpokeIt",
    description:
      "A speech therapy game built in Unity, designed to support children aged 4-8 with orofacial cleft palate in improving their pronunciation.",
    url: "/projects/spokeit",
    skills: ["Unity", "C#", "Google Cloud Speech-to-Text", "Firebase"],
  },
  {
    title: "PluxAI",
    description:
      "An enterprise Android app for managing employee attendance, leave requests, and real-time reporting, built during my internship at SecqurAIse Technologies.",
    url: "/projects/pluxai",
    skills: ["Java", "Kotlin", "Android Studio", "Firebase"],
  },
];

export const experience: Experience[] = [
  {
    position: "Research Software Engineer",
    company: "Northern Arizona University",
    description: "As a research software engineer, I led the transition of SpokeIt, a speech therapy game from Swift to Unity, enabling cross-platform deployment and improving performance. I integrated Google Cloud's Speech-to-Text API for real-time feedback and supported authentication through Google Play and Game Center. I also contributed to game research by analyzing ASSETS literature and broadband data to inform inclusive design practices.",
    skills: ["Unity", "C#", "Google Speech-to-Text"],
    startDate: "16 May 2024"

  },
  {
    position: "Teaching Assistant",
    company: "Northern Arizona University",
    description:
      "Assisted professor with grading homework and project assignments. Held office hours to aid students in their understanding of core concepts and reported to the professor the extent of their understanding.",
    skills: ["C", "Data Structures", "Web Programming"],
    startDate: "28 August 2023",
    endDate: "13 Dec 2024"
  },
  {
    position: "Android Development Intern",
    company: "SecqureAIse Technologies",
    description:
      "At SecqurAIse, I developed and launched PluxAI, an Android app for attendance and leave management, within three months. I implemented features using Firebase and Room to support real-time sync and offline access, and applied the MVVM architecture to streamline user interactions and ensure maintainable code.",
    skills: ["Java", "Kotlin", "Android Studio", "Google Firebase"],
    startDate: "16 August 2022",
    endDate: "23 December 2022",
  },
  {
    position: "Project Intern",
    company: "Hitachi Vantara",
    description:
      "During my internship at Hitachi, I worked on cloud infrastructure monitoring using AWS and Datadog. I configured dashboards, alerts, and logs to track system health and application performance, helping the team improve observability and incident response in real time.",
    skills: ["AWS", "Datadog"],
    startDate: "16 February 2022",
    endDate: "08 July 2022",
  },
];
