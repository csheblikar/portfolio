import { glob } from "fast-glob";

export interface Project {
  title: string;
  date: string;
  description: string;
  image?: string;
  url?: string;
  githubUrl?: string;
  madeAt?: string;
  tools?: string[];
  featured?: boolean;
}

export interface ProjectWithSlug extends Project {
  slug: string;
}

async function importProject(filename: string): Promise<ProjectWithSlug> {
  const { project } = (await import(`../app/projects/${filename}`)) as {
    default: React.ComponentType;
    project: Project;
  };

  return {
    slug: filename.replace(/(\/page)?\.mdx$/, ""),
    ...project,
  };
}

export async function getAllProjects() {
  const filenames = await glob("*/page.mdx", {
    cwd: "./src/app/projects",
  });

  const projects = await Promise.all(filenames.map(importProject));

  return projects.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export async function getFeaturedProjects() {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}
