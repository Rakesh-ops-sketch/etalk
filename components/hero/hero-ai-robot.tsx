"use client";

import { LottiePlayer } from "@/components/lottie/lottie-player";
import { useLang } from "@/lib/i18n/lang-context";
import { HERO_LOTTIE_SRC } from "@/lib/lottie/paths";

type HeroAiRobotProps = {
  className?: string;
};

/** Friendly AI coach — reinforces that learning is AI-driven. */
export function HeroAiRobot({ className = "" }: HeroAiRobotProps) {
  const { t, lang } = useLang();
  const oriaFont =
    lang === "or" ? "font-[family-name:var(--font-noto-oriya)]" : "";

  return (
    <aside
      className={`etalk-hero-robot mx-auto flex w-full flex-col items-center lg:mx-0 lg:w-auto lg:items-end ${className}`.trim()}
      aria-label={t.hero.robotAria}
    >
      <div className="etalk-hero-robot__figure relative">
        <div
          className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-70 blur-2xl motion-reduce:opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(0,102,255,0.22) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <LottiePlayer
          src={HERO_LOTTIE_SRC}
          ariaLabel={t.hero.robotAria}
          className="etalk-hero-robot__lottie relative w-full"
          loop
        />
      </div>
      <p
        className={`etalk-hero-robot__caption mt-2 w-full text-[0.8125rem] leading-snug text-[var(--brand-muted)] max-lg:text-center sm:text-sm lg:mt-2.5 lg:text-right ${oriaFont}`}
      >
        {t.hero.robotCaption}
      </p>
    </aside>
  );
}
