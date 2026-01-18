import {
  Search,
  ClipboardList,
  Zap,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "Understand your business goals, audience, and challenges.",
    icon: Search,
    number: "01",
  },
  {
    title: "Plan",
    desc: "Create a clear, data-driven strategy aligned with your vision.",
    icon: ClipboardList,
    number: "02",
  },
  {
    title: "Execute",
    desc: "Build, launch, and optimize using modern tools and best practices.",
    icon: Zap,
    number: "03",
  },
  {
    title: "Scale",
    desc: "Measure performance, refine strategy, and grow sustainably.",
    icon: TrendingUp,
    number: "04",
  },
];

const Process = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How We Work
          </h2>
          <p className="mt-4 text-slate-600">
            A simple, proven process that helps businesses grow with clarity
            and confidence.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* CONNECTING LINE (DESKTOP ONLY) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-slate-200" />
          <div className="hidden md:block absolute top-12 left-0 h-[2px] w-1/2 bg-primary" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white border border-slate-200 rounded-2xl p-8 text-center
                shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* STEP NUMBER */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2
                h-10 w-10 rounded-full bg-primary text-white
                flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>

                {/* ICON */}
                <div className="mt-8 mb-4 flex justify-center">
                  <div className="h-14 w-14 rounded-xl bg-primary/10
                  flex items-center justify-center text-primary">
                    <Icon size={26} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
