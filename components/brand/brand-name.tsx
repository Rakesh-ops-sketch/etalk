import { Fragment, type ReactNode } from "react";

export const BRAND_NAME = "E-Talk" as const;

const BRAND_GRADIENT = "etalk-text-brand-gradient";

/** English spellings (legacy included) and Odia brand in copy. */
const BRAND_SPLIT_RE = /(E-?talk|eTalk|ଇ-ଟକ୍)/gi;

function isEnglishBrand(segment: string): boolean {
  return /^(E-?talk|eTalk)$/i.test(segment);
}

function brandNode(segment: string, key: number): ReactNode {
  if (isEnglishBrand(segment)) {
    return (
      <span key={key} className={BRAND_GRADIENT}>
        {BRAND_NAME}
      </span>
    );
  }
  if (segment === "ଇ-ଟକ୍") {
    return (
      <span key={key} className={BRAND_GRADIENT}>
        {segment}
      </span>
    );
  }
  return segment;
}

/** Inline copy: highlights every brand mention with the logo blue→cyan gradient. */
export function BrandInText({ children: text }: { children: string }) {
  if (!BRAND_SPLIT_RE.test(text)) {
    return text;
  }
  BRAND_SPLIT_RE.lastIndex = 0;
  const segments = text.split(BRAND_SPLIT_RE);
  return (
    <>
      {segments.map((segment, i) =>
        segment === "" ? null : isEnglishBrand(segment) || segment === "ଇ-ଟକ୍" ? (
          brandNode(segment, i)
        ) : (
          <Fragment key={i}>{segment}</Fragment>
        ),
      )}
    </>
  );
}

/** Standalone wordmark span (headers, logos-as-text). */
export function BrandName({ className = "" }: { className?: string }) {
  return (
    <span className={`${BRAND_GRADIENT} ${className}`.trim()}>{BRAND_NAME}</span>
  );
}
