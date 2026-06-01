"use client";

import { useEffect, useRef, useState } from "react";

import { LottiePlayer } from "@/components/lottie/lottie-player";
import { useLang } from "@/lib/i18n/lang-context";
import { LOTTIE } from "@/lib/lottie/paths";

/** Animated world map — trust band; slides in and plays when scrolled into view. */
export function TrustWorldMap() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 8% 0px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`etalk-trust-world etalk-scroll-reveal-side mx-auto w-full ${revealed ? "is-visible" : ""}`}
      role="img"
      aria-label={t.trust.worldMapAria}
    >
      <div className="etalk-trust-world__figure relative mx-auto">
        <div
          className="pointer-events-none absolute inset-[12%] rounded-full opacity-60 blur-3xl motion-reduce:opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,102,255,0.2) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        {revealed ? (
          <LottiePlayer
            src={LOTTIE.worldMap}
            ariaLabel={t.trust.worldMapAria}
            className="etalk-trust-world__lottie relative aspect-square w-full"
            loop
            autoplay
          />
        ) : (
          <div
            className="etalk-trust-world__lottie relative aspect-square w-full rounded-2xl bg-[var(--surface-subtle)]/80"
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}
