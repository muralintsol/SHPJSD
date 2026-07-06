import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ProductCard";
import { Link } from "@/i18n/navigation";
import { Heart, Leaf, Sparkles, ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const vision = await getTranslations("vision");
  const common = await getTranslations("common");

  const values = [
    { icon: Sparkles, title: t("value1Title"), text: t("value1") },
    { icon: Leaf, title: t("value2Title"), text: t("value2") },
    { icon: Heart, title: t("value3Title"), text: t("value3") },
  ];

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg leading-relaxed text-foreground/80">{t("intro")}</p>

        <div className="mt-12 rounded-2xl border border-turmeric/20 bg-white p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-terracotta">
            {t("missionTitle")}
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">{t("mission")}</p>
        </div>

        <h2 className="mt-12 mb-8 text-center font-serif text-2xl font-bold text-terracotta">
          {t("valuesTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-turmeric/20 bg-cream-dark/30 p-6 text-center"
            >
              <Icon className="mx-auto h-10 w-10 text-turmeric" />
              <h3 className="mt-4 font-semibold text-terracotta">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-saffron/15 to-sage/10 p-8">
          <h2 className="font-display text-xl font-bold text-cinnamon">{vision("title")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-mahogany/70">{vision("intro").slice(0, 280)}…</p>
          <Link
            href="/vision"
            className="mt-5 inline-flex items-center gap-1 font-semibold text-paprika hover:gap-2 transition-all"
          >
            {common("learnMore")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 rounded-2xl bg-leaf/10 p-8 text-center">
          <h2 className="font-serif text-xl font-bold text-leaf">
            {t("locationTitle")}
          </h2>
          <p className="mt-3 text-foreground/70">{t("location")}</p>
          <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-cream-dark">
            <iframe
              title="Darshanapur location"
              src="https://maps.google.com/maps?q=Darshanapur,Yadgir,Karnataka&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
