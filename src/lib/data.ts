import { Experience, Project } from "./types";

export const siteMetadata = {
  title: "Chaithanya Heblikar | Mobile Engineer & HCI Researcher",
  author: {
    name: "Chaithanya Heblikar",
    github: "https://github.com/csheblikar",
    linkedin: "https://www.linkedin.com/in/csheblikar/",
  },
  tagline: "Grad Student at NAU",
  description:
    "Passionate mobile application developer and tech enthusiast dedicated to crafting innovative solutions for real-world challenges.",
  siteUrl: "https://csheblikar.me",
};

export const projects: Project[] = [
  {
    title: "Automatic Helmet detection and License Plate Recognition",
    description:
      "I developed a high-performing deep learning model utilizing YOLO, attaining an impressive 93% accuracy in detecting individuals without helmets on motorcycles. Additionally, I integrated MobilenetSSD to effectively identify and extract license plate numbers, enabling efficient tracking and identification of helmet-less riders.",
    url: "https://github.com/csheblikar/fyp",
    skills: ["React", "Next.js", "Tailwind CSS"],
    image: "https://placehold.co/200x48.png",
  },
  {
    title: "Healthful",
    description:
      "I developed a health prediction Android app, streamlining healthcare access. Users input symptoms for disease prediction and receive recommendations for nearby healthcare centers. This app simplifies proactive healthcare management, aiming to improve accessibility and outcomes for all users.",
    url: "https://github.com/csheblikar/healthful",
    skills: ["Java", "Android"],
    image: "https://placehold.co/200x48.png",
  },
  {
    title: "Vehicle Service Management System",
    description:
      "Built a LAMP-stack based web application to streamline automobile servicing.",
    url: "https://github.com/csheblikar/Vehicle-Service-Management-System",
    skills: ["HTML", "CSS", "PHP", "MySQL"],
    image: "https://placehold.co/200x48.png",
  },
];

export const experience: Experience[] = [
  {
    position: "Teaching assistant",
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
