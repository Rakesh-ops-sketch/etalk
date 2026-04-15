/**
 * Contact email and social profile URLs.
 * Replace placeholders before launch. Optionally set NEXT_PUBLIC_CONTACT_EMAIL in `.env.local`.
 */

/** Public launch instant (epoch ms). Override with `NEXT_PUBLIC_LAUNCH_AT_MS` in `.env.local`. */
function resolveLaunchAtMs(): number {
  const raw =
    typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_LAUNCH_AT_MS?.trim()
      : undefined;
  if (raw) {
    const n = Number(raw);
    if (Number.isFinite(n)) return n;
  }
  // Default: ~3 months from prelaunch (Apr 2026) — 7 July 2026, 00:00 IST
  return Date.UTC(2026, 6, 6, 18, 30, 0);
}

export const LAUNCH_AT_MS = resolveLaunchAtMs();

export const siteContact = {
  /** Inbox for waitlist, early access, and general questions */
  email:
    (typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()) ||
    "etalk.contact.placeholder@gmail.com",
} as const;

function mailtoWith(
  subject: string,
  body: string
): string {
  const q = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${siteContact.email}?${q.toString()}`;
}

/** Opens the user's mail app — pre-filled for waitlist / early access */
export function mailtoWaitlist(): string {
  return mailtoWith(
    "E-talk — Waitlist / early access",
    "Hi E-talk team,\n\nI'd like to join the waitlist or hear about early access.\n\nThanks,\n"
  );
}

/** Opens the user's mail app — general contact */
export function mailtoContact(): string {
  return mailtoWith(
    "E-talk — Contact",
    "Hi E-talk team,\n\n"
  );
}

/** Plain mailto (no subject) */
export function mailtoInbox(): string {
  return `mailto:${siteContact.email}`;
}

/* -------------------------------------------------------------------------- */
/* Social — replace href values with your real profiles */

export type SocialPlatform =
  | "x"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "github"
  | "discord";

export type SocialLinkConfig = {
  platform: SocialPlatform;
  /** Full profile URL */
  href: string;
  /** Screen reader label, e.g. "E-talk on X" */
  label: string;
};

export const socialLinks: SocialLinkConfig[] = [
  {
    platform: "x",
    href: "https://x.com/etalk_app_placeholder",
    label: "E-talk on X",
  },
  {
    platform: "instagram",
    href: "https://www.instagram.com/etalk.speak/",
    label: "E-talk on Instagram",
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/company/etalk-placeholder",
    label: "E-talk on LinkedIn",
  },
  {
    platform: "youtube",
    href: "https://www.youtube.com/@etalk_placeholder",
    label: "E-talk on YouTube",
  },
  {
    platform: "facebook",
    href: "https://www.facebook.com/profile.php?id=61570642372165",
    label: "E-talk on Facebook",
  },
  {
    platform: "github",
    href: "https://github.com/etalk-placeholder",
    label: "E-talk on GitHub",
  },
  {
    platform: "discord",
    href: "https://discord.gg/placeholder-invite-code",
    label: "E-talk on Discord",
  },
];
