import { Eye, Target } from "lucide-react";
import Container from "../common/Container";

const VisionMission = () => {
  return (
    <section className="relative py-32 bg-slate-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Left – Vision */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-primary" />
              <span className="uppercase tracking-widest text-sm text-primary font-semibold">
                Our Vision
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Building brands that lead, not follow
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              We envision a digital ecosystem where businesses grow with clarity,
              purpose, and measurable impact. Our goal is to become a trusted
              long-term growth partner for brands worldwide.
            </p>
          </div>

          {/* Right – Mission (DARK BRAND CARD) */}
          <div className="relative rounded-3xl p-10 bg-gradient-to-br from-rose-900 via-primary to-pink-900 text-white shadow-2xl">
            <Target className="w-8 h-8 mb-6 opacity-90" />

            <h3 className="text-3xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-white/90 leading-relaxed text-lg">
              To design and deliver scalable digital solutions that help
              businesses grow faster, convert better, and build meaningful
              relationships with their audience.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
