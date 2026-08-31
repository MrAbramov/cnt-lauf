import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="leistungen">
      <div className="container">
        <div className="section-header reveal">
          <h2>Neun Leistungsfelder, ein Ansprechpartner.</h2>
          <span className="counter mono">01</span>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.id}>
              <span className="service-watermark" aria-hidden="true">
                {service.id.slice(1)}
              </span>
              <div className="service-body">
                <div className="service-top">
                  <span className="service-top-left">
                    <span className="service-led" aria-hidden="true" />
                    <h3>{service.title}</h3>
                  </span>
                  <span className="service-top-right">
                    <service.icon className="service-icon" />
                  </span>
                </div>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
