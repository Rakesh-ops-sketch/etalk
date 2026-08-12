"use client";
import { useState } from "react";
import Link from "next/link";
import type { Locale, SiteContent } from "@/lib/content";
import { Menu, X } from "lucide-react";

export function MobileMenu({ locale, nav }: { locale: Locale; nav: SiteContent["nav"] }) {
  const [open,setOpen]=useState(false); const prefix=`/${locale}`;
  return <div className="mobile-nav"><button className="locale-link" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?"Close navigation":"Open navigation"}>{open?<X/>:<Menu/>}</button>{open&&<nav className="mobile-menu-panel">{[[nav.product,"product"],[nav.learners,"learners"],[nav.about,"about"],[nav.help,"help"]].map(([a,b],i)=><Link onClick={()=>setOpen(false)} key={b} href={`${prefix}/${b}`}><span>0{i+1}</span>{a}</Link>)}<Link className="button button-primary" href={`${prefix}#waitlist`}>{nav.cta}</Link></nav>}</div>;
}
