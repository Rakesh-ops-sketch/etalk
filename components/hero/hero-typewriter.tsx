"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
  /** ms per character */
  speedMs?: number;
};

export function HeroTypewriter({ text, className = "", speedMs = 38 }: Props) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduceMotion(true);
      setDisplay(text);
      setDone(true);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let i = 0;

    const tick = () => {
      if (cancelled) return;
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        return;
      }
      timeoutId = setTimeout(tick, speedMs);
    };

    timeoutId = setTimeout(tick, 320);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [text, speedMs]);

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <>
      <span aria-hidden="true" className={className}>
        {display}
        {!done ? (
          <span className="etalk-typewriter-caret ml-px inline-block font-light text-[var(--brand-gold-mid)]">
            |
          </span>
        ) : null}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
