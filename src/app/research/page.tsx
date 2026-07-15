import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { researchAreas } from "@/data/site";

export const metadata: Metadata = { title: "Research", description: "Explore STRIDES Pakistan research in defence, AI, cyber, emerging threats, geopolitics and maritime security." };

export default function ResearchPage() {
  return <>
    <PageHero title="Research Areas" description="Six focused domains covering defence strategy, emerging threats, AI, cyber, maritime security, geopolitics and professional development." />
    <section className="section research-page-section"><div className="shell research-page-grid">{researchAreas.map((area,index) => <Reveal className="research-domain" delay={(index%2)*90} key={area.title}><div className="domain-side"><span>{area.number}</span><Icon name={area.icon} size={31}/></div><div><h2>{area.title}</h2><p>{area.description}</p><div className="domain-tags">{index === 0 ? <><span>Deterrence</span><span>Strategy</span><span>Crisis</span></> : index === 1 ? <><span>Hybrid</span><span>Grey zone</span><span>Drones</span></> : index === 2 ? <><span>AI</span><span>Cyber</span><span>Information</span></> : index === 3 ? <><span>Maritime</span><span>Borders</span><span>Ports</span></> : index === 4 ? <><span>South Asia</span><span>Middle East</span><span>China</span></> : <><span>Education</span><span>Leadership</span><span>Policy</span></>}</div></div></Reveal>)}</div></section>
    <section className="section dark-section"><div className="shell"><Reveal><SectionHeading light eyebrow="Research outputs" title="Insight designed for use" description="Our research products translate complex security questions into accessible analysis for decision-makers, professionals and informed publics." /></Reveal><div className="outputs-grid">{[["Policy Briefs","Short, decision-focused papers presenting a problem, analysis, options and recommendations."],["Strategic Reports","Longer studies on national security, future warfare, regional risks and emerging technologies."],["Threat Assessments","Structured assessments of cyber, AI, drone, maritime, border and hybrid security challenges."],["Expert Commentaries","Readable analysis for media, professionals, students and policy communities."]].map(([title,text],i)=><Reveal className="output-card" delay={i*70} key={title}><span>{String(i+1).padStart(2,"0")}</span><Icon name={i===0?"document":i===1?"chart":i===2?"shield":"people"} size={30}/><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <CtaBand eyebrow="Research collaboration" title="Bring a strategic question to the table." text="Partner with STRIDES Pakistan on open-source studies, policy briefs, threat assessments and expert dialogues." />
  </>;
}
