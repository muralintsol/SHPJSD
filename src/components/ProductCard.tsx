import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/data/products";
import { getProductField, getProductName } from "@/data/products";
import { packagingByCategory } from "@/data/packaging";
import { PackagingPhoto } from "@/components/packaging/PackagingPhoto";

interface ProductCardProps {
  product: Product;
  locale: string;
  orderLabel: string;
  orderMessageTemplate: string;
  ingredientsLabel: string;
  servingLabel: string;
  weightLabel: string;
}

export function ProductCard({
  product,
  locale,
  orderLabel,
  orderMessageTemplate,
  ingredientsLabel,
  servingLabel,
  weightLabel,
}: ProductCardProps) {
  const name = getProductName(product, locale);
  const description = getProductField(product, "descriptions", locale);
  const ingredients = getProductField(product, "ingredients", locale);
  const serving = getProductField(product, "serving", locale);
  const orderMessage = orderMessageTemplate.replace("{product}", name);
  const whatsappUrl = getWhatsAppUrl(orderMessage);
  const PackagingIllustration = packagingByCategory[product.category];

  return (
    <article className="card-elevated group flex flex-col overflow-hidden rounded-3xl">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-b from-cream-dark/25 to-white px-4 py-5">
        <div className="absolute inset-0 spice-pattern opacity-10" />
        <PackagingPhoto
          src={product.image}
          alt={name}
          className="relative z-10 h-full max-h-[210px] w-auto transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2"
          Fallback={PackagingIllustration}
        />
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-2xl shadow-sm">
          {product.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-mahogany">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mahogany/65">{description}</p>
        <div className="mt-5 space-y-2 rounded-xl bg-cream-dark/50 p-4 text-xs text-mahogany/60">
          <p><span className="font-semibold text-cinnamon">{weightLabel}:</span> {product.weight}</p>
          <p><span className="font-semibold text-cinnamon">{ingredientsLabel}:</span> {ingredients}</p>
          <p><span className="font-semibold text-cinnamon">{servingLabel}:</span> {serving}</p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1da851] hover:shadow-lg"
        >
          <MessageCircle className="h-4 w-4" />
          {orderLabel}
        </a>
      </div>
    </article>
  );
}

export function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-saffron/15 px-3 py-1 text-xs font-semibold text-cinnamon">
      {label}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <div className="mx-auto mb-5 flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-saffron" />
        <div className="h-2 w-2 rounded-full bg-paprika" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-saffron" />
      </div>
      <h2 className="font-display text-3xl font-bold text-mahogany sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mahogany/65">{subtitle}</p>
      )}
    </div>
  );
}

export function TrustBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="card-elevated flex flex-col items-center rounded-2xl p-5 text-center">
      <span className="text-4xl">{icon}</span>
      <span className="mt-3 text-sm font-semibold text-cinnamon">{label}</span>
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="grain-overlay spice-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/15 via-cream to-sage/10" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-mahogany sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mahogany/65">
            {subtitle}
          </p>
        )}
        <div className="heritage-border mx-auto mt-8 max-w-xs" />
      </div>
    </section>
  );
}
