import clsx from "clsx";
import Link from "next/link";

import { siteMetadata } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

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

function NavLink({
  label,
  isActive = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  label: string;
  isActive?: boolean;
}) {
  return (
    <Link
      className={clsx("group flex items-center py-3", isActive && "active")}
      {...props}
    >
      <span
        className={clsx(
          "mr-4 h-px motion-reduce:transition-none",
          isActive
            ? "w-16 bg-slate-200"
            : "w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200",
        )}
      ></span>
      <span
        className={clsx(
          "text-xs font-bold tracking-widest uppercase",
          isActive
            ? "text-slate-200"
            : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
        )}
      >
        {label}
      </span>
    </Link>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-slate-200"
      {...props}
    >
      <Icon className="size-6 fill-current" />
    </Link>
  );
}

const Sidebar = ({
  currentElementIndexInViewport,
}: Readonly<{ currentElementIndexInViewport: number }>) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{siteMetadata.author.name}</Link>
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
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={currentElementIndexInViewport === index}
            />
          ))}
        </nav>
      </div>

      <nav
        className="mt-8 ml-1 flex items-center space-x-5"
        aria-label="Social media"
      >
        <SocialLink
          href={siteMetadata.author.github}
          icon={GitHubIcon}
          aria-label="Follow Chaithanya on GitHub"
        />
        <SocialLink
          href={siteMetadata.author.linkedin}
          icon={LinkedInIcon}
          aria-label="Follow Chaithanya on LinkedIn"
        />
      </nav>
    </header>
  );
};

export default Sidebar;
