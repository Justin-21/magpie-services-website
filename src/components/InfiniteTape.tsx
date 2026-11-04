"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const defaultItems = [
  "Content Creation",
  "Photoshoots",
  "Videography",
  "Ad-shoots",
  "Digital Marketing",
];

export interface InfiniteTapeProps {
  items?: readonly string[];
  duration?: number;
  direction?: "left" | "right";
  className?: string;
  textClassName?: string;
  ariaLabel?: string;
  rotateInverse?: boolean;
  rotate?: boolean;
}

interface TapeContentProps {
  items: readonly string[];
  textClassName?: string;
  "aria-hidden"?: boolean;
}

const TapeContent = ({
  items,
  textClassName,
  "aria-hidden": ariaHidden,
}: TapeContentProps) => (
  <div
    className="flex shrink-0 items-center gap-8 pr-8"
    aria-hidden={ariaHidden}
  >
    {items.map((item, index) => (
      <span
        key={`${item}-${index}`}
        className={cn(
          "flex shrink-0 items-center gap-8 whitespace-nowrap font-manrope tracking-tight text-white text-2xl md:text-4xl lg:text-6xl font-medium",
          textClassName,
        )}
      >
        {item}
        <span className="text-white px-10" aria-hidden="true">
          ✦
        </span>
      </span>
    ))}
  </div>
);

export default function InfiniteTape({
  items = defaultItems,
  duration = 24,
  direction = "left",
  className,
  textClassName,
  ariaLabel = "Creative studio principles",
  rotateInverse,
  rotate = false,
}: InfiniteTapeProps) {
  const animationX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];
  const rotation = rotate
    ? rotateInverse === true
      ? "rotate-5"
      : "-rotate-5"
    : null;

  return (
    <div
      className={cn(
        "relative left-1/2 mt-24 w-screen -translate-x-1/2 overflow-hidden bg-[#FD652B] py-5",
        className,
        rotation,
      )}
      aria-label={ariaLabel}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: animationX }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        <TapeContent items={items} textClassName={textClassName} />
        <TapeContent items={items} textClassName={textClassName} aria-hidden />
      </motion.div>
    </div>
  );
}
