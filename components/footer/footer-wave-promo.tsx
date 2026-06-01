"use client";

import { LottiePlayer } from "@/components/lottie/lottie-player";
import { useLang } from "@/lib/i18n/lang-context";
import { LOTTIE } from "@/lib/lottie/paths";

/** Footer wave Lottie + voice × AI marketing line on the blue gradient band. */
export function FooterWavePromo() {
  const { t, lang } = useLang();
  const oriaFont =
    lang === "or" ? "font-[family-name:var(--font-noto-oriya)]" : "";
  const lineFont =
    lang === "or" ? oriaFont : "etalk-font-cursive etalk-footer-wave-promo__line";

  return (
    <div
      className="etalk-footer-wave-promo flex flex-col items-center gap-3 border-b border-white/15 pb-8 text-center sm:flex-row sm:justify-center sm:gap-4 sm:pb-9"
      role="group"
      aria-label={t.footer.waveAria}
    >
      <div className="etalk-footer-wave-promo__wave shrink-0" aria-hidden>
        <LottiePlayer
          src={LOTTIE.wave}
          ariaLabel={t.footer.waveAria}
          className="aspect-square h-full w-full"
          loop
        />
      </div>
      <p className={`max-w-md sm:max-w-lg ${lineFont}`}>
        {t.footer.voicePromoParts.map(([text, highlight], i) =>
          highlight ? (
            <span key={i} className="etalk-footer-voice-highlight">
              {text}
            </span>
          ) : (
            <span key={i}>{text}</span>
          ),
        )}
      </p>
    </div>
  );
}
