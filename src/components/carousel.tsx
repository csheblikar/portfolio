"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ImagesPerView {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface CarouselProps {
  images: ImageProps["src"][];
  imagesPerView?: ImagesPerView;
  className?: string;
}

function getImagesPerView(imagesPerView: ImagesPerView = {}) {
  // Default to 1 image per view
  return {
    base: imagesPerView.base ?? 1,
    sm: imagesPerView.sm ?? imagesPerView.base ?? 1,
    md: imagesPerView.md ?? imagesPerView.sm ?? imagesPerView.base ?? 1,
    lg:
      imagesPerView.lg ??
      imagesPerView.md ??
      imagesPerView.sm ??
      imagesPerView.base ??
      1,
    xl:
      imagesPerView.xl ??
      imagesPerView.lg ??
      imagesPerView.md ??
      imagesPerView.sm ??
      imagesPerView.base ??
      1,
  };
}

export default function Carousel({
  images,
  imagesPerView,
  className = "",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const breakpoints = getImagesPerView(imagesPerView);

  // Responsive images per view
  const getPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return breakpoints.xl;
      if (window.innerWidth >= 1024) return breakpoints.lg;
      if (window.innerWidth >= 768) return breakpoints.md;
      if (window.innerWidth >= 640) return breakpoints.sm;
    }
    return breakpoints.base;
  };

  const [perView, setPerView] = useState(getPerView());

  useEffect(() => {
    const handleResize = () => setPerView(getPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxIndex = Math.max(0, images.length - perView);

  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center justify-center",
        className,
      )}
    >
      <div className="relative flex w-full items-center justify-center">
        <button
          className="absolute left-0 z-10 rounded-full bg-white p-2 shadow hover:bg-slate-100 disabled:opacity-50"
          onClick={goPrev}
          disabled={current === 0}
          aria-label="Previous"
        >
          <ChevronLeftIcon className="size-6 text-slate-700" />
        </button>
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / images.length}%)`,
              width: `${(images.length * 100) / perView}%`,
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="flex flex-shrink-0 items-center justify-center px-2"
                style={{ width: `${100 / images.length}%` }}
              >
                <Image
                  src={src}
                  alt={`carousel-img-${idx}`}
                  width={672}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 z-10 rounded-full bg-white p-2 shadow hover:bg-slate-100 disabled:opacity-50"
          onClick={goNext}
          disabled={current === maxIndex}
          aria-label="Next"
        >
          <ChevronRightIcon className="size-6 text-slate-700" />
        </button>
      </div>
      <div className="mt-4 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${current === idx ? "bg-slate-800" : "bg-slate-300"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
