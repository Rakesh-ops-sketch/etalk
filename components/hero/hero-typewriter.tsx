"use client";

import { useEffect, useState } from "react";

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

type Props = {
  text: string;
  className?: string;
  /** ms per character when typing */
  speedMs?: number;
  /** ms per character when deleting */
  deleteSpeedMs?: number;
  /** pause after full line is typed */
  pauseAfterMs?: number;
  /** pause before typing again */
  pauseBeforeMs?: number;
  /** repeat typing / delete forever */
  loop?: boolean;
  /** delay before first character (both loop and one-shot) */
  startDelayMs?: number;
};

export function HeroTypewriter({
  text,
  className = "",
  speedMs = 34,
  deleteSpeedMs = 18,
  pauseAfterMs = 2600,
  pauseBeforeMs = 720,
  loop = true,
  startDelayMs,
}: Props) {
  const [display, setDisplay] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduceMotion(true);
      setDisplay(text);
      setShowCaret(false);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const schedule = (fn: () => void, ms: number) => {
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const segs = graphemeSegments(text);
    const segLen = segs.length;

    if (!loop) {
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setDisplay(segs.slice(0, i).join(""));
        if (i >= segLen) {
          setShowCaret(false);
          return;
        }
        schedule(tick, speedMs);
      };
      schedule(tick, startDelayMs ?? 320);
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }

    let idx = 0;
    let phase: "type" | "delete" = "type";

    const step = () => {
      if (cancelled) return;

      if (phase === "type") {
        if (idx < segLen) {
          idx += 1;
          setDisplay(segs.slice(0, idx).join(""));
          setShowCaret(true);
          schedule(step, speedMs);
        } else {
          setShowCaret(false);
          schedule(() => {
            if (cancelled) return;
            phase = "delete";
            setShowCaret(true);
            step();
          }, pauseAfterMs);
        }
      } else if (phase === "delete") {
        if (idx > 0) {
          idx -= 1;
          setDisplay(segs.slice(0, idx).join(""));
          setShowCaret(true);
          schedule(step, deleteSpeedMs);
        } else {
          setShowCaret(false);
          schedule(() => {
            if (cancelled) return;
            phase = "type";
            setShowCaret(true);
            step();
          }, pauseBeforeMs);
        }
      }
    };

    schedule(step, startDelayMs ?? 400);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [
    text,
    speedMs,
    deleteSpeedMs,
    pauseAfterMs,
    pauseBeforeMs,
    loop,
    startDelayMs,
  ]);

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <>
      <span aria-hidden="true" className={className}>
        {display}
        {showCaret ? (
          <span className="etalk-typewriter-caret ml-px inline-block font-light text-[var(--brand-navy)]/70">
            |
          </span>
        ) : null}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
