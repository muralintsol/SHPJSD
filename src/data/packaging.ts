import type { ComponentType } from "react";
import type { ProductCategory } from "@/data/products";
import {
  BrandCollectionIllustration,
  ChutneyPouchIllustration,
  LadduBoxIllustration,
  PickleJarIllustration,
  ProteinBagIllustration,
} from "@/components/packaging/PackagingIllustrations";

type IllustrationProps = { className?: string };

export const packagingPhotos = {
  chutney: "/packaging/chutney-pouch.webp",
  protein: "/packaging/protein-bag.webp",
  baby: "/packaging/laddu-box.webp",
  pickles: "/packaging/pickle-jar.webp",
  collection: "/packaging/brand-collection.webp",
} as const;

export const packagingByCategory: Record<
  ProductCategory,
  ComponentType<IllustrationProps>
> = {
  chutney: ChutneyPouchIllustration,
  protein: ProteinBagIllustration,
  baby: LadduBoxIllustration,
  pickles: PickleJarIllustration,
};

export const packagingItems = [
  { id: "chutney-pouch", key: "chutneyPack" as const, photo: packagingPhotos.chutney, Illustration: ChutneyPouchIllustration },
  { id: "pickle-jar", key: "pickleJar" as const, photo: packagingPhotos.pickles, Illustration: PickleJarIllustration },
  { id: "laddu-box", key: "ladduBox" as const, photo: packagingPhotos.baby, Illustration: LadduBoxIllustration },
  { id: "protein-bag", key: "proteinBag" as const, photo: packagingPhotos.protein, Illustration: ProteinBagIllustration },
];

export const brandElements = [
  { key: "element1" as const, icon: "🏷️" },
  { key: "element2" as const, icon: "📦" },
  { key: "element3" as const, icon: "🌿" },
  { key: "element4" as const, icon: "✋" },
];

export { BrandCollectionIllustration };
