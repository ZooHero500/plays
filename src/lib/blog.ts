import { Marked } from "marked";
import { getCollection } from "astro:content";
import {
  bareContentId,
  filterByLocale,
  localePath,
  type Locale,
} from "./i18n";

export const BLOG_ORDER = [
  "what-is-grok-bot",
  "how-to-install",
  "vs-other-agents",
  "how-to-name-a-bot",
  "chief-of-staff-first",
  "passwords-not-in-chat",
  "how-to-use-this-site",
];

export const BLOG_PATH_MAP: Record<string, string> = {
  "什么是-grok-bot": "what-is-grok-bot",
  "怎么安装": "how-to-install",
  "和其他-agent-差在哪": "vs-other-agents",
  "怎么给-bot-起名字": "how-to-name-a-bot",
  "先建总助再加人": "chief-of-staff-first",
  "密码别进聊天": "passwords-not-in-chat",
  "怎么用这个站": "how-to-use-this-site",
};

export async function getPosts(locale: Locale) {
  const entries = await getCollection("blog");
  const filtered = filterByLocale(entries, locale);
  const live = filtered.filter((e) => !e.data.draft);
  const byBare = Object.fromEntries(live.map((e) => [bareContentId(e.id), e]));
  const pinned = BLOG_ORDER.map((id) => byBare[id]).filter(Boolean);
  const rest = live
    .filter((e) => !BLOG_ORDER.includes(bareContentId(e.id)))
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
  // New posts (dated) first, then the original pinned set.
  return [...rest, ...pinned];
}

export async function blogStaticPaths(locale: Locale) {
  const posts = await getPosts(locale);
  return posts.map((post) => ({
    params: { slug: post.data.slug || bareContentId(post.id) },
    props: { post },
  }));
}

export async function hasPost(locale: Locale, slug: string): Promise<boolean> {
  const posts = await getPosts(locale);
  return posts.some((p) => (p.data.slug || bareContentId(p.id)) === slug);
}

export function postSlug(post: { id: string; data: { slug?: string } }) {
  return post.data.slug || bareContentId(post.id);
}

export function rewriteHref(href: string, locale: Locale = "zh") {
  const m = href.match(/^\/blog\/([^?#]+)/);
  if (!m) return href;
  let key = m[1];
  try {
    key = decodeURIComponent(key);
  } catch {
    /* keep */
  }
  const slug = BLOG_PATH_MAP[key] || (BLOG_ORDER.includes(key) ? key : "");
  if (!slug) return href;
  return localePath(locale, `/blog/${slug}`);
}

function esc(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineMd(text: string, locale: Locale) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts
    .map((part) => {
      const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (!m) return esc(part);
      const href = rewriteHref(m[2], locale);
      const ext = /^https?:\/\//i.test(href);
      const extra = ext ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a class="source-link" href="${esc(href)}"${extra}>${esc(m[1])}</a>`;
    })
    .join("");
}

/** Blank-line paragraphs; sentences on single newlines are joined (no <br>). */
export function renderBlogHtml(body: string, locale: Locale = "zh") {
  const src = body
    .replace(/^\s*#\s+.*\n+/, "")
    .split(/\n\n+/)
    .filter((b) => !/^配图[:：]/.test(b.trim()))
    .join("\n\n");
  const md = new Marked({ gfm: true });
  md.use({
    renderer: {
      link({ href, text }) {
        const h = rewriteHref(href, locale);
        const ext = /^https?:\/\//i.test(h);
        const extra = ext ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a class="source-link" href="${esc(h)}"${extra}>${text}</a>`;
      },
    },
  });
  return md.parse(src, { async: false }) as string;
}
