"use client";

import { useState } from "react";

interface BrandImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallback?: React.ReactNode;
}

/** Native img for SVG/static assets — reliable on Firebase static hosting */
export function BrandImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fallback,
}: BrandImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed && fallback) {
    return (
      <div className={className} role="img" aria-label={alt}>
        {fallback}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
