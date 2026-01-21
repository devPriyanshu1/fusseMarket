import React from "react";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const CTASection = () => {
  const trustFeatures = [
    {
      icon: CheckCircle2,
      text: "Free Consultation",
      subtext: "No commitment required",
      color: "var(--color-primary)",
    },
    {
      icon: Shield,
      text: "100% Satisfaction",
      subtext: "Or your money back",
      color: "var(--color-accent)",
    },
    {
      icon: Zap,
      text: "Fast Delivery",
      subtext: "Results in 30 days",
      color: "var(--color-deep-purple)",
    },
  ];

  return (
    <section className="py-0 md:py-24 lg:py-32 bg-linear-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden min-h-screen md:min-h-0">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary), transparent)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-0 md:px-4 lg:px-6 relative z-10 h-full">
        {/* Main Card */}
        <div
          className="w-full min-h-screen md:min-h-0 md:max-w-5xl mx-auto rounded-none md:rounded-3xl p-8 md:p-16 lg:p-20 flex flex-col justify-center"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(180, 167, 214, 0.2)",
            boxShadow:
              "0 25px 80px rgba(216, 77, 121, 0.15), 0 15px 40px rgba(180, 167, 214, 0.1)",
          }}
        >
          {/* Main heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center leading-[1.1] tracking-tight"
            style={{ color: "var(--color-dark)" }}
          >
            Ready to{" "}
            <span style={{ color: "var(--color-primary)" }}>Transform</span>
            <br />
            Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            Discover how our proven strategies and innovative solutions can
            elevate your brand and drive exceptional growth. Let's build
            something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 overflow-hidden text-white"
              style={{
                background: "var(--color-primary)",
                boxShadow: "0 12px 40px rgba(216, 77, 121, 0.4)",
              }}
            >
              {/* Shine effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                }}
              ></div>
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight
                size={20}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "white",
                border: "2px solid rgba(180, 167, 214, 0.4)",
                color: "var(--color-dark)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span>View Our Services</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 md:pt-12"
            style={{
              borderTop: "1px solid rgba(180, 167, 214, 0.2)",
            }}
          >
            {trustFeatures.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: "white",
                    border: "1px solid rgba(180, 167, 214, 0.2)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="p-3.5 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: item.color,
                      boxShadow: `0 4px 16px ${item.color}40`,
                    }}
                  >
                    <IconComponent size={28} color="white" />
                  </div>
                  <div className="text-center">
                    <span
                      className="block font-bold text-base md:text-lg mb-1.5"
                      style={{ color: "var(--color-dark)" }}
                    >
                      {item.text}
                    </span>
                    <span className="text-sm text-slate-600">
                      {item.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
