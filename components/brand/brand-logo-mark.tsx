import Image from "next/image";

/** Primary mark — header, inline `Image` (clip baked wordmark where needed). */
export const BRAND_LOGO_MARK = {
  src: "/PNG/e%20talk%20Logo-01.png",
  width: 2481,
  height: 3508,
} as const;

/** Section / footer watermarks — fanned mark (`e talk Logo-08.png`). */
export const BRAND_LOGO_SECTION_WATERMARK = {
  src: "/PNG/e%20talk%20Logo-08.png",
  width: 2481,
  height: 3508,
} as const;

const variantOpacity = {
  whisper: "opacity-[0.035] sm:opacity-[0.045]",
  faint: "opacity-[0.065] sm:opacity-[0.08]",
  muted: "opacity-[0.1] sm:opacity-[0.12]",
  /** Full-strength mark (e.g. footer) */
  solid: "opacity-100",
} as const;

const sizeHeight = {
  xs: "h-7 sm:h-8",
  sm: "h-9 sm:h-10",
  md: "h-11 sm:h-12",
  lg: "h-14 sm:h-16",
  /** Footer and other hero-style lockups */
  xl: "h-24 w-auto sm:h-32",
} as const;

const sizeAttr: Record<keyof typeof sizeHeight, string> = {
  xs: "80px",
  sm: "120px",
  md: "200px",
  lg: "280px",
  xl: "(max-width: 640px) 64vw, 18rem",
};

type MarkProps = {
  className?: string;
  variant?: keyof typeof variantOpacity;
  size?: keyof typeof sizeHeight;
  /**
   * Hides the bottom ~20% of the asset (baked “E-Talk” line in `Logo-01` PNG) so the legible
   * wordmark in `BrandLogoText` is the only “E-Talk” copy next to the mark.
   */
  clipBakedWordmark?: boolean;
};

/** Inline logo — footer lockup, etc. */
export function BrandLogoMark({
  className = "",
  variant = "faint",
  size = "sm",
  clipBakedWordmark = false,
}: MarkProps) {
  return (
    <Image
      src={BRAND_LOGO_MARK.src}
      alt=""
      width={BRAND_LOGO_MARK.width}
      height={BRAND_LOGO_MARK.height}
      className={`w-auto shrink-0 select-none object-contain object-left object-top ${
        clipBakedWordmark ? "[clip-path:inset(0_0_20%_0)]" : ""
      } ${variant === "solid" ? "saturate-[0.98] contrast-[0.98]" : "saturate-[0.45] contrast-[0.94]"} ${variantOpacity[variant]} ${sizeHeight[size]} ${className}`}
      sizes={sizeAttr[size]}
    />
  );
}
