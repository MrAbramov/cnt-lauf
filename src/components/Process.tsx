import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <h2>So arbeiten wir mit Ihnen.</h2>
          <span className="counter mono">02</span>
        </div>
        <div className="process-list reveal">
          {processSteps.map((step) => (
            <div className="process-step" key={step.id}>
              <span className="step-id mono">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
