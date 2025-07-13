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
    position: "Teaching Assistant",
    company: "Northern Arizona University",
    description:
      "Assisted professor with grading homework and project assignments. Held office hours to aid students in their understanding of core concepts and reported to the professor the extent of their understanding.",
    skills: ["C", "Data Structures", "Web Programming"],
    startDate: "28 August 2023",
  },
  {
    position: "Android Development Intern",
    company: "SecqureAIse Technologies",
    description:
      "In just one month, I played a key role in launching PluxAI, from conception to execution. Collaborating on integrating PluxAI with Firestore, I enabled real-time updates for employee timesheets. I also implemented a user-friendly leave enquiry screen for the PluxAI Android app, simplifying leave management. Utilizing the Room Persistence Library, I ensured secure local storage of attendance data and seamless synchronization with cloud storage, guaranteeing data integrity during critical events",
    skills: ["Java", "Kotlin", "Android Studio", "Google Firebase"],
    startDate: "16 August 2022",
    endDate: "23 December 2022",
  },
  {
    position: "Project Intern",
    company: "Hitachi Vantara",
    description:
      "I conducted thorough analysis of client servers hosted on Amazon Web Services (AWS), pinpointing the root cause of high CPU utilization. Additionally, I monitored server performance utilizing Datadog, a cloud-based monitoring and analytics platform, ensuring optimal operation and preemptively addressing any emerging issues.",
    skills: ["AWS", "Datadog"],
    startDate: "16 February 2022",
    endDate: "08 July 2022",
  },
];
