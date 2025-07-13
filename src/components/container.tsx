import clsx from "clsx";
import Link from "next/link";

export default function Container({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        "mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0",
        className,
      )}
      {...props}
    >
      <Link
        href="#content"
        className="absolute top-0 left-0 block -translate-x-full rounded-sm bg-linear-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold tracking-widest text-white uppercase focus-visible:translate-x-0"
      >
        Skip to Content
      </Link>
      {children}
    </div>
  );
}
