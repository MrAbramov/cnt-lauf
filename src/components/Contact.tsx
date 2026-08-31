import { CallIcon, MailIcon, PinIcon, InstagramIcon } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="kontakt">
      <div className="container">
        <div className="section-header reveal">
          <h2>Sprechen wir über Ihre IT.</h2>
          <span className="counter mono">05</span>
        </div>

        <div className="contact-wrap">
          <div className="contact-text reveal">
            <p className="lead">
              Schildern Sie kurz, worum es geht – wir melden uns mit einer ersten Einschätzung und, wenn
              nötig, einem Vor-Ort-Termin.
            </p>
            <div className="contact-rows">
              <div className="contact-row">
                <CallIcon />
                <div>
                  <span className="contact-label">Telefon</span>
                  <a href="tel:+499123182730">09123 / 182 73 – 0</a>
                </div>
              </div>
              <div className="contact-row">
                <MailIcon />
                <div>
                  <span className="contact-label">E-Mail</span>
                  <a href="mailto:info@cnt-lauf.de">info@cnt-lauf.de</a>
                </div>
              </div>
              <div className="contact-row">
                <PinIcon />
                <div>
                  <span className="contact-label">Adresse</span>
                  <span className="text">Grazer Str. 3, 91207 Lauf</span>
                </div>
              </div>
              <div className="contact-row">
                <InstagramIcon />
                <div>
                  <span className="contact-label">Instagram</span>
                  <a href="https://www.instagram.com/cnt_lauf/">@cnt_lauf</a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
