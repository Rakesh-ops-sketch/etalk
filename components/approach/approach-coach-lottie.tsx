"use client";

import { BubbleHighlightText } from "@/components/lottie/bubble-highlight-text";
import { LottieSpot } from "@/components/lottie/lottie-spot";
import { SpeechBubble } from "@/components/lottie/speech-bubble";
import { useLang } from "@/lib/i18n/lang-context";
import { LOTTIE } from "@/lib/lottie/paths";

type ApproachCoachLottieProps = {
  className?: string;
};

/** Waving coach (`robot.json`) — approach section accent, separate from hero. */
export function ApproachCoachLottie({ className = "" }: ApproachCoachLottieProps) {
  const { t, lang } = useLang();
  const oriaFont =
    lang === "or" ? "font-[family-name:var(--font-noto-oriya)]" : "";
  const lineFont =
    lang === "or" ? oriaFont : "etalk-font-cursive etalk-speech-bubble__line";

  return (
    <div
      className={`etalk-approach-coach flex w-full flex-col items-center ${className}`.trim()}
    >
      <SpeechBubble
        ariaLabel={t.approach.coachBubbleAria}
        className="etalk-approach-coach__bubble"
      >
        <BubbleHighlightText
          segments={t.approach.coachBubbleParts}
          className={lineFont}
        />
        <BubbleHighlightText
          segments={t.approach.coachBubbleTaglineParts}
          className={`etalk-speech-bubble__sub mt-1.5 text-center text-[0.6875rem] font-medium leading-snug text-[var(--brand-muted)] sm:text-xs ${oriaFont}`}
        />
      </SpeechBubble>
      <LottieSpot
        src={LOTTIE.robot}
        ariaLabel={t.approach.coachAria}
        className="etalk-lottie-spot--wave etalk-approach-coach__figure"
      />
      <BubbleHighlightText
        segments={t.approach.coachMottoParts}
        className={`etalk-approach-coach__motto ${lang === "or" ? oriaFont : "etalk-font-cursive"}`}
      />
    </div>
  );
}
