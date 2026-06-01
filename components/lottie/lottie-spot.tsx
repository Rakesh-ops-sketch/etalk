"use client";

import { LottiePlayer } from "@/components/lottie/lottie-player";

type LottieSpotProps = {
  src: string;
  ariaLabel: string;
  className?: string;
};

/** Compact Lottie block for section accents (not hero). */
export function LottieSpot({
  src,
  ariaLabel,
  className = "",
}: LottieSpotProps) {
  return (
    <aside
      className={`etalk-lottie-spot flex flex-col items-center ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="etalk-lottie-spot__figure relative">
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-60 blur-2xl motion-reduce:opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(0,102,255,0.18) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <LottiePlayer
          src={src}
          ariaLabel={ariaLabel}
          className="etalk-lottie-spot__lottie relative w-full"
          loop
        />
      </div>
    </aside>
  );
}
