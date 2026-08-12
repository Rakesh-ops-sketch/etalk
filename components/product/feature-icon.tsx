import { AudioLines, BrainCircuit, ChartNoAxesCombined, Languages } from "lucide-react";
const icons=[AudioLines,BrainCircuit,ChartNoAxesCombined,Languages];
export function FeatureIcon({index}:{index:number}){const Icon=icons[index%icons.length];return <Icon aria-hidden strokeWidth={1.65}/>}
