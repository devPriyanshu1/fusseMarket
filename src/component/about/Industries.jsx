import Card from "../common/Card";

const Industries = () => {
  const industries = [
    {
      icon: "🏥",
      name: "Healthcare",
      description: "Digital solutions for healthcare providers and medical institutions"
    },
    {
      icon: "🏪",
      name: "Retail & E-Commerce",
      description: "Complete e-commerce solutions and retail digital transformation"
    },
    {
      icon: "🏦",
      name: "Finance & Banking",
      description: "Secure digital solutions for financial institutions"
    },
    {
      icon: "🎓",
      name: "Education",
      description: "Learning management systems and educational platforms"
    },
    {
      icon: "🏨",
      name: "Hospitality",
      description: "Booking systems and customer experience solutions"
    },
    {
      icon: "🏭",
      name: "Manufacturing",
      description: "Digital transformation for manufacturing and supply chain"
    },
    {
      icon: "📰",
      name: "Media & Publishing",
      description: "Content management and digital publishing solutions"
    },
    {
      icon: "🚗",
      name: "Automotive",
      description: "Digital solutions for automotive industry"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
      {industries.map((industry, index) => (
        <Card
          key={index}
          shadow="md"
          variant="light"
          className="text-center hover:scale-105 hover:bg-primary/5 transition-all duration-300 border border-gray-200"
        >
          <div className="text-5xl mb-3">{industry.icon}</div>
          <h3 className="text-lg font-bold text-primary mb-2">{industry.name}</h3>
          <p className="text-sm text-gray-600">{industry.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Industries;
