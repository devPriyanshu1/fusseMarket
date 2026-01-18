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
          (service) => service.category === activeFilter
        );

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Solutions designed to elevate your digital presence."
        image="/ServicesOverlay.webp"
      />

      <section className="max-w-7xl mx-auto px-4 py-20">
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
