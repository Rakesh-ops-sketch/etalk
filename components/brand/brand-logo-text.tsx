"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { useLang } from "@/lib/i18n/lang-context";

const WORDMARK = "etalk-wordmark m-0 p-0 font-sans font-bold leading-none tracking-tight";
/** “E-Talk” — not tied to logo size; comfortable at all breakpoints */
const HEADER_WORD =
  "mb-0 text-xs font-extrabold sm:text-sm md:text-[0.9375rem]";
const FOOTER_WORD = "mb-0.5 text-lg sm:text-xl";

/**
 * Typewriter / tagline lines only (Odia + English). Kept small on narrow viewports so the band
 * stays compact; wordmark above uses `HEADER_WORD` separately.
 */
const ODIA_HEADER =
  "etalk-text-gold-gradient font-[family-name:var(--font-noto-oriya)] font-semibold max-md:text-[0.5rem] max-md:leading-tight text-xs leading-tight tracking-tight md:text-[0.8125rem] md:leading-tight";
const EN_HEADER =
  "font-medium text-[var(--brand-navy-deep)] max-md:text-[0.5rem] max-md:leading-tight max-md:tracking-tight sm:tracking-wide text-[0.6875rem] leading-tight md:text-xs";

/** Reserves width for longest `nav.brandTaglines` line (typing / swaps). */
export const HEADER_BRAND_TEXT_MIN =
  "w-full min-w-0 sm:min-w-[min(100%,12rem)] md:min-w-[min(100%,13.25rem)] lg:min-w-[min(100%,15rem)]";

/** Footer uses larger type — reserve width + height so tagline typing / brief empty gap don’t move copy below. */
const FOOTER_BRAND_TEXT_MIN =
  "min-h-[3.15rem] min-w-[min(100%,17.5rem)] sm:min-h-[3.35rem] sm:min-w-[min(100%,19.5rem)] lg:min-w-[min(100%,22.5rem)]";

const ODIA_FOOTER =
  "etalk-text-gold-gradient font-[family-name:var(--font-noto-oriya)] text-[0.8rem] font-semibold tracking-tight sm:text-sm";
const EN_FOOTER = "text-sm font-medium leading-tight text-[var(--brand-navy-deep)]";

function graphemeSegments(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    try {
      return Array.from(
        new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(
          text,
        ),
        (s) => s.segment,
      );
    } catch {
      /* ignore */
    }
  }
  return Array.from(text);
}

const Caret = () => (
  <span className="etalk-typewriter-caret ml-px inline-block font-light text-[var(--brand-navy)]/70">
    |
  </span>
);

export function BrandLogoTextStatic({ variant }: { variant: "header" | "footer" }) {
  const { t } = useLang();
  const taglines = t.nav.brandTaglines;
  if (!taglines.length) {
    return null;
  }
  const first = taglines[0]!;
  const odiaClasses = variant === "header" ? ODIA_HEADER : ODIA_FOOTER;
  const enClasses = variant === "header" ? EN_HEADER : EN_FOOTER;

  return (
    <div className="flex flex-col gap-0">
      <p className={`${WORDMARK} ${variant === "header" ? HEADER_WORD : FOOTER_WORD}`}>
        E-Talk
      </p>
      <p className={`m-0 p-0 ${odiaClasses}`} lang="or">
        {first.odia}
      </p>
      <p
        className={`m-0 p-0 ${variant === "footer" ? "mt-0.5" : ""} ${enClasses}`}
      >
        {first.en}
      </p>
    </div>
  );
}

const MD_UP = "(min-width: 768px)";

/**
 * Brand copy next to the header mark: only at `md` and up (typewriter). Below `md`, nothing
 * is rendered so the home link is just the logo — use the link’s `aria-label` for a11y.
 */
