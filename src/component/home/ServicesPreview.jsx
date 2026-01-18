import {
  Code2,
  TrendingUp,
  Palette,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Fast, scalable, conversion-focused websites built with modern tech.",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, ads, and growth strategies designed for measurable ROI.",
    icon: TrendingUp,
  },
  {
    title: "UI/UX Design",
    desc: "User-centered design systems that look great and convert better.",
    icon: Palette,
  },
  {
    title: "Brand Strategy",
    desc: "Clear positioning and messaging that builds trust and authority.",
    icon: Rocket,
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* SECTION HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          What We Do Best
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          High-impact digital solutions designed to grow your business.
        </p>

        {/* SERVICES GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                    <Icon size={26} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
