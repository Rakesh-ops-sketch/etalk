"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Card = { title: string; body: string };

type Props = {
  cards: readonly Card[];
  ariaLabel: string;
  hint: string;
  prevLabel: string;
  nextLabel: string;
  oriaFontClass: string;
};

export function AudienceCarousel({
  cards,
  ariaLabel,
  hint,
  prevLabel,
  nextLabel,
  oriaFontClass,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const fn = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const scrollStep = useCallback(
    (dir: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const first = el.querySelector<HTMLElement>("[data-audience-card]");
      const styles = getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "16") || 16;
      const width = first?.offsetWidth ?? 280;
      el.scrollBy({
        left: dir * (width + gap),
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion]
  );

  return (
    <div className="mt-14">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-12"
          aria-hidden
        />

        <div
          ref={scrollerRef}
          role="region"
          aria-label={ariaLabel}
          className="etalk-audience-scroller flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-1 pr-1 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              data-audience-card
              className="etalk-audience-card flex w-[min(100%,18.5rem)] shrink-0 snap-start flex-col rounded-2xl border border-white/[0.1] bg-white/[0.04] px-5 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm [box-shadow:0_12px_40px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] sm:w-80"
            >
              <h3
                className={`text-base font-semibold leading-snug text-[var(--brand-silver)] ${oriaFontClass}`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-3 flex-1 text-sm leading-relaxed text-[var(--brand-muted)] ${oriaFontClass}`}
              >
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div
        className={`mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--brand-muted)] ${oriaFontClass}`}
      >
        <button
          type="button"
          className="inline-flex min-h-10 min-w-[2.75rem] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-3 text-[var(--brand-silver)] transition-[background-color,border-color,color] hover:border-[rgba(212,175,55,0.35)] hover:bg-white/[0.07] hover:text-white"
          onClick={() => scrollStep(-1)}
          aria-label={prevLabel}
        >
          <span aria-hidden className="text-lg leading-none">
            ←
          </span>
        </button>
        <button
          type="button"
          className="inline-flex min-h-10 min-w-[2.75rem] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-3 text-[var(--brand-silver)] transition-[background-color,border-color,color] hover:border-[rgba(212,175,55,0.35)] hover:bg-white/[0.07] hover:text-white"
          onClick={() => scrollStep(1)}
          aria-label={nextLabel}
        >
          <span aria-hidden className="text-lg leading-none">
            →
          </span>
        </button>
        <span className="w-full text-center sm:w-auto sm:text-left">{hint}</span>
      </div>
    </div>
  );
}
