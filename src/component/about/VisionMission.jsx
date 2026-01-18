import { Eye, Target } from "lucide-react";
import Container from "../common/Container";

const VisionMission = () => {
  return (
    <section className="section bg-slate-50">
      <Container>
        {/* Section Header with underline animation */}
        <div className="group text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Vision & Mission
            </h2>

            {/* Animated underline */}
            <span
              className="
                absolute left-1/2 -bottom-2 h-[3px] w-12
                -translate-x-1/2 rounded-full bg-primary
                transition-all duration-300 ease-out
                group-hover:w-20
              "
            />
          </div>

          <p className="mt-4 text-slate-600">
            What drives us forward every day
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">

          {/* Vision */}
          <div
            className="
              group bg-white rounded-2xl p-8 border border-slate-200
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            <div
              className="
                w-12 h-12 rounded-xl flex items-center justify-center
                bg-primary/10 text-primary
                transition-all duration-300
                group-hover:bg-primary/20
                group-hover:shadow-[0_0_0_6px_rgba(255,44,85,0.08)]
              "
            >
              <Eye size={22} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              To become a trusted digital growth partner for businesses
              worldwide, delivering innovation with clarity and purpose.
            </p>
          </div>

          {/* Mission */}
          <div
            className="
              group bg-white rounded-2xl p-8 border border-slate-200
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            <div
              className="
                w-12 h-12 rounded-xl flex items-center justify-center
                bg-primary/10 text-primary
                transition-all duration-300
                group-hover:bg-primary/20
                group-hover:shadow-[0_0_0_6px_rgba(255,44,85,0.08)]
              "
            >
              <Target size={22} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              To build scalable, ROI-driven digital solutions that help
              brands grow, adapt, and lead in a competitive world.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
