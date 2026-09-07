import { certifications } from "@/data/content";

export default function Certifications() {
  return (
    <section id="zertifizierungen">
      <div className="container cert-wrap">
        <div>
          <div
            className="section-header reveal"
            style={{ borderBottom: "none", paddingBottom: 0, marginBottom: 32 }}
          >
            <h2 style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}>
              Geprüftes Wissen, nicht nur Erfahrung.
            </h2>
            <span className="counter mono">04</span>
          </div>
          <div className="cert-badges">
            {certifications.map((cert) => (
              <div className="cert-badge reveal" key={cert.title}>
                <cert.icon />
                <div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-date mono">{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cert-stats">
          <div className="stat reveal">
            <div className="num">2010</div>
            <div className="desc">GEGRÜNDET IN LAUF AN DER PEGNITZ</div>
          </div>
          <div className="stat reveal">
            <div className="num">15+</div>
            <div className="desc">JAHRE ERFAHRUNG MIT PRIVAT- UND GESCHÄFTSKUNDEN</div>
          </div>
          <div className="stat reveal">
            <div className="num">9</div>
            <div className="desc">VERBUNDENE LEISTUNGSFELDER, EIN ANSPRECHPARTNER</div>
          </div>
        </div>
      </div>
    </section>
  );
}
