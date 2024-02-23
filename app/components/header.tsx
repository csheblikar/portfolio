import clsx from "clsx";
import Link from "next/link";
import { siteMetadata, socials } from "../lib/data";

const sections = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#projects",
    label: "Projects",
  },
];

const Header = ({
  currentElementIndexInViewport,
}: Readonly<{ currentElementIndexInViewport: number }>) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{siteMetadata.title}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {siteMetadata.tagline}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          {siteMetadata.description}
        </p>
        <nav
          className="mt-16 hidden w-max lg:block"
          aria-label="In-page jump links"
        >
          {sections.map((item, index) => (
            <a
              key={item.href}
              className={clsx(
                "group flex items-center py-3",
                currentElementIndexInViewport === index && "active"
              )}
              href={item.href}
            >
              <span
                className={clsx(
                  "mr-4 h-px bg-slate-600 motion-reduce:transition-none",
                  currentElementIndexInViewport === index
                    ? "w-16 bg-slate-200"
                    : "w-8 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                )}
              ></span>
              <span
                className={clsx(
                  "text-xs font-bold uppercase tracking-widest",
                  currentElementIndexInViewport === index
                    ? "text-slate-200"
                    : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                )}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <ul
        className="ml-1 mt-8 flex space-x-5 items-center"
        aria-label="Social media"
      >
        {socials.map((item) => (
          <li key={item.url} className="shrink-0 text-xs">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200"
              aria-label={`${item.label} (opens in a new tab)`}
              title={item.label}
            >
              <span className="sr-only">{item.label}</span>
              <item.icon className="h-6 w-6 fill-current" />
            </a>
          </li>
        ))}
        {/* <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/csheblikar"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
