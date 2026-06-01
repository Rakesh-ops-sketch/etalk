"use client";

import type { ReactNode } from "react";

type SpeechBubbleProps = {
  children: ReactNode;
  /** Plain text for screen readers */
  ariaLabel: string;
  className?: string;
};

export function SpeechBubble({
  children,
  ariaLabel,
  className = "",
}: SpeechBubbleProps) {
  return (
    <div
      className={`etalk-speech-bubble ${className}`.trim()}
      role="note"
      aria-label={ariaLabel}
    >
      <div className="etalk-speech-bubble__inner">{children}</div>
    </div>
  );
}
