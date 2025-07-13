import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

export type AccordianProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export function Accordian<T extends React.ElementType = "div">({
  as,
  ...props
}: AccordianProps<T>) {
  const Component = as || "div";
  return (
    <Component
      {...props}
      className="not-prose mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5"
    />
  );
}

export function AccordianItem({
  as: Component = "div",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; value: string }>) {
  return (
    <Disclosure as={Component} className="p-6">
      {children}
    </Disclosure>
  );
}

export function AccordianTrigger({
  as: Component = "button",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType }>) {
  return (
    <DisclosureButton
      as={Component}
      className="group flex w-full items-center justify-between"
    >
      <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
        {children}
      </span>
      <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
    </DisclosureButton>
  );
}

export function AccordianContent({
  as: Component = "div",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType }>) {
  return (
    <DisclosurePanel
      as={Component}
      transition
      className="mt-2 origin-top text-sm/5 text-white/50 transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0"
    >
      {children}
    </DisclosurePanel>
  );
}
