import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const labelsDir = join(root, "public", "packaging", "labels");
const outDir = join(root, "public", "packaging");

const studioBg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <radialGradient id="bg" cx="50%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#FFFCF7"/>
      <stop offset="55%" stop-color="#F5EBDC"/>
      <stop offset="100%" stop-color="#E6D5C0"/>
    </radialGradient>
    <radialGradient id="floor" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3D2314" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#3D2314" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="400" fill="url(#bg)"/>
  <ellipse cx="300" cy="355" rx="140" ry="22" fill="url(#floor)"/>
</svg>`;

const bodies = {
  chutney: `
<svg xmlns="http://www.w3.org/2000/svg" width="280" height="340" viewBox="0 0 280 340">
  <defs>
    <linearGradient id="kraft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8D0B0"/><stop offset="45%" stop-color="#C9A67A"/><stop offset="100%" stop-color="#A8845A"/>
    </linearGradient>
    <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.22"/><stop offset="35%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <filter id="sh"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#3D2314" flood-opacity="0.22"/></filter>
  </defs>
  <rect x="50" y="20" width="180" height="300" rx="14" fill="url(#kraft)" stroke="#8B6340" stroke-width="1.2" filter="url(#sh)"/>
  <rect x="50" y="20" width="55" height="300" rx="14" fill="url(#shine)"/>
  <path d="M70 20 Q140 8 210 20" stroke="#8B6340" stroke-width="1" fill="none" opacity="0.35"/>
</svg>`,
  protein: `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="340" viewBox="0 0 300 340">
  <defs>
    <linearGradient id="bag" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EDE3D2"/><stop offset="50%" stop-color="#CDBFA0"/><stop offset="100%" stop-color="#B09A78"/>
    </linearGradient>
    <filter id="sh"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#3D2314" flood-opacity="0.22"/></filter>
  </defs>
  <path d="M55 25 L245 25 L265 310 L35 310 Z" fill="url(#bag)" stroke="#9B7E5A" stroke-width="1.5" filter="url(#sh)"/>
  <path d="M75 25 Q150 12 225 25" stroke="#9B7E5A" stroke-width="1" fill="none" opacity="0.4"/>
</svg>`,
  laddu: `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <defs>
    <linearGradient id="box" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF0E4"/><stop offset="100%" stop-color="#DFC9A8"/>
    </linearGradient>
    <linearGradient id="band" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D4642A"/><stop offset="100%" stop-color="#9B4E2A"/>
    </linearGradient>
    <filter id="sh"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#3D2314" flood-opacity="0.22"/></filter>
  </defs>
  <rect x="40" y="50" width="220" height="220" rx="12" fill="url(#box)" stroke="#9B4E2A" stroke-width="1.5" filter="url(#sh)"/>
  <rect x="40" y="50" width="220" height="52" rx="12" fill="url(#band)"/>
  <rect x="40" y="90" width="220" height="12" fill="url(#band)"/>
  <circle cx="115" cy="175" r="14" fill="#E8A838" opacity="0.9"/>
  <circle cx="150" cy="160" r="18" fill="#F5C842"/>
  <circle cx="185" cy="175" r="14" fill="#C45C26" opacity="0.85"/>
  <text x="150" y="220" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#3D2314" opacity="0.5">8 Pieces</text>
</svg>`,
  pickle: `
<svg xmlns="http://www.w3.org/2000/svg" width="220" height="340" viewBox="0 0 220 340">
  <defs>
    <linearGradient id="lid" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F5D060"/><stop offset="100%" stop-color="#B8860B"/>
    </linearGradient>
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B8D4B0"/><stop offset="40%" stop-color="#E8F5E4"/><stop offset="100%" stop-color="#A8C8A0"/>
    </linearGradient>
    <filter id="sh"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#3D2314" flood-opacity="0.22"/></filter>
  </defs>
  <ellipse cx="110" cy="42" rx="72" ry="20" fill="url(#lid)" filter="url(#sh)"/>
  <rect x="38" y="42" width="144" height="24" fill="url(#lid)"/>
  <path d="M42 66 Q110 82 178 66 L172 290 Q110 308 48 290 Z" fill="url(#glass)" stroke="#6B9060" stroke-width="2"/>
  <ellipse cx="85" cy="180" rx="22" ry="28" fill="#E8A838" opacity="0.35"/>
  <ellipse cx="130" cy="200" rx="18" ry="24" fill="#F5C842" opacity="0.3"/>
