import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Card from "../common/Card";

const testimonials = [
  {
    name: "Affnet Consultants",
    role: "Business Consulting Firm",
    message:
      "Fuse Market transformed our online presence with a sleek website and powerful SEO strategy. We saw real growth within weeks.",
    rating: 5,
    avatar: "👔",
  },
  {
    name: "RVS Realty",
    role: "Real Estate Brand",
    message:
      "Working with Fuse Market was seamless. Their team understood our vision and delivered beyond expectations.",
    rating: 5,
    avatar: "🏢",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-light to-white">
      <Container>
        <SectionHeader
          title="What Clients Say"
          subtitle="Trusted by growing brands across industries"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="relative group overflow-hidden"
              hover={true}
              shadow="lg"
              rounded="2xl"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 text-6xl text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                “
              </div>

              <div className="relative z-10">
                <StarRating rating={t.rating} />

                <p className="text-slate-700 mb-6 text-lg italic leading-relaxed">
                  {t.message}
                </p>

                <div className="flex items-center border-t pt-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl mr-4">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Ready to join our satisfied clients?</p>
          <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
            Read More Reviews →
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
