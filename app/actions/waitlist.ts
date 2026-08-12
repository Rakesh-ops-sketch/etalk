"use server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema=z.object({name:z.string().trim().min(2).max(80),email:z.string().trim().email().max(200),consent:z.literal("on"),locale:z.enum(["en","or"]),sourcePage:z.string().max(120),website:z.string().max(0)});
export type WaitlistActionState={status:"idle"|"success"|"error";message:string;fieldErrors?:Record<string,string[]>};

function escapeHtml(value:string){return value.replace(/[&<>'"]/g,character=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[character]??character);}

export async function joinWaitlist(_:WaitlistActionState,formData:FormData):Promise<WaitlistActionState>{
  const parsed=schema.safeParse(Object.fromEntries(formData));
  if(!parsed.success)return{status:"error",message:"Please check the highlighted fields.",fieldErrors:parsed.error.flatten().fieldErrors};
  const {name,email,locale,sourcePage}=parsed.data;
  const host=process.env.SMTP_HOST;
  const user=process.env.SMTP_USER;
  const pass=process.env.SMTP_PASS;
  if(!host||!user||!pass)return{status:"error",message:locale==="or"?"ଇମେଲ୍ ସେବା ଏଯାଏଁ ସେଟ୍ ହୋଇନାହିଁ। admin@e-talk.in କୁ ଲେଖନ୍ତୁ।":"Email service is not configured yet. Please write to admin@e-talk.in."};
  const port=Number(process.env.SMTP_PORT??587);
  const transporter=nodemailer.createTransport({host,port,secure:port===465,auth:{user,pass}});
  const from=process.env.SMTP_FROM_EMAIL??`E-Talk <${user}>`;
  const team=process.env.WAITLIST_TO_EMAIL??"admin@e-talk.in";
  try{
    await Promise.all([
      transporter.sendMail({from,to:team,replyTo:email,subject:`E-Talk waitlist — ${name}`,text:`Name: ${name}\nEmail: ${email}\nLocale: ${locale}\nSource: ${sourcePage}`}),
      transporter.sendMail({from,to:email,subject:locale==="or"?"E-Talk ୱେଟଲିଷ୍ଟରେ ସ୍ୱାଗତ":"Welcome to the E-Talk waitlist",html:`<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#14213d"><h1 style="color:#165dff">Welcome to E-Talk, ${escapeHtml(name)}!</h1><p>${locale==="or"?"ଆପଣ ୱେଟଲିଷ୍ଟରେ ଅଛନ୍ତି। ଆମେ ଆର୍ଲି ଆକ୍ସେସ୍ ଖବର ସହ ଯୋଗାଯୋଗ କରିବୁ।":"You’re on the waitlist. We’ll be in touch with early-access news as E-Talk gets ready for launch."}</p><p><a href="${process.env.NEXT_PUBLIC_SITE_URL??"https://e-talk.in"}/${locale}/privacy">Privacy</a></p></div>`})
    ]);
  }catch(error){
    console.error("Waitlist email failed",error);
    return{status:"error",message:locale==="or"?"କିଛି ଭୁଲ ହେଲା। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।":"Something went wrong. Please try again."};
  }
  return{status:"success",message:locale==="or"?"ଆପଣ ତାଲିକାରେ ଅଛନ୍ତି! ଇନବକ୍ସ ଦେଖନ୍ତୁ।":"You’re on the list! Check your inbox for confirmation."};
}
