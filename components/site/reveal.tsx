"use client";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:24}} whileInView={reduced?undefined:{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.58,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
