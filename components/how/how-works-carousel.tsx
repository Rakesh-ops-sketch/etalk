"use client";

import { useEffect, useId, useState } from "react";

import { IphoneFrame } from "./iphone-frame";

type CarouselItem = { title: string; body: string };

function IconMic({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function IconStreak({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="M3 3v18h18" strokeLinecap="round" />
      <path d="m7 17 4-8 3 4 4-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconProgress({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="M3 3v18h18" strokeLinecap="round" />
      <path d="m7 12 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <circle cx={12} cy={12} r={10} />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  );
}

function IconPath({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <circle cx={6} cy={18} r={2.25} />
      <circle cx={18} cy={6} r={2.25} />
      <path d="M8 16c2-4 6-8 10-10" strokeLinecap="round" />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="M6 4h5a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H6V4Z" strokeLinejoin="round" />
      <path d="M18 4h-5a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h6V4Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="M21 12a8 8 0 0 1-8 8H8l-5 3v-3H4a8 8 0 0 1 8-8h9Z" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h5" strokeLinecap="round" />
    </svg>
  );
}

function IconLanguages({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path d="m5 8 3 8M5 8h6M8 8l3 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8v8M14 10h4M13 16h6" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = [IconMic, IconPath, IconBook, IconStreak, IconProgress, IconClock, IconChat, IconLanguages] as const;

type Props = {
  items: readonly CarouselItem[];
  carouselHint: string;
  carouselA11y: string;
  carouselOdiaLine: string;
  showOdiaTagline: boolean;
  oriaFontClass: string;
  carouselPause: string;
  carouselResume: string;
};

function ReelCard({
  item,
  i,
  oriaFontClass,
}: {
  item: CarouselItem;
  i: number;
  oriaFontClass: string;
}) {
  const Icon = ICONS[i % ICONS.length] ?? IconMic;
  return (
    <article
      className="etalk-how-card flex min-h-[200px] shrink-0 flex-col rounded-2xl border border-[rgba(15,23,42,0.08)] bg-[#fafaf8] px-4 py-4 text-center shadow-[0_14px_36px_rgba(15,23,42,0.08)] backdrop-blur-md backdrop-saturate-150 [box-shadow:0_14px_36px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.95)]"
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.28)] text-[var(--brand-gold-dark)] ring-1 ring-[rgba(212,175,55,0.35)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3
        className={`mt-3 text-[0.95rem] font-bold leading-snug text-[#0a0d1a] sm:text-base ${oriaFontClass}`}
      >
        {item.title}
      </h3>
      <p
        className={`mt-2 text-left text-[12px] leading-relaxed text-neutral-800 sm:text-[13px] ${oriaFontClass}`}
      >
        {item.body}
      </p>
    </article>
  );
}

export function HowWorksCarousel({
  items,
  carouselHint,
  carouselA11y,
  carouselOdiaLine,
  showOdiaTagline,
  oriaFontClass,
  carouselPause,
  carouselResume,
}: Props) {
  const n = items.length;
  const doubled = [...items, ...items];
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const reelId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const fn = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  return (
    <div className="mx-auto mt-12 w-full max-w-lg sm:mt-16">
      {showOdiaTagline ? (
        <p className="mb-6 text-center font-[family-name:var(--font-noto-oriya)] text-sm text-[var(--brand-gold-mid)]/90">
          {carouselOdiaLine}
        </p>
      ) : null}

      <p className={`sr-only ${oriaFontClass}`}>{carouselA11y}</p>

      <div className="flex flex-col items-center gap-4">
        <IphoneFrame>
          <div
            className="relative h-[min(78vw,460px)] min-h-[380px] max-h-[520px] overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)] sm:min-h-[420px] sm:max-h-[580px]"
            data-paused={paused || undefined}
            id={reelId}
          >
            {reducedMotion ? (
              <div className="flex h-full flex-col gap-3 overflow-y-auto pr-1">
                {items.map((item, i) => (
                  <ReelCard key={item.title} item={item} i={i} oriaFontClass={oriaFontClass} />
                ))}
              </div>
            ) : (
              <div
                className={`etalk-how-reel flex flex-col gap-4 will-change-transform ${paused ? "etalk-how-reel--force-paused" : ""}`}
              >
                {doubled.map((item, i) => (
                  <ReelCard
                    key={`${item.title}-${i}`}
                    item={item}
                    i={i % n}
                    oriaFontClass={oriaFontClass}
                  />
                ))}
              </div>
            )}
          </div>
        </IphoneFrame>

        {!reducedMotion ? (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-controls={reelId}
            className={`text-xs font-medium text-[var(--brand-muted)] underline-offset-4 transition-colors hover:text-[var(--brand-silver)] ${oriaFontClass}`}
          >
            {paused ? carouselResume : carouselPause}
          </button>
        ) : null}
      </div>

      <p className={`mt-5 text-center text-xs text-[var(--brand-muted)] ${oriaFontClass}`}>{carouselHint}</p>
    </div>
  );
}
