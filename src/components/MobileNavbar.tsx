"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { MdClose, MdMenu } from "react-icons/md";

const wrapperVariants = {
  open: {
    scaleY: 1,
    scaleX: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    scaleX: 0,
    y: 10,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    y: -5,
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-5 right-5 w-full">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative h-full"
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl transition-colors absolute top-3 right-3 z-10 text-white bg-linear-to-br from-orange-500 to-orange-700 cursor-pointer drop-shadow-xl"
        >
          <motion.span variants={iconVariants}>
            {!open ? <MdMenu size={32} /> : <MdClose size={32} />}
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          className={cn(
            "flex flex-col gap-5 px-16 py-16 rounded-2xl w-9/10 h-fit",
            "bg-linear-to-br from-orange-400 to-orange-600",
            "absolute origin-top-right top-3 right-3 overflow-hidden text-7xl",
          )}
        >
          <Option setOpen={setOpen} href="/" text="home." />
          <Option setOpen={setOpen} href="/about" text="about" />
          <Option setOpen={setOpen} href="/services" text="services." />
          <Option setOpen={setOpen} href="/portfolio" text="portfolio." />
          <Option setOpen={setOpen} href="/contact" text="contact." />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  href,
  Icon,
  setOpen,
  target,
  className,
}: {
  text?: string;
  href: string;
  Icon?: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  target?: string;
  className?: string;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className={cn(
        "flex items-center",
        "gap-2 w-fit font-manrope font-black whitespace-nowrap rounded-md",
        "text-white transition-colors cursor-pointer",
        className,
      )}
    >
      {Icon && (
        <motion.span variants={actionIconVariants}>
          <Icon className="hover:opacity-80" />
        </motion.span>
      )}

      <Link
        target={target}
        href={href}
        className="opacity-60 hover:opacity-100 transition-all"
      >
        {text}
      </Link>
    </motion.li>
  );
};

export default StaggeredDropDown;
