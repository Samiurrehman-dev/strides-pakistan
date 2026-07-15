import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { publications } from "@/data/site";

export const metadata: Metadata = { title: "Publications", description: "Policy briefs, strategic reports, security alerts and research papers by STRIDES Pakistan." };

const categories = [["Policy Briefs","Short, practical, decision-focused papers with recommendations."],["Strategic Reports","Long-form studies on defence, security and emerging technologies."],["Security Alerts","Brief updates on important developments and threat trends."],["Opinion Articles","Readable commentaries by fellows, experts and young scholars."],["Conference Papers","Proceedings, seminar papers, roundtable summaries and event reports."],["Books & Monographs","Major publications, course readers and research monographs."]];

export default function PublicationsPage() {
  return <>
    <PageHero title="Publications" description="Policy briefs, strategic reports, security alerts, research papers, opinion articles and conference proceedings." />
    <section className="section publication-page"><div className="shell"><Reveal className="report-feature"><div className="report-cover"><small>STRATEGIC REPORT · 01</small><Icon name="globe" size={68}/><span>STRIDES<br/>PAKISTAN</span></div><div><span className="status-tag">Flagship report · Forthcoming</span><h2>Pakistan’s Emerging Security Environment: Strategic Challenges and Policy Options</h2><p>This proposed flagship study examines hybrid threats, border defence, cyber risk, AI-enabled conflict, maritime security, drone threats and regional strategic stability.</p><button className="text-link" type="button">Publication notice coming soon <Icon name="arrow" size={17}/></button></div></Reveal><div className="issue-list">{publications.map((item,i)=><Reveal className="issue-row" delay={i*60} key={item.title}><span>{String(i+1).padStart(2,"0")}</span><div><small>{item.type}</small><h3>{item.title}</h3></div><span className="coming-soon">In development</span></Reveal>)}</div></div></section>
    <section className="section soft-section"><div className="shell"><Reveal><SectionHeading eyebrow="Publication library" title="A credible home for strategic knowledge" description="A clear library structure will make research easier to discover, understand and use." /></Reveal><div className="category-grid">{categories.map(([title,text],i)=><Reveal className="category-card" delay={(i%3)*70} key={title}><Icon name={i===0?"document":i===1?"chart":i===2?"bolt":i===3?"people":i===4?"academic":"globe"} size={29}/><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <CtaBand eyebrow="Contribute" title="Add your expertise to the conversation." text="Researchers, practitioners and young scholars are invited to propose evidence-led contributions aligned with our research agenda." button="Submit an article inquiry" />
  </>;
}
