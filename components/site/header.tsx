import Image from "next/image";
import Link from "next/link";
import type { Locale, PageKey, SiteContent } from "@/lib/content";
import { pageSlugs } from "@/lib/content";
import { MobileMenu } from "./mobile-menu";

export function Header({ locale, page, nav }: { locale: Locale; page: PageKey; nav: SiteContent["nav"] }) {
  const other = locale === "en" ? "or" : "en";
  const prefix = `/${locale}`;
  const translatedPath = `/${other}${pageSlugs[page] ? `/${pageSlugs[page]}` : ""}`;
  const links = [[nav.product,"product"],[nav.learners,"learners"],[nav.about,"about"],[nav.help,"help"]] as const;
  return <header className="site-header"><div className="shell header-inner">
    <Link href={prefix} className="brand" aria-label="E-Talk home"><Image src="/brand/etalk-logo.png" width={52} height={52} alt="" priority/><span className="display gradient-text">E-Talk</span></Link>
    <nav className="desktop-nav" aria-label="Primary">{links.map(([label,slug])=><Link key={slug} href={`${prefix}/${slug}`}>{label}</Link>)}</nav>
    <div className="header-actions"><Link className="locale-link" href={translatedPath} aria-label={locale === "en" ? "ଓଡ଼ିଆରେ ପଢ଼ନ୍ତୁ" : "Read in English"}>{locale === "en" ? "ଓ" : "EN"}</Link><Link className="button button-primary" href={`${prefix}#waitlist`}>{nav.cta}</Link><MobileMenu locale={locale} nav={nav}/></div>
  </div></header>;
}
