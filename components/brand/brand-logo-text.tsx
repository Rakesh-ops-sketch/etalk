"use client";

import { useEffect, useState } from "react";

import { useLang } from "@/lib/i18n/lang-context";

const ODIA_HEADER =
  "etalk-text-gold-gradient font-[family-name:var(--font-noto-oriya)] text-[0.7rem] font-semibold leading-tight tracking-tight sm:text-xs md:text-[0.8125rem]";
const EN_HEADER =
  "text-[0.58rem] font-medium leading-tight tracking-wide text-[var(--brand-navy-deep)] sm:text-[0.625rem] md:text-[0.6875rem]";

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

/** First tagline only — no animation (mobile header, reduced motion). */
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
 * Header lockup: static text on small screens (no typing); animated from `md` up.
 * SSR and first paint use static text to avoid hydration mismatch; desktop may
 * switch to animation after mount.
 */
export function HeaderBrandLockup() {
  const [wide, setWide] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(MD_UP);
    setWide(mq.matches);
    const fn = () => setWide(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  if (wide) {
    return <BrandLogoText variant="header" />;
  }
  return <BrandLogoTextStatic variant="header" />;
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
    return <BrandLogoTextStatic variant={variant} />;
  }

  return (
    <div className="flex flex-col gap-0">
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
        {first.odia} {first.en}
      </span>
    </div>
  );
}
