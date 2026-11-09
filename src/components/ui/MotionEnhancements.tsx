"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Progressive enhancement: server-rendered content stays visible without JavaScript.
export default function MotionEnhancements() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let elements: HTMLElement[] = [];
    const clear = () => {
      observer?.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.removeAttribute("data-visible");
      });
    };
    const enhance = () => {
      clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      elements = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".section-heading, .hero-card, .intro-image, .capabilities > div, .consulting-card, .service-detail, .values-grid article, .process-grid article, .contact-intro, .contact-form-wrap, .legal-content > section, .footer-top",
        ),
      );
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.visible = "true";
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06 },
      );
      elements.forEach((element) => {
        // Avoid hiding content that is already visible during hydration.
        element.dataset.reveal = "true";
        element.dataset.visible = String(
          element.getBoundingClientRect().top < window.innerHeight,
        );
        if (element.dataset.visible === "false") observer?.observe(element);
      });
    };
    const frame = requestAnimationFrame(enhance);
    preference.addEventListener("change", enhance);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", enhance);
      clear();
    };
  }, [pathname]);
  return null;
}
