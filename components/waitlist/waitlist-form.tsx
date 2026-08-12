"use client";
import { useActionState, useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import { joinWaitlist, type WaitlistActionState } from "@/app/actions/waitlist";
import type { Locale, SiteContent } from "@/lib/content";

const initial:WaitlistActionState={status:"idle",message:""};
export function WaitlistForm({locale,copy,sourcePage}: {locale:Locale;copy:SiteContent["form"];sourcePage:string}){
  const [state,action,pending]=useActionState(joinWaitlist,initial); const started=useRef(false);
  useEffect(()=>{if(state.status==="success")track("waitlist_success",{locale,source:sourcePage})},[state.status,locale,sourcePage]);
  return <form className="waitlist-form" action={action} onFocus={()=>{if(!started.current){started.current=true;track("waitlist_form_start",{locale,source:sourcePage})}}}>
    <h3 className="display" style={{fontSize:"1.65rem",margin:"0 0 4px"}}>{copy.title}</h3><p style={{color:"var(--muted)",marginTop:0}}>{copy.body}</p>
    <div className="form-row"><div className="field"><label htmlFor={`name-${sourcePage}`}>{copy.name}</label><input id={`name-${sourcePage}`} name="name" autoComplete="name" required/><p className="field-error">{state.fieldErrors?.name?.[0]}</p></div><div className="field"><label htmlFor={`email-${sourcePage}`}>{copy.email}</label><input id={`email-${sourcePage}`} name="email" type="email" autoComplete="email" required/><p className="field-error">{state.fieldErrors?.email?.[0]}</p></div></div>
    <input type="hidden" name="locale" value={locale}/><input type="hidden" name="sourcePage" value={sourcePage}/><div className="hidden-field" aria-hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <label className="consent"><input type="checkbox" name="consent" required/><span>{copy.consent}</span></label>
    <button className="button button-primary" style={{width:"100%"}} disabled={pending}>{pending?copy.pending:copy.submit}</button>
    <p className={`form-message ${state.status}`} aria-live="polite">{state.message}</p>
  </form>
}
