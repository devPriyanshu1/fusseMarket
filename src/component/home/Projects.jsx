import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Affnet Consultants",
    category: "Web Development",
    description:
      "Website for a real estate consulting firm featuring modern UI and performance optimization.",
    image: "/images/projects/affnet.jpg",
    link: "https://www.affnetconsultants.com/",
  },
  {
    title: "College Compass",
    category: "Social Media Management",
    description:
      "Instagram growth and branding for an education-focused platform.",
    image: "/images/projects/college-compass.jpg",
    link: "https://www.instagram.com/college.compass/",
  },
  {
    title: "RVS Realty",
    category: "Web Development",
    description:
      "Real estate website focused on property discovery and lead generation.",
    image: "/images/projects/rvs.jpg",
    link: "https://www.rvsrealty.com/",
  },
  {
    title: "Yatharth Ventures",
    category: "Business Website",
    description:
      "Corporate website designed to build trust and showcase services.",
    image: "/images/projects/yatharth.jpg",
    link: "https://www.yatharthventures.com/",
  },
  {
    title: "Ginni Interior",
    category: "Brand Website",
    description:
      "Interior design portfolio website with premium visual storytelling.",
    image: "/images/projects/ginni.jpg",
    link: "https://www.ginniinterior.com/",
  },
  {
    title: "Ginni Interior (Instagram)",
    category: "Social Media",
    description:
      "Instagram presence highlighting interior projects and brand aesthetics.",
    image: "/images/projects/ginni-instagram.jpg",
    link: "https://www.instagram.com/ginni_interior/",
  },
  {
    title: "Madhavi Enterprises",
    category: "Corporate Website",
    description:
      "Business website designed for credibility and lead conversion.",
    image: "/images/projects/madhavi.jpg",
    link: "https://madhavienterprises.com/",
  },
  {
    title: "Yatharth CRM",
    category: "SaaS Platform",
    description:
      "Custom CRM built to streamline internal operations and sales workflows.",
    image: "/images/projects/yatharth-crm.jpg",
    link: "https://crm.yatharthventures.com/",
  },
  {
    title: "Yatharth Ventures (Instagram)",
    category: "Social Media",
    description:
      "Instagram branding and content strategy for a growing business.",
    image: "/images/projects/yatharth-instagram.jpg",
    link: "https://www.instagram.com/yatharthventures2/",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #b4a7d6, transparent)" }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #d84d79, transparent)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 md:mb-6"
            style={{
              background: "rgba(216, 77, 121, 0.1)",
              border: "1px solid rgba(216, 77, 121, 0.3)",
            }}
          >
            <span
              className="text-sm font-semibold"
              style={{ color: "#d84d79" }}
            >
              Portfolio
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 px-4"
            style={{ color: "#2d1e2e" }}
          >
            Our Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Explore our portfolio of innovative digital solutions that drive
            real results.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-20 items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
            style={{ border: "1px solid rgba(216, 77, 121, 0.2)" }}
            aria-label="Previous project"
          >
            <ChevronLeft
              size={24}
              style={{ color: "#d84d79" }}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-20 items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
            style={{ border: "1px solid rgba(216, 77, 121, 0.2)" }}
            aria-label="Next project"
          >
            <ChevronRight
              size={24}
              style={{ color: "#d84d79" }}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          {/* Carousel Container */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Mobile: Single centered card */}
            <div className="md:hidden">
              <div className="relative">
                <div
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 mx-auto"
                  style={{
                    maxWidth: "500px",
                    height: "420px",
                    boxShadow:
                      "0 20px 60px rgba(216, 77, 121, 0.25), 0 10px 30px rgba(180, 167, 214, 0.15)",
                  }}
                >
                  {/* IMAGE */}
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* GRADIENT OVERLAY */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(45, 30, 46, 0.98) 0%, rgba(45, 30, 46, 0.7) 50%, transparent 100%)",
                    }}
                  />

                  {/* CONTENT */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <span
                      className="inline-block mb-3 text-xs font-semibold px-3 py-1.5 rounded-full w-fit"
                      style={{
                        background: "#d84d79",
                        boxShadow: "0 4px 12px rgba(216, 77, 121, 0.4)",
                      }}
                    >
                      {projects[activeIndex].category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 leading-tight">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-sm text-slate-200 mb-4 line-clamp-2">
                      {projects[activeIndex].description}
                    </p>
                    <a
                      href={projects[activeIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold w-fit group/link"
                      style={{ color: "#d84d79" }}
                    >
                      <span className="bg-white px-4 py-2 rounded-full group-hover/link:shadow-lg transition-all">
                        Visit Website
                      </span>
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>

                  {/* Shine effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                      transform: "translateX(-100%)",
                      animation: "shine 3s infinite",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Desktop: Three-card carousel */}
            <div className="hidden md:block relative">
              <div
                className="flex gap-6 transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(calc(-${activeIndex * (100 / 3)}% - ${activeIndex * 1.5}rem))`,
                }}
              >
                {projects.map((project, index) => {
                  const isActive = index === activeIndex;
                  const isPrev = index === activeIndex - 1;
                  const isNext = index === activeIndex + 1;
                  const isVisible = isActive || isPrev || isNext;

                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 transition-all duration-700"
                      style={{
                        width: "calc(33.333% - 1rem)",
                        opacity: isVisible ? 1 : 0.4,
                        transform: isActive ? "scale(1.05)" : "scale(0.95)",
                      }}
                    >
                      <div
                        className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer"
                        style={{
                          height: "500px",
                          boxShadow: isActive
                            ? "0 25px 70px rgba(216, 77, 121, 0.3), 0 15px 40px rgba(180, 167, 214, 0.2)"
                            : "0 15px 40px rgba(0, 0, 0, 0.15)",
                        }}
                        onClick={() => !isAnimating && setActiveIndex(index)}
                      >
                        {/* IMAGE */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* GRADIENT OVERLAY */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(45, 30, 46, 0.98) 0%, rgba(45, 30, 46, 0.7) 50%, transparent 100%)",
                          }}
                        />

                        {/* CONTENT */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                          <span
                            className="inline-block mb-3 text-xs font-semibold px-3 py-1.5 rounded-full w-fit"
                            style={{
                              background: "#d84d79",
                              boxShadow: "0 4px 12px rgba(216, 77, 121, 0.4)",
                            }}
                          >
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-bold mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-200 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold w-fit group/link"
                            style={{ color: "#d84d79" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="bg-white px-4 py-2 rounded-full group-hover/link:shadow-lg transition-all">
                              Visit Website
                            </span>
                            <ExternalLink
                              size={16}
                              className="group-hover/link:translate-x-1 transition-transform"
                            />
                          </a>
                        </div>

                        {/* Shine effect */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-2 mt-8 md:mt-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => !isAnimating && setActiveIndex(i)}
                disabled={isAnimating}
                className="transition-all duration-300 rounded-full hover:scale-110 disabled:cursor-not-allowed"
                style={{
                  width: activeIndex === i ? "40px" : "10px",
                  height: "10px",
                  background: activeIndex === i ? "#d84d79" : "#cbd5e1",
                  boxShadow:
                    activeIndex === i
                      ? "0 4px 12px rgba(216, 77, 121, 0.4)"
                      : "none",
                }}
                aria-label={`Go to project ${i + 1}`}
                aria-current={activeIndex === i}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
              style={{ border: "1px solid rgba(216, 77, 121, 0.2)" }}
              aria-label="Previous project"
            >
              <ChevronLeft
                size={24}
                style={{ color: "#d84d79" }}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
              style={{ border: "1px solid rgba(216, 77, 121, 0.2)" }}
              aria-label="Next project"
            >
              <ChevronRight
                size={24}
                style={{ color: "#d84d79" }}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* CSS for shine animation */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
