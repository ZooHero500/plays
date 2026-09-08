import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(join(root, "src/data/guides.json"), "utf8"));
const playsDir = join(root, "src/content/plays/en");
const dist = join(root, "dist");

const playFiles = new Set(
  readdirSync(playsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, "")),
);

let failed = 0;
function fail(msg) {
  console.error(`FAIL  ${msg}`);
  failed += 1;
}
function ok(msg) {
  console.log(`OK    ${msg}`);
}

function allIds(guide) {
  return [
    ...(guide.plays.default || []),
    ...(guide.plays.sales || []),
    ...(guide.plays.engineering || []),
  ];
}

function readHtml(rel) {
  const candidates = [
    join(dist, rel, "index.html"),
    join(dist, `${rel}.html`),
    join(dist, rel),
  ];
  for (const p of candidates) {
    if (existsSync(p)) return { path: p, html: readFileSync(p, "utf8") };
  }
  return null;
}

function playHrefs(html) {
  return [...html.matchAll(/href="\/play\/([^"/?#]+)/g)].map((m) => m[1]);
}

function markedPlays(html, section) {
  const ids = [];
  const tags = html.match(/<a\b[^>]*>/g) || [];
  for (const tag of tags) {
    const play = tag.match(/data-guide-play="([^"]+)"/);
    if (!play) continue;
    if (section && !tag.includes(`data-guide-section="${section}"`)) continue;
    ids.push(play[1]);
  }
  return ids;
}

const SHELF_RE =
  /discover-feed|j-masonry|discover-card|category-list|id="feed"|data-card=/;

if (!existsSync(playsDir)) {
  fail(`plays directory missing: ${playsDir}`);
}

for (const guide of data.guides) {
  const caps = data.caps[guide.slug];
  const ids = allIds(guide);
  if (!caps) {
    fail(`${guide.slug}: missing caps`);
    continue;
  }
  if (ids.length > caps.total) {
    fail(`${guide.slug}: ${ids.length} play ids exceed total cap ${caps.total}`);
  } else {
    ok(`${guide.slug}: ${ids.length} play ids ≤ ${caps.total}`);
  }
  if (caps.sales != null && (guide.plays.sales || []).length > caps.sales) {
    fail(
      `${guide.slug}: sales ${(guide.plays.sales || []).length} exceeds cap ${caps.sales}`,
    );
  }
  if (
    caps.engineering != null &&
    (guide.plays.engineering || []).length > caps.engineering
  ) {
    fail(
      `${guide.slug}: engineering ${(guide.plays.engineering || []).length} exceeds cap ${caps.engineering}`,
    );
  }
  for (const id of ids) {
    if (!playFiles.has(id)) {
      fail(`${guide.slug}: referenced play id missing from content: ${id}`);
    } else {
      ok(`play ${id} exists`);
    }
  }
}

if (!existsSync(dist)) {
  fail("dist/ missing — run astro build before verify");
} else {
  const install = readHtml("install");
  if (!install) {
    fail("dist install HTML missing");
  } else {
    if (!/\/guides\/how-to-use-grok-bot\/?/.test(install.html)) {
      fail("install HTML has no link to /guides/how-to-use-grok-bot/");
    } else {
      ok("install HTML links how-to-use-grok-bot");
    }
    if (!/Full how-to/i.test(install.html)) {
      fail("install HTML is missing visible “Full how-to” copy");
    } else {
      ok("install HTML has Full how-to label");
    }
  }

  const sitemap = readHtml("sitemap.xml") || {
    path: join(dist, "sitemap.xml"),
    html: existsSync(join(dist, "sitemap.xml"))
      ? readFileSync(join(dist, "sitemap.xml"), "utf8")
      : "",
  };
  if (!sitemap.html) {
    fail("sitemap.xml missing from dist");
  } else {
    for (const slug of data.guides.map((g) => g.slug)) {
      if (!sitemap.html.includes(`/guides/${slug}`)) {
        fail(`sitemap.xml missing /guides/${slug}`);
      } else {
        ok(`sitemap includes /guides/${slug}`);
      }
    }
  }

  const robots = join(root, "public/robots.txt");
  if (!existsSync(robots)) {
    fail("public/robots.txt missing");
  } else {
    const txt = readFileSync(robots, "utf8");
    if (/disallow:\s*\/guides/i.test(txt)) {
      fail("robots.txt disallows /guides");
    } else {
      ok("robots.txt does not block /guides");
    }
    if (!/sitemap:\s*https:\/\/grokbotplays\.com\/sitemap\.xml/i.test(txt)) {
      fail("robots.txt missing sitemap URL");
    } else {
      ok("robots.txt points at sitemap.xml");
    }
  }

  for (const guide of data.guides) {
    const page = readHtml(`guides/${guide.slug}`);
    if (!page) {
      fail(`built HTML missing for /guides/${guide.slug}/`);
      continue;
    }
    const { html } = page;
    const caps = data.caps[guide.slug];
    const hrefIds = playHrefs(html);
    if (hrefIds.length > caps.total) {
      fail(
        `${guide.slug}: ${hrefIds.length} /play/ deep-links exceed cap ${caps.total}`,
      );
    } else {
      ok(`${guide.slug}: ${hrefIds.length} /play/ deep-links ≤ ${caps.total}`);
    }

    if (guide.slug === "grok-bot-use-cases") {
      const sales = markedPlays(html, "sales");
      const eng = markedPlays(html, "engineering");
      if (sales.length > (caps.sales ?? 6)) {
        fail(`${guide.slug}: sales section ${sales.length} exceeds ${caps.sales}`);
      } else {
        ok(`${guide.slug}: sales section ${sales.length} ≤ ${caps.sales}`);
      }
      if (eng.length > (caps.engineering ?? 6)) {
        fail(
          `${guide.slug}: engineering section ${eng.length} exceeds ${caps.engineering}`,
        );
      } else {
        ok(`${guide.slug}: engineering section ${eng.length} ≤ ${caps.engineering}`);
      }
    }

    if (SHELF_RE.test(html)) {
      fail(`${guide.slug}: looks like a second shelf (Discover/category waterfall)`);
    } else {
      ok(`${guide.slug}: no DiscoverView / category waterfall`);
    }
    if (/Draft \/ scaffold|data-guide-scaffold/i.test(html)) {
      fail(`${guide.slug}: still rendering scaffold placeholder copy`);
    } else {
      ok(`${guide.slug}: writer copy, not scaffold`);
    }
    const md = join(root, "seo/guides", `${guide.slug}.md`);
    if (!existsSync(md)) fail(`writer markdown missing: ${md}`);
    else ok(`writer markdown present: ${guide.slug}.md`);

    if (!/"@type":"Article"/.test(html) && !/"@type": "Article"/.test(html)) {
      fail(`${guide.slug}: missing Article JSON-LD`);
    } else {
      ok(`${guide.slug}: Article JSON-LD`);
    }
    if (!/BreadcrumbList/.test(html)) {
      fail(`${guide.slug}: missing BreadcrumbList JSON-LD`);
    } else {
      ok(`${guide.slug}: BreadcrumbList JSON-LD`);
    }
    if (/VideoGame/.test(html)) {
      fail(`${guide.slug}: must not emit VideoGame schema`);
    }

    const hasHowTo = /"@type":"HowTo"/.test(html) || /"@type": "HowTo"/.test(html);
    if (guide.slug === "how-to-use-grok-bot") {
      if (guide.howto?.length) {
        if (!hasHowTo) fail(`${guide.slug}: visible steps need matching HowTo JSON-LD`);
        else if (!/data-guide-howto/.test(html)) {
          fail(`${guide.slug}: HowTo JSON-LD without visible steps`);
        } else {
          ok(`${guide.slug}: HowTo JSON-LD matches visible steps`);
        }
      }
    } else if (hasHowTo) {
      fail(`${guide.slug}: HowTo schema is only allowed on page A`);
    }

    for (const id of allIds(guide)) {
      if (!html.includes(`/play/${id}`)) {
        fail(`${guide.slug}: built HTML missing deep-link for ${id}`);
      }
    }
  }
}

if (failed) {
  console.error(`\nverify-guides: ${failed} check(s) failed`);
  process.exit(1);
}
console.log("\nverify-guides: all checks passed");
