import { useState } from "react";
import PageHero from "../component/layout/PageHero";
import ServiceFilter from "../component/services/ServiceFilter";
import ServicesGrid from "../component/services/ServicesGrid";
import servicesData from "../data/servicesData";

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter(
          (service) => service.industry === activeFilter
        );

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Premium Solutions designed to elevate your digital presence across all industries."
        image="/ServicesOverlay.webp"
      />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tailored services for your industry with proven expertise and premium quality standards.
          </p>
        </div>
        
        <ServiceFilter
          active={activeFilter}
          setActive={setActiveFilter}
        />
        <ServicesGrid services={filteredServices} />
      </section>
    </>
  );
};

export default Services;
