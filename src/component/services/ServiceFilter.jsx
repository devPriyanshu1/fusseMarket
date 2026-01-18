const filters = ["all", "marketing", "development", "branding"];

const ServiceFilter = ({ active, setActive }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-14">
      {filters.map((filter) => {
        const isActive = active === filter;

        return (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isActive
                ? "bg-primary text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default ServiceFilter;
