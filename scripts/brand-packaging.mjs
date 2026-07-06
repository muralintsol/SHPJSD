import sharp from "sharp";
import { readFileSync, copyFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packagingDir = join(__dirname, "..", "public", "packaging");

const labelStandard = readFileSync(join(packagingDir, "brand-label.svg"));
const labelRibbon = readFileSync(join(packagingDir, "brand-label-ribbon.svg"));

const layouts = {
  "chutney-pouch": {
    overlays: [{ svg: labelStandard, width: 178, top: 58, left: 210 }],
  },
  "protein-bag": {
    overlays: [{ svg: labelStandard, width: 198, top: 84, left: 198 }],
  },
  "laddu-box": {
    overlays: [{ svg: labelRibbon, width: 285, top: 20, left: 158 }],
  },
  "pickle-jar": {
    overlays: [{ svg: labelStandard, width: 168, top: 68, left: 216 }],
  },
  "brand-collection": {
    overlays: [
      { svg: labelStandard, width: 128, top: 92, left: 52 },
      { svg: labelStandard, width: 128, top: 92, left: 308 },
      { svg: labelRibbon, width: 172, top: 86, left: 548 },
      { svg: labelStandard, width: 122, top: 88, left: 812 },
    ],
  },
};

async function renderLabel(svg, width) {
  const meta = await sharp(svg).metadata();
  const h = Math.round(width * ((meta.height ?? 104) / (meta.width ?? 220)));
  const buffer = await sharp(svg).resize(width, h).png().toBuffer();
  return { buffer, height: h };
}

async function brandImage(name) {
  const dest = join(packagingDir, `${name}.webp`);
  const raw = join(packagingDir, `${name}-raw.webp`);

  if (!existsSync(raw)) {
    copyFileSync(dest, raw);
    console.log(`Backed up ${name} → ${name}-raw.webp`);
  }

  const src = raw;
  const { overlays } = layouts[name];

  const composites = [];
  for (const o of overlays) {
    const { buffer } = await renderLabel(o.svg, o.width);
    composites.push({
      input: buffer,
      top: Math.round(o.top),
      left: Math.round(o.left),
    });
  }

  await sharp(src).composite(composites).webp({ quality: 86 }).toFile(dest);

  const stat = await sharp(dest).metadata();
  console.log(`Branded ${name}.webp (${stat.width}x${stat.height})`);
}

for (const name of Object.keys(layouts)) {
  await brandImage(name);
}

console.log("Done.");
