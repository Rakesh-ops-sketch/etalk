"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useLang } from "@/lib/i18n/lang-context";
import { LAUNCH_AT_MS } from "@/lib/site-config";

function pad2(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

/**
 * Launch countdown in the hero — hairline + left accent, no boxed card (seamless / anti-boxy).
 */
export function HeroLaunchCountdown() {
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
      className={`mt-7 ${oriaFont}`}
      role="region"
      aria-labelledby="launch-heading"
    >
      {/* Gradient hairline — fades at edges, no box */}
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(184,134,11,0.28)] to-transparent"
        aria-hidden
      />

      <div className="mt-5 border-l-2 border-[var(--brand-navy)]/15 pl-4 sm:pl-5">
        <p className="text-[0.65rem] font-semibold uppercase leading-none tracking-[0.2em] text-[var(--brand-muted)] sm:text-[0.7rem]">
          {t.banner.eyebrow}
        </p>
        <h2
          id="launch-heading"
          className={`mt-2 max-w-3xl text-balance text-sm font-semibold leading-snug tracking-tight text-[var(--brand-navy-deep)] sm:text-[0.9375rem] ${headingSans}`}
        >
          {t.banner.headline}
        </h2>

        <div
          className="mt-5 flex flex-wrap items-end gap-y-3"
          aria-live="polite"
          aria-atomic="true"
        >
          {units.map((u, i) => (
            <div
              key={u.label}
              className={`flex min-w-[2.5rem] flex-col items-start sm:min-w-[2.75rem] ${i > 0 ? "ml-4 border-l border-[var(--hairline)] pl-4 sm:ml-5 sm:pl-5" : ""}`}
            >
              <span
                className={`text-[1.35rem] font-semibold leading-none tabular-nums tracking-tight text-[var(--brand-navy-deep)] sm:text-2xl ${headingSans}`}
              >
                {msLeft === null
                  ? "—"
                  : u.pad
                    ? pad2(u.value)
                    : String(u.value)}
              </span>
              <span className="mt-1 text-[0.5rem] font-medium uppercase leading-none tracking-[0.12em] text-[var(--brand-muted)] sm:text-[0.55rem]">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4">
          <Link
            href="#cta"
            className={`text-sm font-medium text-[var(--brand-muted)] underline decoration-[rgba(184,134,11,0.35)] underline-offset-[0.2em] transition-colors hover:text-[var(--brand-navy-deep)] hover:decoration-[rgba(184,134,11,0.55)] ${oriaFont}`}
          >
            {t.banner.secondaryLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
