const PageHero = ({ title, subtitle, image }) => {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-white/90 text-lg md:text-xl">
          {subtitle}
        </p>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center">
          <span className="animate-bounce text-white text-2xl">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
