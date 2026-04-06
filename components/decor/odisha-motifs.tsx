/**
 * Subtle line-art motifs inspired by Odisha landscape and built heritage.
 * Decorative only — not replicas of protected monuments.
 */

/** Odia rekha deul silhouette: curved rekha spire, pidha tiers, platform, arched doorway. */
function SvgTempleRekha({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Wide platform (pitha) */}
      <path
        d="M 2 102 h 96"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        opacity={0.9}
      />
      <path
        d="M 8 102 h 84"
        stroke="currentColor"
        strokeWidth={0.95}
        strokeLinecap="round"
        opacity={0.45}
      />
      {/* Tower shell: symmetric rekha — control points mirrored so apex is smooth (no kink). */}
      <path
        d="M 26 102 V 64 C 26 48 26 14 50 14 C 74 14 74 48 74 64 V 102"
        stroke="currentColor"
        strokeWidth={1.45}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Inner rekha — same symmetry */}
      <path
        d="M 32 98 V 68 C 32 54 32 28 50 28 C 68 28 68 54 68 68 V 98"
        stroke="currentColor"
        strokeWidth={0.85}
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity={0.4}
      />
      {/* Pidha-style curved mouldings */}
      <path
        d="M 30 78 Q 50 72 70 78"
        stroke="currentColor"
        strokeWidth={0.95}
        strokeLinecap="round"
        opacity={0.65}
      />
      <path
        d="M 32 58 Q 50 50 68 58"
        stroke="currentColor"
        strokeWidth={0.85}
        strokeLinecap="round"
        opacity={0.55}
      />
      {/* Finial — centered on axis, above smooth apex (avoids “bent” overlap with curve) */}
      <circle cx={50} cy={9.5} r={2.6} fill="none" stroke="currentColor" strokeWidth={1} />
      <path d="M 50 7 V 4" stroke="currentColor" strokeWidth={0.85} strokeLinecap="round" opacity={0.75} />
      {/* Doorway */}
      <path
        d="M 42 102 V 72 M 58 102 V 72"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.75}
      />
      <path
        d="M 42 72 Q 50 64 58 72"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.75}
      />
    </svg>
  );
}

function SvgCoastalWaves({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M0 28c20-8 40 8 60 0s40-8 60 0 40 8 60 0"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <path
        d="M0 36c20-6 40 6 60 0s40-6 60 0 40 6 60 0"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.55}
      />
      <path
        d="M12 20c16-6 32 6 48 0s32-6 48 0 32 6 48 0"
        stroke="currentColor"
        strokeWidth={0.9}
        strokeLinecap="round"
        opacity={0.4}
      />
    </svg>
  );
}

function SvgLotus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <ellipse cx={48} cy={52} rx={10} ry={6} stroke="currentColor" strokeWidth={1.1} />
      <path
        d="M48 28c-8 10-14 22-14 34 0 6 6 10 14 10s14-4 14-10c0-12-6-24-14-34Z"
        stroke="currentColor"
        strokeWidth={1.15}
        strokeLinejoin="round"
      />
      <path
        d="M30 44c6-4 12 4 18 0s12-4 18 0M30 56c6-4 12 4 18 0"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.7}
      />
      <path
        d="M66 44c-6-4-12 4-18 0"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.7}
      />
    </svg>
  );
}

function SvgSunWheel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx={50} cy={50} r={28} stroke="currentColor" strokeWidth={1.2} />
      <circle cx={50} cy={50} r={8} stroke="currentColor" strokeWidth={1} opacity={0.6} />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        const x2 = 50 + Math.cos(a) * 38;
        const y2 = 50 + Math.sin(a) * 38;
        return (
          <line
            key={i}
            x1={50 + Math.cos(a) * 10}
            y1={50 + Math.sin(a) * 10}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={0.9}
            opacity={0.85}
          />
        );
      })}
    </svg>
  );
}

function SvgPalmFronds({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M36 108V44M36 44c-16 8-24 28-28 48M36 44c16 8 24 28 28 48M36 52c-12 4-20 18-24 32M36 52c12 4 20 18 24 32"
        stroke="currentColor"
        strokeWidth={1.15}
        strokeLinecap="round"
      />
      <path
        d="M36 32c-8-6-12-16-12-26M36 32c8-6 12-16 12-26"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.65}
      />
    </svg>
  );
}

