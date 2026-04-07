"use client";

import { useLang } from "@/lib/i18n/lang-context";

export function LanguageToggle() {
  const { lang, toggle } = useLang();
  const isOdia = lang === "or";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isOdia ? "Switch to English" : "ଓଡ଼ିଆକୁ ଯାଆନ୍ତୁ"}
      title={isOdia ? "Switch to English" : "Switch to Odia"}
      className="shrink-0 rounded-md px-1 py-2 text-xs font-medium text-[var(--brand-muted)] transition-colors hover:text-[var(--brand-silver)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold-mid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      <span className={isOdia ? "opacity-50" : "text-[var(--brand-silver)]"}>
        EN
      </span>
      <span className="mx-1.5 text-[var(--brand-muted)]/40" aria-hidden>
        |
      </span>
      <span
        className={`font-[family-name:var(--font-noto-oriya)] ${isOdia ? "text-[var(--brand-silver)]" : "opacity-50"}`}
      >
        ଓ
      </span>
    </button>
  );
}
