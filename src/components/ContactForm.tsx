"use client";

import { FormEvent, useRef } from "react";

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";

    const subject = encodeURIComponent(`Anfrage über die Website von ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:info@cnt-lauf.de?subject=${subject}&body=${body}`;
  }

  return (
    <form className="reveal" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" placeholder="Ihr Name" ref={nameRef} required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">E-Mail</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="ihre@email.de"
          ref={emailRef}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Nachricht</label>
        <textarea id="cf-msg" name="message" rows={4} placeholder="Worum geht es?" ref={messageRef} required />
      </div>
      <button className="btn btn-filled" type="submit" style={{ width: "100%" }}>
        Nachricht senden
      </button>
      <p className="form-note">
        Öffnet Ihr E-Mail-Programm mit vorausgefüllter Nachricht an info@cnt-lauf.de.
      </p>
    </form>
  );
}
