import type { ReactNode } from "react";

/**
 * Realistic smartphone frame (iPhone-style bezel, Dynamic Island, home indicator).
 * Screen area is the single child — keep overflow hidden inside for reel/carousel.
 */
export function IphoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[min(320px,88vw)] select-none">
      {/* Silent / volume rails (decorative) */}
      <div
        className="pointer-events-none absolute -left-[2px] top-[22%] z-0 h-9 w-[3px] rounded-l-md bg-gradient-to-b from-[#3d3d3f] to-[#1a1a1c]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[2px] top-[30%] z-0 h-14 w-[3px] rounded-l-md bg-gradient-to-b from-[#3d3d3f] to-[#1a1a1c]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[2px] top-[26%] z-0 h-20 w-[3px] rounded-r-md bg-gradient-to-b from-[#3d3d3f] to-[#1a1a1c]"
        aria-hidden
      />

      {/* Outer metallic rim */}
      <div
        className="relative rounded-[2.75rem] p-[3px] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_32px_64px_-12px_rgba(0,0,0,0.85),0_0_80px_-20px_rgba(212,175,55,0.08)]"
        style={{
          background:
            "linear-gradient(165deg, #4a4a4e 0%, #1c1c1e 40%, #0c0c0e 100%)",
        }}
      >
        {/* Inner black housing */}
        <div className="rounded-[2.6rem] bg-[#0a0a0a] p-[11px]">
          {/* Glass / OLED stack */}
          <div className="relative overflow-hidden rounded-[2.05rem] bg-black ring-1 ring-white/[0.06]">
            {/* Screen glare */}
            <div
              className="pointer-events-none absolute inset-0 z-10 rounded-[2.05rem] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent"
              aria-hidden
            />

            {/* Dynamic Island */}
            <div className="pointer-events-none absolute left-1/2 top-3 z-30 h-[31px] w-[min(120px,38%)] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.6)] ring-1 ring-black/90" />

            {/* Status bar */}
            <div className="relative z-20 flex items-center justify-between px-5 pb-1 pt-[2.85rem] text-[12px] font-semibold tabular-nums tracking-tight text-neutral-300">
              <span>9:41</span>
              <span className="flex items-center gap-1.5" aria-hidden>
                <svg className="h-3 w-4 text-neutral-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
                <svg className="h-3 w-6 text-neutral-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                </svg>
              </span>
            </div>

            {/* App content slot */}
            <div className="relative z-10 px-2 pb-6 pt-1">{children}</div>

            {/* Home indicator */}
            <div className="pointer-events-none flex justify-center pb-2 pt-1">
              <div className="h-1 w-[28%] rounded-full bg-white/25" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
