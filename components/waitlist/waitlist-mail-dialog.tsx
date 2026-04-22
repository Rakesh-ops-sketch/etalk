"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useLang } from "@/lib/i18n/lang-context";
import { buildWaitlistMailto, siteContact } from "@/lib/site-config";

type WaitlistMailDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function WaitlistMailDialog({ open, onOpenChange }: WaitlistMailDialogProps) {
  const { t, lang } = useLang();
  const w = t.waitlistForm;
  const isOdia = lang === "or";
  const oria = isOdia ? "font-[family-name:var(--font-noto-oriya)]" : "";

  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const formId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!open) return;
    setName("");
    setEmail("");
    setPhone("");
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      if (!el.open) el.showModal();
      const id = window.requestAnimationFrame(() => {
        nameInputRef.current?.focus();
      });
      return () => window.cancelAnimationFrame(id);
    }
    if (el.open) el.close();
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onDialogClose = () => onOpenChange(false);
    el.addEventListener("close", onDialogClose);
    return () => el.removeEventListener("close", onDialogClose);
  }, [onOpenChange]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={`${formId}-title`}
      className="fixed left-1/2 top-1/2 z-[200] w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 border-0 p-0 text-left shadow-2xl outline-none ring-1 ring-[var(--hairline)] [background:var(--surface-elevated)] max-h-[min(90vh,40rem)] overflow-y-auto overscroll-contain [&::backdrop]:bg-[rgba(15,23,42,0.38)] [&::backdrop]:backdrop-blur-sm rounded-2xl"
    >
      <form
        id={formId}
        className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-7"
        onSubmit={(e) => {
          e.preventDefault();
          const url = buildWaitlistMailto({ name, email, phone });
          onOpenChange(false);
          queueMicrotask(() => {
            window.location.assign(url);
          });
        }}
      >
        <h2
          id={`${formId}-title`}
          className={`text-lg font-semibold text-[var(--brand-navy-deep)] ${!isOdia ? "font-sans" : ""} ${isOdia ? "font-[family-name:var(--font-noto-oriya)]" : ""}`}
        >
          {w.title}
        </h2>
        <p
          className={`text-sm leading-relaxed text-[var(--brand-muted)] ${oria}`}
        >
          {w.description.replace("{email}", siteContact.email)}
        </p>
        <div className="flex flex-col gap-3.5">
          <label
            className={`flex flex-col gap-1.5 text-sm text-[var(--brand-silver)] ${oria}`}
          >
            <span>
              {w.name}{" "}
              <span className="text-[var(--brand-muted)]">· {w.optional}</span>
            </span>
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder={w.namePlaceholder}
              className="min-h-11 w-full rounded-xl border border-[var(--hairline)] bg-white px-3.5 py-2.5 text-[var(--foreground)] outline-offset-2 placeholder:text-[var(--brand-muted)]/70 focus:border-[rgba(212,175,55,0.5)] focus:outline-2 focus:outline-offset-1 focus:outline-[var(--brand-gold-mid)]"
            />
          </label>
          <label
            className={`flex flex-col gap-1.5 text-sm text-[var(--brand-silver)] ${oria}`}
          >
            <span>
              {w.email}{" "}
              <span className="text-[var(--brand-muted)]">· {w.optional}</span>
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
              placeholder={w.emailPlaceholder}
              className="min-h-11 w-full rounded-xl border border-[var(--hairline)] bg-white px-3.5 py-2.5 text-[var(--foreground)] outline-offset-2 placeholder:text-[var(--brand-muted)]/70 focus:border-[rgba(212,175,55,0.5)] focus:outline-2 focus:outline-offset-1 focus:outline-[var(--brand-gold-mid)]"
            />
          </label>
          <label
            className={`flex flex-col gap-1.5 text-sm text-[var(--brand-silver)] ${oria}`}
          >
            <span>
              {w.phone}{" "}
              <span className="text-[var(--brand-muted)]">· {w.optional}</span>
            </span>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              inputMode="tel"
              placeholder={w.phonePlaceholder}
              className="min-h-11 w-full rounded-xl border border-[var(--hairline)] bg-white px-3.5 py-2.5 text-[var(--foreground)] outline-offset-2 placeholder:text-[var(--brand-muted)]/70 focus:border-[rgba(212,175,55,0.5)] focus:outline-2 focus:outline-offset-1 focus:outline-[var(--brand-gold-mid)]"
            />
          </label>
        </div>
        <div
          className={`mt-1 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end sm:gap-3 ${oria}`}
        >
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--hairline)] bg-white px-5 text-sm font-medium text-[var(--brand-silver)] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-[rgba(212,175,55,0.35)] hover:bg-[#fffefb] hover:text-[var(--brand-navy-deep)]"
          >
            {w.cancel}
          </button>
          <button
            type="submit"
            className="etalk-btn-gold inline-flex min-h-11 min-w-[10rem] items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            {w.submit}
          </button>
        </div>
      </form>
    </dialog>
  );
}
