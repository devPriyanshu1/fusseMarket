const filters = ["all", "marketing", "development", "branding"];

const ServiceFilter = ({ active, setActive }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            active === filter
              ? "bg-primary text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ServiceFilter;
