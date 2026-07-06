import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BrandImage } from "@/components/BrandImage";
import { SectionHeading, TrustBadge } from "@/components/ProductCard";
import { PackagingShowcase } from "@/components/PackagingShowcase";
import { FPOVisionTeaser } from "@/components/FPOVisionSection";
import { products } from "@/data/products";
import { getProductName } from "@/data/products";
import { packagingByCategory, packagingPhotos, BrandCollectionIllustration } from "@/data/packaging";
import { PackagingPhoto } from "@/components/packaging/PackagingPhoto";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/og-image.svg"],
      locale,
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const brand = await getTranslations("brand");
  const badges = await getTranslations("badges");
  const common = await getTranslations("common");
  const categories = await getTranslations("categories");

  const featured = [
    products.find((p) => p.id === "variety-chutney")!,
    products.find((p) => p.id === "natural-protein")!,
    products.find((p) => p.id === "sathu-maavu-laddu")!,
    products.find((p) => p.id === "mango-pickle")!,
  ];

  const categoryLabels: Record<string, string> = {
    chutney: categories("chutney"),
    protein: categories("protein"),
    baby: categories("baby"),
    pickles: categories("pickles"),
  };

  const heroItems = [
    { emoji: "🌶️", label: "Spices", color: "#C45C26" },
    { emoji: "🫙", label: "Pickles", color: "#9B4E2A" },
    { emoji: "🍡", label: "Laddus", color: "#E8A838" },
    { emoji: "🌿", label: "Heritage", color: "#5C7A52" },
  ];

  return (
    <>
      <section className="grain-overlay spice-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-marigold/20 via-cream to-sage/10" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-saffron/15 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-paprika/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 lg:flex-row lg:gap-16 lg:py-28">
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <BrandImage
                src="/logo-full.svg"
                alt="Sumangali Home Foods"
                width={400}
                height={120}
                className="mx-auto mb-8 h-auto w-full max-w-[380px] lg:mx-0"
                priority
              />
              <p className="font-display text-2xl font-bold italic leading-snug text-mahogany sm:text-3xl">
                {brand("tagline")}
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-mahogany/70 lg:mx-0 mx-auto">
                {brand("heroSubtitle")}
              </p>
              <p className="mt-3 text-sm font-semibold tracking-wide text-sage uppercase">
                {brand("taglineSecondary")}
              </p>
              <Link href="/products" className="btn-primary mt-8 inline-block">
                {t("heroCta")}
              </Link>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4">
            {heroItems.map((item, i) => (
              <div
                key={i}
                className="card-elevated animate-float flex aspect-square flex-col items-center justify-center rounded-3xl p-4"
                style={{ animationDelay: `${i * 0.5}s`, background: `linear-gradient(145deg, white, ${item.color}12)` }}
              >
                <span className="text-5xl">{item.emoji}</span>
                <span className="mt-2 text-xs font-semibold tracking-wider text-cinnamon uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mahogany px-4 py-10 text-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <span className="quote-mark hidden sm:block">&ldquo;</span>
          <p className="font-display flex-1 text-xl italic leading-relaxed sm:text-2xl">
            {brand("storyQuote")}
          </p>
          <span className="quote-mark hidden rotate-180 sm:block">&rdquo;</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <TrustBadge icon="✨" label={badges("womenLed")} />
          <TrustBadge icon="🌿" label={badges("noPreservatives")} />
          <TrustBadge icon="🏺" label={badges("smallBatch")} />
          <TrustBadge icon="📜" label={badges("heritageCraft")} />
        </div>
      </section>

      <section className="bg-cream-dark/60 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title={t("featuredTitle")}
            subtitle={t("featuredSubtitle")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => {
              const Illustration = packagingByCategory[product.category];
              return (
              <Link
                key={product.id}
                href="/products"
                className="card-elevated group rounded-3xl overflow-hidden text-center"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-b from-cream-dark/30 to-white px-2 py-3">
                  <PackagingPhoto
                    src={packagingPhotos[product.category]}
                    alt={getProductName(product, locale)}
                    className="h-full max-h-[135px] w-auto transition-transform group-hover:scale-105 group-hover:-translate-y-1"
                    Fallback={Illustration}
                  />
                </div>
                <div className="p-5">
                <h3 className="font-display text-lg font-bold text-mahogany group-hover:text-paprika">
                  {getProductName(product, locale)}
                </h3>
                <p className="mt-2 text-xs font-medium tracking-wide text-sage uppercase">
                  {categoryLabels[product.category]}
                </p>
                </div>
              </Link>
            );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-block rounded-full border-2 border-saffron px-8 py-2.5 font-semibold text-cinnamon transition-all hover:bg-saffron hover:text-white"
            >
              {common("viewAll")}
            </Link>
          </div>
        </div>
      </section>

      <PackagingShowcase />

      <FPOVisionTeaser />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-saffron/30 to-paprika/20" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-xl">
              <PackagingPhoto
                src={packagingPhotos.collection}
                alt="Sumangali Home Foods packaging collection"
                className="w-full rounded-xl"
                Fallback={BrandCollectionIllustration}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold tracking-widest text-saffron uppercase">
              Our Founder
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-mahogany sm:text-4xl">
              {t("founderTitle")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mahogany/70">
              {t("founderText")}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-paprika hover:gap-2 transition-all"
            >
              {t("founderCta")} →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-cinnamon via-rosewood to-mahogany px-4 py-20 text-cream">
        <div className="heritage-border absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-5 text-lg text-cream/85">{t("ctaText")}</p>
          <Link href="/contact" className="btn-primary mt-10 inline-block bg-gradient-to-r from-marigold to-saffron">
            {common("contactUs")}
          </Link>
        </div>
      </section>
    </>
  );
}
