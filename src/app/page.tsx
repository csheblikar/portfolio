"use client";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { Scrollspy } from "@makotot/ghostui";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import Header from "@/components/header";
import Section from "@/components/section";
import { experience, projects } from "@/lib/data";
import { formatDate, formatDateISO } from "@/utils/date";

export default function Home() {
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  return (
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
                    There&apos;s something magical about building tech that talks
                    back, especially when it can help someone speak for the first
                    time. I&apos;m Chaithanya Heblikar, but most people call me Chai.
                    I write code that lives inside mobile apps and games, with a
                    focus on accessibility, playful design, and real-world impact.
                  </p>
                  <p>
                    For the past few years, I&apos;ve been diving deep into Android
                    development, game design in Unity, and accessibility-focused
                    tech. What started with building small health apps has grown
                    into creating full-fledged speech therapy games, analyzing
                    mobility data, and mentoring students through their own tech
                    journeys.
                  </p>
                  <p>
                    From launching apps like SpokeIt and Healthful to collaborating
                    on AI usability research and broadband analysis, my work blends
                    creativity with a clear sense of impact. I&apos;ve had the chance to
                    work with startups, professors, and non-profits, and every
                    project has helped me grow as both a developer and a human.
                  </p>
                  <p>
                    Right now, I&apos;m part of the research team at Northern Arizona
                    University, where I&apos;m leading the development for a speech
                    therapy app.
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
                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
                      >
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2">
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
                          <h3 className="leading-snug font-medium text-slate-200">
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
                                  className="mt-2 mr-1.5"
                                >
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
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

                  <Link
                    className="group/link inline-flex items-baseline text-base leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Resume (opens in a new tab)"
                  >
                    View Full Resume{" "}
                    <ArrowUpRightIcon
                      className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </Link>
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
                        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
                      >
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <Link
                              className="group/link text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                              href={item.url}
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-sm md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              {item.title}
                            </Link>
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
                                  className="mt-2 mr-1.5"
                                >
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                                    {skill}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {item.image && (
                          <Image
                            alt={`${item.title} marketing image`}
                            loading="lazy"
                            width="200"
                            height="48"
                            decoding="async"
                            className="rounded-sm border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                            src={item.image}
                            style={{ color: "transparent" }}
                          />
                        )}
                      </li>
                    ))}
                  </ul>

                  <Link
                    className="group/link inline-flex items-baseline text-base leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    aria-label="View Full Project Archive"
                    href="/projects"
                  >
                    View Full Project Archive{" "}
                    <ArrowUpRightIcon
                      className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Section>
            </main>
          </div>
        </div>
      )}
    </Scrollspy>
  );
}
