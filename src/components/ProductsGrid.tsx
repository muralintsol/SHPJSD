"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ProductCard, SectionHeading } from "@/components/ProductCard";
import { products, type ProductCategory } from "@/data/products";

export function ProductsGrid() {
  const locale = useLocale();
  const t = useTranslations("products");
  const cat = useTranslations("categories");
  const common = useTranslations("common");

  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const categories: { key: ProductCategory | "all"; label: string }[] = [
    { key: "all", label: common("allCategories") },
    { key: "chutney", label: cat("chutney") },
    { key: "protein", label: cat("protein") },
    { key: "baby", label: cat("baby") },
    { key: "pickles", label: cat("pickles") },
  ];

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveCategory(key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === key
                ? "bg-turmeric text-white"
                : "bg-cream-dark text-terracotta hover:bg-turmeric/20"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale}
            orderLabel={common("orderWhatsApp")}
            orderMessageTemplate={t("orderMessage")}
            ingredientsLabel={t("ingredients")}
            servingLabel={t("serving")}
            weightLabel={t("weight")}
          />
        ))}
      </div>
    </>
  );
}
