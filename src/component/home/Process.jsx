import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";

const steps = [
  { number: "01", title: "Discover", icon: "🔍", desc: "Understand goals and challenges" },
  { number: "02", title: "Plan", icon: "📋", desc: "Create a data-driven strategy" },
  { number: "03", title: "Execute", icon: "⚡", desc: "Build and launch efficiently" },
  { number: "04", title: "Scale", icon: "📈", desc: "Optimize and grow continuously" },
];

const Process = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-light to-white">
      <Container>
        <SectionHeader
          title="How We Work"
          subtitle="A proven 4-step process that delivers results."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Card key={i} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-primary font-bold mb-2">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
