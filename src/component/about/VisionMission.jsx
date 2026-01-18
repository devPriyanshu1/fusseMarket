import { Eye, Target, Sparkles } from "lucide-react";
import Container from "../common/Container";

const VisionMission = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <Container>
        {/* Premium Section Header */}
        <div className="max-w-3xl mb-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Foundation
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-3 leading-tight">
            Vision & Mission
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 mt-6 rounded-full" />
          <p className="text-lg text-slate-600 mt-6 leading-relaxed">
            The principles that guide how we think, build, and grow brands.
          </p>
        </div>

        {/* Premium Vision Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-2xl" />
            
            {/* Card Content */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-12 shadow-2xl shadow-primary/10 border border-slate-200/50 hover:shadow-primary/20 transition-all duration-500">
              {/* Icon Container */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 transform group-hover:rotate-6 transition-transform duration-500">
                <Eye className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              
              {/* Decorative Corner Element */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl" />
              
              <div className="relative mt-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  Our Vision
                  <span className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To become a trusted digital growth partner for businesses
                  worldwide, delivering innovation with clarity, purpose, and
                  long-term impact.
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-b-3xl" />
            </div>
          </div>

          {/* Connecting Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Premium Mission Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Connecting Element */}
          <div className="hidden lg:flex items-center justify-center order-1">
            <div className="relative w-full h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-l from-primary via-purple-500 to-transparent rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" />
            </div>
          </div>

          <div className="relative group order-2">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-primary/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 blur-2xl" />
            
            {/* Card Content */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-12 shadow-2xl shadow-purple-500/10 border border-slate-200/50 hover:shadow-purple-500/20 transition-all duration-500">
              {/* Icon Container */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30 transform group-hover:-rotate-6 transition-transform duration-500">
                <Target className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              
              {/* Decorative Corner Element */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-2xl" />
              
              <div className="relative mt-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  Our Mission
                  <span className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To build scalable, ROI-driven digital solutions that help brands
                  grow, adapt, and lead in a competitive digital landscape.
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent rounded-b-3xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
