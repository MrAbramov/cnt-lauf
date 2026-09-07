import { priceRows } from "@/data/content";

export default function Pricing() {
  return (
    <section id="preise">
      <div className="container">
        <div className="section-header reveal">
          <h2>Ein Blick auf die Rechnung, bevor Sie sie bekommen.</h2>
          <span className="counter mono">03</span>
        </div>

        <div className="price-top">
          <div className="price-card reveal">
            <span className="switch-dot" />
            <span className="label mono">Privatkunden</span>
            <div className="amount">
              80,00&nbsp;€<sub> / Std.</sub>
            </div>
            <p className="fine">20,00 € je angefangener Viertelstunde</p>
          </div>
          <div className="price-card reveal">
            <span className="switch-dot" />
            <span className="label mono">Geschäftskunden</span>
            <div className="amount">
              100,00&nbsp;€<sub> / Std.</sub>
            </div>
            <p className="fine">25,00 € je angefangener Viertelstunde</p>
          </div>
        </div>

        <div className="price-details">
          {priceRows.map((row) => (
            <div className="price-row reveal" key={row.label}>
              <span className="row-label">{row.label}</span>
              <span className="row-fill" />
              <span className="row-value">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="price-footnote reveal">
          <span className="tag">Gültig ab 01.01.2026</span>
          <p>Alle Preise verstehen sich zzgl. der gesetzlichen Umsatzsteuer.</p>
        </div>
      </div>
    </section>
  );
}
