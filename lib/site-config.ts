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
    "admin@e-talk.in",
} as const;

/**
 * `URLSearchParams` encodes spaces as `+`, which some mail clients show literally in
 * subject/body. `encodeURIComponent` uses `%20` and matches typical mailto handling.
 */
function mailtoWith(subject: string, body: string): string {
  return `mailto:${siteContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type WaitlistMailFields = {
  name: string;
  email: string;
  phone: string;
};

/** Waitlist CTA: opens the user's mail app with a filled template (all fields optional). */
export function buildWaitlistMailto(fields: WaitlistMailFields): string {
  const name = fields.name.trim();
  const email = fields.email.trim();
  const phone = fields.phone.trim();
  const hasAny = Boolean(name || email || phone);

  const subject = hasAny
    ? name
      ? `E-talk — Waitlist / early access (${name})`
      : "E-talk — Waitlist / early access"
    : "E-talk — Pre-launch interest (waitlist)";

  const body = hasAny
    ? `Hi E-talk team,

I'm interested in joining the waitlist and hearing about early access for E-talk.

${name ? `Name: ${name}\n` : ""}${email ? `Email: ${email}\n` : ""}${phone ? `Phone: ${phone}\n` : ""}
Thanks,`
    : `Hi E-talk team,

I'm interested in E-talk pre-launch updates and the waitlist for early access.

Thanks,`;

  return `mailto:${siteContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

export type SocialPlatform = "x" | "instagram" | "linkedin" | "facebook";

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
    href: "https://x.com/EtalkSpeak",
    label: "E-talk on X",
  },
  {
    platform: "instagram",
    href: "https://www.instagram.com/etalk.speak/",
    label: "E-talk on Instagram",
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/e-talk-speak-6a178a403/",
    label: "E-talk on LinkedIn",
  },
  {
    platform: "facebook",
    href: "https://www.facebook.com/profile.php?id=61570642372165",
    label: "E-talk on Facebook",
  },
];
