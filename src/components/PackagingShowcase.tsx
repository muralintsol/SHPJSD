"use client";

import { useTranslations } from "next-intl";
import {
  brandElements,
  BrandCollectionIllustration,
  packagingItems,
  packagingPhotos,
} from "@/data/packaging";
import { PackagingPhoto } from "@/components/packaging/PackagingPhoto";

export function PackagingShowcase() {
  const t = useTranslations("packaging");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-dark/40 to-cream px-4 py-24">
      <div className="absolute inset-0 spice-pattern opacity-20" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-saffron uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-mahogany sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mahogany/65">
            {t("subtitle")}
          </p>
          <div className="heritage-border mx-auto mt-8 max-w-xs" />
        </div>

        <div className="mb-16 overflow-hidden rounded-3xl border border-saffron/20 bg-white p-2 shadow-xl">
          <PackagingPhoto
            src={packagingPhotos.collection}
            alt={t("collectionAlt")}
            className="w-full rounded-2xl"
            Fallback={BrandCollectionIllustration}
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packagingItems.map((item) => (
            <div
              key={item.id}
              className="card-elevated group overflow-hidden rounded-3xl bg-white"
            >
              <div className="relative bg-gradient-to-b from-cream-dark/20 to-white px-3 py-6">
                <div className="mx-auto flex h-48 items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <PackagingPhoto
                    src={item.photo}
                    alt={t(`${item.key}.title`)}
                    className="h-full max-h-[185px] w-auto"
                    Fallback={item.Illustration}
                  />
                </div>
              </div>
              <div className="border-t border-saffron/10 p-5 text-center">
                <h3 className="font-display text-lg font-bold text-mahogany">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mahogany/60">
                  {t(`${item.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brandElements.map((el) => (
            <div
              key={el.key}
              className="rounded-2xl border border-saffron/15 bg-white/80 p-5 text-center backdrop-blur-sm"
            >
              <span className="text-3xl">{el.icon}</span>
              <h4 className="mt-3 font-display font-semibold text-cinnamon">
                {t(`${el.key}.title`)}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-mahogany/60">
                {t(`${el.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-mahogany via-rosewood to-cinnamon p-8 text-center text-cream sm:p-12">
          <p className="font-display text-xl italic sm:text-2xl">{t("stamp")}</p>
          <p className="mt-3 text-sm text-cream/75">{t("stampSub")}</p>
        </div>
      </div>
    </section>
  );
}
