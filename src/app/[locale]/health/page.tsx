import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ProductCard";
import { Check, X } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "health" });
  return { title: t("title") };
}

export default async function HealthPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("health");

  const benefits = [
    { title: t("chutneyTitle"), text: t("chutneyText"), icon: "🌶️" },
    { title: t("sathuTitle"), text: t("sathuText"), icon: "🍡" },
    { title: t("pickleTitle"), text: t("pickleText"), icon: "🥭" },
  ];

  const comparisonRows = [
    { label: t("row1"), home: t("row1Home"), store: t("row1Store") },
    { label: t("row2"), home: t("row2Home"), store: t("row2Store") },
    { label: t("row3"), home: t("row3Home"), store: t("row3Store") },
    { label: t("row4"), home: t("row4Home"), store: t("row4Store") },
  ];

  const tips = [t("tip1"), t("tip2"), t("tip3")];

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-turmeric/20 bg-white p-6 shadow-sm"
            >
              <span className="text-4xl">{b.icon}</span>
              <h3 className="mt-4 font-serif text-xl font-bold text-terracotta">
                {b.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 mb-8 text-center font-serif text-2xl font-bold text-terracotta">
          {t("comparisonTitle")}
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-turmeric/20 bg-white shadow-sm">
          <table className="w-full min-w-[400px] text-sm">
            <thead>
              <tr className="border-b border-turmeric/20 bg-cream-dark">
                <th className="p-4 text-left font-semibold text-foreground/60" />
                <th className="p-4 text-center font-semibold text-leaf">
                  {t("homemade")}
                </th>
                <th className="p-4 text-center font-semibold text-foreground/50">
                  {t("storeBought")}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-turmeric/10">
                  <td className="p-4 font-medium text-terracotta">{row.label}</td>
                  <td className="p-4 text-center">
                    <span className="inline-flex items-center gap-1 text-leaf">
                      <Check className="h-4 w-4" />
                      {row.home}
                    </span>
                  </td>
                  <td className="p-4 text-center text-foreground/50">
                    <span className="inline-flex items-center gap-1">
                      <X className="h-4 w-4" />
                      {row.store}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-16 mb-8 text-center font-serif text-2xl font-bold text-terracotta">
          {t("tipsTitle")}
        </h2>
        <ul className="mx-auto max-w-2xl space-y-4">
          {tips.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl bg-turmeric/10 p-4 text-foreground/80"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turmeric text-xs font-bold text-white">
                {i + 1}
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
