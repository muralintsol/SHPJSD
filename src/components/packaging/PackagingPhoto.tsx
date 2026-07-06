"use client";

import { useState } from "react";
import type { ComponentType } from "react";

type IllustrationProps = { className?: string };

interface PackagingPhotoProps {
  src: string;
  alt: string;
  className?: string;
  Fallback?: ComponentType<IllustrationProps>;
}

/** Photo-realistic packaging with SVG illustration fallback */
export function PackagingPhoto({
  src,
  alt,
  className = "",
  Fallback,
}: PackagingPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed && Fallback) {
    return <Fallback className={className} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-contain drop-shadow-lg ${className}`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
