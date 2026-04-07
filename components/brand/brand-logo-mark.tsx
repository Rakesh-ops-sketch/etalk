import Image from "next/image";

const SRC = "/cropped%20logo.png";
const WIDTH = 2074;
const HEIGHT = 2514;

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
} as const;

type MarkProps = {
  className?: string;
  variant?: keyof typeof variantOpacity;
  size?: keyof typeof sizeHeight;
};

/** Inline logo — footer lockup, etc. */
export function BrandLogoMark({
  className = "",
  variant = "faint",
  size = "sm",
}: MarkProps) {
  return (
    <Image
      src={SRC}
      alt=""
      width={WIDTH}
      height={HEIGHT}
      className={`w-auto shrink-0 select-none object-contain ${variant === "solid" ? "saturate-[0.98] contrast-[0.98]" : "saturate-[0.45] contrast-[0.94]"} ${variantOpacity[variant]} ${sizeHeight[size]} ${className}`}
      sizes="160px"
    />
  );
}
