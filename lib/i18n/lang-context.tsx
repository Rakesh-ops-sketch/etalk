"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Lang, translations } from "./translations";

type AnyTranslations = (typeof translations)[Lang];

interface LangContextValue {
  lang: Lang;
  t: AnyTranslations;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang === "en" ? "en" : "or";
    root.classList.toggle("lang-en", lang === "en");
    root.classList.toggle("lang-or", lang === "or");
  }, [lang]);

  const toggle = useCallback(
    () => setLang((prev) => (prev === "en" ? "or" : "en")),
    []
  );

  const value = useMemo(
    () => ({ lang, t: translations[lang], toggle }),
    [lang, toggle]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
