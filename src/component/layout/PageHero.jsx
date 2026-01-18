import Container from "../common/Container";

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,44,85,0.18),transparent_60%)]" />

      <Container className="relative z-10 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-white/80 text-lg">
          {subtitle}
        </p>

        {/* Depth divider */}
        <div className="mt-14 flex justify-center">
          <span className="h-[3px] w-16 rounded-full bg-primary" />
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
