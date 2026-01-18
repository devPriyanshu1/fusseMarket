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
} from "lucide-react";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";

import "./ServicesPreview.css";

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
    description: "Creative solutions that push boundaries.",
  },
  {
    title: "Data-Driven",
    description: "Strategies backed by real insights.",
  },
  {
    title: "Collaborative",
    description: "We work with you, not for you.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Main Title Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            We deliver a full spectrum of digital marketing solutions—from
            innovative social media campaigns and SEO mastery to custom web
            development and engaging content creation.
          </p>
        </div>

        {/* Services Grid - Two Column Layout */}
        <div className="services-two-column max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {mainServices.slice(0, 4).map((service, i) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={i}
                    className="service-item-with-icon service-item-left-col"
                  >
                    <div className="icon-with-text">
                      <div
                        className="flex-1 service-text-wrapper"
                        style={{ borderBottomColor: service.bgColor }}
                      >
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">
                          {service.description}
                        </p>
                      </div>
                      <div
                        className="icon-box"
                        style={{ backgroundColor: service.bgColor }}
                      >
                        <IconComponent
                          size={40}
                          color="white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {mainServices.slice(4, 8).map((service, i) => {
                const IconComponent = service.icon;
                return (
                  <div key={i} className="service-item-with-icon">
                    <div className="icon-with-text">
                      <div
                        className="icon-box"
                        style={{ backgroundColor: service.bgColor }}
                      >
                        <IconComponent
                          size={40}
                          color="white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div
                        className="flex-1 service-text-wrapper"
                        style={{ borderBottomColor: service.bgColor }}
                      >
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-12 mb-16 shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-3xl relative z-10">
            <h3 className="text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Every product we create is shaped by real needs, real stories, and
              real people like you. We believe in building solutions that
              matter—not just aesthetically pleasing, but functionally
              transformative.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 py-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-3">
            Why Choose Fusse Market?
          </h3>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Our approach combines creative brilliance with advanced analytics,
            delivering bespoke strategies that captivate and convert a
            digital-native audience.
          </p>
          <div className="why-choose-container">
            <div className="why-choose-items">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="why-choose-item">
                  <div className="why-choose-number">{i + 1}</div>
                  <div className="why-choose-content">
                    <h4 className="why-choose-item-title">{item.title}</h4>
                    <p className="why-choose-item-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-slate-200">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 group"
          >
            Explore All Services
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
