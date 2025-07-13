import { ProjectWithSlug } from "@/lib/projects";
import Prose from "../prose";

export default function ProjectLayout({
  project,
  children,
}: React.PropsWithChildren<{ project: ProjectWithSlug }>) {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <article className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              {project.title}
            </h1>
          </div>
        </header>

        <Prose as="main" id="content" className="pt-24 lg:w-1/2 lg:py-24">
          {children}
        </Prose>
      </article>
    </div>
  );
}
