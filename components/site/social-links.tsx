import type { SocialPlatform } from "@/lib/site-config";
import { socialLinks } from "@/lib/site-config";

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "x") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.51 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" /></svg>;
  if (platform === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.4" cy="6.7" r="1"/></svg>;
  if (platform === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.3H3.2V21h3.3V8.3ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM21 13.72c0-3.83-2.04-5.61-4.77-5.61-2.2 0-3.18 1.21-3.73 2.06V8.3H9.2V21h3.3v-6.29c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.28Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.02 10.13 11.93v-8.43H7.08v-3.5h3.05V9.42c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.5h-2.8V24C19.61 23.09 24 18.1 24 12.07Z"/></svg>;
}

export function SocialLinks() {
  return <div className="footer-socials" aria-label="E-Talk social media">{socialLinks.map((link) => <a key={link.platform} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label}><SocialIcon platform={link.platform}/></a>)}</div>;
}
