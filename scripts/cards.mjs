// Builds dist/stats.svg: live GitHub numbers in the portfolio's riso cobalt-and-cream style.
// Runs in the profile workflow; locally: GITHUB_TOKEN=$(gh auth token) node scripts/cards.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const LOGIN = process.env.GITHUB_USER || "burntcookiedough";
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) throw new Error("GITHUB_TOKEN is required");

async function gql(query, variables) {
  const r = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json", "User-Agent": "profile-cards" },
    body: JSON.stringify({ query, variables }),
  });
  const j = await r.json();
  if (j.errors) throw new Error(JSON.stringify(j.errors));
  return j.data;
}

const d = await gql(`query($login: String!, $merged: String!) {
  user(login: $login) {
    repositories(ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, first: 100) {
      totalCount
      nodes { stargazerCount languages(first: 10, orderBy: { field: SIZE, direction: DESC }) { edges { size node { name } } } }
    }
    contributionsCollection { contributionCalendar { totalContributions } }
  }
  merged: search(query: $merged, type: ISSUE, first: 100) { nodes { ... on PullRequest { repository { stargazerCount } } } }
}`, { login: LOGIN, merged: `author:${LOGIN} is:pr is:merged -user:${LOGIN}` });

const u = d.user;
const repos = u.repositories.nodes;
const stars = repos.reduce((s, r) => s + r.stargazerCount, 0);
const bytes = {};
for (const r of repos) for (const e of r.languages.edges) bytes[e.node.name] = (bytes[e.node.name] || 0) + e.size;
const total = Object.values(bytes).reduce((a, b) => a + b, 0) || 1;
let langs = Object.entries(bytes).sort((a, b) => b[1] - a[1]).map(([n, b]) => [n, b / total]);
const top = langs.slice(0, 4);
const rest = langs.slice(4).reduce((s, [, p]) => s + p, 0);
if (rest > 0.005) top.push(["Other", rest]);

// count only merges into established projects, so a friend's repo doesn't read as open source
const MIN_STARS = 50;
const ossMerged = d.merged.nodes.filter((n) => n.repository && n.repository.stargazerCount >= MIN_STARS).length;

const stats = [
  [u.contributionsCollection.contributionCalendar.totalContributions, "contributions, last 12 months"],
  [u.repositories.totalCount, "public repositories"],
  [stars, "stars on my repositories"],
  [ossMerged, `${ossMerged === 1 ? "PR" : "PRs"} merged into open source`, `projects with ${MIN_STARS}+ stars`],
];

// ── render ─────────────────────────────────────────────────────────────
// text styles as plain attributes: resvg (SVG -> PNG) supports these everywhere
const C = 'fill="#efe4cc"';
const STY = {
  k: `font-family="Card Mono" font-size="15" letter-spacing="2.4" ${C} fill-opacity=".85"`,
  n: `font-family="Card Display" font-size="84" ${C}`,
  l: `font-family="Card Text" font-size="17" ${C} fill-opacity=".92"`,
  l2: `font-family="Card Text" font-size="17" ${C} fill-opacity=".7"`,
  lb: `font-family="Card Bold" font-size="16" ${C}`,
  lv: `font-family="Card Text" font-size="15" ${C} fill-opacity=".85"`,
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const fmt = (n) => n.toLocaleString("en-US");
const W = 1200, H = 430, X = 56;
const updated = new Date().toISOString().slice(0, 10);
const colW = (W - 2 * X) / 4;

// language bar: same shapes as the timeline bar in the portfolio footer
const barY = 296, barH = 40, barW = W - 2 * X;
const fills = ['fill="url(#hatch)"', 'fill="#c9cbe0"', 'fill="#efe4cc"', 'fill="#efe4cc" fill-opacity=".55"', 'fill="#efe4cc" fill-opacity=".18"'];
let x = X, segs = "", labels = "";
top.forEach(([name, p], i) => {
  const w = Math.max(barW * p, 2);
  segs += `<rect x="${x.toFixed(1)}" y="${barY}" width="${w.toFixed(1)}" height="${barH}" ${fills[i]}/>`;
  if (i) segs += `<line x1="${x.toFixed(1)}" y1="${barY}" x2="${x.toFixed(1)}" y2="${barY + barH}" stroke="#1d36d6" stroke-width="2"/>`;
  labels += `<text x="${(X + i * (barW / top.length)).toFixed(1)}" y="${barY + barH + 30}" ${STY.lb}>${esc(name)}</text><text x="${(X + i * (barW / top.length)).toFixed(1)}" y="${barY + barH + 52}" ${STY.lv}>${(p * 100).toFixed(1)}%</text>`;
  x += w;
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="GitHub stats for ${LOGIN}: ${stats.map(([n, l]) => `${fmt(n)} ${l}`).join(", ")}">
<defs>
<pattern id="bg" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#1d36d6"/><rect width="2" height="10" fill="#efe4cc" fill-opacity=".07"/></pattern>
<pattern id="hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="9" height="9" fill="#1d36d6"/><rect width="2.6" height="9" fill="#efe4cc"/></pattern>
<clipPath id="bar"><rect x="${X}" y="${barY}" width="${barW}" height="${barH}" rx="6"/></clipPath>
</defs>
<rect width="${W}" height="${H}" rx="14" fill="url(#bg)"/>
<text x="${X}" y="62" ${STY.k}>LIVE FROM GITHUB · @${esc(LOGIN.toUpperCase())} · UPDATED ${updated}</text>
<path transform="translate(${W - X - 22} 52) scale(.3)" fill="#efe4cc" d="M0 -50 C3 -12 12 -3 50 0 C12 3 3 12 0 50 C-3 12 -12 3 -50 0 C-12 -3 -3 -12 0 -50Z"/>
${stats.map(([n, l, l2], i) => `<text x="${(X + i * colW).toFixed(1)}" y="172" ${STY.n}>${fmt(n)}</text><text x="${(X + i * colW).toFixed(1)}" y="206" ${STY.l}>${esc(l)}</text>${l2 ? `<text x="${(X + i * colW).toFixed(1)}" y="228" ${STY.l2}>${esc(l2)}</text>` : ""}`).join("\n")}
<text x="${X}" y="268" ${STY.k}>LANGUAGES ACROSS MY PUBLIC REPOSITORIES</text>
<g clip-path="url(#bar)">${segs}</g>
<rect x="${X}" y="${barY}" width="${barW}" height="${barH}" rx="6" fill="none" stroke="#efe4cc" stroke-opacity=".85" stroke-width="1.5"/>
${labels}
</svg>
`;
mkdirSync("dist", { recursive: true });
writeFileSync("dist/stats.svg", svg);
// PNG for the README: GitHub's image proxy can block fonts inside SVGs, a PNG always looks right
const { Resvg } = await import("@resvg/resvg-js");
const fontFiles = ["bigshoulders-900", "jetbrainsmono-600", "archivo-700", "archivo-500"].map((f) => new URL(`../assets/fonts/${f}.ttf`, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const png = new Resvg(svg, { fitTo: { mode: "width", value: 1800 }, font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "Card Text" } }).render().asPng();
writeFileSync("dist/stats.png", png);
console.log("wrote dist/stats.svg", svg.length, "bytes;", stats.map(([n, l]) => `${n} ${l}`).join(" | "), "|", top.map(([n, p]) => `${n} ${(p * 100).toFixed(1)}%`).join(", "));
