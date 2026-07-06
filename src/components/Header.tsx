import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LogoWordmark, LogoWordmarkLight } from "@/components/BrandLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <LogoWordmark
      className={`h-11 w-auto sm:h-12 ${className}`}
    />
  );
}

export function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/products", label: t("products") },
    { href: "/story", label: t("story") },
    { href: "/vision", label: t("vision") },
    { href: "/health", label: t("health") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-saffron/15 bg-cream/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
          <Logo className="h-11 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-cinnamon transition-colors hover:bg-saffron/10 hover:text-paprika"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher locale={locale} />
      </div>

      <nav className="flex gap-2 overflow-x-auto border-t border-saffron/10 px-4 py-2.5 lg:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full bg-cream-dark px-4 py-1.5 text-xs font-semibold text-cinnamon"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const brand = useTranslations("brand");

  return (
    <footer className="mt-auto bg-mahogany text-cream">
      <div className="heritage-border" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <LogoWordmarkLight className="mb-5 h-auto w-[200px] sm:w-[220px]" />
            <p className="font-display text-sm italic text-cream/75">{brand("tagline")}</p>
            <p className="mt-2 text-xs text-cream/50">{t("tagline")}</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-saffron uppercase">Explore</h3>
            <ul className="space-y-2.5 text-sm text-cream/75">
              <li><Link href="/about" className="hover:text-marigold transition-colors">{nav("about")}</Link></li>
              <li><Link href="/products" className="hover:text-marigold transition-colors">{nav("products")}</Link></li>
              <li><Link href="/story" className="hover:text-marigold transition-colors">{nav("story")}</Link></li>
              <li><Link href="/vision" className="hover:text-marigold transition-colors">{nav("vision")}</Link></li>
              <li><Link href="/contact" className="hover:text-marigold transition-colors">{nav("contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-saffron uppercase">Sumangali Home Foods</h3>
            <p className="text-sm leading-relaxed text-cream/75">
              Janaki Sudath Darshanapur
              <br />
              Darshanapur, Yadgir, Karnataka 585309
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/45">
          © {new Date().getFullYear()} Sumangali Home Foods. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
