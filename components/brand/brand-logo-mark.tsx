import Image from "next/image";

/** Canonical logo asset — blue→cyan gradient (`public/PNG/E-talk_Logo1-png.png`). */
export const BRAND_LOGO_SRC = "/PNG/E-talk_Logo1-png.png" as const;

export const BRAND_LOGO_MARK = {
  src: BRAND_LOGO_SRC,
  width: 1785,
  height: 2526,
} as const;

export const BRAND_LOGO_SECTION_WATERMARK = {
  src: BRAND_LOGO_SRC,
  width: 1785,
  height: 2526,
} as const;

const variantOpacity = {
  whisper: "opacity-[0.03] sm:opacity-[0.04]",
  faint: "opacity-[0.05] sm:opacity-[0.065]",
  muted: "opacity-[0.08] sm:opacity-[0.1]",
  solid: "opacity-100",
} as const;

const sizeHeight = {
  xs: "h-7 sm:h-8",
  sm: "h-9 sm:h-10",
  md: "h-11 sm:h-12",
  lg: "h-14 sm:h-16",
  xl: "h-28 w-auto sm:h-36",
} as const;

const sizeAttr: Record<keyof typeof sizeHeight, string> = {
  xs: "80px",
  sm: "120px",
  md: "200px",
  lg: "280px",
  xl: "(max-width: 640px) 56vw, 14rem",
};

type MarkProps = {
  className?: string;
  variant?: keyof typeof variantOpacity;
  size?: keyof typeof sizeHeight;
  priority?: boolean;
  /** @deprecated Full logo includes wordmark; kept for call-site compatibility. */
  clipBakedWordmark?: boolean;
};

/** Inline logo — header/footer on light paper (no color wash on solid variant). */
export function BrandLogoMark({
  className = "",
  variant = "faint",
  size = "sm",
  priority = false,
  clipBakedWordmark: _clipBakedWordmark = false,
}: MarkProps) {
  const vivid = variant === "solid";

  return (
    <Image
      src={BRAND_LOGO_MARK.src}
      alt="E-Talk"
      width={BRAND_LOGO_MARK.width}
      height={BRAND_LOGO_MARK.height}
      unoptimized
      className={`w-auto shrink-0 select-none object-contain object-left object-top ${
        vivid ? "saturate-100 contrast-100" : ""
      } ${variantOpacity[variant]} ${sizeHeight[size]} ${className}`}
      sizes={sizeAttr[size]}
      priority={priority}
    />
  );
}