function SvgPaddyField({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${12 + i * 18} 64c0-12 4-28 8-40`}
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          opacity={0.55 + i * 0.06}
        />
      ))}
      <path d="M8 64h104" stroke="currentColor" strokeWidth={0.85} strokeLinecap="round" opacity={0.35} />
    </svg>
  );
}

function SvgToranaArch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M20 80V36c0-12 16-22 40-22s40 10 40 22v44"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M100 80V40M20 80h80" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" />
      <path
        d="M44 28c8-4 16-6 24-6s16 2 24 6"
        stroke="currentColor"
        strokeWidth={0.9}
        strokeLinecap="round"
        opacity={0.55}
      />
    </svg>
  );
}

function SvgDiyaGlow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M40 12v8M40 60v8M12 40h8M60 40h8M22 22l6 6M52 52l6 6M58 22l-6 6M22 52l-6 6"
        stroke="currentColor"
        strokeWidth={0.85}
        strokeLinecap="round"
        opacity={0.45}
      />
      <path
        d="M40 36c-6 0-10 4-10 10s4 10 10 10 10-4 10-10-4-10-10-10Z"
        stroke="currentColor"
        strokeWidth={1.1}
      />
      <ellipse cx={40} cy={58} rx={14} ry={5} stroke="currentColor" strokeWidth={1} opacity={0.6} />
    </svg>
  );
}

/** Solid gold for `currentColor` — subtlety comes from `opacity-*` only (avoid double-alpha). */
const strokeTint = "text-[var(--brand-gold-mid)] motion-reduce:opacity-80";

export type OdishaDecorVariant =
  | "hero"
  | "trust"
  | "approach"
  | "features"
  | "how"
  | "audience"
  | "quote"
  | "team"
  | "faq"
  | "cta";

export function OdishaSectionDecor({ variant }: { variant: OdishaDecorVariant }) {
  const zLayer = variant === "hero" ? "z-[2]" : "z-0";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${zLayer}`}
      aria-hidden
    >
      {variant === "hero" ? (
        <>
          <SvgTempleRekha
            className={`${strokeTint} absolute -right-4 bottom-[8%] h-44 w-32 opacity-[0.22] sm:right-2 sm:h-52 sm:w-36 sm:opacity-[0.2]`}
          />
          <SvgCoastalWaves
            className={`${strokeTint} absolute bottom-0 left-1/2 h-14 w-[min(92vw,22rem)] -translate-x-1/2 opacity-[0.18]`}
          />
        </>
      ) : null}
      {variant === "trust" ? (
        <SvgCoastalWaves
          className={`${strokeTint} absolute bottom-4 left-0 right-0 mx-auto h-12 w-[min(100%,30rem)] opacity-[0.2]`}
        />
      ) : null}
      {variant === "approach" ? (
        <SvgLotus
          className={`${strokeTint} absolute -left-4 top-10 h-36 w-36 opacity-[0.2] sm:left-0`}
        />
      ) : null}
      {variant === "features" ? (
        <>
          <SvgSunWheel
            className={`${strokeTint} absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 opacity-[0.18] sm:right-2`}
          />
          <SvgLotus className={`${strokeTint} absolute bottom-8 left-6 h-28 w-28 opacity-[0.16]`} />
        </>
      ) : null}
      {variant === "how" ? (
        <SvgToranaArch
          className={`${strokeTint} absolute -left-8 top-[28%] h-36 w-44 -translate-y-[33%] opacity-[0.2] sm:left-0`}
        />
      ) : null}
      {variant === "audience" ? (
        <>
          <SvgPalmFronds
            className={`${strokeTint} absolute -right-4 bottom-20 h-48 w-32 opacity-[0.18] sm:right-0`}
          />
          <SvgPaddyField
            className={`${strokeTint} absolute bottom-4 left-4 h-20 w-[min(100%,20rem)] opacity-[0.16]`}
          />
        </>
      ) : null}
      {variant === "quote" ? (
        <SvgDiyaGlow
          className={`${strokeTint} absolute right-[6%] top-16 h-32 w-32 opacity-[0.18]`}
        />
      ) : null}
      {variant === "team" ? (
        <SvgTempleRekha
          className={`${strokeTint} absolute left-1/2 top-8 h-40 w-28 -translate-x-1/2 opacity-[0.18]`}
        />
      ) : null}
      {variant === "faq" ? (
        <SvgCoastalWaves
          className={`${strokeTint} absolute top-10 right-2 h-12 w-52 rotate-180 opacity-[0.16]`}
        />
      ) : null}
      {variant === "cta" ? (
        <SvgSunWheel
          className={`${strokeTint} absolute -bottom-8 left-1/2 h-44 w-44 -translate-x-1/2 opacity-[0.14] sm:bottom-0 sm:opacity-[0.16]`}
        />
      ) : null}
    </div>
  );
}
