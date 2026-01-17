import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";

import "./ServicesPreview.css";

const services = [
  {
    title: "Tech Solutions",
    description: "Innovative tech solutions for your business needs.",
  },
  {
    title: "Healthcare Services",
    description: "Comprehensive healthcare solutions tailored for you.",
  },
  {
    title: "Financial Consulting",
    description: "Expert financial advice to grow your business.",
  },
  {
    title: "Marketing Strategies",
    description: "Effective marketing strategies for various industries.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-light">
      <Container>
        <SectionHeader
          title="What We Do Best"
          subtitle="High-impact digital solutions designed to grow your brand and drive results."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {services.map((service, i) => (
            <Card
              key={i}
              className="text-center group"
              hover={true}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
