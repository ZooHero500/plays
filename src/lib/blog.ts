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
  const byBare = Object.fromEntries(filtered.map((e) => [bareContentId(e.id), e]));
  return BLOG_ORDER.map((id) => byBare[id]).filter(Boolean);
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
  const src = body.replace(/^#\s+.*\n+/, "");
  const blocks = src
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((b) => !/^配图[:：]/.test(b));
  return blocks
    .map((block) => {
      const joined = block
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .join("");
      return `<p>${inlineMd(joined, locale)}</p>`;
    })
    .join("\n");
}
