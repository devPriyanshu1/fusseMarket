import { Link } from "react-router-dom";
import {
  Smartphone,
  Search,
  Code2,
  PenTool,
  Palette,
  Cog,
  AppWindow,
  BarChart3,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

const mainServices = [
  {
    title: "Social Media",
    description:
      "Build your brand presence with strategic campaigns that spark authentic engagement across all platforms.",
    icon: Smartphone,
    bgColor: "#3B82F6",
  },
  {
    title: "SEO",
    description:
      "Boost your search rankings and drive consistent organic traffic with proven optimization strategies.",
    icon: Search,
    bgColor: "#06B6D4",
  },
  {
    title: "Web Development",
    description:
      "Create modern, responsive websites designed to convert visitors into loyal customers.",
    icon: Code2,
    bgColor: "#8B5CF6",
  },
  {
    title: "Content Creation",
    description:
      "Craft compelling stories that resonate with your audience and drive meaningful engagement.",
    icon: PenTool,
    bgColor: "#D97706",
  },
  {
    title: "Brand Management",
    description:
      "Develop strategic brand positioning and consistent identity across all customer touchpoints.",
    icon: Palette,
    bgColor: "#EF4444",
  },
  {
    title: "Custom Software Development",
    description:
      "Build tailored software solutions that perfectly fit your unique business requirements.",
    icon: Cog,
    bgColor: "#EC4899",
  },
  {
    title: "App Development",
    description:
      "Create elegant, high-performance mobile applications that users love.",
    icon: AppWindow,
    bgColor: "#06B6D4",
  },
  {
    title: "Performance Marketing",
    description:
      "Drive measurable results with precision targeting and real-time campaign optimization.",
    icon: BarChart3,
    bgColor: "#1E40AF",
  },
];

const whyChooseUs = [
  {
    title: "Innovative Ideas",
    description: "Creative solutions that push boundaries and redefine what's possible.",
    icon: Sparkles,
  },
  {
    title: "Data-Driven",
    description: "Strategies backed by real insights and measurable outcomes.",
    icon: BarChart3,
  },
  {
    title: "Collaborative",
    description: "We work with you, not for you—your success is our mission.",
    icon: Check,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #EC4899, transparent)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <Sparkles size={16} style={{ color: "#8B5CF6" }} />
            <span className="text-sm font-semibold" style={{ color: "#8B5CF6" }}>
              What We Offer
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We deliver a full spectrum of digital marketing solutions—from
            innovative social media campaigns and SEO mastery to custom web
            development and engaging content creation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {mainServices.map((service, i) => {
            const IconComponent = service.icon;
            const isLeftColumn = i < 4;

            return (
              <div
                key={i}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <div
                  className={`flex ${
                    isLeftColumn ? "flex-row" : "flex-row-reverse"
                  } items-start gap-6 p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(139, 92, 246, 0.1)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 p-4 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      backgroundColor: service.bgColor,
                      boxShadow: `0 8px 24px ${service.bgColor}40`,
                    }}
                  >
                    <IconComponent size={32} color="white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-3 transition-colors duration-300"
                      style={{ color: "#1e293b" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div
                      className="mt-4 h-1 rounded-full transition-all duration-500 group-hover:w-full"
                      style={{
                        width: "0%",
                        backgroundColor: service.bgColor,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div
          className="rounded-3xl p-12 md:p-16 mb-24 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Animated background pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                               radial-gradient(circle at 80% 80%, white 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>

          {/* Gradient orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
          ></div>

          <div className="max-w-3xl relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(139, 92, 246, 0.2)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
            >
              <Sparkles size={16} style={{ color: "#a78bfa" }} />
              <span className="text-sm font-semibold" style={{ color: "#a78bfa" }}>
                About Us
              </span>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">Our Story</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Every product we create is shaped by real needs, real stories, and
              real people like you. We believe in building solutions that
              matter—not just aesthetically pleasing, but functionally
              transformative. Our journey is driven by passion, innovation, and
              an unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Choose Fusse Market?
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our approach combines creative brilliance with advanced analytics,
              delivering bespoke strategies that captivate and convert a
              digital-native audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="relative group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 0.15}s both`,
                  }}
                >
                  <div
                    className="p-8 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-full"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    {/* Icon badge */}
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                        boxShadow: "0 8px 24px rgba(139, 92, 246, 0.4)",
                      }}
                    >
                      <IconComponent size={28} color="white" strokeWidth={2} />
                    </div>

                    <h4 className="text-2xl font-bold mb-3 text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold text-lg rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
              color: "white",
              boxShadow: "0 10px 40px rgba(139, 92, 246, 0.4)",
            }}
          >
            {/* Shine effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                transform: "translateX(-100%)",
              }}
            ></div>

            <span className="relative z-10">Explore All Services</span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform duration-500 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;