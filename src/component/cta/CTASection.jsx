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
      color: "var(--color-secondary)",
    },
    {
      icon: Zap,
      text: "Fast Delivery",
      subtext: "Results in 30 days",
      color: "var(--color-gold)",
    },
  ];

  return (
    <section
      className="relative text-white py-20 md:py-32 overflow-hidden"
      style={{ background: "var(--color-dark)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Single gradient orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary), transparent)",
          }}
        ></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: "60px 60px",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Card */}
        <div
          className="max-w-5xl mx-auto rounded-3xl p-8 md:p-16"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(216, 77, 121, 0.2)",
                border: "1px solid rgba(216, 77, 121, 0.4)",
              }}
            >
              <Sparkles size={16} style={{ color: "var(--color-primary)" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Limited Time Offer
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center leading-tight">
            Ready to{" "}
            <span style={{ color: "var(--color-primary)" }}>Transform</span>
            <br />
            Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 md:mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            Discover how our proven strategies and innovative solutions can
            elevate your brand and drive exceptional growth. Let's build
            something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "var(--color-primary)",
                boxShadow: "0 10px 40px rgba(216, 77, 121, 0.4)",
              }}
            >
              <span>Get Started Today</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              View Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 md:pt-12 border-t border-slate-500/20">
            {trustFeatures.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div
                    className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <IconComponent size={28} style={{ color: item.color }} />
                  </div>
                  <div className="text-center">
                    <span className="block text-white font-semibold text-base md:text-lg mb-1">
                      {item.text}
                    </span>
                    <span className="text-sm text-slate-400">
                      {item.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Optional: Add any custom styles here */
      `}</style>
    </section>
  );
};

export default CTASection;
