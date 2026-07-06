import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ProductCard";
import { packagingItems } from "@/data/packaging";
import { PackagingPhoto } from "@/components/packaging/PackagingPhoto";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "story" });
  return { title: t("title") };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("story");
  const pkg = await getTranslations("packaging");

  const timeline = [
    { year: t("timeline1Year"), text: t("timeline1") },
    { year: t("timeline2Year"), text: t("timeline2") },
    { year: t("timeline3Year"), text: t("timeline3") },
    { year: t("timeline4Year"), text: t("timeline4") },
  ];

  const steps = [
    { num: "1", title: t("step1Title"), text: t("step1"), icon: "🌾" },
    { num: "2", title: t("step2Title"), text: t("step2"), icon: "☀️" },
    { num: "3", title: t("step3Title"), text: t("step3"), icon: "🏺" },
  ];

  const gallery = packagingItems;

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="relative space-y-8 border-l-2 border-turmeric pl-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-turmeric ring-4 ring-cream" />
              <span className="text-sm font-bold text-kumkum">{item.year}</span>
              <p className="mt-1 text-foreground/70">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 mb-8 text-center font-serif text-2xl font-bold text-terracotta">
          {t("processTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="card-elevated rounded-2xl p-6 text-center"
            >
              <span className="text-4xl">{step.icon}</span>
              <span className="mt-2 block text-xs font-bold text-saffron">
                STEP {step.num}
              </span>
              <h3 className="mt-2 font-display font-semibold text-mahogany">{step.title}</h3>
              <p className="mt-2 text-sm text-mahogany/65">{step.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 mb-8 text-center font-display text-2xl font-bold text-mahogany">
          {t("galleryTitle")}
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="card-elevated flex flex-col items-center rounded-2xl bg-white p-3"
            >
              <PackagingPhoto
                src={item.photo}
                alt={pkg(`${item.key}.title`)}
                className="h-auto w-full max-h-[145px] max-w-[160px] object-contain"
                Fallback={item.Illustration}
              />
              <p className="mt-3 text-center text-xs font-semibold text-cinnamon">
                {pkg(`${item.key}.title`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
