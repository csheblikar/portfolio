"use client";

import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { AppContext } from "@/app/providers";
import { ProjectWithSlug } from "@/lib/projects";
import { formatDate } from "@/utils/date";
import Prose from "../prose";

export default function ProjectLayout({
  project,
  children,
}: React.PropsWithChildren<{ project: ProjectWithSlug }>) {
  const router = useRouter();
  const { previousPathname } = useContext(AppContext);

  return (
    <div className="lg:py-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to projects"
              className="group mb-8 flex size-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800 shadow-md ring-0 shadow-slate-800/5 ring-white/10 transition hover:border-slate-700 hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="size-4 stroke-slate-500 transition group-hover:stroke-slate-400" />
            </button>
          )}

          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                {project.title}
              </h1>
              <time
                dateTime={project.date}
                className="order-first flex items-center text-base text-slate-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-slate-500" />
                <span className="ml-3">
                  {formatDate(project.date, "MMM yyyy")}
                </span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </div>
  );
}
