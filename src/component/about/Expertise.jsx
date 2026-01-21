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
        {/* FIX 1: items-stretch */}
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">

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

          {/* RIGHT PREMIUM CARD */}
          {/* FIX 2: h-full + flex */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full flex">

            {/* BLUISH NAVY GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#1e293b]" />

            {/* SOFT DEPTH OVERLAY */}
            <div className="absolute inset-0 bg-[#020617]/20" />

            {/* SUBTLE LIGHT BLOOM */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_60%)]" />

            {/* CONTENT */}
            {/* FIX 3: flex + justify-center */}
            <div className="relative p-12 flex flex-col justify-center">
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
