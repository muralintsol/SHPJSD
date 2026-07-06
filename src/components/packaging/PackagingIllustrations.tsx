"use client";

import { useId } from "react";

type Props = { className?: string };

function BrandMark({ cx, cy, r, strokeId }: { cx: number; cy: number; r: number; strokeId: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#FBF6EE" stroke={`url(#${strokeId})`} strokeWidth="2" />
      <ellipse cx={cx} cy={cy + r * 0.12} rx={r * 0.55} ry={r * 0.38} fill="#E8A838" />
      <path
        d={`M${cx - r * 0.35} ${cy - r * 0.55} Q${cx} ${cy - r * 0.75} ${cx + r * 0.35} ${cy - r * 0.55}`}
        stroke="#C45C26"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

function CenteredBadge({
  cx,
  y,
  width,
  text,
  fill,
}: {
  cx: number;
  y: number;
  width: number;
  text: string;
  fill: string;
}) {
  const h = 22;
  return (
    <g>
      <rect x={cx - width / 2} y={y} width={width} height={h} rx={h / 2} fill={fill} />
      <text
        x={cx}
        y={y + h / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="700"
        letterSpacing="0.5"
        fill="white"
      >
        {text}
      </text>
    </g>
  );
}

export function ChutneyPouchIllustration({ className = "" }: Props) {
  const uid = useId().replace(/:/g, "");
  const cx = 140;
  const pouchX = 44;
  const pouchW = 192;
  const labelX = 64;
  const labelW = 152;
  const labelY = 58;

  return (
    <svg viewBox="0 0 280 360" fill="none" className={className} role="img" aria-label="Chutney pouch packaging">
      <defs>
        <linearGradient id={`${uid}-kraft`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0DCC4" />
          <stop offset="100%" stopColor="#C4A078" />
        </linearGradient>
        <linearGradient id={`${uid}-gold`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#C45C26" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3D2314" floodOpacity="0.12" />
        </filter>
      </defs>

      <rect x={pouchX} y="16" width={pouchW} height="300" rx="14" fill={`url(#${uid}-kraft)`} stroke="#9B4E2A" strokeWidth="1.5" filter={`url(#${uid}-shadow)`} />
      <path d={`M${pouchX + 20} 16 Q${cx} 4 ${pouchX + pouchW - 20} 16`} stroke="#9B4E2A" strokeWidth="1" fill="none" opacity="0.35" />

      <rect x={labelX} y={labelY} width={labelW} height="108" rx="10" fill="#FFFDF9" stroke={`url(#${uid}-gold)`} strokeWidth="2" />
      <BrandMark cx={cx} cy={labelY + 38} r={22} strokeId={`${uid}-gold`} />

      <text x={cx} y={labelY + 72} textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontWeight="700" fill="#3D2314">
        Sumangali
      </text>
      <text x={cx} y={labelY + 86} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#5C7A52" letterSpacing="3">
        HOME FOODS
      </text>

      <text x={cx} y="198" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" fontWeight="600" fill="#9B4E2A">
        Chutney Pudi
      </text>
      <text x={cx} y="218" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#3D2314" opacity="0.65">
        Handcrafted · 200g
      </text>

      <CenteredBadge cx={cx} y={232} width={128} text="NO PRESERVATIVES" fill="#5C7A52" />

      <text x={cx} y="290" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontStyle="italic" fill="#9B4E2A" opacity="0.85">
        Preserving Authentic Tastes
      </text>
    </svg>
  );
}

export function PickleJarIllustration({ className = "" }: Props) {
  const uid = useId().replace(/:/g, "");
  const cx = 140;
  const jarLeft = 78;
  const jarRight = 202;
  const labelX = 88;
  const labelW = 104;

  return (
    <svg viewBox="0 0 280 360" fill="none" className={className} role="img" aria-label="Pickle jar packaging">
      <defs>
        <linearGradient id={`${uid}-jar`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D8ECD4" />
          <stop offset="50%" stopColor="#F0FAEE" />
          <stop offset="100%" stopColor="#C0D8BC" />
        </linearGradient>
        <linearGradient id={`${uid}-lid`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#9B4E2A" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3D2314" floodOpacity="0.12" />
        </filter>
      </defs>

      <ellipse cx={cx} cy="48" rx="62" ry="16" fill={`url(#${uid}-lid)`} filter={`url(#${uid}-shadow)`} />
      <rect x={jarLeft} y="48" width={jarRight - jarLeft} height="22" fill={`url(#${uid}-lid)`} />
      <path
        d={`M${jarLeft + 4} 70 Q${cx} 84 ${jarRight - 4} 70 L${jarRight - 6} 278 Q${cx} 296 ${jarLeft + 6} 278 Z`}
        fill={`url(#${uid}-jar)`}
        stroke="#5C7A52"
        strokeWidth="2"
      />

      <rect x={labelX} y="108" width={labelW} height="88" rx="8" fill="#FFFDF9" stroke="#E8A838" strokeWidth="1.5" />
      <BrandMark cx={cx} cy={138} r={16} strokeId={`${uid}-lid`} />
      <text x={cx} y="162" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fontWeight="700" fill="#3D2314">
        Sumangali
      </text>
      <text x={cx} y="182" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontWeight="600" fill="#C45C26">
        Mango Pickle
      </text>

      <ellipse cx={cx} cy="228" rx="30" ry="22" fill="#E8A838" opacity="0.55" />
      <ellipse cx={cx} cy="226" rx="24" ry="17" fill="#F5C842" opacity="0.85" />

      <text x={cx} y="262" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#3D2314" opacity="0.7">
        500g · Sun-Dried
      </text>

      <CenteredBadge cx={cx} y={276} width={118} text="HERITAGE RECIPE" fill="#C45C26" />
    </svg>
  );
}

export function LadduBoxIllustration({ className = "" }: Props) {
  const uid = useId().replace(/:/g, "");
  const cx = 140;
  const boxX = 36;
  const boxW = 208;
  const boxY = 72;

  return (
    <svg viewBox="0 0 280 360" fill="none" className={className} role="img" aria-label="Laddu box packaging">
      <defs>
        <linearGradient id={`${uid}-box`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF0E4" />
          <stop offset="100%" stopColor="#E2C9A0" />
        </linearGradient>
        <linearGradient id={`${uid}-ribbon`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4642A" />
          <stop offset="100%" stopColor="#9B4E2A" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#3D2314" floodOpacity="0.14" />
        </filter>
      </defs>

      <rect x={boxX} y={boxY} width={boxW} height="168" rx="10" fill={`url(#${uid}-box)`} stroke="#9B4E2A" strokeWidth="2" filter={`url(#${uid}-shadow)`} />
      <rect x={boxX} y={boxY} width={boxW} height="38" rx="10" fill={`url(#${uid}-ribbon)`} />
      <rect x={boxX} y={boxY + 28} width={boxW} height="10" fill={`url(#${uid}-ribbon)`} />

      <text x={cx} y={boxY + 24} textAnchor="middle" dominantBaseline="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="white">
        Sumangali Home Foods
      </text>

      <circle cx={cx - 18} cy={boxY + 78} r="9" fill="#E8A838" />
      <circle cx={cx} cy={boxY + 68} r="11" fill="#F5C842" stroke="#E8A838" strokeWidth="1.5" />
      <circle cx={cx + 18} cy={boxY + 78} r="9" fill="#C45C26" />

      <text x={cx} y={boxY + 118} textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="600" fill="#3D2314">
        Health Mix Laddu
      </text>
      <text x={cx} y={boxY + 136} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#5C7A52">
        8 Pieces · Pure Ghee
      </text>

      <CenteredBadge cx={cx} y={boxY + 148} width={148} text="NUTRITIOUS & NATURAL" fill="#5C7A52" />

      <text x={cx} y="290" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontStyle="italic" fill="#9B4E2A" opacity="0.8">
        Gift-Ready · Made with Love
      </text>
    </svg>
  );
}

export function ProteinBagIllustration({ className = "" }: Props) {
  const uid = useId().replace(/:/g, "");
  const cx = 140;
  const labelX = 56;
  const labelW = 168;
  const labelY = 72;

  return (
    <svg viewBox="0 0 280 360" fill="none" className={className} role="img" aria-label="Protein bag packaging">
      <defs>
        <linearGradient id={`${uid}-bag`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2E8DA" />
          <stop offset="100%" stopColor="#C8B898" />
        </linearGradient>
        <linearGradient id={`${uid}-gold`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#C45C26" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3D2314" floodOpacity="0.12" />
        </filter>
      </defs>

      <path
        d={`M${cx - 78} 28 L${cx + 78} 28 L${cx + 96} 300 L${cx - 96} 300 Z`}
        fill={`url(#${uid}-bag)`}
        stroke="#9B4E2A"
        strokeWidth="2"
        filter={`url(#${uid}-shadow)`}
      />
      <path d={`M${cx - 58} 28 Q${cx} 18 ${cx + 58} 28`} stroke="#9B4E2A" strokeWidth="1.2" fill="none" opacity="0.4" />

      <rect x={labelX} y={labelY} width={labelW} height="112" rx="10" fill="#FFFDF9" stroke={`url(#${uid}-gold)`} strokeWidth="2" />
      <BrandMark cx={cx} cy={labelY + 40} r={20} strokeId={`${uid}-gold`} />

      <text x={cx} y={labelY + 72} textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="#3D2314">
        Sumangali
      </text>
      <text x={cx} y={labelY + 86} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#5C7A52" letterSpacing="3">
        HOME FOODS
      </text>

      <text x={cx} y="218" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="600" fill="#9B4E2A">
        Protein Powder
      </text>
      <text x={cx} y="238" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#3D2314" opacity="0.65">
        Sprouted Grains · 500g
      </text>

      <CenteredBadge cx={cx} y={252} width={120} text="PLANT PROTEIN" fill="#C45C26" />
    </svg>
  );
}

export function BrandCollectionIllustration({ className = "" }: Props) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 600 400" fill="none" className={className} role="img" aria-label="Sumangali Home Foods brand packaging collection">
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF9" />
          <stop offset="100%" stopColor="#F0E6D8" />
        </linearGradient>
        <linearGradient id={`${uid}-gold`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#C45C26" />
        </linearGradient>
      </defs>

      <rect width="600" height="400" fill={`url(#${uid}-bg)`} rx="16" />
      <rect x="0" y="0" width="600" height="5" fill={`url(#${uid}-gold)`} rx="16" />

      <text x="300" y="42" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#3D2314">
        Sumangali Home Foods
      </text>
      <text x="300" y="64" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontStyle="italic" fill="#9B4E2A">
        Premium packaging for authentic taste lovers
      </text>

      {/* Mini pouch - centered in slot 1 */}
      <g transform="translate(40, 88)">
        <rect x="15" y="0" width="90" height="130" rx="8" fill="#E8D4B8" stroke="#9B4E2A" strokeWidth="1" />
        <rect x="28" y="22" width="64" height="44" rx="5" fill="#FFFDF9" stroke="#E8A838" strokeWidth="1" />
        <circle cx="60" cy="38" r="10" fill="#FBF6EE" stroke="#E8A838" strokeWidth="1" />
        <ellipse cx="60" cy="39" rx="6" ry="4" fill="#E8A838" />
        <text x="60" y="78" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontWeight="600" fill="#3D2314">Chutney</text>
        <text x="60" y="108" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#5C7A52">Kraft Pouch</text>
      </g>

      {/* Mini jar - centered in slot 2 */}
      <g transform="translate(168, 88)">
        <ellipse cx="60" cy="10" rx="28" ry="8" fill="#E8A838" />
        <path d="M32 10 L30 110 Q60 120 90 110 L88 10 Z" fill="#E8F5E4" stroke="#5C7A52" strokeWidth="1" />
        <text x="60" y="72" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontWeight="600" fill="#C45C26">Pickle</text>
        <text x="60" y="108" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#5C7A52">Glass Jar</text>
      </g>

      {/* Mini box - centered in slot 3 */}
      <g transform="translate(296, 88)">
        <rect x="10" y="20" width="100" height="80" rx="6" fill="#F5E6D0" stroke="#9B4E2A" strokeWidth="1" />
        <rect x="10" y="20" width="100" height="18" rx="6" fill="#C45C26" />
        <text x="60" y="32" textAnchor="middle" dominantBaseline="middle" fontFamily="Georgia, serif" fontSize="6" fill="white">Sumangali</text>
        <circle cx="48" cy="58" r="5" fill="#E8A838" />
        <circle cx="60" cy="52" r="6" fill="#F5C842" />
        <circle cx="72" cy="58" r="5" fill="#C45C26" />
        <text x="60" y="78" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontWeight="600" fill="#3D2314">Laddu Box</text>
        <text x="60" y="108" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#5C7A52">Gift-Ready</text>
      </g>

      {/* Mini bag - centered in slot 4 */}
      <g transform="translate(424, 88)">
        <path d="M20 8 L100 8 L108 118 L12 118 Z" fill="#D4C4A8" stroke="#9B4E2A" strokeWidth="1" />
        <rect x="32" y="28" width="56" height="40" rx="4" fill="#FFFDF9" stroke="#E8A838" strokeWidth="1" />
        <text x="60" y="78" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontWeight="600" fill="#3D2314">Protein</text>
        <text x="60" y="108" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#5C7A52">Stand-Up Bag</text>
      </g>

      {/* Heritage label strip - perfectly centered */}
      <rect x="120" y="248" width="360" height="72" rx="12" fill="#FFFDF9" stroke={`url(#${uid}-gold)`} strokeWidth="2" />
      <circle cx="168" cy="284" r="20" fill="#FBF6EE" stroke="#E8A838" strokeWidth="1.5" />
      <ellipse cx="168" cy="286" rx="11" ry="8" fill="#E8A838" />
      <text x="310" y="276" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#3D2314">
        Heritage Label Design
      </text>
      <text x="310" y="298" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#5C7A52" letterSpacing="0.5">
        Handcrafted · Women-Led · No Preservatives
      </text>
    </svg>
  );
}