</svg>`,
};

const layouts = {
  chutney: { body: "chutney", label: "chutney-label.svg", bodyTop: 30, bodyLeft: 160, labelWidth: 200, labelTop: 72, labelLeft: 200 },
  protein: { body: "protein", label: "protein-label.svg", bodyTop: 30, bodyLeft: 150, labelWidth: 210, labelTop: 95, labelLeft: 195 },
  laddu: { body: "laddu", label: "laddu-label.svg", bodyTop: 50, bodyLeft: 150, labelWidth: 285, labelTop: 58, labelLeft: 158 },
  pickle: { body: "pickle", label: "pickle-label.svg", bodyTop: 30, bodyLeft: 190, labelWidth: 188, labelTop: 88, labelLeft: 206 },
};

async function renderLabel(filename, width) {
  const svg = readFileSync(join(labelsDir, filename));
  const meta = await sharp(svg).metadata();
  const h = Math.round(width * ((meta.height ?? 128) / (meta.width ?? 220)));
  return sharp(svg).resize(width, h).png().toBuffer();
}

async function renderProduct(key, layout) {
  const bg = await sharp(Buffer.from(studioBg)).png().toBuffer();
  const body = await sharp(Buffer.from(bodies[layout.body])).png().toBuffer();
  const label = await renderLabel(layout.label, layout.labelWidth);

  const composites = [
    { input: body, top: layout.bodyTop, left: layout.bodyLeft },
    { input: label, top: layout.labelTop, left: layout.labelLeft },
  ];

  const webp = await sharp(bg).composite(composites).webp({ quality: 88 }).toBuffer();
  const name = key === "chutney" ? "chutney-pouch" : key === "protein" ? "protein-bag" : key === "laddu" ? "laddu-box" : "pickle-jar";
  await sharp(webp).toFile(join(outDir, `${name}.webp`));
  console.log(`Created ${name}.webp`);
  return webp;
}

async function renderCollection() {
  const items = [
    { key: "chutney", top: 30, left: 30, scale: 0.52 },
    { key: "protein", top: 30, left: 310, scale: 0.52 },
    { key: "laddu", top: 30, left: 590, scale: 0.52 },
    { key: "pickle", top: 30, left: 870, scale: 0.52 },
  ];

  const bannerBg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="420" viewBox="0 0 1200 420">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFCF7"/><stop offset="100%" stop-color="#EDE0CE"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="420" fill="url(#bg)" rx="16"/>
  <rect width="1200" height="5" fill="#E8A838" rx="16"/>
</svg>`;

  const composites = [];
  for (const item of items) {
    const layout = layouts[item.key];
    const w = Math.round(600 * item.scale);
    const h = Math.round(400 * item.scale);
    const single = await sharp(join(outDir, `${item.key === "chutney" ? "chutney-pouch" : item.key === "protein" ? "protein-bag" : item.key === "laddu" ? "laddu-box" : "pickle-jar"}.webp`))
      .resize(w, h)
      .png()
      .toBuffer();
    composites.push({ input: single, top: item.top, left: item.left });
  }

  await sharp(Buffer.from(bannerBg))
    .composite(composites)
    .webp({ quality: 88 })
    .toFile(join(outDir, "brand-collection.webp"));

  console.log("Created brand-collection.webp");
}

for (const [key, layout] of Object.entries(layouts)) {
  await renderProduct(key, layout);
}
await renderCollection();
console.log("All packaging photos ready.");
