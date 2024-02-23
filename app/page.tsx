"use client";

import { Scrollspy } from "@makotot/ghostui";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import Section from "./components/section";
import { experience, projects } from "./lib/data";
import { formatDate, formatDateISO } from "./utils/date";

export default function Home() {
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // set mouse position with scroll offset
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="group/spotlight relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>

        <Scrollspy sectionRefs={sectionRefs} offset={-48}>
          {({ currentElementIndexInViewport }) => (
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Header
                currentElementIndexInViewport={currentElementIndexInViewport}
              />

              <div className="pt-24 lg:w-1/2 lg:py-24">
                <main id="content" aria-label="Content">
                  <Section
                    id="about"
                    label="About me"
                    heading="About"
                    ref={sectionRefs[0]}
                  >
                    <div className="space-y-4">
                      <p>
                        A passionate mobile application developer on a mission
                        to blend innovation with social impact. With expertise
                        in Android development and a burgeoning interest in iOS,
                        I&apos;m currently crafting{" "}
                        <strong className="text-slate-200">SpokeIt</strong>{" "}
                        &mdash; an interactive speech therapy game in Unity,
                        designed to empower individuals with speech impairments.
                      </p>
                      <p>
                        Beyond my digital endeavors, I find joy in the graceful
                        movements of Kathak dance and pride in serving my
                        community. From providing essential kits with Youth for
                        Seva to founding{" "}
                        <strong className="text-slate-200">AWAKE</strong> during
                        the pandemic, my work extends beyond screens to make a
                        meaningful difference.
                      </p>
                    </div>
                  </Section>

                  <Section
                    id="experience"
                    label="Work experience"
                    heading="Experience"
                    ref={sectionRefs[1]}
                  >
                    <div className="space-y-12">
                      <ol className="group/list space-y-12">
                        {experience.map((item, index) => (
                          <li
                            key={index}
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                          >
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                              <time dateTime={formatDateISO(item.startDate)}>
                                {formatDate(item.startDate, "MMM yyyy")}
                              </time>{" "}
                              to{" "}
                              {item.endDate ? (
                                <time dateTime={formatDateISO(item.endDate)}>
                                  {formatDate(item.endDate, "MMM yyyy")}
                                </time>
                              ) : (
                                "Present"
                              )}
                            </header>
                            <div className="z-10 sm:col-span-6">
                              <h3 className="font-medium leading-snug text-slate-200">
                                {item.position} &middot; {item.company}
                              </h3>
                              <p className="mt-2 text-sm leading-normal">
                                {item.description}
                              </p>
                              {item.skills && (
                                <ul
                                  className="mt-2 flex flex-wrap"
                                  aria-label="Technologies used"
                                >
                                  {item.skills.map((skill, index) => (
                                    <li
                                      key={`skill-${index + 1}`}
                                      className="mr-1.5 mt-2"
                                    >
                                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        {skill}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        ))}
                      </ol>

                      <a
                        className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View Full Resume (opens in a new tab)"
                      >
                        View Full Resume{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </Section>

                  <Section
                    id="projects"
                    label="Selected projects"
                    heading="Projects"
                    ref={sectionRefs[2]}
                  >
                    <div className="space-y-12">
                      <ul className="group/list space-y-12">
                        {projects.map((item, index) => (
                          <li
                            key={`project-${index + 1}`}
                            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                          >
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                              <h3>
                                <a
                                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                                  href={item.url}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  aria-label="Build a Spotify Connected App (opens in a new tab)"
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  {item.title}{" "}
                                  <span className="inline-block">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 text-sm leading-normal">
                                {item.description}
                              </p>
                            </div>
                            <Image
                              alt={`${item.title} marketing image`}
                              loading="lazy"
                              width="200"
                              height="48"
                              decoding="async"
                              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                              src={item.image}
                              style={{ color: "transparent" }}
                            />
                          </li>
                        ))}
                      </ul>

                      {/* <Link
                        className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="View Full Project Archive"
                        href="/archive"
                      >
                        View Full Project Archive{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link> */}
                    </div>
                  </Section>
                </main>
              </div>
            </div>
          )}
        </Scrollspy>
      </div>
    </div>
  );
}
