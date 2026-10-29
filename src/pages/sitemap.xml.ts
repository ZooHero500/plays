import type { APIRoute } from "astro";
import { getPosts, postSlug } from "../lib/blog";
import { SCENES, sceneSlug } from "../lib/discover";
import { GUIDES, guidePath } from "../lib/guides";
import { getPlays } from "../lib/plays";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const gitCache = new Map<string, string | undefined>();
function gitDate(...files: string[]): string | undefined {
  let best: string | undefined;
  for (const f of files) {
    if (!gitCache.has(f)) {
      let d: string | undefined;
      if (existsSync(f)) {
        try {
          d = execSync(`git log -1 --format=%cI -- "${f}"`, { encoding: "utf8" }).trim() || undefined;
        } catch {
          d = undefined;
        }
      }
      gitCache.set(f, d);
    }
    const d = gitCache.get(f);
    if (d && (!best || Date.parse(d) > Date.parse(best))) best = d;
  }
  return best;
}

function isoDate(v: unknown): string | undefined {
  if (!v) return undefined;
  const d = v instanceof Date ? v : new Date(String(v));
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

function loc(origin: string, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}

function url(origin: string, path: string, changefreq: string, priority: string, lastmod?: string): string {
  const lm = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>\n    <loc>${loc(origin, path)}</loc>${lm}\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ? String(site) : "https://grokbotplays.com").replace(/\/$/, "");
  const [enPlays, zhPlays, zhPosts] = await Promise.all([
    getPlays("en"),
    getPlays("zh"),
    getPosts("zh"),
  ]);
  const enPosts = await getPosts("en");

  const postDate = (p: any) =>
    isoDate(p.data?.updated) || isoDate(p.data?.date) || gitDate(p.filePath || "");
  const playDate = (locale: string, p: any) =>
    isoDate(p.updated) || isoDate(p.date) || gitDate(`src/content/plays/${locale}/${p.id}.md`);

  const parts = [
    url(origin, "/", "hourly", "1.0", gitDate("src/pages/index.astro", "src/components/DiscoverView.astro", "src/content/plays/en")),
    url(origin, "/categories/", "daily", "0.8", gitDate("src/pages/categories/index.astro")),
    ...SCENES.map((s) => url(origin, `/categories/${sceneSlug(s)}/`, "daily", "0.7", gitDate("src/pages/categories/[slug].astro", "src/lib/discover.ts"))),
    url(origin, "/guides/", "weekly", "0.8", gitDate("src/pages/guides/index.astro")),
    ...GUIDES.map((g) => url(origin, guidePath(g.slug), "weekly", "0.8", gitDate(`seo/guides/${g.slug}.md`, "src/data/guides.json"))),
    url(origin, "/install/", "monthly", "0.7", gitDate("src/pages/install.astro", "src/components/InstallView.astro")),
    url(origin, "/about/", "monthly", "0.5", gitDate("src/pages/about.astro", "src/components/AboutView.astro")),
    url(origin, "/blog/", "weekly", "0.5", gitDate("src/pages/blog/index.astro", "src/content/blog/en")),
    ...enPosts.map((p) => url(origin, `/blog/${postSlug(p)}/`, "monthly", "0.6", postDate(p))),
    url(origin, "/submit/", "monthly", "0.3", gitDate("src/pages/submit.astro")),
    ...enPlays.map((p) => url(origin, `/play/${p.id}/`, "weekly", "0.6", playDate("en", p))),
    ...["privacy", "terms", "contact"].map((k) => url(origin, `/${k}/`, "yearly", "0.2", gitDate(`src/pages/${k}.astro`, "src/components/LegalView.astro"))),
    ...["privacy", "terms", "contact"].map((k) => url(origin, `/zh/${k}/`, "yearly", "0.1", gitDate(`src/pages/zh/${k}.astro`, "src/components/LegalView.astro"))),
    url(origin, "/zh/", "daily", "0.5", gitDate("src/pages/zh/index.astro", "src/content/plays/zh")),
    url(origin, "/zh/about/", "monthly", "0.3", gitDate("src/pages/zh/about.astro", "src/components/AboutView.astro")),
    url(origin, "/zh/install/", "monthly", "0.3", gitDate("src/pages/zh/install.astro", "src/components/InstallView.astro")),
    url(origin, "/zh/blog/", "weekly", "0.3", gitDate("src/pages/zh/blog/index.astro", "src/content/blog/zh")),
    ...zhPosts.map((p) => url(origin, `/zh/blog/${postSlug(p)}/`, "monthly", "0.3", postDate(p))),
    ...zhPlays.map((p) => url(origin, `/zh/play/${p.id}/`, "weekly", "0.4", playDate("zh", p))),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${parts.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
