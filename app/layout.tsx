import type { Metadata } from "next";
import {
  Baloo_Thambi_2,
  Dancing_Script,
  Geist_Mono,
  Noto_Sans_Oriya,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { LangProvider } from "@/lib/i18n/lang-context";
import "./globals.css";

/** Rounded display sans for English UI (Latin). */
const balooThambi = Baloo_Thambi_2({
  variable: "--font-baloo-thambi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Humanist sans for Odia UI and fallbacks. */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoOriya = Noto_Sans_Oriya({
  variable: "--font-noto-oriya",
  subsets: ["oriya"],
  weight: ["400", "600", "700"],
  display: "swap",
});

/** Cursive accent — speech bubbles & short marketing callouts (Latin). */
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://etalk.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "E-Talk — Learn & speak English fluently | Odia-friendly AI courses",
    template: "%s | E-Talk",
  },
  description:
    "E-Talk helps students and professionals learn English with Odia-friendly, AI-driven lessons, live chat, and practice designed for learners from Odisha and beyond.",
  keywords: [
    "English learning",
    "Odia",
    "Odisha",
    "AI English course",
    "speak English",
    "E-Talk",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "E-Talk",
    title: "E-Talk — English fluency, rooted in Odisha",
    description:
      "Odia-friendly AI courses, live chat, and guided practice to help you learn and speak English with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Talk — Learn English with AI & live support",
    description:
      "Built for Odisha first: Odia-friendly paths, AI-designed courses, and real-time help.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "E-Talk",
      description:
        "English learning platform with Odia-friendly AI courses and live chat, originating from Odisha.",
      url: siteUrl,
      areaServed: {
        "@type": "Place",
        name: "Odisha, India",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "E-Talk",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: ["en", "or"],
      description:
        "Help students and professionals learn and speak English fluently with AI-driven courses and live chat.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${balooThambi.variable} ${plusJakarta.variable} ${geistMono.variable} ${notoOriya.variable} ${dancingScript.variable} lang-en h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-background font-sans text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider>
          <div className="flex min-h-dvh flex-col">{children}</div>
        </LangProvider>
      </body>
    </html>
  );
}
