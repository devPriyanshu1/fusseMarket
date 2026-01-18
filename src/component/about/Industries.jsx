import {
  ShoppingCart,
  HeartPulse,
  Utensils,
  Cpu,
  GraduationCap,
  Briefcase,
  Leaf,
  Home,
} from "lucide-react";
import Container from "../common/Container";
import Card from "../common/Card";
import SectionHeader from "../common/SectionHeader";

const industries = [
  {
    title: "E-Commerce & Retail",
    description: "Driving sales and building loyal customer bases.",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare",
    description: "Connecting providers with patients through digital channels.",
    icon: HeartPulse,
  },
  {
    title: "Food & Hospitality",
    description: "Creating enticing digital experiences for guests.",
    icon: Utensils,
  },
  {
    title: "Technology",
    description: "Helping tech companies communicate complex solutions.",
    icon: Cpu,
  },
  {
    title: "Education",
    description: "Building engaging platforms for learning institutions.",
    icon: GraduationCap,
  },
  {
    title: "Professional Services",
    description: "Elevating service providers’ digital presence.",
    icon: Briefcase,
  },
  {
    title: "Health & Wellness",
    description: "Connecting wellness brands with health-conscious consumers.",
    icon: Leaf,
  },
  {
    title: "Real Estate",
    description: "Showcasing properties and building agent visibility.",
    icon: Home,
  },
];

const Industries = () => {
  return (
    <section className="section bg-slate-50">
      <Container>
        <SectionHeader
          title="Industries We Serve"
          subtitle="Delivering impact across diverse sectors"
        />

        <div className="grid gap-8 md:grid-cols-4 mt-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Card
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center gap-4">

                  {/* Icon */}
                  <div
                    className="
                      p-4 rounded-xl bg-primary/10 text-primary
                      transition-all duration-300
                      group-hover:bg-primary/20
                      group-hover:shadow-[0_0_0_6px_rgba(255,44,85,0.08)]
                    "
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-slate-900">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {industry.description}
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

export default Industries;
