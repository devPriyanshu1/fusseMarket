import { Code, Paintbrush, TrendingUp, BarChart3 } from "lucide-react";
import Container from "../common/Container";

const expertise = [
  { icon: Code, title: "Web Development" },
  { icon: Paintbrush, title: "UI / UX Design" },
  { icon: TrendingUp, title: "Digital Marketing" },
  { icon: BarChart3, title: "Performance & Analytics" },
];

const Expertise = () => {
  return (
    <section className="relative py-32 bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We Do Best
            </h2>

            <p className="text-lg text-slate-600 mb-10">
              We combine strategy, creativity, and technology to craft digital
              experiences that convert and scale.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {expertise.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-slate-800">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PREMIUM BLUISH CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">

            {/* BLUISH NAVY GRADIENT (MAIN FIX) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#1e293b]" />

            {/* SOFT DEPTH OVERLAY (NOT BLACK) */}
            <div className="absolute inset-0 bg-[#020617]/20" />

            {/* SUBTLE LIGHT BLOOM */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_60%)]" />

            {/* CONTENT */}
            <div className="relative p-12">

              {/* ABOUT US BADGE */}
              <span className="inline-flex items-center px-4 py-1.5 mb-5 text-xs font-semibold tracking-wide text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-400/20">
                About Us
              </span>

              <h3 className="text-3xl font-bold text-white mb-4">
                Strategy-led execution
              </h3>

              <p className="text-slate-200 leading-relaxed text-lg">
                Every solution we deliver is backed by research, data, and a clear
                understanding of your business goals.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Expertise;
