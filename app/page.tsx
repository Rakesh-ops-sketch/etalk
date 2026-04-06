"use client";

import Image from "next/image";
import Link from "next/link";

import { AudienceCarousel } from "@/components/audience";
import { OdishaSectionDecor } from "@/components/decor";
import { HowWorksCarousel } from "@/components/how";
import { HeroParticles, HeroTypewriter } from "@/components/hero";
import { LanguageToggle } from "@/components/nav/language-toggle";
import { SocialLinks } from "@/components/social";
import { useLang } from "@/lib/i18n/lang-context";
import {
  mailtoContact,
  mailtoWaitlist,
  socialLinks,
} from "@/lib/site-config";

function IconBook({ className }: { className?: string }) {
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h6" />
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

function IconMic({ className }: { className?: string }) {
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
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

const featureIcons = [IconBook, IconSpark, IconMessage, IconMic] as const;

/** Team photos: Prasannjit, Bikram, Rakesh (`/public/team/`) */
const cofounders = [
  { name: "Prasannjit Sahoo", image: "/team/prasannjit-sahoo.png", kind: "cofounder" as const },
  { name: "Bikram Kesari Swain", image: "/team/bikram-kesari-swain.png", kind: "cofounder" as const },
  { name: "Rakesh Biswal", image: "/team/rakesh-biswal.png", kind: "product" as const },
] as const;

export default function Home() {
  const { t, lang } = useLang();

  const isOdia = lang === "or";
  const oriaFont = isOdia
    ? "font-[family-name:var(--font-noto-oriya)]"
    : "";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-black/80 backdrop-blur-xl transition-[border-color,background-color] duration-300 supports-[backdrop-filter]:bg-black/55">
        <div className="etalk-container flex h-[4.25rem] items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 rounded-md font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight transition-opacity duration-300 hover:opacity-90 sm:text-2xl"
            aria-label="E-talk — home"
          >
            <span className="etalk-wordmark">E-talk</span>
          </Link>
          <nav
            className={`hidden items-center gap-6 text-sm font-medium text-[var(--brand-muted)] md:flex lg:gap-8 ${oriaFont}`}
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
            <a
              href="#team"
              className="rounded-md py-2 transition-colors duration-300 ease-out hover:text-[var(--brand-silver)]"
            >
              {t.nav.team}
            </a>
            <a
              href="#faq"
              className="rounded-md py-2 transition-colors duration-300 ease-out hover:text-[var(--brand-silver)]"
            >
              {t.nav.faq}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href={mailtoWaitlist()}
              className={`etalk-btn-gold inline-flex min-h-11 min-w-[11rem] shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold ${oriaFont}`}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden">
        <section
          className="relative isolate min-h-[28rem] overflow-hidden etalk-section-navy"
          aria-labelledby="hero-heading"
        >
          <HeroParticles className="z-[1] opacity-90 motion-reduce:opacity-40" />
          <div
            className="pointer-events-none absolute -left-1/4 top-1/4 z-[2] h-[32rem] w-[32rem] rounded-full opacity-30 blur-[100px] motion-reduce:opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-1/4 bottom-0 z-[2] h-[28rem] w-[28rem] rounded-full opacity-25 blur-[90px] motion-reduce:opacity-12"
            style={{
              background:
                "radial-gradient(circle, rgba(27,31,59,0.9) 0%, transparent 65%)",
            }}
          />
          {/* Above particle canvas (z-1) so gold line art is actually visible */}
          <OdishaSectionDecor variant="hero" />
          <div className="relative z-[3] etalk-container pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
            <div className="etalk-measure mx-auto text-center lg:mx-0 lg:text-left">
              <p className={`text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-muted)] transition-colors duration-300 ${oriaFont}`}>
                {t.hero.eyebrow}
              </p>
              <p className="mt-3 font-[family-name:var(--font-noto-oriya)] text-base leading-relaxed text-[var(--brand-silver)] sm:text-lg">
                {t.hero.odiaLine}
              </p>
              <h1
                id="hero-heading"
                className={`mt-6 font-[family-name:var(--font-playfair)] text-[clamp(1.875rem,4vw,3rem)] font-bold leading-[1.12] tracking-tight text-[var(--brand-silver)] ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.hero.h1}
              </h1>
              <p className={`mt-4 min-h-[4.5rem] text-base font-medium leading-snug text-[var(--brand-gold-mid)] sm:min-h-[3.25rem] lg:text-lg ${oriaFont}`}>
                <HeroTypewriter text={t.hero.typewriter} />
              </p>
              <p className={`mt-6 text-base leading-relaxed text-[var(--brand-muted)] lg:text-lg lg:leading-relaxed ${oriaFont}`}>
                {t.hero.body}
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <a
                  href={mailtoWaitlist()}
                  className={`etalk-btn-gold inline-flex min-h-12 items-center justify-center rounded-full px-8 text-base font-semibold ${oriaFont}`}
                >
                  {t.hero.primaryCta}
                </a>
                <a
                  href="#how"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full bg-white/[0.04] px-8 text-base font-medium text-[var(--brand-silver)] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[background-color,box-shadow,color] duration-300 ease-out hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(212,175,55,0.2)_inset] hover:text-white ${oriaFont}`}
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
          className="relative overflow-hidden etalk-section-mist py-16 sm:py-20"
          aria-label="Trust signals"
        >
          <OdishaSectionDecor variant="trust" />
          <div className="relative z-10 etalk-container grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-0">
            <div className="text-center sm:text-left lg:pr-10">
              <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--brand-gold-mid)]">
                {t.trust.col1Title}
              </p>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed text-[var(--brand-muted)] sm:max-w-none ${oriaFont}`}>
                {t.trust.col1Body}
              </p>
            </div>
            <div className="relative text-center sm:text-left lg:px-10">
              <span
                className="pointer-events-none absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.12] to-transparent sm:block lg:left-0"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -right-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.12] to-transparent sm:block lg:right-0"
                aria-hidden
              />
              <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--brand-gold-mid)]">
                {t.trust.col2Title}
              </p>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed text-[var(--brand-muted)] sm:max-w-none ${oriaFont}`}>
                {t.trust.col2Body}
              </p>
            </div>
            <div className="text-center sm:text-left lg:pl-10">
              <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--brand-gold-mid)]">
                {t.trust.col3Title}
              </p>
              <p className={`mt-3 max-w-xs text-sm leading-relaxed text-[var(--brand-muted)] sm:max-w-none ${oriaFont}`}>
                {t.trust.col3Body}
              </p>
            </div>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          id="approach"
          className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
          aria-labelledby="approach-heading"
        >
          <OdishaSectionDecor variant="approach" />
          <div className="relative z-10 etalk-container">
            <h2
              id="approach-heading"
              className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
            >
              {t.approach.heading}
            </h2>
            <p className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
              {t.approach.subhead}
            </p>
            <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="etalk-accent-line etalk-accent-line--soft">
                <h3 className={`text-lg font-semibold text-[var(--brand-silver)] ${oriaFont}`}>
                  {t.approach.gapTitle}
                </h3>
                <p className={`mt-4 leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.approach.gapBody}
                </p>
              </div>
              <div className="etalk-accent-line">
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
          <div className="relative z-10 etalk-container">
            <h2
              id="features-heading"
              className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
            >
              {t.features.heading}
            </h2>
            <p className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
              {t.features.subhead}
            </p>
            <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {t.features.items.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <li key={f.title} className="etalk-feature-tile flex flex-col">
                    <span className="etalk-icon-well w-11 shrink-0">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className={`mt-5 text-lg font-semibold text-[var(--brand-silver)] ${oriaFont}`}>
                      {f.title}
                    </h3>
                    <p className={`mt-2 flex-1 text-sm leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                      {f.body}
                    </p>
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
          <div className="relative z-10 etalk-container">
            <h2
              id="how-heading"
              className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
            >
              {t.how.heading}
            </h2>
            <p className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
              {t.how.subhead}
            </p>

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
          className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
          aria-labelledby="audience-heading"
        >
          <OdishaSectionDecor variant="audience" />
          <div className="relative z-10 etalk-container">
            <h2
              id="audience-heading"
              className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
            >
              {t.audience.heading}
            </h2>
            <p className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
              {t.audience.subhead}
            </p>

            <figure className="relative mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.2)] bg-gradient-to-br from-white/[0.06] to-transparent px-6 py-7 sm:px-8 sm:py-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl motion-reduce:opacity-15"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <blockquote
                className={`relative text-base font-medium leading-relaxed text-[var(--brand-silver)] sm:text-lg sm:leading-relaxed ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : "font-[family-name:var(--font-baloo-thambi)]"}`}
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
          <div className="relative z-10 etalk-container">
            <h2
              id="voice-heading"
              className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
            >
              {t.quote.heading}
            </h2>
            <p className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
              {t.quote.subhead}
            </p>
            <figure className="etalk-measure relative mt-14">
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full opacity-40 blur-3xl motion-reduce:opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <blockquote className={`relative font-[family-name:var(--font-playfair)] text-xl font-medium leading-snug tracking-tight text-[var(--brand-silver)] sm:text-2xl sm:leading-snug ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}>
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

        <section
          id="team"
          className="relative overflow-hidden etalk-section-mist py-20 sm:py-24 lg:py-28"
          aria-labelledby="team-heading"
        >
          <OdishaSectionDecor variant="team" />
          <div className="relative z-10 etalk-container">
            <h2
              id="team-heading"
              className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
            >
              {t.team.heading}
            </h2>
            <p className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
              {t.team.subhead}
            </p>

            <ul className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-0">
              {cofounders.map((person, index) => (
                <li
                  key={person.name}
                  className="relative flex flex-col items-center text-center sm:items-stretch sm:text-left lg:px-10"
                >
                  {index > 0 ? (
                    <span
                      className="pointer-events-none absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.12] to-transparent sm:block lg:left-0"
                      aria-hidden
                    />
                  ) : null}
                  <div className="relative mx-auto h-[5rem] w-[5rem] shrink-0 overflow-hidden rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)] sm:mx-0 sm:h-[5.5rem] sm:w-[5.5rem]">
                    <Image
                      src={person.image}
                      alt={
                        person.kind === "product"
                          ? `${person.name}, ${t.team.role} and ${t.team.rakeshTitle} at E-talk`
                          : `${person.name}, ${t.team.role} at E-talk`
                      }
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 80px, 88px"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--brand-silver)]">
                    {person.name}
                  </h3>
                  <div className={`mt-1.5 ${oriaFont}`}>
                    <p className="text-sm text-[var(--brand-muted)]">{t.team.role}</p>
                    {person.kind === "product" ? (
                      <>
                        <p className="mt-1 text-sm font-medium text-[var(--brand-silver)]">
                          {t.team.rakeshTitle}
                        </p>
                        <p className="mt-0.5 text-xs tracking-wide text-[var(--brand-muted)]/75">
                          {t.team.rakeshTech}
                        </p>
                      </>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="etalk-separator px-4 sm:px-6" aria-hidden />

        <section
          id="faq"
          className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
          aria-labelledby="faq-heading"
        >
          <OdishaSectionDecor variant="faq" />
          <div className="relative z-10 etalk-container">
            <div className="etalk-measure mx-auto">
              <h2
                id="faq-heading"
                className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
              >
                {t.faq.heading}
              </h2>
              <p className={`mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                {t.faq.subhead}
              </p>
              <div className="mt-12">
                {t.faq.items.map((item) => (
                  <details
                    key={item.q}
                    className="etalk-faq-item group px-1 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className={`flex min-h-[3.25rem] cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-[var(--brand-silver)] transition-colors duration-300 group-hover:text-white ${oriaFont}`}>
                      <span>{item.q}</span>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-[var(--brand-gold-mid)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] transition-[transform,background-color,box-shadow] duration-300 ease-out group-open:rotate-180 group-open:bg-white/[0.07] motion-reduce:transition-none"
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
                    <p className={`border-t border-white/[0.05] pb-5 pt-4 text-sm leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
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
          className="relative overflow-hidden etalk-section-mist pb-24 pt-8 sm:pb-28 sm:pt-10 lg:pb-32"
          aria-labelledby="cta-heading"
        >
          <OdishaSectionDecor variant="cta" />
          <div className="relative z-10 etalk-container">
            <div className="etalk-cta-shell relative overflow-hidden px-6 py-14 text-center sm:px-14 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-50 motion-reduce:opacity-25"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,175,55,0.14), transparent 55%)",
                }}
              />
              <div className="etalk-measure relative mx-auto">
                <h2
                  id="cta-heading"
                  className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--brand-silver)] sm:text-3xl ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
                >
                  {t.cta.heading}
                </h2>
                <p className={`mt-4 text-base leading-relaxed text-[var(--brand-muted)] ${oriaFont}`}>
                  {t.cta.body}
                </p>
                <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center gap-4 text-center">
                  <a
                    href={mailtoWaitlist()}
                    className={`etalk-btn-gold inline-flex min-h-12 w-full items-center justify-center rounded-full px-8 text-base font-semibold sm:w-auto ${oriaFont}`}
                  >
                    {t.cta.submitBtn}
                  </a>
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

      <footer className="mt-auto border-t border-white/[0.06] py-10">
        <div className="etalk-container flex flex-col gap-8 text-sm text-[var(--brand-muted)]">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
            <p className={`text-center lg:text-left ${oriaFont}`}>{t.footer.copyright}</p>
            <div className="flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none lg:items-end">
              <p className={`text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-muted)] ${oriaFont}`}>
                {t.footer.follow}
              </p>
              <SocialLinks links={socialLinks} />
            </div>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/[0.06] pt-8 text-center lg:justify-between"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a
                href="#team"
                className={`rounded-md transition-colors duration-300 hover:text-[var(--brand-silver)] ${oriaFont}`}
              >
                {t.footer.team}
              </a>
              <a
                href="#faq"
                className={`rounded-md transition-colors duration-300 hover:text-[var(--brand-silver)] ${oriaFont}`}
              >
                {t.footer.faq}
              </a>
              <a
                href={mailtoWaitlist()}
                className={`rounded-md transition-colors duration-300 hover:text-[var(--brand-silver)] ${oriaFont}`}
              >
                {t.footer.waitlist}
              </a>
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
      </footer>
    </>
  );
}
