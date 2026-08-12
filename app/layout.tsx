import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Baloo_Thambi_2, Noto_Sans_Oriya, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/site/smooth-scroll";

const baloo = Baloo_Thambi_2({ variable: "--font-baloo", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
const odia = Noto_Sans_Oriya({ variable: "--font-odia", subsets: ["oriya"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://e-talk.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "E-Talk — Speak English with confidence", template: "%s | E-Talk" },
  description: "Odia-friendly, AI-powered English practice for learners across Odisha.",
  icons: { icon: "/brand/etalk-logo.png" },
  openGraph: { type: "website", siteName: "E-Talk", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${baloo.variable} ${jakarta.variable} ${odia.variable}`}>
      <body><SmoothScroll/>{children}<Analytics /></body>
    </html>
  );
}
