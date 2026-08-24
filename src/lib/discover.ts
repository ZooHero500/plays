import { getCollection } from "astro:content";
import { filterByLocale } from "./i18n";

export const SCENES = [
  "Crew",
  "Engineering",
  "Growth",
  "Life",
  "Official",
] as const;

export type Scene = (typeof SCENES)[number];

export type DiscoverPost = {
  statusId: string;
  permalink: string;
  handle: string;
  author: string;
  date: string;
  excerpt: string;
  title: string;
  category: Scene;
  coverUrl: string;
  scene: Scene;
  tools: string[];
  outcome: string;
  when: string;
  viewLabel: string;
};

const STATUS_RE =
  /^https?:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/([^/?#]+)\/status\/(\d+)/i;

export function parseXStatusUrl(raw: string): { handle: string; statusId: string; permalink: string } | null {
  if (!raw) return null;
  const m = raw.trim().match(STATUS_RE);
  if (!m) return null;
  const handle = m[1];
  const statusId = m[2];
  if (!handle || handle === "i" || handle === "intent") return null;
  return {
    handle,
    statusId,
    permalink: `https://x.com/${handle}/status/${statusId}`,
  };
}

export function normalizeCategory(raw: string | undefined): Scene {
  const c = (raw || "").trim();
  const hit = SCENES.find((s) => s.toLowerCase() === c.toLowerCase());
  return hit || "Crew";
}

function isRemoteMediaUrl(url: string): boolean {
  const u = (url || "").trim();
  if (!/^https?:\/\//i.test(u)) return false;
  if (/\/assets\/covers\//i.test(u)) return false;
  if (/\.svg(\?|#|$)/i.test(u)) return false;
  if (/pbs\.twimg\.com/i.test(u)) return true;
  if (/\.(jpe?g|png|gif|webp|avif)(\?|#|$)/i.test(u)) return true;
  return true;
}

export function coverHeight(statusId: string): number {
  let h = 0;
  for (let i = 0; i < statusId.length; i++) h = Math.imul(h, 31) + statusId.charCodeAt(i);
  h = h >>> 0;
  return 220 + (h % 121);
}

export function pickCoverUrl(cover?: string, imageUrls?: string[]): string {
  const list = [cover, ...(imageUrls || [])].filter((x): x is string => Boolean(x && x.trim()));
  for (const raw of list) {
    if (isRemoteMediaUrl(raw)) return raw.trim();
  }
  return "";
}

const HOST_LABEL: Record<string, string> = {
  "x.com": "View on X",
  "twitter.com": "View on X",
  "linkedin.com": "View on LinkedIn",
  "x.ai": "View on x.ai",
  "docs.x.ai": "View on x.ai",
  "dev.to": "View on DEV",
  "github.com": "View on GitHub",
  "youtube.com": "View on YouTube",
  "youtu.be": "View on YouTube",
  "news.ycombinator.com": "View on HN",
  "medium.com": "View on Medium",
  "note.com": "View on note.com",
};

export function sourceViewLabel(raw: string): string {
  try {
    const host = new URL(raw.trim()).hostname.toLowerCase().replace(/^www\./, "");
    if (HOST_LABEL[host]) return HOST_LABEL[host];
    if (host.endsWith(".medium.com")) return "View on Medium";
    if (host.endsWith(".substack.com")) return "View on Substack";
    if (host.endsWith(".beehiiv.com")) return "View on Beehiiv";
    if (host.endsWith(".linkedin.com")) return "View on LinkedIn";
    return `View on ${host}`;
  } catch {
    return "View source";
  }
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/** Relative + short date, e.g. 2h · Aug 21. Date-only posts use days. Never ISO. */
export function formatWhen(iso: string, now = new Date()): string {
  const raw = (iso || "").trim();
  if (!raw) return "";
  const d = new Date(/T/.test(raw) ? raw : raw + "T12:00:00+08:00");
  if (Number.isNaN(d.getTime())) return "";
  const short = `${MONTHS[d.getMonth()]} ${d.getDate()}`;
  const diff = now.getTime() - d.getTime();
  if (diff < 0) return short;
  const hours = Math.round(diff / 3_600_000);
  if (hours < 24) return `${Math.max(1, hours)}h · ${short}`;
  const days = Math.round(diff / 86_400_000);
  if (days < 60) return `${days}d · ${short}`;
  return short;
}

function handleFromAuthor(authorHandle: string, parsedHandle: string): string {
  const raw = (authorHandle || "").replace(/^@/, "").trim();
  if (raw && raw.toLowerCase() !== "bot") return raw;
  return parsedHandle;
}

export async function getDiscoverPosts(): Promise<DiscoverPost[]> {
  const entries = await getCollection("plays");
  const en = filterByLocale(entries, "en");
  const posts: DiscoverPost[] = [];

  for (const entry of en) {
    const source = (entry.data.sourceUrl || "").trim();
    if (!source) continue;
    const parsed = parseXStatusUrl(source);
    const handle = handleFromAuthor(entry.data.authorHandle, parsed?.handle || "");
    const category = normalizeCategory(entry.data.category);
    posts.push({
      statusId: parsed?.statusId || entry.id,
      permalink: source,
      handle,
      author: entry.data.author,
      date: (entry.data.date || "").trim(),
      when: formatWhen((entry.data.date || "").trim()),
      excerpt: entry.data.summary,
      title: entry.data.title || "",
      category,
      scene: category,
      coverUrl: pickCoverUrl(entry.data.cover, entry.data.imageUrls),
      tools: [],
      outcome: (entry.data.outcome || "").trim(),
      viewLabel: sourceViewLabel(source),
    });
  }

  return posts.sort((a, b) => {
    if (a.date && b.date && a.date !== b.date) return b.date.localeCompare(a.date);
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return a.author.localeCompare(b.author);
  });
}

export function sceneSlug(scene: Scene): string {
  return scene.toLowerCase();
}

export function sceneFromSlug(slug: string): Scene | null {
  const hit = SCENES.find((s) => s.toLowerCase() === slug);
  return hit || null;
}

export const GITHUB_REPO = "https://github.com/ZooHero500/plays";
export const GITHUB_INGEST_ISSUE = `${GITHUB_REPO}/issues/new`;
export const CURSOR_ONBOARDING = "https://cursor.com/bot/onboarding";
