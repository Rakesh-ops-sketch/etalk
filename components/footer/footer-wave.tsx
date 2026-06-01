/** One gradient surface: wave top + footer body (seamless blend). */
const FOOTER_SURFACE_PATH =
  "M0,34 C110,12 250,16 362,40 C472,64 596,112 736,104 C876,96 992,38 1118,24 C1244,10 1358,30 1440,58 L1440,1200 L0,1200 Z";

export function FooterGradientBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 1200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="etalk-footer-surface-grad"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="1440"
          y2="1200"
        >
          <stop offset="0%" stopColor="#0047cc" />
          <stop offset="42%" stopColor="#0066ff" />
          <stop offset="66%" stopColor="#0066ff" />
          <stop offset="78%" stopColor="#2488ff" />
          <stop offset="88%" stopColor="#38bdf8" />
          <stop offset="94%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#etalk-footer-surface-grad)"
        d={FOOTER_SURFACE_PATH}
      />
    </svg>
  );
}
