import clsx from "clsx";
import Link from "next/link";

import Container from "@/components/container";
import { getAllProjects, ProjectWithSlug } from "@/lib/projects";

function TableRow(data: ProjectWithSlug) {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">
          {new Date(data.date).getUTCFullYear()}
        </div>
      </td>
      <td className="py-4 pr-4 align-top leading-snug font-semibold text-slate-200">
        <Link
          href={`/projects/${data.slug}`}
          className="text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          {data.title}
        </Link>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="translate-y-px whitespace-nowrap">{data.madeAt}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1 flex-wrap space-y-1 space-x-1.5">
          {data.tools?.map((tool) => (
            <li key={tool}>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                {tool}
              </div>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default async function ArchivePage() {
  const projects = await getAllProjects();

  const columns = [
    { name: "Year" },
    { name: "Project" },
    { name: "Made at", className: "hidden lg:table-cell" },
    { name: "Built with", className: "hidden lg:table-cell" },
  ];

  return (
    <Container>
      <div className="lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>

        <table id="content" className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              {columns.map(({ name, className }) => (
                <th
                  key={name}
                  className={clsx(
                    "py-4 pr-8 text-sm font-semibold text-slate-200",
                    className,
                  )}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <TableRow key={project.slug} {...project} />
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
