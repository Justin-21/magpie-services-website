"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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

const themeStorageKey = "magpie-theme";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = storedTheme ? storedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", isDark);

    const timer = window.setTimeout(() => setDarkMode(isDark), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
    window.localStorage.setItem(
      themeStorageKey,
      nextDarkMode ? "dark" : "light",
    );
  };

  return (
    <motion.div
      initial={{
        y: -10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="w-full bg-background text-foreground font-manrope place-items-center py-3 transition-colors"
    >
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-xl" />
          <h1 className="font-bold">MagpieServices</h1>
        </div>

        <ul className="flex items-center justify-center gap-2">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/services" text="Services" />
          <NavLink href="/portfolio" text="Portfolio" />
          <NavLink href="/contact" text="Contact" />
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-full border border-neutral-400 p-2 transition-colors hover:border-foreground cursor-pointer"
              aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
              title={`Switch to ${darkMode ? "light" : "dark"} theme`}
            >
              {darkMode ? <MdLightMode size={16} /> : <MdDarkMode size={16} />}
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;

const NavLink = ({
  text,
  href,
  className,
}: {
  text?: string;
  href: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.li
      variants={itemVariants}
      className={cn(
        "flex items-center justify-center gap-2 px-2.5 py-2",
        "rounded-full border border-neutral-400",
        "transition-all cursor-pointer text-sm font-semibold leading-none",
        "hover:border-foreground",
        className,
      )}
    >
      {isActive && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="size-1.5 rounded-full bg-foreground"
        />
      )}
      <Link href={href} aria-current={isActive ? "page" : undefined}>
        {text}
      </Link>
    </motion.li>
  );
};
