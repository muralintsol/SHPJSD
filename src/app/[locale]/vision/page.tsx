import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ProductCard";
import { FPOVisionFull } from "@/components/FPOVisionSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "vision" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function VisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("vision");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <FPOVisionFull />
    </>
  );
}
