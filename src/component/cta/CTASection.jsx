import { useRef } from "react";
import Button from "../common/Button";

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
    <section className="relative py-28 bg-[#0B1220] overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[140px] animate-float-slow" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-16 text-center transition-transform duration-300 will-change-transform"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
            Let’s discuss how Fuse Market can help you scale with clarity,
            strategy, and measurable results.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="animate-cta-pulse">
              Get Free Consultation →
            </Button>

            {/* ✅ NOW WORKS */}
            <Button
              size="lg"
              variant="outline"
              to="/services"
            >
              View Services
            </Button>
          </div>

          <p className="mt-10 text-sm text-slate-400">
            Trusted by 500+ businesses across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
