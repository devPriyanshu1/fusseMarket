import {
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import Container from "../common/Container";
import Card from "../common/Card";
import SectionHeader from "../common/SectionHeader";

const coreValues = [
  {
    title: "Integrity",
    description:
      "Honest communication and ethical execution in everything we do.",
    icon: ShieldCheck,
  },
  {
    title: "Client-First",
    description:
      "We build long-term partnerships, not short-term projects.",
    icon: Users,
  },
  {
    title: "Growth Focused",
    description:
      "Every solution is designed to deliver measurable impact.",
    icon: TrendingUp,
  },
];

const CoreValues = () => {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeader
          title="Our Core Values"
          subtitle="Principles that define how we work"
        />

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {coreValues.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col items-start gap-4">

                  {/* Icon */}
                  <div
                    className="
                      p-3 rounded-xl bg-primary/10 text-primary
                      transition-all duration-300
                      group-hover:bg-primary/20
                      group-hover:shadow-[0_0_0_6px_rgba(255,44,85,0.08)]
                    "
                  >
                    <Icon size={22} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
