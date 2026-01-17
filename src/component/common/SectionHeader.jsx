const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClass = "",
  subtitleClass = "",
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`${alignClasses[align]} mb-12 ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-4 ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;