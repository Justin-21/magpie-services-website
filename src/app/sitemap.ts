import type { MetadataRoute } from "next";
import { navigation, legalNavigation } from "@/data/site";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...navigation, ...legalNavigation].map(({ href }) => ({
    url: `${siteUrl}${href === "/" ? "" : href}`,
    changeFrequency: href === "/" ? "monthly" : "yearly",
    priority:
      href === "/"
        ? 1
        : href === "/services"
          ? 0.9
          : href.includes("policy") || href.includes("terms")
            ? 0.3
            : 0.7,
  }));
}
