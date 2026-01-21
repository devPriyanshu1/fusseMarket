import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import { Search, BarChart3, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "Analyze your business goals, target audience, and challenges to establish a strong foundation.",
    icon: Search,
    number: "01",
    bgColor: "#d84d79",
  },
  {
    title: "Plan",
    desc: "Develop a comprehensive strategy with data-driven insights and measurable objectives.",
    icon: BarChart3,
    number: "02",
    bgColor: "#b4a7d6",
  },
  {
    title: "Execute",
    desc: "Implement the strategy with precision using cutting-edge tools and proven best practices.",
    icon: Zap,
    number: "03",
    bgColor: "#a81c3c",
  },
  {
    title: "Scale",
    desc: "Monitor performance, optimize results, and scale strategies for sustainable growth.",
    icon: TrendingUp,
    number: "04",
    bgColor: "#6b4c82",
  },
];

const Process = () => {
  return (
    <section className="bg-white">
      <Container>
        <SectionHeader
          title="How We Work"
          subtitle="A proven 4-step process that delivers results."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative mb-4">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center">
                {/* Connection line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-[60px] left-1/2 w-full h-[3px] z-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, #e2e8f0 25%, #e2e8f0 75%, transparent 100%)",
                    }}
                  ></div>
                )}

                <div className="relative w-full px-6 py-6 bg-white border border-slate-200 rounded-xl text-center transition-all duration-300 hover:border-[--color-primary] hover:shadow-xl hover:-translate-y-1 z-10">
                  {/* Process Icon */}
                  <div
                    className="w-[70px] h-[70px] mx-auto mb-6 rounded-xl flex items-center justify-center shadow-md transition-all duration-300"
                    style={{
                      backgroundColor: step.bgColor,
                      boxShadow: `0 4px 12px ${step.bgColor}40`,
                    }}
                  >
                    <IconComponent size={40} color="white" strokeWidth={1.5} />
                  </div>

                  {/* Process Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Process Description */}
                  <p className="text-sm text-slate-600 leading-relaxed m-0">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Process;
