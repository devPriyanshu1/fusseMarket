const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-slate-600 mb-4">{service.description}</p>

      <ul className="space-y-2 text-sm text-slate-700">
        {service.points.map((point, index) => (
          <li key={index}>✔ {point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