export function HeaderBrandLockup() {
  const [wide, setWide] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(MD_UP);
    setWide(mq.matches);
    const fn = () => setWide(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  if (!wide) {
    return null;
  }
  return (
    <div className={HEADER_BRAND_TEXT_MIN}>
      <BrandLogoText variant="header" />
    </div>
  );
}

/** Infinite type → pause → delete cycle across `nav.brandTaglines` pairs. */
export function BrandLogoText({ variant }: { variant: "header" | "footer" }) {
  const { t } = useLang();
  const taglines = t.nav.brandTaglines;

  if (!taglines.length) {
    return null;
  }

  const [odiaShown, setOdiaShown] = useState("");
  const [enShown, setEnShown] = useState("");
  const [caretOn, setCaretOn] = useState<"odia" | "en" | null>("odia");
  const [reduceMotion, setReduceMotion] = useState(false);

  const odiaClasses = variant === "header" ? ODIA_HEADER : ODIA_FOOTER;
  const enClasses = variant === "header" ? EN_HEADER : EN_FOOTER;

  const odiaSpeed = variant === "header" ? 38 : 36;
  const enSpeed = variant === "header" ? 34 : 32;
  const delOdia = variant === "header" ? 20 : 18;
  const delEn = variant === "header" ? 18 : 16;
  const pauseMs = variant === "header" ? 2000 : 2400;
  const gapBeforeNextVariantMs = variant === "header" ? 420 : 500;
  const startDelayMs = variant === "header" ? 120 : 180;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduceMotion(true);
      setOdiaShown(taglines[0]?.odia ?? "");
      setEnShown(taglines[0]?.en ?? "");
      setCaretOn(null);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const schedule = (fn: () => void, ms: number) => {
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    let vIndex = 0;
    type Phase =
      | "type-odia"
      | "type-en"
      | "pause"
      | "delete-en"
      | "delete-odia"
      | "between";
    let phase: Phase = "type-odia";
    let oi = 0;
    let j = 0;
    let oSegs: string[] = [];
    let eSegs: string[] = [];

    const loadPair = () => {
      const pair = taglines[vIndex % taglines.length];
      oSegs = graphemeSegments(pair.odia);
      eSegs = graphemeSegments(pair.en);
    };

    loadPair();

    const step = () => {
      if (cancelled) return;

      if (phase === "type-odia") {
        if (oi < oSegs.length) {
          oi += 1;
          setOdiaShown(oSegs.slice(0, oi).join(""));
          setCaretOn("odia");
          schedule(step, odiaSpeed);
        } else {
          phase = "type-en";
          j = 0;
          schedule(step, 40);
        }
        return;
      }

      if (phase === "type-en") {
        if (j < eSegs.length) {
          j += 1;
          setEnShown(eSegs.slice(0, j).join(""));
          setCaretOn("en");
          schedule(step, enSpeed);
        } else {
          setCaretOn(null);
          phase = "pause";
          schedule(step, pauseMs);
        }
        return;
      }

      if (phase === "pause") {
        phase = "delete-en";
        setCaretOn("en");
        schedule(step, 120);
        return;
      }

      if (phase === "delete-en") {
        if (j > 0) {
          j -= 1;
          setEnShown(eSegs.slice(0, j).join(""));
          setCaretOn("en");
          schedule(step, delEn);
        } else {
          phase = "delete-odia";
          setCaretOn("odia");
          schedule(step, 60);
        }
        return;
      }

      if (phase === "delete-odia") {
        if (oi > 0) {
          oi -= 1;
          setOdiaShown(oSegs.slice(0, oi).join(""));
          setCaretOn("odia");
          schedule(step, delOdia);
        } else {
          setOdiaShown("");
          setEnShown("");
          setCaretOn(null);
          vIndex = (vIndex + 1) % taglines.length;
          phase = "between";
          schedule(step, gapBeforeNextVariantMs);
        }
        return;
      }

      if (phase === "between") {
        loadPair();
        phase = "type-odia";
        oi = 0;
        j = 0;
        setCaretOn("odia");
        schedule(step, 40);
      }
    };

    schedule(step, startDelayMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [
    taglines,
    odiaSpeed,
    enSpeed,
    delOdia,
    delEn,
    pauseMs,
    gapBeforeNextVariantMs,
    startDelayMs,
  ]);

  const first = taglines[0]!;

  if (reduceMotion) {
    const staticBlock = <BrandLogoTextStatic variant={variant} />;
    if (variant === "footer") {
      return <div className={FOOTER_BRAND_TEXT_MIN}>{staticBlock}</div>;
    }
    return staticBlock;
  }

  const inner = (
    <div className="flex flex-col gap-0">
      <p className={`${WORDMARK} ${variant === "header" ? HEADER_WORD : FOOTER_WORD} min-h-0`}>
        E-Talk
      </p>
      <p className={`m-0 min-h-0 p-0 ${odiaClasses}`} lang="or">
        <span aria-hidden="true">
          {odiaShown}
          {caretOn === "odia" ? <Caret /> : null}
        </span>
      </p>
      <p
        className={`m-0 min-h-0 p-0 ${variant === "footer" ? "mt-0.5" : ""} ${enClasses}`}
      >
        <span aria-hidden="true">
          {enShown}
          {caretOn === "en" ? <Caret /> : null}
        </span>
      </p>
      <span className="sr-only">
        E-Talk. {first.odia} {first.en}
      </span>
    </div>
  );

  if (variant === "footer") {
    return <div className={FOOTER_BRAND_TEXT_MIN}>{inner}</div>;
  }

  return inner;
}
