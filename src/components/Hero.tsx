import SystemMonitor from "@/components/SystemMonitor";
import HeroGlow from "@/components/HeroGlow";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroGlow />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="switch-dot" />
            Grazer Str. 3 · 91207 Lauf · seit 2010
          </p>
          <h1>
            Ihr IT-Partner für alles, was <strong>verbunden</strong> sein muss.
          </h1>
          <p className="hero-sub">
            Ob privater Haushalt oder kleines Unternehmen: Wir richten Computer, Netzwerke, Cloud und
            Sicherheit so ein, dass sie einfach funktionieren.
          </p>
          <div className="hero-actions">
            <a className="btn btn-filled" href="mailto:info@cnt-lauf.de">
              Termin anfragen
            </a>
            <a className="btn btn-ghost" href="#leistungen">
              Leistungen ansehen
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <strong>9</strong> Leistungsfelder
            </span>
            <span>
              <strong>15</strong> Jahre Erfahrung
            </span>
            <span>
              <strong>80&nbsp;€</strong> Stundensatz privat
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <SystemMonitor />
        </div>
      </div>
    </section>
  );
}
