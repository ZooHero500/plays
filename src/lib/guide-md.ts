import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { GuideSlug } from "./guides";

export type GuideFrontmatter = {
  slug: GuideSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  published: string;
};

export type GuidePick = {
  id: string;
  why: string;
  section: "default" | "sales" | "engineering";
};

export type GuideStep = {
  title: string;
  body: string;
};

export type GuideFaq = {
  q: string;
  a: string;
};

export type GuideLink = {
  href: string;
  label: string;
};

export type GuideBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "prose"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "steps"; items: GuideStep[] }
  | { type: "picks"; section: GuidePick["section"]; more?: GuideLink; items: GuidePick[] }
  | { type: "faq"; items: GuideFaq[] }
  | { type: "next"; links: GuideLink[] };

export type ParsedGuide = {
  fm: GuideFrontmatter;
  ledeHtml: string;
  blocks: GuideBlock[];
};

const PLAY_RE = /\/play\/([a-z0-9-]+)/i;

function guideMarkdownPath(slug: GuideSlug): string {
  return join(process.cwd(), "seo/guides", `${slug}.md`);
}

function parseFrontmatter(raw: string): { fm: Record<string, string>; body: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!m) throw new Error("Guide markdown is missing frontmatter");
  const fm: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { fm, body: m[2] };
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(text: string): string {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts
    .map((part) => {
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = link[2];
        const ext = /^https?:\/\//i.test(href);
        const extra = ext ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${esc(href)}"${extra}>${inline(link[1])}</a>`;
      }
      const bold = part.match(/^\*\*([^*]+)\*\*$/);
      if (bold) return `<strong>${esc(bold[1])}</strong>`;
      return esc(part);
    })
    .join("");
}

function pickSection(h2: string, h3: string): GuidePick["section"] {
  const hay = `${h2} ${h3}`.toLowerCase();
  if (hay.includes("engineering")) return "engineering";
  if (hay.includes("sales") || hay.includes("growth") || hay.includes("gtm")) return "sales";
  return "default";
}

function parsePlayItem(raw: string): GuidePick | null {
  const m = raw.match(PLAY_RE);
  if (!m) return null;
  const why = raw
    .replace(/\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/^[-*]\s+/, "")
    .replace(/^[—–-]\s*/, "")
    .replace(/\s*[—–]\s*/, " ")
    .trim();
  return { id: m[1], why: why.replace(/^\s*[—–-]\s*/, "").trim(), section: "default" };
}

function parseStep(raw: string): GuideStep {
  const line = raw.replace(/^\d+\.\s+/, "");
  const labeled = line.match(/^\*\*(.+?)\*\*\s*[—–-]?\s*(.*)$/);
  if (labeled) return { title: labeled[1], body: inline(labeled[2]) };
  return { title: "", body: inline(line) };
}

function parseLinks(line: string): GuideLink[] {
  const links: GuideLink[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) links.push({ href: m[2], label: m[1] });
  return links;
}

function moreForPicks(h2: string, h3: string): GuideLink | undefined {
  const hay = `${h2} ${h3}`.toLowerCase();
  if (hay.includes("engineering")) return { href: "/categories/engineering", label: "Engineering category →" };
  if (hay.includes("growth") || hay.includes("sales") || hay.includes("gtm")) {
    return { href: "/categories/growth", label: "Growth category →" };
  }
  if (hay.includes("template")) return { href: "/categories/official", label: "Official category →" };
  return { href: "/", label: "More on Home →" };
}

