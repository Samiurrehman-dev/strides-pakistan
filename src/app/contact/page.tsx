import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Contact & Collaboration", description: "Contact STRIDES Pakistan for research, training, partnership and publication inquiries." };

export default function ContactPage() {
  return <>
    <PageHero title="Contact & Collaboration" description="Invite research partnerships, training requests, institutional linkages, expert contributions and course inquiries." />
    <section className="section contact-section"><div className="shell contact-grid"><Reveal className="contact-details"><span className="contact-label">STRIDES Pakistan</span><h2>Let’s advance strategic thinking together.</h2><p>Whether you represent an institution or are reaching out as an individual expert, researcher or learner, we welcome a thoughtful conversation.</p><div className="contact-methods"><a href="mailto:info@stridespakistan.org"><span><Icon name="mail" size={21}/></span><div><small>Email</small>info@stridespakistan.org</div></a><div><span><Icon name="pin" size={21}/></span><div><small>Location</small>Islamabad, Pakistan</div></div><div><span><Icon name="globe" size={21}/></span><div><small>Website</small>www.stridespakistan.org</div></div></div><div className="response-note"><span>Inquiry areas</span><p>Research · Training · Publications · Partnerships · Donor cooperation · Media</p></div></Reveal><Reveal className="form-panel" delay={100}><div className="form-heading"><span>Start a conversation</span><h2>Tell us about your inquiry</h2><p>Complete the details below and your email application will prepare the message.</p></div><ContactForm /></Reveal></div></section>
  </>;
}
