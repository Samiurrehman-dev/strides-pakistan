import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-rule" />
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link href="/" className="footer-brand">
            <Image src="/brand/strides-mark.jpg" alt="STRIDES Pakistan shield" width={365} height={500} />
            <span><strong>STRIDES</strong><small>Pakistan</small></span>
          </Link>
          <p>Strategic Research Institute for Defence, Emerging Threats and Security.</p>
          <a className="footer-email" href="mailto:info@stridespakistan.org"><Icon name="mail" size={17} /> info@stridespakistan.org</a>
        </div>
        <div>
          <h3>Institute</h3>
          <Link href="/about">About STRIDES</Link>
          <Link href="/research">Research areas</Link>
          <Link href="/courses">Training courses</Link>
          <Link href="/publications">Publications</Link>
        </div>
        <div>
          <h3>Focus</h3>
          <span>Defence strategy</span>
          <span>AI & cyber</span>
          <span>Hybrid threats</span>
          <span>Maritime security</span>
        </div>
        <div>
          <h3>Engage</h3>
          <Link href="/cooperation">International cooperation</Link>
          <Link href="/contact">Become a fellow</Link>
          <Link href="/contact">Submit an article</Link>
          <Link href="/contact">Request partnership</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} STRIDES Pakistan. All rights reserved.</span>
        <span>Professional · Neutral · Evidence-Based · Future-Focused</span>
      </div>
    </footer>
  );
}
