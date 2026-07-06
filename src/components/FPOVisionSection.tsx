"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Users, Store, Package, TrendingUp, ArrowRight } from "lucide-react";

const pillarIcons = [Users, Store, Package, TrendingUp] as const;

export function FPOVisionTeaser() {
  const t = useTranslations("vision");
  const common = useTranslations("common");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage/15 via-cream to-saffron/10 px-4 py-24">
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-sage uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-mahogany sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mahogany/65">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => {
            const Icon = pillarIcons[n - 1];
            return (
              <div
                key={n}
                className="card-elevated rounded-2xl bg-white p-6 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-saffron" />
                <h3 className="mt-4 font-display text-base font-bold text-cinnamon">
                  {t(`pillar${n}Title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mahogany/60">
                  {t(`pillar${n}Text`)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/vision"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cinnamon to-paprika px-8 py-3 font-semibold text-cream transition-all hover:gap-3"
          >
            {common("learnMore")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FPOVisionFull() {
  const t = useTranslations("vision");
  const common = useTranslations("common");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  const steps = [1, 2, 3, 4].map((n) => ({
    title: t(`step${n}Title`),
    text: t(`step${n}Text`),
  }));

  const audiences = [1, 2, 3].map((n) => ({
    title: t(`audience${n}Title`),
    text: t(`audience${n}Text`),
  }));

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg leading-relaxed text-mahogany/75">{t("intro")}</p>

        <div className="mt-10 rounded-2xl border border-saffron/20 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-cinnamon">
            {t("modelTitle")}
          </h2>
          <p className="mt-4 leading-relaxed text-mahogany/70">{t("modelText")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-gradient-to-br from-saffron/15 to-paprika/10 p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-paprika">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-mahogany/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark/50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-bold text-mahogany sm:text-3xl">
            {t("pillarsTitle")}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => {
              const Icon = pillarIcons[n - 1];
              return (
                <div
                  key={n}
                  className="card-elevated flex gap-5 rounded-2xl bg-white p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron/15">
                    <Icon className="h-6 w-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-cinnamon">
                      {t(`pillar${n}Title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mahogany/65">
                      {t(`pillar${n}Detail`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-center font-display text-2xl font-bold text-mahogany">
          {t("pathTitle")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-mahogany/65">
          {t("pathSubtitle")}
        </p>
        <div className="relative mt-12 space-y-8 border-l-2 border-saffron pl-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-saffron ring-4 ring-cream" />
              <h3 className="font-display font-bold text-cinnamon">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-mahogany/65">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-mahogany via-rosewood to-cinnamon px-4 py-16 text-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            {t("audiencesTitle")}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-display font-bold text-marigold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-display text-lg italic text-cream/90">{t("ctaQuote")}</p>
            <Link
              href="/contact"
              className="btn-primary mt-8 inline-block bg-gradient-to-r from-marigold to-saffron"
            >
              {t("ctaButton")}
            </Link>
            <p className="mt-4 text-sm text-cream/60">{common("contactUs")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
