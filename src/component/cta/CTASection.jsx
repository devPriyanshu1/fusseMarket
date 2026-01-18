import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-20 text-center">

          {/* Subtle background accent */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Grow Your Business?
            </h2>

            <p className="mt-4 text-slate-300 text-lg">
              Let’s discuss how Fuse Market can help you scale with clarity,
              strategy, and results.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              {/* Primary CTA */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2
                rounded-full bg-primary px-8 py-3 text-white font-semibold
                hover:brightness-95 transition shadow-lg"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>

              {/* Secondary CTA */}
              <a
                href="/services"
                className="inline-flex items-center justify-center
                rounded-full border border-white/30 px-8 py-3
                text-white font-medium hover:bg-white/10 transition"
              >
                View Services
              </a>
            </div>

            {/* Trust Line */}
            <p className="mt-8 text-sm text-slate-400">
              Trusted by 500+ businesses across India
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
