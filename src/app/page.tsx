import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { courses, publications, researchAreas } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid-lines" />
        <div className="hero-glow" />
        <div className="shell home-hero-inner">
          <div className="home-hero-copy">
            <Eyebrow light>Strategic Research Institute</Eyebrow>
            <h1>Ideas that shape <em>security</em> in a changing world.</h1>
            <p className="hero-lead">Independent research, professional training and policy dialogue focused on defence strategy, emerging threats and future warfare.</p>
            <div className="hero-actions">
              <Link href="/research" className="button button-primary">Explore our research <Icon name="arrow" size={18} /></Link>
              <Link href="/courses" className="button button-ghost">View training programs</Link>
            </div>
            <div className="hero-trust">
              <span>Independent</span><i /><span>Evidence-led</span><i /><span>Future-focused</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="hero-logo-card">
              <span className="card-index">ISLAMABAD · PAKISTAN</span>
              <Image src="/brand/strides-lockup.jpg" alt="STRIDES Pakistan — Strategic Research Institute for Defence, Emerging Threats and Security" width={1025} height={559} priority />
              <div className="signal-line"><span /><span /><span /><span /><span /></div>
            </div>
            <div className="floating-note note-one"><span>06</span>Research domains</div>
            <div className="floating-note note-two"><span>08</span>Professional courses</div>
          </div>
        </div>
        <div className="shell intelligence-strip">
          <span>Strategic priorities</span>
          <div><i>01</i> Defence strategy</div>
          <div><i>02</i> Emerging threats</div>
          <div><i>03</i> AI & cyber</div>
          <div><i>04</i> Regional security</div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell intro-grid">
          <Reveal className="intro-heading">
            <Eyebrow>About STRIDES</Eyebrow>
            <h2>Building strategic capacity for a complex security environment.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <p>STRIDES Pakistan is a credible, research-oriented and non-political platform for strategic studies, defence analysis, emerging security research, policy dialogue and professional training.</p>
            <p>We connect experienced military professionals, academics, researchers, policymakers, industry specialists and young scholars to examine the challenges affecting Pakistan, the region and the wider international system.</p>
            <Link href="/about" className="text-link">Discover our institute <Icon name="arrow" size={17} /></Link>
          </Reveal>
        </div>
        <div className="shell pillars-grid">
          {[
            ["01", "Strategic Research", "Policy briefs, analytical reports and future threat assessments.", "document"],
            ["02", "Professional Training", "Short courses, executive workshops and simulations.", "academic"],
            ["03", "Policy Dialogue", "Roundtables, expert panels and strategic conversations.", "people"],
            ["04", "National Resilience", "Capacity-building for crisis and threat preparedness.", "shield"],
          ].map(([number, title, text, icon], index) => (
            <Reveal className="pillar" delay={index * 70} key={title}>
              <span className="pillar-number">{number}</span><Icon name={icon} size={30} /><h3>{title}</h3><p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section research-section">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="Research agenda" title="Focused on the forces reshaping security" description="Six connected domains unite strategic depth with operational understanding and practical policy relevance." /></Reveal>
          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <Reveal className="research-card" delay={(index % 3) * 80} key={area.title}>
                <div className="card-top"><span>{area.number}</span><div className="icon-box"><Icon name={area.icon} size={27} /></div></div>
                <h3>{area.title}</h3><p>{area.description}</p>
                <Link href="/research" aria-label={`Learn about ${area.title}`}><Icon name="arrow" size={18} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <Reveal><SectionHeading light eyebrow="Executive education" title="Training for the decisions that matter" description="Practical courses for defence professionals, policymakers, researchers, analysts, students and institutional teams." /></Reveal>
          <div className="course-preview-grid">
            {courses.slice(0, 4).map((course, index) => (
              <Reveal className="course-preview" delay={index * 70} key={course.title}>
                <span>Course {course.number}</span><h3>{course.title}</h3><p>{course.description}</p><div className="course-line" />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-action"><Link href="/courses" className="button button-outline-light">View all courses <Icon name="arrow" size={18} /></Link></Reveal>
        </div>
      </section>

      <section className="section publication-section">
        <div className="shell">
          <Reveal><SectionHeading eyebrow="Publications" title="Research, insight and policy analysis" description="A developing library of decision-focused briefs, strategic reports, research papers and expert commentary." /></Reveal>
          <div className="publication-layout">
            <Reveal className="featured-publication">
              <div className="featured-cover"><span>Flagship strategic report</span><Icon name="document" size={52} /><small>STRIDES / 01</small></div>
              <div className="featured-copy"><span>Forthcoming report</span><h3>Pakistan’s Emerging Security Environment: Strategic Challenges and Policy Options</h3><p>A flagship study examining hybrid threats, border defence, cyber risk, AI-enabled conflict, maritime security and regional strategic stability.</p><Link href="/publications" className="text-link">View publications <Icon name="arrow" size={17} /></Link></div>
            </Reveal>
            <div className="publication-list">
              {publications.map((publication, index) => (
                <Reveal className="publication-row" delay={index * 60} key={publication.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span><div><small>{publication.type}</small><h3>{publication.title}</h3></div><Icon name="arrow" size={19} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand eyebrow="International cooperation" title="Build responsible security knowledge with us." text="We welcome transparent partnerships with universities, think tanks, international NGOs, donor agencies and research networks." button="Explore cooperation" href="/cooperation" />
    </>
  );
}
