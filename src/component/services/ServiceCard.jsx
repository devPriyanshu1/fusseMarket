const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-semibold mb-3 text-slate-800">
        {service.title}
      </h3>

      <p className="text-slate-600 mb-5 text-sm leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-2 text-sm text-slate-700">
        {service.points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
