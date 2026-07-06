import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const basesDir = join(root, "public", "packaging", "bases");
const productsDir = join(root, "public", "packaging", "products");
const outDir = join(root, "public", "packaging");

mkdirSync(basesDir, { recursive: true });
mkdirSync(productsDir, { recursive: true });

const W = 900;
const H = 600;

const catalogue = [
  { id: "variety-chutney", base: "chutney", name: "Variety Chutney", weight: "200g", label: "standard" },
  { id: "shenga-chutney", base: "chutney", name: "Shenga Chutney", weight: "200g", label: "standard" },
  { id: "agase-chutney", base: "chutney", name: "Agase Chutney", weight: "150g", label: "standard" },
  { id: "gurellu-chutney", base: "chutney", name: "Gurellu Chutney", weight: "150g", label: "standard" },
  { id: "natural-protein", base: "protein", name: "Protein Powder", weight: "500g", label: "standard" },
  { id: "sathu-maavu-laddu", base: "laddu", name: "Health Mix Laddu", weight: "8 pcs · 250g", label: "ribbon" },
  { id: "baby-health-mix", base: "baby", name: "Baby Health Mix", weight: "500g", label: "standard" },
  { id: "mango-pickle", base: "pickle", name: "Mango Pickle", weight: "500g", label: "standard" },
];

function productLabelSvg(name, weight, ribbon = false) {
  if (ribbon) {
    return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 88" fill="none">
      <defs>
        <linearGradient id="ribbon" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#C45C26"/><stop offset="100%" stop-color="#9B4E2A"/></linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F5C842"/><stop offset="100%" stop-color="#E8A838"/></linearGradient>
        <filter id="sh"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#3D2314" flood-opacity="0.22"/></filter>
      </defs>
      <rect x="2" y="2" width="296" height="84" rx="6" fill="url(#ribbon)" filter="url(#sh)"/>
      <circle cx="42" cy="44" r="24" fill="#FFFDF9" stroke="url(#gold)" stroke-width="2"/>
      <ellipse cx="42" cy="46" rx="13" ry="9" fill="url(#gold)"/>
      <text x="158" y="36" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="700" fill="#FBF6EE">Sumangali</text>
      <text x="158" y="52" text-anchor="middle" font-family="Arial,sans-serif" font-size="8.5" font-weight="600" fill="#F5C842" letter-spacing="3.8">HOME FOODS</text>
      <text x="158" y="72" text-anchor="middle" font-family="Georgia,serif" font-size="11" font-weight="600" fill="#FBF6EE">${esc(name)}</text>
    </svg>`);
  }
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 128" fill="none">
    <defs>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F5C842"/><stop offset="100%" stop-color="#C45C26"/></linearGradient>
      <linearGradient id="leaf" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#5C7A52"/><stop offset="100%" stop-color="#6B8F5E"/></linearGradient>
      <filter id="sh"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#3D2314" flood-opacity="0.2"/></filter>
    </defs>
    <rect x="4" y="4" width="212" height="120" rx="10" fill="#FFFDF9" stroke="#E8A838" stroke-width="2" filter="url(#sh)"/>
    <circle cx="110" cy="38" r="22" fill="#FFFDF9" stroke="url(#gold)" stroke-width="2"/>
    <ellipse cx="110" cy="41" rx="13" ry="9" fill="url(#gold)"/>
    <path d="M100 32 Q103 27 106 32" stroke="url(#leaf)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M114 31 Q117 26 120 31" stroke="url(#leaf)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <text x="110" y="68" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="700" fill="#3D2314">Sumangali</text>
    <text x="110" y="82" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" font-weight="600" fill="#5C7A52" letter-spacing="3.2">HOME FOODS</text>
    <line x1="40" y1="90" x2="180" y2="90" stroke="#E8A838" stroke-width="1" opacity="0.5"/>
    <text x="110" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="600" fill="#9B4E2A">${esc(name)}</text>
    <text x="110" y="120" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#3D2314" opacity="0.6">${esc(weight)}</text>
  </svg>`);
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Label placement on 900x600 canvas (tuned for AI photo bases) */
const aiLabelLayout = {
  chutney: { width: 235, top: 108, left: 332 },
  protein: { width: 255, top: 118, left: 318 },
  laddu: { width: 310, top: 72, left: 295 },
  baby: { width: 220, top: 112, left: 338 },
  pickle: { width: 210, top: 128, left: 345 },
};

async function renderLabel(svg, width) {
  const meta = await sharp(svg).metadata();
  const h = Math.round(width * ((meta.height ?? 128) / (meta.width ?? 220)));
  return sharp(svg).resize(width, h).png().toBuffer();
}

async function getBase(baseKey) {
  const p = join(basesDir, `${baseKey}.png`);
  if (!existsSync(p)) throw new Error(`Missing AI base: ${p}`);
  return sharp(p).resize(W, H, { fit: "cover", position: "centre" }).png().toBuffer();
}

async function renderProduct(item) {
  const base = await getBase(item.base);
  const layout = aiLabelLayout[item.base];
  const labelSvg = productLabelSvg(item.name, item.weight, item.label === "ribbon");
  const label = await renderLabel(labelSvg, layout.width);

  const webp = await sharp(base)
    .composite([{ input: label, top: layout.top, left: layout.left }])
    .sharpen({ sigma: 0.4 })
    .webp({ quality: 92 })
    .toBuffer();

  await sharp(webp).toFile(join(productsDir, `${item.id}.webp`));
  console.log(`  ${item.id}.webp`);
}

async function renderCategoryAndCollection() {
  const cats = [
    ["chutney-pouch", "variety-chutney"],
    ["protein-bag", "natural-protein"],
    ["laddu-box", "sathu-maavu-laddu"],
    ["pickle-jar", "mango-pickle"],
  ];
  for (const [dest, src] of cats) {
    await sharp(join(productsDir, `${src}.webp`)).toFile(join(outDir, `${dest}.webp`));
  }

  const banner = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="440" viewBox="0 0 1200 440">
    <defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFFDF9"/><stop offset="100%" stop-color="#EDE0CE"/></linearGradient></defs>
    <rect width="1200" height="440" fill="url(#bg)" rx="16"/><rect width="1200" height="5" fill="#E8A838"/>
  </svg>`);

  const slots = [
    { id: "variety-chutney", left: 28 },
    { id: "natural-protein", left: 308 },
    { id: "sathu-maavu-laddu", left: 588 },
    { id: "mango-pickle", left: 868 },
  ];
  const composites = [];
  for (const s of slots) {
    const thumb = await sharp(join(productsDir, `${s.id}.webp`)).resize(285, 190).png().toBuffer();
    composites.push({ input: thumb, top: 48, left: s.left });
  }
  await sharp(banner).composite(composites).webp({ quality: 92 }).toFile(join(outDir, "brand-collection.webp"));
  console.log("  brand-collection.webp + category images");
}

console.log("Generating photo-realistic catalogue (AI bases + consistent labels)...");
for (const item of catalogue) {
  await renderProduct(item);
}
await renderCategoryAndCollection();
console.log("Done.");
