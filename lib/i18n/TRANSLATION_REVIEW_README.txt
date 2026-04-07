E-talk — translation review (for language reviewers)
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
