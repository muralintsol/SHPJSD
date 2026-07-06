"use client";

import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

const localeLabels: Record<string, string> = {
  en: "EN",
  kn: "ಕನ್ನಡ",
  te: "తెలుగు",
};

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const locales = ["en", "kn", "te"] as const;

  return (
    <div className="flex items-center gap-1 rounded-full bg-cream-dark px-1 py-1">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            locale === l
              ? "bg-gradient-to-r from-saffron to-paprika text-white shadow-sm"
              : "text-cinnamon hover:bg-cream-dark"
          }`}
        >
          {localeLabels[l]}
        </Link>
      ))}
    </div>
  );
}
