import type { MetadataRoute } from "next";
import { courses, siteUrl, verifiedDate } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...courses.map((course) => course.slug), "secret-code"].map((path) => ({ url: `${siteUrl}${path ? `/${path}/` : "/"}`, lastModified: path === "secret-code" ? "2026-10-19" : verifiedDate, changeFrequency: "monthly" as const, priority: path === "" ? 1 : path === "secret-code" ? 0.9 : 0.8 }));
}
