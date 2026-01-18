import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import { Search, BarChart3, Zap, TrendingUp } from "lucide-react";
import "./Process.css";

const steps = [
  {
    title: "Discover",
    desc: "Analyze your business goals, target audience, and challenges to establish a strong foundation.",
    icon: Search,
    number: "01",
    bgColor: "#3B82F6",
  },
  {
    title: "Plan",
    desc: "Develop a comprehensive strategy with data-driven insights and measurable objectives.",
    icon: BarChart3,
    number: "02",
    bgColor: "#06B6D4",
  },
  {
    title: "Execute",
    desc: "Implement the strategy with precision using cutting-edge tools and proven best practices.",
    icon: Zap,
    number: "03",
    bgColor: "#8B5CF6",
  },
  {
    title: "Scale",
    desc: "Monitor performance, optimize results, and scale strategies for sustainable growth.",
    icon: TrendingUp,
    number: "04",
    bgColor: "#10B981",
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

        <div className="process-container">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <div key={i} className="process-step">
                {/* Connection line */}
                {i < steps.length - 1 && (
                  <div className="process-connector"></div>
                )}

                <div className="process-card">
                  <div className="process-number">{step.number}</div>

                  <div
                    className="process-icon"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <IconComponent size={40} color="white" strokeWidth={1.5} />
                  </div>

                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.desc}</p>
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
