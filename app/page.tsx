"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AudienceCarousel } from "@/components/audience";
import {
  BRAND_LOGO_MARK,
  BRAND_LOGO_SECTION_WATERMARK,
  BrandLogoMark,
} from "@/components/brand/brand-logo-mark";
import {
  BrandLogoText,
  HeaderBrandLockup,
} from "@/components/brand/brand-logo-text";
import { OdishaSectionDecor } from "@/components/decor";
import { HowWorksCarousel } from "@/components/how";
import {
  HeroLaunchCountdown,
  HeroParticles,
  HeroTypewriter,
} from "@/components/hero";
import { LanguageToggle } from "@/components/nav/language-toggle";
import { SocialLinks } from "@/components/social";
import { WaitlistMailDialog } from "@/components/waitlist/waitlist-mail-dialog";
import { useLang } from "@/lib/i18n/lang-context";
import { mailtoContact, socialLinks } from "@/lib/site-config";

function IconMessage({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconGamepad({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="9" width="18" height="9" rx="2.5" />
      <path d="M8 12v2M7 13h2" />
      <circle cx="16" cy="12" r="1.25" />
      <circle cx="19" cy="10" r="1.25" />
    </svg>
  );
}

function IconGift({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 8v13" />
      <path d="M8 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2M16 8V6a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v2" />
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M3 12v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" />
    </svg>
  );
}

function IconBookOpen({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 7v14" />
      <path d="M2 5a2 2 0 0 1 2-2h7v16H4a2 2 0 0 1-2-2V5Z" />
      <path d="M22 5a2 2 0 0 0-2-2h-7v16h7a2 2 0 0 0 2-2V5Z" />
    </svg>
  );
}

function IconFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22v-7" />
    </svg>
  );
}

function IconSpark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
    </svg>
  );
}

const featureIcons = [
  IconMessage,
  IconShield,
  IconTarget,
  IconClock,
  IconGamepad,
  IconGift,
  IconBookOpen,
  IconFlag,
  IconSpark,
] as const;

/*
 * Cofounders / team section — restore when ready (see commented block below).
 * Team photos: Prasannjit, Bikram, Rakesh (`/public/team/`) — roles in `t.team.members`
 */
// const cofounders = [
//   {
//     key: "prasannjit",
//     name: "Prasannjit Sahoo",
//     image: "/team/prasannjit-sahoo.png",
//   },
//   {
//     key: "bikram",
//     name: "Bikram Kesari Swain",
//     image: "/team/bikram-kesari-swain.png",
//   },
//   { key: "rakesh", name: "Rakesh Biswal", image: "/team/rakesh-biswal.png" },
// ] as const;

