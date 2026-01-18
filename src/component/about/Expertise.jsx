import Card from "../common/Card";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Digital Marketing",
      icon: "📈",
      skills: ["SEO", "Content", "Social Media", "Ads"],
    },
    {
      title: "Web Development",
      icon: "💻",
      skills: ["Frontend", "Backend", "Full Stack", "PWAs"],
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      skills: ["Research", "Design Systems", "Prototyping", "Testing"],
    },
    {
      title: "Data Analytics",
      icon: "📊",
      skills: ["Tracking", "Visualization", "Insights", "Reporting"],
    },
    {
      title: "Mobile Apps",
      icon: "📱",
      skills: ["iOS", "Android", "Cross-Platform", "Optimization"],
    },
    {
      title: "E-Commerce",
      icon: "🛒",
      skills: ["Store Setup", "Payments", "Conversion", "Inventory"],
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
      {expertiseAreas.map((area, index) => (
        <Card key={index}>
          <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
            {area.icon}
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-3">
            {area.title}
          </h3>

          <ul className="space-y-2 text-sm text-slate-600">
            {area.skills.map((skill, i) => (
              <li key={i}>• {skill}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default Expertise;
