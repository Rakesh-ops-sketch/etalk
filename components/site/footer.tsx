import Link from "next/link";
import type { Locale, SiteContent } from "@/lib/content";
import { SocialLinks } from "./social-links";

export function Footer({ locale, nav }: { locale: Locale; nav: SiteContent["nav"] }) {
  const prefix = `/${locale}`;
  return <footer className="site-footer"><div className="shell"><div className="footer-grid">
    <div><div className="brand display">E-Talk</div><p className="footer-copy">{locale === "en" ? "English confidence, rooted in Odisha. A pre-launch Android learning experience." : "ଓଡ଼ିଶାରୁ ଇଂରାଜୀ ଆତ୍ମବିଶ୍ୱାସ। ଏକ ପ୍ରି-ଲଞ୍ଚ Android ଶିକ୍ଷା ଅନୁଭୂତି।"}</p><SocialLinks /></div>
    <div className="footer-links"><strong>{locale === "en" ? "Explore" : "ଦେଖନ୍ତୁ"}</strong><Link href={`${prefix}/product`}>{nav.product}</Link><Link href={`${prefix}/learners`}>{nav.learners}</Link><Link href={`${prefix}/about`}>{nav.about}</Link></div>
    <div className="footer-links"><strong>{locale === "en" ? "Support" : "ସହାୟତା"}</strong><Link href={`${prefix}/help`}>{nav.help}</Link><a href="mailto:admin@e-talk.in">admin@e-talk.in</a></div>
    <div className="footer-links"><strong>{locale === "en" ? "Legal" : "ଆଇନଗତ"}</strong><Link href={`${prefix}/privacy`}>Privacy</Link><Link href={`${prefix}/terms`}>Terms</Link></div>
  </div><div className="footer-bottom">© {new Date().getFullYear()} E-Talk. {locale === "en" ? "Made in Odisha with care." : "ଓଡ଼ିଶାରେ ଯତ୍ନରେ ନିର୍ମିତ।"}</div></div></footer>;
}
