import Card from "../common/Card";

const CoreValues = () => {
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that stay ahead of market trends.",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work closely with our clients as true partners, understanding their goals and delivering solutions that create lasting value.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy development to implementation and support.",
    },
    {
      icon: "🔒",
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and accountability, building trust through consistent ethical practices.",
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "We are committed to continuous improvement, both for ourselves and our clients, driving sustainable business growth.",
    },
    {
      icon: "👥",
      title: "Community",
      description: "We believe in the power of collaboration and fostering a community where ideas are shared and innovation thrives.",
    }
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
      {values.map((value, index) => (
        <Card 
          key={index} 
          shadow="md" 
          variant="light"
          className="border-l-4 border-primary hover:border-accent hover:shadow-lg transition-all duration-300"
        >
          <div className="text-4xl mb-4">{value.icon}</div>
          <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default CoreValues;
