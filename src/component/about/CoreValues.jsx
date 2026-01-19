import { Shield, Users, TrendingUp } from "lucide-react";
import Container from "../common/Container";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest communication and ethical execution in everything we do.",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "We build long-term partnerships, not short-term projects.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Driven",
    description:
      "Our work is measured by real impact and real outcomes.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-32 bg-slate-50">
      <Container>

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-600">
            The principles that guide every decision we make.
          </p>
        </div>

        {/* VERTICAL STACK (NOT GRID) */}
        <div className="space-y-8 max-w-3xl">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* BRAND ACCENT LINE */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-primary/80" />
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default CoreValues;