export default function Home() {
  const { t, lang } = useLang();
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const isOdia = lang === "or";
  const oriaFont = isOdia
    ? "font-[family-name:var(--font-noto-oriya)]"
    : "";

  return (
    <>
      <WaitlistMailDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[rgba(246,245,240,0.88)] backdrop-blur-xl transition-[border-color,background-color] duration-300 supports-[backdrop-filter]:bg-[rgba(246,245,240,0.72)]">
        <div className="etalk-container grid min-h-20 auto-rows-min grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2.5 gap-y-0 py-2.5 sm:gap-x-4 md:min-h-0 md:grid-cols-[1fr_auto_1fr] md:gap-y-0 md:py-0 md:h-24">
          <div className="flex min-w-0 items-center justify-self-start">
            <Link
              href="/"
              className="group relative flex min-w-0 max-w-full items-center gap-1.5 rounded-lg outline-offset-2 transition-opacity duration-300 hover:opacity-92 focus-visible:opacity-100 sm:gap-2 md:gap-2.5"
              aria-label="E-talk — home"
            >
              <span className="flex h-20 w-auto shrink-0 items-center sm:h-[5rem] md:h-[5.75rem]">
                <Image
                  src={BRAND_LOGO_MARK.src}
                  alt=""
                  width={BRAND_LOGO_MARK.width}
                  height={BRAND_LOGO_MARK.height}
                  className="h-full w-auto max-w-[min(100%,10rem)] object-contain object-left object-top [clip-path:inset(0_0_20%_0)] sm:max-w-[11rem] md:max-w-[12rem]"
                  priority
                  // loading="eager"
                  sizes="(max-width: 640px) 48vw, 12rem"
                />
              </span>
              <div className="flex min-h-0 min-w-0 max-w-full flex-col justify-center gap-0 self-center leading-[1.15]">
                <HeaderBrandLockup />
              </div>
            </Link>
          </div>
          <nav
            className={`hidden items-center justify-self-center gap-6 text-sm font-medium whitespace-nowrap text-[var(--brand-muted)] md:flex lg:gap-8 ${oriaFont}`}
            aria-label="Primary"
          >
            <a
              href="#approach"
              className="rounded-md py-2 transition-colors duration-300 ease-out hover:text-[var(--brand-silver)]"
            >
              {t.nav.whyEtalk}
            </a>
            <a
              href="#features"
              className="rounded-md py-2 transition-colors duration-300 ease-out hover:text-[var(--brand-silver)]"
            >
              {t.nav.features}
            </a>
            <a
              href="#how"
              className="rounded-md py-2 transition-colors duration-300 ease-out hover:text-[var(--brand-silver)]"
            >
              {t.nav.howItWorks}
            </a>
            {/* Team nav — restore with cofounders section
            <a
              href="#team"
              className="rounded-md py-2 transition-colors duration-300 ease-out hover:text-[var(--brand-silver)]"
            >
              {t.nav.team}
            </a>
            */}
            <a
              href="#faq"
              className="rounded-md py-2 transition-colors duration-300 ease-out hover:text-[var(--brand-silver)]"
            >
              {t.nav.faq}
            </a>
          </nav>
          <div className="flex items-center justify-end gap-3 justify-self-end">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setWaitlistOpen(true)}
              className={`etalk-btn-gold inline-flex min-h-11 min-w-[11rem] shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold ${oriaFont}`}
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden">
        <section
          className="relative isolate min-h-[28rem] overflow-hidden etalk-section-navy"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
            aria-hidden
          >
            <Image
              src={BRAND_LOGO_SECTION_WATERMARK.src}
              alt=""
              width={BRAND_LOGO_SECTION_WATERMARK.width}
              height={BRAND_LOGO_SECTION_WATERMARK.height}
              className="h-auto w-[min(100vw,56rem)] max-h-[min(92vh,70rem)] select-none object-contain object-center opacity-[0.03] saturate-[0.3] contrast-[0.9] sm:w-[min(100vw,68rem)] sm:max-h-[min(94vh,78rem)] sm:opacity-[0.034] md:w-[min(100vw,82rem)] md:max-h-[min(96vh,86rem)] md:opacity-[0.038]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 90rem"
              priority
              loading="eager"
            />
          </div>
          <HeroParticles className="z-[1] opacity-100 motion-reduce:opacity-[0.72]" />
          <div
            className="pointer-events-none absolute -left-1/4 top-1/4 z-[2] h-[32rem] w-[32rem] rounded-full opacity-30 blur-[100px] motion-reduce:opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-1/4 bottom-0 z-[2] h-[28rem] w-[28rem] rounded-full opacity-25 blur-[90px] motion-reduce:opacity-12"
            style={{
              background:
                "radial-gradient(circle, rgba(30,41,59,0.14) 0%, transparent 65%)",
            }}
          />
          {/* Above particle canvas (z-1) so gold line art is actually visible */}
          <OdishaSectionDecor variant="hero" />
          <div className="relative z-[3] etalk-container pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
            <div className="mx-auto w-full max-w-4xl text-left">
              <div className="space-y-0">
                <p
                  className={`text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--brand-muted)] sm:text-xs ${oriaFont}`}
                >
                  {t.hero.eyebrow}
                </p>
                <h1
                  id="hero-heading"
                  className={`mt-5 text-[clamp(1.75rem,2.85vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--brand-navy-deep)] antialiased ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : "font-sans"}`}
                >
                  {t.hero.h1}
                </h1>
                <p className="mt-3 max-w-2xl font-[family-name:var(--font-noto-oriya)] text-sm leading-relaxed text-[var(--brand-muted)] sm:text-[0.9375rem]">
                  {t.hero.odiaLine}
                </p>
              </div>

              <HeroLaunchCountdown />

              <div
                className={`mt-8 min-h-[4.5rem] border-l-2 border-[var(--brand-navy)]/15 pl-4 text-[clamp(1rem,1.35vw,1.125rem)] font-medium leading-relaxed text-[var(--brand-navy)] sm:min-h-[4rem] sm:pl-5 ${oriaFont}`}
                aria-live="polite"
              >
                <HeroTypewriter
                  text={t.hero.typewriter}
                  loop
                  speedMs={32}
                  deleteSpeedMs={16}
                  pauseAfterMs={2800}
                  pauseBeforeMs={800}
                />
              </div>

              <p
                className={`mt-8 max-w-3xl text-base leading-[1.65] text-[var(--brand-muted)] sm:text-[1.0625rem] ${oriaFont}`}
              >
                {t.hero.body}
              </p>

              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => setWaitlistOpen(true)}
                  className={`etalk-btn-gold inline-flex min-h-12 items-center justify-center rounded-full px-8 text-base font-semibold ${oriaFont}`}
                >
                  {t.hero.primaryCta}
                </button>
                <a
                  href="#how"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--hairline)] bg-white px-8 text-base font-medium text-[var(--brand-silver)] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[background-color,box-shadow,color,border-color] duration-300 ease-out hover:border-[rgba(212,175,55,0.35)] hover:bg-[#fffefb] hover:text-[var(--brand-navy-deep)] ${oriaFont}`}
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
              <p className={`mt-4 text-sm text-[var(--brand-muted)] ${oriaFont}`}>
                {t.hero.note}
              </p>
            </div>
          </div>
          <div className="etalk-separator px-4 sm:px-6" aria-hidden />
        </section>

        <section
          className="relative overflow-hidden etalk-section-mist py-20 sm:py-24 lg:py-28"
          aria-label="Trust signals"
        >
          <OdishaSectionDecor variant="trust" />
          <div className="relative z-10 etalk-container">
            <div className="mx-auto grid w-full max-w-7xl gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-0">
            <div className="text-center lg:pr-10">
              <p className="font-sans text-2xl font-bold text-[var(--brand-gold-mid)]">
                {t.trust.col1Title}
              </p>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed text-[var(--brand-muted)] sm:max-w-[min(100%,22rem)] ${oriaFont}`}>
                {t.trust.col1Body}
              </p>
            </div>
            <div className="relative text-center lg:px-10">
              <span
                className="pointer-events-none absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[rgba(15,23,42,0.12)] to-transparent sm:block lg:left-0"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -right-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[rgba(15,23,42,0.12)] to-transparent sm:block lg:right-0"
                aria-hidden
              />
              <p className="font-sans text-2xl font-bold text-[var(--brand-gold-mid)]">
                {t.trust.col2Title}
              </p>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed text-[var(--brand-muted)] sm:max-w-[min(100%,22rem)] ${oriaFont}`}>
                {t.trust.col2Body}
              </p>
            </div>
            <div className="text-center lg:pl-10">
              <p className="font-sans text-2xl font-bold text-[var(--brand-gold-mid)]">
                {t.trust.col3Title}
              </p>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed text-[var(--brand-muted)] sm:max-w-[min(100%,22rem)] ${oriaFont}`}>
                {t.trust.col3Body}
              </p>
            </div>
            </div>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          id="approach"
          className="etalk-section-paper relative overflow-hidden py-20 sm:py-24 lg:py-28"
          aria-labelledby="approach-heading"
        >
          <OdishaSectionDecor variant="approach" />
          <div className="relative z-10 etalk-container">
            <div className="etalk-section-head">
              <h2
                id="approach-heading"
                className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.approach.heading}
              </h2>
              <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.approach.subhead}
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
              <div className="etalk-accent-line etalk-accent-line--soft text-left">
                <h3 className={`text-lg font-semibold text-[var(--brand-silver)] ${oriaFont}`}>
                  {t.approach.gapTitle}
                </h3>
                <p className={`mt-4 leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.approach.gapBody}
                </p>
              </div>
              <div className="etalk-accent-line text-left">
                <h3 className={`text-lg font-semibold text-[var(--brand-silver)] ${oriaFont}`}>
                  {t.approach.approachTitle}
                </h3>
                <p className={`mt-4 leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.approach.approachBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          id="features"
          className="relative overflow-hidden etalk-section-ambient py-20 sm:py-24 lg:py-28"
          aria-labelledby="features-heading"
        >
          <OdishaSectionDecor variant="features" />
          <div
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
            aria-hidden
          >
            <Image
              src={BRAND_LOGO_SECTION_WATERMARK.src}
              alt=""
              width={BRAND_LOGO_SECTION_WATERMARK.width}
              height={BRAND_LOGO_SECTION_WATERMARK.height}
              className="h-auto w-[min(92vw,36rem)] max-h-[min(65vh,44rem)] select-none object-contain object-center opacity-[0.055] saturate-[0.4] contrast-[0.94] sm:w-[min(100vw,46rem)] sm:max-h-[min(68vh,50rem)] sm:opacity-[0.07] md:w-[min(100vw,54rem)] md:max-h-[min(72vh,54rem)] md:opacity-[0.085]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 56rem"
            />
          </div>
          <div className="relative z-10 etalk-container">
            <div className="etalk-section-head">
              <h2
                id="features-heading"
                className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.features.heading}
              </h2>
              <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.features.subhead}
              </p>
            </div>
            <ul className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {t.features.items.map((f, i) => {
                const Icon = featureIcons[i] ?? IconMessage;
                return (
                  <li
                    key={f.title}
                    className="etalk-feature-tile relative flex flex-col overflow-hidden"
                  >
                    <div className="relative z-10 flex flex-1 flex-col">
                      <span className="etalk-icon-well w-11 shrink-0">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3
                        className={`mt-5 text-lg font-semibold text-[var(--brand-silver)] ${oriaFont}`}
                      >
                        {f.title}
                      </h3>
                      <p className={`mt-2 flex-1 text-sm leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                        {f.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          id="how"
          className="relative overflow-hidden etalk-section-mist py-20 sm:py-24 lg:py-28"
          aria-labelledby="how-heading"
        >
          <OdishaSectionDecor variant="how" />
          <div
            className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 grid-rows-6 gap-4 overflow-hidden p-4 opacity-[0.065] motion-reduce:opacity-[0.042] sm:grid-cols-5 sm:grid-rows-5 sm:gap-5 sm:p-5 sm:opacity-[0.078] md:grid-cols-6 md:gap-6 md:p-6 md:opacity-[0.088]"
            aria-hidden
          >
            {Array.from({ length: 24 }, (_, i) => {
              const rot = i % 4 === 0 ? "-rotate-6" : i % 4 === 1 ? "rotate-4" : i % 4 === 2 ? "-rotate-3" : "rotate-2";
              return (
                <div
                  key={i}
                  className={`flex min-h-0 items-center justify-center ${rot}`}
                >
                  <Image
                    src={BRAND_LOGO_SECTION_WATERMARK.src}
                    alt=""
                    width={BRAND_LOGO_SECTION_WATERMARK.width}
                    height={BRAND_LOGO_SECTION_WATERMARK.height}
                    className="h-auto w-full max-w-[6.25rem] min-w-0 object-contain object-center saturate-[0.48] contrast-[0.92] sm:max-w-[7.75rem] md:max-w-[9rem]"
                    sizes="(max-width: 640px) 28vw, 9rem"
                  />
                </div>
              );
            })}
          </div>
          <div className="relative z-10 etalk-container">
            <div className="etalk-section-head">
              <h2
                id="how-heading"
                className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.how.heading}
              </h2>
              <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.how.subhead}
              </p>
            </div>

            <HowWorksCarousel
              items={t.how.carousel}
              carouselHint={t.how.carouselHint}
              carouselA11y={t.how.carouselA11y}
              carouselOdiaLine={t.how.carouselOdiaLine}
              showOdiaTagline
              oriaFontClass={oriaFont}
              carouselPause={t.how.carouselPause}
              carouselResume={t.how.carouselResume}
            />
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          id="audience"
          className="etalk-section-paper relative overflow-hidden py-20 sm:py-24 lg:py-28"
          aria-labelledby="audience-heading"
        >
          <OdishaSectionDecor variant="audience" />
          <div className="relative z-10 etalk-container">
            <div className="etalk-section-head">
              <h2
                id="audience-heading"
                className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.audience.heading}
              </h2>
              <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.audience.subhead}
              </p>
            </div>

            <figure className="relative mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.22)] bg-gradient-to-br from-white to-[#faf9f6] px-6 py-7 text-center shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] sm:px-8 sm:py-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl motion-reduce:opacity-15"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <blockquote
                className={`relative text-base font-medium leading-relaxed text-[var(--brand-silver)] sm:text-lg sm:leading-relaxed ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : "font-sans"}`}
              >
                <span className="text-[var(--brand-gold-mid)]/85">&ldquo;</span>
                {t.audience.heritageQuote}
                <span className="text-[var(--brand-gold-mid)]/85">&rdquo;</span>
              </blockquote>
              <figcaption
                className={`relative mt-4 text-sm text-[var(--brand-muted)] ${oriaFont}`}
              >
                {t.audience.heritageCaption}
              </figcaption>
            </figure>

            <AudienceCarousel
              cards={t.audience.carousel}
              ariaLabel={t.audience.carouselAria}
              hint={t.audience.carouselHint}
              prevLabel={t.audience.carouselPrev}
              nextLabel={t.audience.carouselNext}
              oriaFontClass={oriaFont}
            />
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          className="relative overflow-hidden etalk-section-ambient py-20 sm:py-24 lg:py-28"
          aria-labelledby="voice-heading"
        >
          <OdishaSectionDecor variant="quote" />
          <div
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
            aria-hidden
          >
            <Image
              src={BRAND_LOGO_SECTION_WATERMARK.src}
              alt=""
              width={BRAND_LOGO_SECTION_WATERMARK.width}
              height={BRAND_LOGO_SECTION_WATERMARK.height}
              className="h-auto w-[min(100vw,42rem)] max-h-[min(68vh,48rem)] select-none object-contain object-center opacity-[0.055] saturate-[0.4] contrast-[0.94] sm:w-[min(100vw,52rem)] sm:max-h-[min(72vh,54rem)] sm:opacity-[0.07] md:w-[min(100vw,58rem)] md:max-h-[min(75vh,60rem)] md:opacity-[0.085]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60rem"
            />
          </div>
          <div className="relative z-10 etalk-container">
            <div className="etalk-section-head">
              <h2
                id="voice-heading"
                className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.quote.heading}
              </h2>
              <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.quote.subhead}
              </p>
            </div>
            <figure className="relative mx-auto mt-14 w-full max-w-3xl text-center">
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full opacity-40 blur-3xl motion-reduce:opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <blockquote className={`relative font-sans text-xl font-medium leading-snug tracking-tight text-[var(--brand-silver)] sm:text-2xl sm:leading-snug ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}>
                <span className="text-[var(--brand-gold-mid)]/90">&ldquo;</span>
                {t.quote.text}
                <span className="text-[var(--brand-gold-mid)]/90">&rdquo;</span>
              </blockquote>
              <figcaption className={`mt-6 text-sm text-[var(--brand-muted)] ${oriaFont}`}>
                {t.quote.caption}
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        {/*
        <section
          id="team"
          className="relative overflow-hidden etalk-section-mist py-20 sm:py-24 lg:py-28"
          aria-labelledby="team-heading"
        >
          <OdishaSectionDecor variant="team" />
          <div className="relative z-10 etalk-container">
            <div className="etalk-section-head">
              <h2
                id="team-heading"
                className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.team.heading}
              </h2>
              <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.team.subhead}
              </p>
            </div>

            <ul className="mx-auto mt-16 grid w-full max-w-7xl gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-0">
              {cofounders.map((person, index) => {
                const m = t.team.members[person.key];
                const roleAlt =
                  "subtitle" in m
                    ? `${person.name}, ${t.team.role} — ${m.title}; ${m.subtitle} at E-talk`
                    : `${person.name}, ${t.team.role} — ${m.title} at E-talk`;
                return (
                  <li
                    key={person.key}
                    className="relative flex flex-col items-center text-center lg:px-10"
                  >
                    {index > 0 ? (
                      <span
                        className="pointer-events-none absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[rgba(15,23,42,0.12)] to-transparent sm:block lg:left-0"
                        aria-hidden
                      />
                    ) : null}
                    <div className="relative h-[5rem] w-[5rem] shrink-0 overflow-hidden rounded-full shadow-[0_0_0_1px_rgba(15,23,42,0.1)] sm:h-[5.5rem] sm:w-[5.5rem]">
                      <Image
                        src={person.image}
                        alt={roleAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 80px, 88px"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[var(--brand-silver)]">
                      {person.name}
                    </h3>
                    <div className={`mt-1.5 space-y-1.5 ${oriaFont}`}>
                      <p className="text-sm text-[var(--brand-muted)]">{t.team.role}</p>
                      <p className="text-sm font-medium leading-snug text-[var(--brand-silver)]">
                        {m.title}
                      </p>
                      {"subtitle" in m ? (
                        <p className="text-xs font-medium leading-snug text-[var(--brand-silver)]/90">
                          {m.subtitle}
                        </p>
                      ) : null}
                      <p className="pt-0.5 text-xs leading-relaxed text-[var(--brand-muted)]">
                        {m.blurb}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />
        */}

        <section
          id="faq"
          className="etalk-section-paper relative overflow-hidden py-20 sm:py-24 lg:py-28"
          aria-labelledby="faq-heading"
        >
          <OdishaSectionDecor variant="faq" />
          <div className="relative z-10 etalk-container">
            <div className="mx-auto w-full max-w-3xl">
              <div className="etalk-section-head">
                <h2
                  id="faq-heading"
                  className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
                >
                  {t.faq.heading}
                </h2>
                <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.faq.subhead}
                </p>
              </div>
              <div className="mt-12 text-left">
                {t.faq.items.map((item) => (
                  <details
                    key={item.q}
                    className="etalk-faq-item group px-1 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className={`flex min-h-[3.25rem] cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-[var(--brand-silver)] transition-colors duration-300 group-hover:text-[var(--brand-navy-deep)] ${oriaFont}`}>
                      <span>{item.q}</span>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--hairline)] bg-white text-[var(--brand-gold-mid)] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out group-open:rotate-180 group-open:border-[rgba(212,175,55,0.25)] group-open:bg-[#fffefb] motion-reduce:transition-none"
                        aria-hidden
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className={`border-t border-[var(--hairline)] pb-5 pt-4 text-sm leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          id="cta"
          className="relative overflow-hidden etalk-section-mist pb-24 pt-12 sm:pb-28 sm:pt-14 lg:pb-32"
          aria-labelledby="cta-heading"
        >
          <OdishaSectionDecor variant="cta" />
          <div className="relative z-10 etalk-container">
            <div className="etalk-cta-shell relative mx-auto max-w-4xl overflow-hidden px-6 py-14 text-center sm:px-14 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-50 motion-reduce:opacity-25"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,175,55,0.14), transparent 55%)",
                }}
              />
              <div className="relative z-10 mx-auto w-full max-w-3xl">
                <div className="etalk-section-head">
                  <h2
                    id="cta-heading"
                    className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
                  >
                    {t.cta.heading}
                  </h2>
                  <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                    {t.cta.body}
                  </p>
                </div>
                <div className="mt-10 flex w-full max-w-md flex-col items-center gap-4 text-center sm:mx-auto">
                  <button
                    type="button"
                    onClick={() => setWaitlistOpen(true)}
                    className={`etalk-btn-gold inline-flex min-h-12 w-full items-center justify-center rounded-full px-8 text-base font-semibold sm:w-auto ${oriaFont}`}
                  >
                    {t.cta.submitBtn}
                  </button>
                  <a
                    href={mailtoContact()}
                    className={`text-sm text-[var(--brand-muted)] underline-offset-4 transition-colors hover:text-[var(--brand-silver)] ${oriaFont}`}
                  >
                    {t.footer.contact}
                  </a>
                </div>
                <p className={`mt-6 text-xs leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.cta.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden etalk-section-paper mt-auto border-t border-[var(--hairline)] py-7 sm:py-8">
        <div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
          aria-hidden
        >
          <Image
            src={BRAND_LOGO_SECTION_WATERMARK.src}
            alt=""
            width={BRAND_LOGO_SECTION_WATERMARK.width}
            height={BRAND_LOGO_SECTION_WATERMARK.height}
            className="h-auto w-[min(100vw,36rem)] max-h-[min(55vh,38rem)] select-none object-contain object-center opacity-[0.035] saturate-[0.4] contrast-[0.94] sm:w-[min(100vw,44rem)] sm:max-h-[min(60vh,44rem)] sm:opacity-[0.048] md:w-[min(100vw,50rem)] md:max-h-[min(64vh,48rem)] md:opacity-[0.058]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50rem"
          />
        </div>
        <div className="etalk-container relative z-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[var(--brand-muted)]">
            <div className="flex flex-col gap-6 pb-6 sm:gap-7 sm:pb-7 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <BrandLogoMark
                    clipBakedWordmark
                    variant="solid"
                    size="xl"
                  />
                </div>
                <div className="min-w-0 max-w-2xl">
                  <BrandLogoText variant="footer" />
                  <p className={`mt-2 text-sm leading-snug text-[var(--brand-muted)] ${oriaFont}`}>
                    {t.footer.brandMarketingLine}
                  </p>
                  <p className={`mt-2.5 text-xs leading-snug text-[var(--brand-muted)] ${oriaFont}`}>
                    {t.footer.copyright}
                  </p>
                </div>
              </div>
              <div className="flex w-full max-w-sm shrink-0 flex-col items-center gap-4 sm:mx-auto lg:ml-auto lg:max-w-xs">
                <div className="flex w-full flex-col items-center gap-2.5 text-center">
                  <p className={`w-full text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--brand-muted)] ${oriaFont}`}>
                    {t.footer.follow}
                  </p>
                  <SocialLinks links={socialLinks} />
                </div>
                <div className={`mt-0 flex w-full flex-col items-center text-center ${oriaFont}`}>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                    {t.footer.fromFounders}
                  </p>
                  <a
                    href="https://thetalentstracker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex max-w-full flex-col items-center justify-center gap-2 rounded-lg py-1 transition-colors hover:bg-[rgba(255,255,255,0.5)] sm:flex-row sm:gap-2.5"
                    aria-label={t.footer.talentsTrackerAria}
                  >
                    <Image
                      src="/talents-tracker-logo.png"
                      alt=""
                      width={140}
                      height={56}
                      className="h-7 w-auto shrink-0 object-contain opacity-90 transition-opacity group-hover:opacity-100 sm:h-8"
                    />
                    <span className="min-w-0 text-center sm:text-left">
                      <span className="block text-sm font-medium text-[var(--brand-silver)] transition-colors group-hover:text-[var(--brand-navy-deep)]">
                        {t.footer.talentsTrackerName}
                      </span>
                      <span className="mt-0.5 block text-[0.7rem] leading-snug text-[var(--brand-muted)]">
                        {t.footer.talentsTrackerTagline}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center justify-start gap-x-4 gap-y-1.5 pt-2 text-left lg:justify-between sm:pt-3"
            >
            <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-1.5">
              {/* Footer team link — restore with cofounders section
              <a
                href="#team"
                className={`rounded-md transition-colors duration-300 hover:text-[var(--brand-silver)] ${oriaFont}`}
              >
                {t.footer.team}
              </a>
              */}
              <a
                href="#faq"
                className={`rounded-md transition-colors duration-300 hover:text-[var(--brand-silver)] ${oriaFont}`}
              >
                {t.footer.faq}
              </a>
              <button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                className={`inline cursor-pointer rounded-md border-0 bg-transparent p-0 font-inherit text-inherit transition-colors duration-300 hover:text-[var(--brand-silver)] ${oriaFont}`}
              >
                {t.footer.waitlist}
              </button>
              <a
                href={mailtoContact()}
                className={`rounded-md transition-colors duration-300 hover:text-[var(--brand-silver)] ${oriaFont}`}
              >
                {t.footer.contact}
              </a>
            </div>
            <span className="font-[family-name:var(--font-noto-oriya)] text-[var(--brand-silver)]/90">
              {t.footer.thanks}
            </span>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
