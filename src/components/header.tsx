"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";
import { Icon } from "./icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topline">
        <div className="shell topline-inner">
          <span>Strategic insight for defence, security and future warfare</span>
          <div><span>Islamabad, Pakistan</span><a href="mailto:info@stridespakistan.org">info@stridespakistan.org</a></div>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label="STRIDES Pakistan home">
            <Image src="/brand/strides-mark.jpg" alt="" width={365} height={500} priority />
            <span>
              <strong>STRIDES <em>Pakistan</em></strong>
              <small>Defence · Strategy · Emerging Security</small>
            </span>
          </Link>

          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} size={25} />
          </button>

          <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className={`nav-cta ${pathname === "/contact" ? "active" : ""}`}>
              Collaborate <Icon name="arrow" size={16} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
