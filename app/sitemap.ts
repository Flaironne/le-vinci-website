import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/a-propos", "/contact", "/mentions-legales"].map(
    (path, index) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: index === 0 ? "weekly" : "monthly",
      priority: index === 0 ? 1 : 0.7,
    }),
  );
}
