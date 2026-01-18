const Timeline = () => {
  const milestones = [
    { year: "2018", title: "Founded", desc: "Company established", icon: "🚀" },
    { year: "2019", title: "50+ Clients", desc: "Early growth stage", icon: "🎯" },
    { year: "2020", title: "Expansion", desc: "Digital transformation focus", icon: "🔄" },
    { year: "2021", title: "Team Growth", desc: "50+ professionals", icon: "👥" },
    { year: "2022", title: "Recognition", desc: "Award-winning agency", icon: "🏆" },
    { year: "2024", title: "500+ Clients", desc: "Proven scale", icon: "⭐" },
  ];

  return (
    <div className="mt-16 space-y-10">
      {milestones.map((m, i) => (
        <div
          key={i}
          className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="text-3xl">{m.icon}</div>
            <span className="font-bold text-primary">{m.year}</span>
          </div>
          <h3 className="font-semibold text-lg">{m.title}</h3>
          <p className="text-sm text-slate-600">{m.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
