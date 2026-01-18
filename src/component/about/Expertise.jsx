import {
  Code,
  Paintbrush,
  TrendingUp,
  Layers,
  BarChart3,
  Search,
} from "lucide-react";
import Container from "../common/Container";
import Card from "../common/Card";
import SectionHeader from "../common/SectionHeader";

const expertise = [
  {
    title: "Web Development",
    description:
      "Fast, scalable, conversion-focused websites built with modern tech.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design systems that look great and convert better.",
    icon: Paintbrush,
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, ads, and growth strategies designed for measurable ROI.",
    icon: TrendingUp,
  },
  {
    title: "Brand Strategy",
    description:
      "Clear positioning and messaging that builds trust and authority.",
    icon: Layers,
  },
  {
    title: "Performance Optimization",
    description:
      "Continuous improvement through testing, data, and refinement.",
    icon: BarChart3,
  },
  {
    title: "SEO & Analytics",
    description:
      "Data-driven insights to track performance and guide decisions.",
    icon: Search,
  },
];

const Expertise = () => {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeader
          title="Our Expertise"
          subtitle="What we do best"
        />

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {expertise.map((item, index) => {
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

export default Expertise;
