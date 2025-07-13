import { forwardRef } from "react";

type Props = {
  id: string;
  label: string;
  heading: string;
};

const Section = forwardRef(function Section(
  {
    id,
    label,
    heading,
    children,
  }: Readonly<Props & { children: React.ReactNode }>,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={label}
      ref={ref}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">
          {heading}
        </h2>
      </div>

      {children}
    </section>
  );
});

export default Section;
