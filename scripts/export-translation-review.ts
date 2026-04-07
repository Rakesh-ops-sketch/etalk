/**
 * Generates lib/i18n/translation-review.tsv for non-technical reviewers.
 * Run: npx tsx scripts/export-translation-review.ts
 */
import { writeFileSync } from "fs";
import { join } from "path";

import { translations } from "../lib/i18n/translations";

const SECTION_LABEL: Record<string, string> = {
  nav: "Navigation",
  hero: "Hero",
  trust: "Trust strip",
  approach: "Approach",
  features: "Features",
  how: "How it works",
  audience: "Audience",
  quote: "Quote",
  team: "Team",
  faq: "FAQ",
  cta: "Waitlist CTA",
  footer: "Footer",
};

function flattenStrings(
  obj: unknown,
  prefix: string,
  out: Map<string, string>
): void {
  if (obj === null || obj === undefined) return;
  if (typeof obj === "string") {
    out.set(prefix, obj);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      flattenStrings(item, `${prefix}.${i}`, out);
    });
    return;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const p = prefix ? `${prefix}.${k}` : k;
      flattenStrings(v, p, out);
    }
  }
}

function sectionForKey(key: string): string {
  const top = key.split(".")[0] ?? "";
  return SECTION_LABEL[top] ?? top;
}

function escapeCell(s: string): string {
  return s.replace(/\t/g, " ").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

const en = new Map<string, string>();
const or = new Map<string, string>();
flattenStrings(translations.en, "", en);
flattenStrings(translations.or, "", or);

const keys = [...new Set([...en.keys(), ...or.keys()])].sort((a, b) =>
  a.localeCompare(b, "en")
);

const header = ["key", "section", "english", "odia"].join("\t");
const rows = keys.map((key) => {
  const section = sectionForKey(key);
  const e = escapeCell(en.get(key) ?? "");
  const o = escapeCell(or.get(key) ?? "");
  return [key, section, e, o].join("\t");
});

const outPath = join(process.cwd(), "lib/i18n/translation-review.tsv");
const readmePath = join(process.cwd(), "lib/i18n/TRANSLATION_REVIEW_README.txt");
const bom = "\uFEFF";

writeFileSync(outPath, bom + header + "\n" + rows.join("\n") + "\n", "utf8");

const readme = `E-talk — translation review (for language reviewers)
================================================

WHAT YOU GET
  translation-review.tsv  — Tab-separated file: key, section, english, odia
  UTF-8 with BOM (opens correctly in Excel for Odia script).

HOW TO REVIEW
  1. Open translation-review.tsv in Google Sheets (File → Import) or Excel.
  2. Do NOT change the "key" column — developers use it to map rows back to code.
  3. Edit the "english" and/or "odia" columns where wording should improve.
  4. Keep straight quotes " as needed; avoid changing column order.
  5. Save as UTF-8 and return the file to the team.

AFTER REVIEW
  A developer copies approved text into lib/i18n/translations.ts (or re-runs
  a merge process). This file is generated from the app — see package.json script
  export-i18n-review.

REGENERATE THIS FILE (developers)
  npm run export-i18n-review
`;

writeFileSync(readmePath, readme, "utf8");
console.log(`Wrote ${outPath} (${keys.length} keys)`);
console.log(`Wrote ${readmePath}`);
