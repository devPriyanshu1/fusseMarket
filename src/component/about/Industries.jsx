import Container from "../common/Container";

const industries = [
  {
    title: "E-Commerce",
    description:
      "Conversion-focused storefronts, performance marketing, and scalable platforms built for rapid growth.",
  },
  {
    title: "Healthcare",
    description:
      "Trust-first digital experiences designed for compliance, accessibility, and patient engagement.",
  },
  {
    title: "FinTech",
    description:
      "Secure, high-performance solutions for financial products, platforms, and digital services.",
  },
  {
    title: "Real Estate",
    description:
      "Lead-driven digital ecosystems for property brands, developers, and real estate platforms.",
  },
  {
    title: "SaaS",
    description:
      "Product-led growth systems, onboarding experiences, and scalable marketing for SaaS teams.",
  },
];

const Industries = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <Container>

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We partner with forward-thinking brands in industries where
            performance, trust, and scalability are non-negotiable.
          </p>
        </div>

        {/* INDUSTRY LIST — PREMIUM NON-CARD */}
        <div className="space-y-16 max-w-5xl">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[140px_1fr] gap-10 items-start"
            >
              {/* LEFT — LARGE INDEX */}
              <div className="text-6xl font-extrabold text-slate-200 group-hover:text-primary/30 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* RIGHT — CONTENT */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* SUBTLE ACCENT LINE */}
                <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-primary to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

      </Container>

      {/* BACKGROUND DECORATION (VERY SUBTLE) */}
      <div className="pointer-events-none absolute top-1/2 right-[-200px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
    </section>
  );
};

export default Industries;
