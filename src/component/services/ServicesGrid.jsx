import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ services }) => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
