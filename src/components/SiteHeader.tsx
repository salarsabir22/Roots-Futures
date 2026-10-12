"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#ways", label: "Plant now" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why Karachi" },
  { href: "#corporate", label: "Be our partner" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <a href="#top" className="site-header__brand" onClick={close}>
        <Logo light />
      </a>

      <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="btn b1 site-header__donate" href="#donate">
          Donate
        </a>
      </nav>

      <div className="site-header__mobile-actions">
        <a className="btn b1 site-header__donate" href="#donate" onClick={close}>
          Donate
        </a>
        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "is-open" : undefined} />
          <span className={open ? "is-open" : undefined} />
          <span className={open ? "is-open" : undefined} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="site-header__panel" aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn b1" href="#donate" onClick={close}>
            Donate
          </a>
        </nav>
      )}
    </header>
  );
}
