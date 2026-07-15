type IconName =
  | "shield"
  | "bolt"
  | "cpu"
  | "waves"
  | "globe"
  | "academic"
  | "arrow"
  | "check"
  | "document"
  | "people"
  | "compass"
  | "chart"
  | "mail"
  | "pin"
  | "menu"
  | "close";

export function Icon({ name, size = 24 }: { name: IconName | string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<string, React.ReactNode> = {
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    bolt: <path d="m13.5 2-8 12h6l-1 8 8-12h-6l1-8Z"/>,
    cpu: <><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3m6-3v3M9 20v3m6-3v3M20 9h3m-3 6h3M1 9h3m-3 6h3"/><rect x="9" y="9" width="6" height="6" rx="1"/></>,
    waves: <><path d="M2 9c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></>,
    academic: <><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11.5V16c3 2.5 9 2.5 12 0v-4.5M22 9v7"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    document: <><path d="M6 2h8l4 4v16H6V2Z"/><path d="M14 2v5h4M9 12h6m-6 4h6"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 4 5v2"/></>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></>,
    chart: <><path d="M4 21V10m6 11V3m6 18v-7m5 7H2"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  };

  return <svg {...common}>{paths[name] ?? paths.compass}</svg>;
}
