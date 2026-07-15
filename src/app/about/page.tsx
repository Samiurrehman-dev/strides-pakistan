import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand, Eyebrow, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "Learn about the vision, mission and professional principles of STRIDES Pakistan." };

const values = [
  ["Neutral and Non-Political", "Focused on research, education, policy options and strategic understanding rather than political advocacy.", "compass"],
  ["Evidence-Based Analysis", "Using credible sources, comparative analysis, expert inputs and structured research methodology.", "chart"],
  ["Collaboration", "Encouraging linkages with universities, think tanks, defence institutions, industry and international experts.", "people"],
  ["Policy Relevance", "Producing work that is practical, readable and useful for decision-makers and professional communities.", "document"],
  ["Strategic Foresight", "Identifying future threats, emerging technologies and security trends before they become crises.", "globe"],
  ["National Responsibility", "Supporting informed debate, resilience, security education and national capacity-building.", "shield"],
];

export default function AboutPage() {
  return <>
    <PageHero title="About STRIDES Pakistan" description="A credible Pakistani platform for strategic research, defence analysis, policy dialogue and professional training in emerging security domains." />
    <section className="section">
      <div className="shell profile-grid">
        <Reveal className="profile-copy"><Eyebrow>Institutional profile</Eyebrow><h2>Research that anticipates. Dialogue that connects. Training that prepares.</h2><p>STRIDES Pakistan is envisioned as a professional, independent and non-political strategic studies institute. Its purpose is to support serious research, policy dialogue, professional education, national security awareness and future-focused analysis.</p><p>The institute is particularly relevant for Pakistan’s evolving security environment, where conventional defence concerns now intersect with artificial intelligence, cyber operations, drones, electronic warfare, hybrid threats, information warfare, maritime risks and regional geopolitical competition.</p></Reveal>
        <Reveal className="vision-card" delay={100}><span className="vision-index">01 / 02</span><div><Icon name="compass" size={30} /><h3>Vision</h3><p>To become a leading Pakistani strategic research and training institute contributing to national, regional and international understanding of defence, security and emerging threats.</p></div><div><Icon name="target" size={30} /><h3>Mission</h3><p>To advance defence and security knowledge through research, policy analysis, professional training, strategic dialogue and collaboration with academic, military, government and international institutions.</p></div></Reveal>
      </div>
    </section>
    <section className="section soft-section"><div className="shell"><Reveal><SectionHeading eyebrow="Our values" title="Professional principles that guide our work" description="Responsible, evidence-based and internationally credible standards sit behind every research and training initiative." /></Reveal><div className="values-grid">{values.map(([title, text, icon], index) => <Reveal className="value-card" delay={(index % 3) * 70} key={title}><span>{String(index + 1).padStart(2,"0")}</span><Icon name={icon} size={28} /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="section"><div className="shell cooperation-intro"><Reveal><Eyebrow>International outlook</Eyebrow><h2>Open to global academic, NGO and donor collaboration.</h2><p>STRIDES Pakistan can collaborate with international universities, think tanks, foundations, donating NGOs and development partners for open-source research, training, public dialogue and resilience-oriented security education.</p><Link href="/cooperation" className="button button-primary">View cooperation options <Icon name="arrow" size={18}/></Link></Reveal><Reveal className="principles-panel" delay={100}><h3>Cooperation principles</h3>{["Independent and non-partisan", "Open-source and educational", "Transparent donor reporting", "No classified or operational activity"].map(item => <div key={item}><span><Icon name="check" size={16}/></span>{item}</div>)}</Reveal></div></section>
    <CtaBand eyebrow="Work with STRIDES" title="Contribute to informed strategic thinking." text="Connect with our institute for research partnerships, expert contributions, training and institutional collaboration." />
  </>;
}
