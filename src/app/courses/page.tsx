import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { courses } from "@/data/site";

export const metadata: Metadata = { title: "Courses & Training", description: "Professional security and strategy training programs from STRIDES Pakistan." };

export default function CoursesPage() {
  return <>
    <PageHero title="Courses & Training" description="Professional short courses, workshops and executive programs for defence, security, policy, academic and corporate communities." />
    <section className="section courses-section"><div className="shell"><Reveal><SectionHeading eyebrow="Professional development" title="Eight courses. One strategic learning journey." description="Modular programs can be delivered as focused workshops, certificate courses, executive cohorts or tailored institutional training." /></Reveal><div className="all-courses-grid">{courses.map((course,i)=><Reveal className="course-card" delay={(i%2)*70} key={course.title}><div className="course-number"><span>{course.number}</span><small>STRIDES course</small></div><div><h2>{course.title}</h2><p>{course.description}</p><div className="course-meta"><span>Professional</span><span>Flexible format</span></div></div><Icon name="arrow" size={21}/></Reveal>)}</div></div></section>
    <section className="section soft-section"><div className="shell"><Reveal><SectionHeading eyebrow="Flexible delivery" title="Built around your learning context" /></Reveal><div className="format-grid">{[["01","Short workshops","1–2 days for professionals and students."],["02","Certificate courses","4–6 weeks with assignments and presentations."],["03","Executive programs","Tailored training for organizations and institutions."],["04","Online sessions","Webinars, virtual classrooms and recorded modules."]].map(([n,t,d],i)=><Reveal className="format-card" delay={i*70} key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div><Reveal className="participants-panel"><div><Icon name="people" size={33}/><h3>Who should attend?</h3></div><p>Military and security professionals, government officials, corporate security managers, researchers, journalists, university students, think-tank analysts and professionals interested in defence and strategic studies.</p></Reveal></div></section>
    <CtaBand eyebrow="Training inquiry" title="Build a program around your needs." text="Ask about upcoming cohorts, sponsored places or a tailored course for your organization." button="Request course information" />
  </>;
}
