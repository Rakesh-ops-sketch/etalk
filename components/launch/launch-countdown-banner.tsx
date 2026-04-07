"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useLang } from "@/lib/i18n/lang-context";
import { LAUNCH_AT_MS } from "@/lib/site-config";

function pad2(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * Full-width launch countdown strip below the header — warm mist band, no scroll docking.
 */
export function LaunchCountdownBanner() {
  const { t, lang } = useLang();
  const [msLeft, setMsLeft] = useState<number | null>(null);
  const oriaFont =
    lang === "or" ? "font-[family-name:var(--font-noto-oriya)]" : "";
  const headingSans = "font-sans";

  useEffect(() => {
    const tick = () => setMsLeft(LAUNCH_AT_MS - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (msLeft !== null && msLeft <= 0) {
    return null;
  }

  const d =
    msLeft === null ? 0 : Math.max(0, Math.floor(msLeft / 86_400_000));
  const h =
    msLeft === null
      ? 0
      : Math.max(0, Math.floor((msLeft % 86_400_000) / 3_600_000));
  const m =
    msLeft === null
      ? 0
      : Math.max(0, Math.floor((msLeft % 3_600_000) / 60_000));
  const s =
    msLeft === null ? 0 : Math.max(0, Math.floor((msLeft % 60_000) / 1000));

  const units = [
    { value: d, label: t.banner.days, pad: false as const },
    { value: h, label: t.banner.hours, pad: true as const },
    { value: m, label: t.banner.minutes, pad: true as const },
    { value: s, label: t.banner.seconds, pad: true as const },
  ];

  return (
    <div
      className={`relative w-full border-b border-[var(--hairline)] bg-gradient-to-r from-[#f4f2ec] via-[#eef2f7] to-[#f4f2ec] shadow-[0_12px_32px_-18px_rgba(15,23,42,0.12)] ${oriaFont}`}
      role="region"
      aria-label={t.banner.ariaLabel}
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.45)] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 0%, rgba(30,41,59,0.06), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative etalk-container px-3 py-3 sm:px-4 sm:py-3.5">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:gap-6">
          <div className="min-w-0 text-left">
            <p className="text-[0.65rem] font-semibold uppercase leading-none tracking-[0.2em] text-[var(--brand-muted)] sm:text-[0.7rem]">
              {t.banner.eyebrow}
            </p>
            <h2
              id="launch-heading"
              className={`mt-1 line-clamp-3 text-balance text-sm font-bold leading-snug tracking-tight text-[var(--brand-navy-deep)] sm:line-clamp-2 sm:text-base ${headingSans}`}
            >
              {t.banner.headline}
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center justify-start gap-1.5 sm:justify-end sm:gap-2"
            aria-live="polite"
            aria-atomic="true"
          >
            {units.map((u) => (
              <div
                key={u.label}
                className="flex min-w-[2.75rem] flex-col items-center justify-center rounded-lg border border-[var(--hairline)] bg-white/90 px-1.5 py-1 tabular-nums shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:min-w-[3rem] sm:px-2"
              >
                <span
                  className={`text-sm font-bold leading-none text-[var(--brand-navy-deep)] sm:text-base ${headingSans}`}
                >
                  {msLeft === null
                    ? "—"
                    : u.pad
                      ? pad2(u.value)
                      : String(u.value)}
                </span>
                <span className="mt-0.5 text-[0.5rem] font-medium uppercase leading-none text-[var(--brand-muted)] sm:text-[0.55rem]">
                  {u.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-start sm:justify-end">
            <Link
              href="#cta"
              className="min-h-9 text-[0.7rem] font-medium text-[var(--brand-muted)] underline-offset-2 transition-colors hover:text-[var(--brand-navy-deep)] hover:underline sm:min-h-0 sm:text-xs"
            >
              {t.banner.secondaryLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
