import clsx from "clsx";

export type AsComponentProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export default function Prose<T extends React.ElementType = "div">({
  as,
  children,
  className,
  ...props
}: AsComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component className={clsx("prose", className)} {...props}>
      {children}
    </Component>
  );
}
