"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Brand from "./ui/Brand";
import ThemeToggle from "./theme/ThemeToggle";
import { navigation } from "@/data/site";
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {pathname === item.href && <span aria-hidden="true">↗</span>}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="icon-button menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
      <div className="mobile-nav-shell" data-open={open} aria-hidden={!open} inert={!open}>
        <div className="mobile-nav-inner">
        <nav
          id="mobile-navigation"
          className="mobile-nav container"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
              <span>↗</span>
            </Link>
          ))}
        </nav>
        </div>
      </div>
    </header>
  );
}
