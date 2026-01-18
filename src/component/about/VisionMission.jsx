import { Eye, Target } from "lucide-react";
import Container from "../common/Container";

const VisionMission = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-slate-50 py-20 md:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-primary to-pink-400 rounded-full" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Our Foundation
            </span>
            <div className="h-1 w-8 bg-gradient-to-l from-primary to-pink-400 rounded-full" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Vision & Mission
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Guiding principles that inspire innovation and drive meaningful
            growth for our partners
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div
            className="
              group relative bg-white rounded-3xl p-10 
              border border-slate-200 overflow-hidden
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30
            "
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Container */}
            <div
              className="
                relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center
                bg-gradient-to-br from-primary/15 to-primary/5 text-primary
                transition-all duration-500
                group-hover:from-primary/25 group-hover:to-primary/15
                group-hover:shadow-lg group-hover:shadow-primary/20
              "
            >
              <Eye size={28} strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="mt-8 text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed text-base font-medium">
                To become a trusted digital growth partner for businesses
                worldwide, delivering innovation with clarity and purpose.
              </p>

              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="
              group relative bg-white rounded-3xl p-10 
              border border-slate-200 overflow-hidden
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30
            "
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Container */}
            <div
              className="
                relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center
                bg-gradient-to-br from-primary/15 to-primary/5 text-primary
                transition-all duration-500
                group-hover:from-primary/25 group-hover:to-primary/15
                group-hover:shadow-lg group-hover:shadow-primary/20
              "
            >
              <Target size={28} strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="mt-8 text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed text-base font-medium">
                To build scalable, ROI-driven digital solutions that help brands
                grow, adapt, and lead in a competitive world.
              </p>

              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
