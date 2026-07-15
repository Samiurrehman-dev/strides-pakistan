import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icon";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</div>;
}

export function PageHero({
  eyebrow = "STRIDES Pakistan",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="hero-grid-lines" />
      <div className="shell page-hero-inner">
        <div className="page-hero-copy">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="page-hero-mark" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <Image src="/brand/strides-mark.jpg" alt="" width={365} height={500} priority />
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <div><Eyebrow light={light}>{eyebrow}</Eyebrow><h2>{title}</h2></div>
      {description && <p>{description}</p>}
    </div>
  );
}

export function CtaBand({
  eyebrow,
  title,
  text,
  button = "Start a conversation",
  href = "/contact",
}: {
  eyebrow: string;
  title: string;
  text: string;
  button?: string;
  href?: string;
}) {
  return (
    <section className="cta-band-wrap">
      <div className="shell cta-band">
        <div><Eyebrow light>{eyebrow}</Eyebrow><h2>{title}</h2><p>{text}</p></div>
        <Link href={href} className="button button-light">{button}<Icon name="arrow" size={18} /></Link>
      </div>
    </section>
  );
}
