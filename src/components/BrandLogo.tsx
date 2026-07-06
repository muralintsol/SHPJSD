type Props = { className?: string };

export function LogoWordmarkLight({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 272 72"
      fill="none"
      className={className}
      role="img"
      aria-label="Sumangali Home Foods"
    >
      <defs>
        <linearGradient id="footer-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#E8A838" />
        </linearGradient>
        <linearGradient id="footer-leaf" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5C7A52" />
          <stop offset="100%" stopColor="#8BA67E" />
        </linearGradient>
      </defs>
      <circle cx="36" cy="36" r="30" fill="#FBF6EE" fillOpacity="0.08" stroke="url(#footer-gold)" strokeWidth="2" />
      <circle cx="36" cy="36" r="24" fill="none" stroke="#F5C842" strokeWidth="0.8" strokeOpacity="0.35" />
      <path d="M14 28 Q36 14 58 28" stroke="#F5C842" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
      <ellipse cx="36" cy="40" rx="13" ry="9.5" fill="url(#footer-gold)" />
      <path d="M25 37 Q36 31 47 37" stroke="#9B4E2A" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M26 30 Q29 24 32 30" stroke="url(#footer-leaf)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 28 Q43 22 46 28" stroke="url(#footer-leaf)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="78" y="34" fontFamily="Georgia, 'Playfair Display', serif" fontSize="26" fontWeight="700" fill="#FBF6EE" letterSpacing="-0.3">
        Sumangali
      </text>
      <text x="78" y="54" fontFamily="Arial, Helvetica, sans-serif" fontSize="10.5" fontWeight="600" fill="#F5C842" letterSpacing="4.5">
        HOME FOODS
      </text>
      <line x1="78" y1="60" x2="262" y2="60" stroke="#E8A838" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 272 72"
      fill="none"
      className={className}
      role="img"
      aria-label="Sumangali Home Foods"
    >
      <defs>
        <linearGradient id="header-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="50%" stopColor="#E8A838" />
          <stop offset="100%" stopColor="#C45C26" />
        </linearGradient>
        <linearGradient id="header-leaf" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5C7A52" />
          <stop offset="100%" stopColor="#6B8F5E" />
        </linearGradient>
      </defs>
      <circle cx="36" cy="36" r="30" fill="#FBF6EE" stroke="url(#header-gold)" strokeWidth="2" />
      <circle cx="36" cy="36" r="24" fill="none" stroke="#E8A838" strokeWidth="0.8" strokeDasharray="2.5 4" opacity="0.45" />
      <path d="M14 28 Q36 14 58 28" stroke="#C45C26" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="36" cy="40" rx="13" ry="9.5" fill="url(#header-gold)" />
      <path d="M25 37 Q36 31 47 37" stroke="#9B4E2A" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.65" />
      <path d="M26 30 Q29 24 32 30" stroke="url(#header-leaf)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 28 Q43 22 46 28" stroke="url(#header-leaf)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="78" y="34" fontFamily="Georgia, 'Playfair Display', serif" fontSize="26" fontWeight="700" fill="#3D2314" letterSpacing="-0.3">
        Sumangali
      </text>
      <text x="78" y="54" fontFamily="Arial, Helvetica, sans-serif" fontSize="10.5" fontWeight="600" fill="#5C7A52" letterSpacing="4.5">
        HOME FOODS
      </text>
      <line x1="78" y1="60" x2="262" y2="60" stroke="#E8A838" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
