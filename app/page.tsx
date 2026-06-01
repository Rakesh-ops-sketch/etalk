"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ApproachCoachLottie } from "@/components/approach";
import { AudienceCarousel } from "@/components/audience";
import { BrandInText } from "@/components/brand/brand-name";
import {
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
  HeroAiRobot,
  HeroLaunchCountdown,
  HeroParticles,
  HeroTypewriter,
} from "@/components/hero";
import {
  FooterGradientBackdrop,
  FooterWavePromo,
} from "@/components/footer";
import { LanguageToggle } from "@/components/nav/language-toggle";
import { SocialLinks } from "@/components/social";
import { TrustWorldMap } from "@/components/trust";
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

const footerSections = [
  {
    title: "About E-Talk",
    links: [
      { label: "Why E-Talk", href: "#approach" },
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Learner Paths",
    links: [
      { label: "AI English coach", href: "#features" },
      { label: "Odia-friendly lessons", href: "#how" },
      { label: "Exam & interview prep", href: "#audience" },
      { label: "Daily speaking practice", href: "#how" },
    ],
  },
  {
    title: "Help and support",
    links: [
      { label: "Join waitlist", href: "#cta" },
      { label: "Contact us", href: "mailto:hello@e-talk.in" },
      { label: "Privacy", href: "#faq" },
      { label: "Terms", href: "#faq" },
    ],
  },
] as const;

const siteLanguages = [
  "Odia",
  "English",
  "Hindi",
  "Bengali",
  "Telugu",
  "Tamil",
  "Marathi",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Urdu",
] as const;

const FOOTER_LOGO_SRC = "/PNG/E-talk_Logo-png.png" as const;

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
      <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[rgba(250,249,247,0.92)] backdrop-blur-xl transition-[border-color,background-color] duration-300 supports-[backdrop-filter]:bg-[rgba(250,249,247,0.78)]">
        <div className="etalk-container grid min-h-20 auto-rows-min grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2.5 gap-y-0 py-2.5 sm:gap-x-4 md:min-h-0 md:grid-cols-[1fr_auto_1fr] md:gap-y-0 md:py-0 md:h-24">
          <div className="flex min-w-0 items-center justify-self-start">
            <Link
              href="/"
              className="group relative flex min-w-0 max-w-full items-center gap-1.5 rounded-lg outline-offset-2 transition-opacity duration-300 hover:opacity-92 focus-visible:opacity-100 sm:gap-2 md:gap-2.5"
              aria-label="E-Talk — home"
            >
              <BrandLogoMark
                variant="solid"
                size="lg"
                priority
                className="!h-[4.25rem] max-w-[min(100%,10.5rem)] sm:!h-[5.25rem] sm:max-w-[11.5rem] md:!h-[5.75rem] md:max-w-[12.5rem]"
              />
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
              <BrandInText>{t.nav.whyEtalk}</BrandInText>
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

      <main className="flex-1 overflow-x-hidden">
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
              className="etalk-logo-watermark h-auto w-[min(100vw,56rem)] max-h-[min(92vh,70rem)] select-none object-contain object-center sm:w-[min(100vw,68rem)] sm:max-h-[min(94vh,78rem)] md:w-[min(100vw,82rem)] md:max-h-[min(96vh,86rem)]"
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
                "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-1/4 bottom-0 z-[2] h-[28rem] w-[28rem] rounded-full opacity-25 blur-[90px] motion-reduce:opacity-12"
            style={{
              background:
                "radial-gradient(circle, rgba(30,41,59,0.14) 0%, transparent 65%)",
            }}
          />
          {/* Above particle canvas (z-1) so decor line art is visible */}
          <OdishaSectionDecor variant="hero" />
          <div className="relative z-[3] etalk-container pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
            <div className="etalk-hero-layout mx-auto w-full max-w-6xl">
              <p
                className={`text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--brand-muted)] sm:text-xs ${oriaFont}`}
              >
                {t.hero.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className={`mt-4 text-[clamp(1.75rem,2.85vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--brand-navy-deep)] antialiased sm:mt-5 ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : "font-sans"}`}
              >
                {t.hero.h1}
              </h1>
              <p className="mt-3 max-w-2xl font-[family-name:var(--font-noto-oriya)] text-sm leading-relaxed text-[var(--brand-muted)] sm:text-[0.9375rem]">
                {t.hero.odiaLine}
              </p>

              <div className="etalk-hero-layout__mid">
                <HeroLaunchCountdown />
                <HeroAiRobot className="etalk-hero-layout__robot" />
              </div>

              <div className="etalk-hero-layout__main min-w-0 text-left">
                <div
                  className="h-px w-full bg-gradient-to-r from-[rgba(0,102,255,0.18)] via-[rgba(0,102,255,0.28)] to-transparent lg:hidden"
                  aria-hidden
                />
                <div
                  className={`mt-5 min-h-[4.5rem] text-[clamp(1rem,1.35vw,1.125rem)] font-medium leading-relaxed text-[var(--brand-navy)] sm:mt-6 sm:min-h-[4rem] lg:mt-8 lg:border-l-2 lg:border-[var(--brand-blue)]/25 lg:pl-5 ${oriaFont}`}
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
                    className={`inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--hairline)] bg-[var(--surface-elevated)] px-8 text-base font-medium text-[var(--brand-silver)] shadow-[0_1px_2px_rgba(0,71,204,0.06)] transition-[background-color,box-shadow,color,border-color] duration-300 ease-out hover:border-[rgba(0,102,255,0.35)] hover:bg-[#fffef9] hover:text-[var(--brand-blue-deep)] ${oriaFont}`}
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>
                <p className={`mt-4 text-sm text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.hero.note}
                </p>
              </div>
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
            <TrustWorldMap />
            <div className="mx-auto grid w-full max-w-7xl gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-0">
            <div className="text-center lg:pr-10">
              <p className="font-sans text-2xl font-bold text-[var(--brand-blue)]">
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
              <p className="font-sans text-2xl font-bold text-[var(--brand-blue)]">
                {t.trust.col2Title}
              </p>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed text-[var(--brand-muted)] sm:max-w-[min(100%,22rem)] ${oriaFont}`}>
                {t.trust.col2Body}
              </p>
            </div>
            <div className="text-center lg:pl-10">
              <p className="font-sans text-2xl font-bold text-[var(--brand-blue)]">
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
            <div className="etalk-approach-grid mx-auto mt-16 grid max-w-6xl gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(9.5rem,12.5rem)] xl:items-start">
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
                  <BrandInText>{t.approach.approachTitle}</BrandInText>
                </h3>
                <p className={`mt-4 leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.approach.approachBody}
                </p>
              </div>
              <ApproachCoachLottie className="etalk-approach-grid__coach" />
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
              className="etalk-logo-watermark h-auto w-[min(92vw,36rem)] max-h-[min(65vh,44rem)] select-none object-contain object-center sm:w-[min(100vw,46rem)] sm:max-h-[min(68vh,50rem)] md:w-[min(100vw,54rem)] md:max-h-[min(72vh,54rem)]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 56rem"
            />
          </div>
          <div className="relative z-10 etalk-container">
            <div className="etalk-section-head">
              <h2
                id="features-heading"
                className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                <BrandInText>{t.features.heading}</BrandInText>
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
                        <BrandInText>{f.title}</BrandInText>
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
                    className="etalk-logo-watermark h-auto w-full max-w-[6.25rem] min-w-0 object-contain object-center sm:max-w-[7.75rem] md:max-w-[9rem]"
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
                <BrandInText>{t.how.heading}</BrandInText>
              </h2>
              <p className={`etalk-section-lead mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.how.subhead}
              </p>
            </div>

            <HowWorksCarousel
              items={t.how.carousel}
              carouselHint={t.how.carouselHint}
              carouselHintMobile={t.how.carouselHintMobile}
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
                <BrandInText>{t.audience.subhead}</BrandInText>
              </p>
            </div>

            <figure className="relative mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--hairline)] bg-gradient-to-br from-[var(--surface-elevated)] to-[#f5f4f1] px-6 py-7 text-center shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] sm:px-8 sm:py-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl motion-reduce:opacity-15"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <blockquote
                className={`relative text-base font-medium leading-relaxed text-[var(--brand-silver)] sm:text-lg sm:leading-relaxed ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : "font-sans"}`}
              >
                <span className="text-[var(--brand-blue)]/85">&ldquo;</span>
                <BrandInText>{t.audience.heritageQuote}</BrandInText>
                <span className="text-[var(--brand-blue)]/85">&rdquo;</span>
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
              className="etalk-logo-watermark h-auto w-[min(100vw,42rem)] max-h-[min(68vh,48rem)] select-none object-contain object-center sm:w-[min(100vw,52rem)] sm:max-h-[min(72vh,54rem)] md:w-[min(100vw,58rem)] md:max-h-[min(75vh,60rem)]"
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
                <BrandInText>{t.quote.subhead}</BrandInText>
              </p>
            </div>
            <figure className="relative mx-auto mt-14 w-full max-w-3xl text-center">
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full opacity-40 blur-3xl motion-reduce:opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <blockquote className={`relative font-sans text-xl font-medium leading-snug tracking-tight text-[var(--brand-silver)] sm:text-2xl sm:leading-snug ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}>
                <span className="text-[var(--brand-blue)]/90">&ldquo;</span>
                <BrandInText>{t.quote.text}</BrandInText>
                <span className="text-[var(--brand-blue)]/90">&rdquo;</span>
              </blockquote>
              <figcaption className={`mt-6 text-sm text-[var(--brand-muted)] ${oriaFont}`}>
                <BrandInText>{t.quote.caption}</BrandInText>
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
                    ? `${person.name}, ${t.team.role} — ${m.title}; ${m.subtitle} at E-Talk`
                    : `${person.name}, ${t.team.role} — ${m.title} at E-Talk`;
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
                  <BrandInText>{t.faq.subhead}</BrandInText>
                </p>
              </div>
              <div className="mt-12 text-left">
                {t.faq.items.map((item) => (
                  <details
                    key={item.q}
                    className="etalk-faq-item group px-1 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className={`flex min-h-[3.25rem] cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-[var(--brand-silver)] transition-colors duration-300 group-hover:text-[var(--brand-navy-deep)] ${oriaFont}`}>
                      <span>
                        <BrandInText>{item.q}</BrandInText>
                      </span>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--hairline)] bg-[var(--surface-elevated)] text-[var(--brand-blue)] shadow-[0_1px_2px_rgba(0,71,204,0.06)] transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out group-open:rotate-180 group-open:border-[rgba(0,102,255,0.25)] group-open:bg-[#fffef9] motion-reduce:transition-none"
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
                    "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,102,255,0.14), transparent 55%)",
                }}
              />
              <div className="relative z-10 mx-auto w-full max-w-3xl">
                <div className="etalk-section-head">
                  <h2
                    id="cta-heading"
                    className={`font-sans text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
                  >
                    <BrandInText>{t.cta.heading}</BrandInText>
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

      <footer className="etalk-footer-shell shrink-0">
        <div className="etalk-footer-unified">
          <FooterGradientBackdrop />
          <div className="etalk-footer-content">
            <div
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
              aria-hidden
            >
              <Image
                src={FOOTER_LOGO_SRC}
                alt=""
                width={736}
                height={985}
                unoptimized
                className="h-auto w-[min(92vw,28rem)] opacity-[0.09] select-none object-contain sm:w-[min(72vw,34rem)]"
              />
            </div>
            <div className="etalk-container relative z-10 pb-10 pt-4 sm:pb-12 sm:pt-6">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-10">
                <FooterWavePromo />
                <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,1fr))] lg:gap-x-10 lg:gap-y-8">
                  <div className="min-w-0 space-y-3">
                    <Image
                      src={FOOTER_LOGO_SRC}
                      alt="E-Talk logo"
                      width={736}
                      height={985}
                      unoptimized
                      className="h-auto w-[8rem] select-none object-contain sm:w-[9rem]"
                    />
                    <div className="etalk-footer-brand-copy max-w-md">
                      <BrandLogoText variant="footer" />
                    </div>
                    <p
                      className={`max-w-md text-sm leading-snug text-white/85 ${oriaFont}`}
                    >
                      {t.footer.brandMarketingLine}
                    </p>
                    <p
                      className={`text-xs leading-snug text-white/80 ${oriaFont}`}
                    >
                      <BrandInText>{t.footer.copyright}</BrandInText>
                    </p>
                  </div>

                  {footerSections.map((section) => (
                    <div key={section.title} className="min-w-0">
                      <h3 className="text-base font-bold tracking-[0.01em] text-white/95">
                        {section.title}
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {section.links.map((link) => (
                          <li key={link.label}>
                            <a
                              className="text-sm text-white/82 no-underline transition-colors duration-200 hover:text-white"
                              href={link.href}
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:pt-7">
                  <div className="min-w-0">
                    <p
                      className={`text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/85 ${oriaFont}`}
                    >
                      {t.footer.follow}
                    </p>
                    <SocialLinks
                      links={socialLinks}
                      className="etalk-footer-social mt-3 !justify-start"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setWaitlistOpen(true)}
                    className={`shrink-0 rounded-full border border-white/35 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/12 ${oriaFont}`}
                  >
                    {t.footer.waitlist}
                  </button>
                </div>

                <div className="border-t border-white/20 pt-5 sm:pt-6">
                  <p
                    className={`text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/78 ${oriaFont}`}
                  >
                    Site language
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {siteLanguages.map((language) => (
                      <span
                        key={language}
                        className={`text-xs text-white/80 ${oriaFont}`}
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
