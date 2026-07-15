"use client";

import { FormEvent } from "react";
import { Icon } from "./icon";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("purpose") || "STRIDES Pakistan inquiry"));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:info@stridespakistan.org?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label><span>Full name</span><input name="name" type="text" placeholder="Your name" required /></label>
        <label><span>Email address</span><input name="email" type="email" placeholder="you@organization.org" required /></label>
      </div>
      <label>
        <span>Purpose of inquiry</span>
        <select name="purpose" defaultValue="" required>
          <option value="" disabled>Select an inquiry type</option>
          <option>Research Collaboration</option>
          <option>Training Program</option>
          <option>Publication Contribution</option>
          <option>Institutional Partnership</option>
          <option>Donor / NGO Cooperation</option>
          <option>International Cooperation</option>
          <option>Media / Speaking Request</option>
        </select>
      </label>
      <label><span>Your message</span><textarea name="message" placeholder="Tell us how you would like to work with STRIDES Pakistan..." required /></label>
      <button className="button button-primary" type="submit">Prepare inquiry email <Icon name="arrow" size={18} /></button>
      <small>Submitting opens your email application. No information is stored on this website.</small>
    </form>
  );
}
