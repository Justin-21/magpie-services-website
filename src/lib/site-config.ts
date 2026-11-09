import type { Metadata } from "next";

// Reserved example values until the production domain and contact are confirmed.
const configuredUrl = process.env.SITE_URL || "https://magpie-services.example";
const parsedUrl = new URL(configuredUrl);
if (!["https:", "http:"].includes(parsedUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}
export const siteUrl = parsedUrl.origin;
export const contactEmail =
  process.env.CONTACT_EMAIL || "hello@magpie-services.example";
export const hasPlaceholderContact = contactEmail.endsWith(".example");
export const isPreviewSite =
  parsedUrl.hostname.endsWith(".example") ||
  ["localhost", "127.0.0.1", "[::1]"].includes(parsedUrl.hostname);
export const legalUpdated = "9 November 2026";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return { title, description, alternates: { canonical: path } };
}
