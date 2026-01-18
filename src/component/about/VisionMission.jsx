import Card from "../common/Card";

const VisionMission = () => {
  const items = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To empower businesses with innovative digital solutions that drive growth and success in an ever-evolving marketplace.",
      color: "primary"
    },
    {
      icon: "🔮",
      title: "Our Vision",
      description: "To be the leading partner for businesses seeking to harness the power of digital transformation and achieve sustainable growth.",
      color: "secondary"
    }
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 mt-12">
      {items.map((item, index) => (
        <Card key={index} variant={item.color} shadow="lg" className="flex flex-col items-center text-center hover:scale-105 transition-transform">
          <div className="text-5xl mb-4">{item.icon}</div>
          <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default VisionMission;
