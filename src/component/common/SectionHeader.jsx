const SectionHeader = ({ title, subtitle, center = true }) => {
  return (
    <div
      className={`group mb-12 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <div className="relative inline-block">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        {/* Animated underline */}
        <span
          className="
            absolute left-1/2 -bottom-2 h-[3px] w-12
            -translate-x-1/2 rounded-full bg-primary
            transition-all duration-300 ease-out
            group-hover:w-20
          "
        />
      </div>

      {subtitle && (
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
