import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Affnet Consultants",
    role: "Business Consulting Firm",
    message:
      "Fuse Market helped us revamp our digital presence and improve lead quality. The results were visible within weeks.",
  },
  {
    name: "RVS Realty",
    role: "Real Estate Brand",
    message:
      "Their team understood our requirements clearly and delivered a modern, conversion-focused website on time.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-slate-600">
            Trusted by growing businesses across industries.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white border border-slate-200 rounded-2xl p-8
              shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full
              bg-primary text-white flex items-center justify-center shadow-md">
                <Quote size={18} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-slate-700 leading-relaxed mb-6">
                “{t.message}”
              </p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST FOOTER */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 mb-4">
            Join 500+ businesses that trust Fuse Market.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Start your project with us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
