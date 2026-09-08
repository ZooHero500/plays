import type { APIRoute } from "astro";
import { getPosts, postSlug } from "../lib/blog";
import { SCENES, sceneSlug } from "../lib/discover";
import { GUIDES, guidePath } from "../lib/guides";
import { getPlays } from "../lib/plays";

function loc(origin: string, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}

function url(origin: string, path: string, changefreq: string, priority: string): string {
  return `  <url>\n    <loc>${loc(origin, path)}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ? String(site) : "https://grokbotplays.com").replace(/\/$/, "");
  const [enPlays, zhPlays, zhPosts] = await Promise.all([
    getPlays("en"),
    getPlays("zh"),
    getPosts("zh"),
  ]);

  const parts = [
    url(origin, "/", "hourly", "1.0"),
    url(origin, "/categories/", "daily", "0.8"),
    ...SCENES.map((s) => url(origin, `/categories/${sceneSlug(s)}/`, "daily", "0.7")),
    url(origin, "/guides/", "weekly", "0.8"),
    ...GUIDES.map((g) => url(origin, guidePath(g.slug), "weekly", "0.8")),
    url(origin, "/install/", "monthly", "0.7"),
    url(origin, "/about/", "monthly", "0.5"),
    url(origin, "/blog/", "weekly", "0.5"),
    url(origin, "/submit/", "monthly", "0.3"),
    ...enPlays.map((p) => url(origin, `/play/${p.id}/`, "weekly", "0.6")),
    url(origin, "/zh/", "daily", "0.5"),
    url(origin, "/zh/about/", "monthly", "0.3"),
    url(origin, "/zh/install/", "monthly", "0.3"),
    url(origin, "/zh/blog/", "weekly", "0.3"),
    ...zhPosts.map((p) => url(origin, `/zh/blog/${postSlug(p)}/`, "monthly", "0.3")),
    ...zhPlays.map((p) => url(origin, `/zh/play/${p.id}/`, "weekly", "0.4")),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${parts.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
