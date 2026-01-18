import { useRef } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import { CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `
      rotateX(${(-y / 40).toFixed(2)}deg)
      rotateY(${(x / 40).toFixed(2)}deg)
      translateZ(10px)
    `;
  };

  const resetTransform = () => {
    cardRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950 text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-600/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"
          style={{
            backgroundSize: "50px 50px",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          }}
        ></div>
      </div>

      <Container className="relative z-10"/>
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how our proven strategies and innovative solutions can
            elevate your brand and drive exceptional growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600  hover:to-cyan-600 text-white font-semibold rounded px-8 py-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <span className="ml-2 text-xl">→</span>
            </Button>

            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-white font-semibold rounded px-8 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              View Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-500/30">
            {[
              {
                icon: CheckCircle2,
                text: "Free Consultation",
                color: "text-emerald-400",
              },
              {
                icon: CheckCircle2,
                text: "30-Day Money Back",
                color: "text-emerald-400",
              },
              {
                icon: CheckCircle2,
                text: "24/7 Priority Support",
                color: "text-emerald-400",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 py-4 hover:bg-white/5 rounded-lg transition-colors px-4"
                >
                  <IconComponent size={28} className={item.color} />
                  <span className="text-slate-200 font-medium">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
};

export default CTASection;
