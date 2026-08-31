"use client";

import { useState } from "react";
import { navLinks } from "@/data/content";
import { MenuIcon, CloseIcon } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#top">
            <span className="switch-dot" />
            <span className="brand-word">CNT-LAUF</span>
          </a>

          <nav className="main-nav" aria-label="Hauptnavigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-cta">
            <a className="btn btn-ghost" href="#kontakt">
              Kontakt
            </a>
            <a className="btn btn-filled" href="mailto:info@cnt-lauf.de">
              Termin anfragen
            </a>
            <button
              className="nav-toggle"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobileNav"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        id="mobileNav"
        aria-label="Mobile Navigation"
        aria-hidden={!open}
      >
        <div className="mobile-nav-top">
          <span className="brand-word mono">CNT-LAUF</span>
          <button className="close-btn" aria-label="Menü schließen" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
