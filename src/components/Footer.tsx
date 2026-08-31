import { navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a className="brand" href="#top">
              <span className="switch-dot" />
              <span className="brand-word">CNT-LAUF</span>
            </a>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="tel:+499123182730">09123 / 182 73 – 0</a>
              </li>
              <li>
                <a href="mailto:info@cnt-lauf.de">info@cnt-lauf.de</a>
              </li>
              <li>
                <a href="https://www.instagram.com/cnt_lauf/">@cnt_lauf</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Rechtliches</h4>
            <ul>
              <li>
                <a href="#" title="Platzhalter – Originaltext aus dem bestehenden Impressum übernehmen">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CNT-Lauf.de</span>
          <span>Grazer Str. 3 · 91207 Lauf an der Pegnitz</span>
        </div>
      </div>
    </footer>
  );
}
