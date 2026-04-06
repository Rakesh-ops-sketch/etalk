"use client";

import dynamic from "next/dynamic";

/**
 * WebGL runs only in the browser — load with `ssr: false` to avoid SSR/hydration issues.
 *
 * Usage:
 * ```tsx
 * import { ThreeScene } from "@/components/three/scene";
 * <ThreeScene className="h-48 w-full rounded-2xl" />
 * ```
 */
export const ThreeScene = dynamic(() => import("./scene-inner"), {
  ssr: false,
  loading: () => (
    <div
      className="flex min-h-[12rem] w-full items-center justify-center rounded-2xl bg-white/[0.03] text-sm text-[var(--brand-muted)]"
      aria-hidden
    >
      Loading…
    </div>
  ),
});
