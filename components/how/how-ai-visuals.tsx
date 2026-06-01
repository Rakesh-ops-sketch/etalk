"use client";

import { LottiePlayer } from "@/components/lottie/lottie-player";
import { useLang } from "@/lib/i18n/lang-context";
import { LOTTIE } from "@/lib/lottie/paths";

type HowAiVisualsLayout = "pair" | "sphere" | "text";

type HowAiVisualsProps = {
  layout?: HowAiVisualsLayout;
  className?: string;
};

/** AI sphere + text Lotties — pair on mobile, single flank on lg+. */
export function HowAiVisuals({
  layout = "pair",
  className = "",
}: HowAiVisualsProps) {
  const { t } = useLang();

  const sphere = (
    <div className="etalk-how-ai-visuals__cell etalk-how-ai-visuals__cell--sphere">
      <LottiePlayer
        src={LOTTIE.aiSphere}
        ariaLabel={t.how.aiSphereAria}
        className="etalk-how-ai-visuals__lottie aspect-[316.81/319.05] w-full"
        loop
      />
    </div>
  );

  const text = (
    <div className="etalk-how-ai-visuals__cell etalk-how-ai-visuals__cell--text">
      <LottiePlayer
        src={LOTTIE.aiText}
        ariaLabel={t.how.aiTextAria}
        className="etalk-how-ai-visuals__lottie aspect-square w-full"
        loop
      />
    </div>
  );

  if (layout === "sphere") {
    return (
      <div
        className={`etalk-how-ai-visuals etalk-how-ai-visuals--single ${className}`.trim()}
        aria-hidden
      >
        {sphere}
      </div>
    );
  }

  if (layout === "text") {
    return (
      <div
        className={`etalk-how-ai-visuals etalk-how-ai-visuals--single ${className}`.trim()}
        aria-hidden
      >
        {text}
      </div>
    );
  }

  return (
    <div
      className={`etalk-how-ai-visuals etalk-how-ai-visuals--pair grid w-full max-w-[17rem] grid-cols-2 items-center gap-3 sm:max-w-[19rem] sm:gap-4 ${className}`.trim()}
      aria-hidden
    >
      {sphere}
      {text}
    </div>
  );
}
