import { MetadataRoute } from "next";

const BASE_URL = "https://rayou.me";

function formatSitemapDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: formatSitemapDate(new Date()),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://blog.rayou.me/sitemap.xml",
      lastModified: formatSitemapDate(new Date()),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
