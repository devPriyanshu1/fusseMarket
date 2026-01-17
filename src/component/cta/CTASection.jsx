import Button from "../common/Button";
import Container from "../common/Container";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </div>

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals and take your brand to the next level.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg" className="shadow-2xl">
              Get Started Today
              <span className="ml-2">→</span>
            </Button>

            <Button href="/services" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-2xl">
              View Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
