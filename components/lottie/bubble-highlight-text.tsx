"use client";

type Segment = readonly [text: string, highlight: boolean];

type BubbleHighlightTextProps = {
  segments: readonly Segment[];
  className?: string;
};

/** Speech-bubble line with brand blue→cyan on marked phrases. */
export function BubbleHighlightText({
  segments,
  className = "",
}: BubbleHighlightTextProps) {
  return (
    <p className={className}>
      {segments.map(([text, highlight], i) =>
        highlight ? (
          <span key={i} className="etalk-text-brand-gradient">
            {text}
          </span>
        ) : (
          <span key={i}>{text}</span>
        ),
      )}
    </p>
  );
}
