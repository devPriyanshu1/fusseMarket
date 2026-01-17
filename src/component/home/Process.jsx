import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";

const steps = [
  {
    title: "Discover",
    desc: "We analyze your business goals, target audience, and current challenges to create a solid foundation.",
    icon: "🔍",
    number: "01",
  },
  {
    title: "Plan",
    desc: "Develop a comprehensive strategy with data-driven insights and measurable objectives.",
    icon: "📋",
    number: "02",
  },
  {
    title: "Execute",
    desc: "Implement the strategy with precision, using cutting-edge tools and best practices.",
    icon: "⚡",
    number: "03",
  },
  {
    title: "Scale",
    desc: "Monitor performance, optimize results, and scale successful strategies for maximum growth.",
    icon: "📈",
    number: "04",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          title="How We Work"
          subtitle="Our proven 4-step process ensures your success from strategy to execution."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connection line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-8"></div>
              )}

              <Card className="text-center relative group" hover={true}>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="font-semibold text-xl mb-3 text-slate-800">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