export function loadGuideMarkdown(slug: GuideSlug): ParsedGuide {
  const raw = readFileSync(guideMarkdownPath(slug), "utf8");
  const { fm, body } = parseFrontmatter(raw);
  if (fm.slug && fm.slug !== slug) {
    throw new Error(`Guide slug mismatch: file ${slug} vs frontmatter ${fm.slug}`);
  }

  const lines = body.replace(/\r\n/g, "\n").split("\n");
  let i = 0;
  if (lines[i]?.startsWith("# ")) i += 1;
  while (lines[i] === "") i += 1;

  const ledeParts: string[] = [];
  while (i < lines.length && !lines[i].startsWith("## ") && !lines[i].startsWith("---")) {
    if (lines[i] === "") {
      i += 1;
      if (ledeParts.length) break;
      continue;
    }
    ledeParts.push(lines[i]);
    i += 1;
  }
  const ledeHtml = `<p>${inline(ledeParts.join(" "))}</p>`;

  const blocks: GuideBlock[] = [];
  let h2 = "";
  let h3 = "";
  let faq: GuideFaq[] | null = null;
  let faqQ = "";
  let faqA: string[] = [];

  const flushFaqA = () => {
    if (faq && faqQ) {
      faq.push({ q: faqQ, a: inline(faqA.join(" ").trim()) });
      faqQ = "";
      faqA = [];
    }
  };

  const startFaq = () => {
    if (!faq) faq = [];
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "---") {
      i += 1;
      continue;
    }

    if (line.startsWith("**Next:**")) {
      flushFaqA();
      if (faq?.length) blocks.push({ type: "faq", items: faq });
      faq = null;
      blocks.push({ type: "next", links: parseLinks(line) });
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      flushFaqA();
      if (faq?.length) {
        blocks.push({ type: "faq", items: faq });
        faq = null;
      }
      h2 = line.slice(3).trim();
      h3 = "";
      blocks.push({ type: "h2", text: h2 });
      if (/^faq$/i.test(h2)) {
        startFaq();
      }
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      const title = line.slice(4).trim();
      if (faq) {
        flushFaqA();
        faqQ = title;
      } else {
        h3 = title;
        blocks.push({ type: "h3", text: title });
      }
      i += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: GuideStep[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(parseStep(lines[i]));
        i += 1;
      }
      if (faq && faqQ) {
        faqA.push(items.map((s) => (s.title ? `${s.title} — ${s.body}` : s.body)).join(" "));
      } else {
        blocks.push({ type: "steps", items });
      }
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const rawItems: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        rawItems.push(lines[i].replace(/^[-*]\s+/, ""));
        i += 1;
      }
      const picks = rawItems.map(parsePlayItem);
      if (picks.every(Boolean) && picks.length) {
        const section = pickSection(h2, h3);
        blocks.push({
          type: "picks",
          section,
          more: moreForPicks(h2, h3),
          items: picks.map((p) => ({ ...p!, section })),
        });
      } else if (faq && faqQ) {
        faqA.push(rawItems.join(" "));
      } else {
        blocks.push({ type: "ul", items: rawItems.map(inline) });
      }
      continue;
    }

    if (line.trim() === "") {
      i += 1;
      continue;
    }

    const paras: string[] = [line];
    i += 1;
    while (i < lines.length && lines[i].trim() !== "" && !/^(#{1,3} |\d+\.\s+|[-*] |\*\*Next:\*|---)/.test(lines[i])) {
      paras.push(lines[i]);
      i += 1;
    }
    const html = `<p>${inline(paras.join(" "))}</p>`;
    if (faq && faqQ) faqA.push(paras.join(" "));
    else blocks.push({ type: "prose", html });
  }

  flushFaqA();
  if (faq?.length) blocks.push({ type: "faq", items: faq });

  return {
    fm: {
      slug,
      title: fm.title || "",
      metaTitle: fm.metaTitle || fm.title || "",
      metaDescription: fm.metaDescription || fm.description || "",
      description: fm.description || fm.metaDescription || "",
      published: fm.published || "2026-09-08",
    },
    ledeHtml,
    blocks,
  };
}

export function playIdsInDoc(doc: ParsedGuide): string[] {
  const ids: string[] = [];
  const add = (html: string) => {
    const re = /\/play\/([a-z0-9-]+)/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html))) ids.push(m[1]);
  };
  add(doc.ledeHtml);
  for (const b of doc.blocks) {
    if (b.type === "prose") add(b.html);
    if (b.type === "ul") b.items.forEach(add);
    if (b.type === "steps") b.items.forEach((s) => add(`${s.title} ${s.body}`));
    if (b.type === "picks") ids.push(...b.items.map((p) => p.id));
    if (b.type === "faq") b.items.forEach((f) => add(`${f.q} ${f.a}`));
  }
  return ids;
}
