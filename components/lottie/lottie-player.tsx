"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type LottiePlayerProps = {
  src: string;
  ariaLabel: string;
  className?: string;
  loop?: boolean;
  /** When false, animation stays on first frame until set true (e.g. scroll reveal). */
  autoplay?: boolean;
};

function MotionFallback({
  ariaLabel,
  className,
}: {
  ariaLabel: string;
  className: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-[var(--hairline)] bg-[var(--surface-elevated)] ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <span className="text-4xl" aria-hidden>
        🤖
      </span>
    </div>
  );
}

export function LottiePlayer({
  src,
  ariaLabel,
  className = "",
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    setFailed(false);
    setAnimationData(null);

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`Lottie fetch failed: ${res.status}`);
        return res.json() as Promise<object>;
      })
      .then((json) => {
        if (!cancelled) setAnimationData(json);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [src, reduceMotion]);

  if (reduceMotion || failed) {
    return <MotionFallback ariaLabel={ariaLabel} className={className} />;
  }

  if (!animationData) {
    return (
      <div
        className={`animate-pulse rounded-2xl bg-[var(--surface-subtle)] ${className}`}
        role="status"
        aria-label="Loading animation"
      />
    );
  }

  return (
    <div className={className} role="img" aria-label={ariaLabel}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        className="h-full w-full"
        aria-hidden
      />
    </div>
  );
}
