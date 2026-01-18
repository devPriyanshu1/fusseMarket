import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1));
  };

  // Auto-reset if activeIndex exceeds projects length
  useEffect(() => {
    if (activeIndex >= projects.length) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 md:mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            <span
              className="text-sm font-semibold"
              style={{ color: "#8B5CF6" }}
            >
              Portfolio
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 px-4"
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Discover our innovative projects showcased in a dynamic gallery.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto">
         

         
          {/* Carousel Container - Mobile shows 1 centered, Desktop shows 3 */}
          <div className="md:overflow-hidden">
            {/* Mobile: Single centered image */}
            <div className="md:hidden flex justify-center mb-6 sm:mb-8">
              <div className="w-full max-w-md">
                <div
                  className="group relative rounded-2xl overflow-hidden bg-black h-[350px] sm:h-[400px]"
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(216, 77, 121, 0.3), 0 10px 30px rgba(180, 167, 214, 0.2)",
                  }}
                >
                  {/* IMAGE */}
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* GRADIENT OVERLAY */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
                      opacity: 0.85,
                    }}
                  />

                  {/* CONTENT */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                    <span
                      className="inline-block mb-3 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full w-fit"
                      style={{
                        background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                      }}
                    >
                      {projects[activeIndex].category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-200 mb-4 sm:mb-6 max-w-xl">
                      {projects[activeIndex].description}
                    </p>
                    <a
                      href={projects[activeIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:gap-3 transition-all duration-300 w-fit"
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      Visit Website <ArrowRight size={18} />
                    </a>
                  </div>

                  {/* Shine effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                      transform: "translateX(-100%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Desktop: Carousel with 3 images */}
            <div
              className="hidden md:flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-black h-[450px] sm:h-[500px] md:h-[550px]">
                    {/* IMAGE */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* GRADIENT OVERLAY - Always visible */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
                        opacity: 0.85,
                      }}
                    />

                    {/* CONTENT - Always visible */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                      <span
                        className="inline-block mb-3 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full w-fit"
                        style={{
                          background:
                            "linear-gradient(135deg, #8B5CF6, #EC4899)",
                        }}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-4 sm:mb-6 max-w-xl">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:gap-3 transition-all duration-300 w-fit"
                        style={{
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        Visit Website <ArrowRight size={18} />
                      </a>
                    </div>

                    {/* Shine effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                        transform: "translateX(-100%)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeIndex === i ? "32px" : "8px",
                  height: "8px",
                  background:
                    activeIndex === i
                      ? "linear-gradient(135deg, #8B5CF6, #EC4899)"
                      : "#cbd5e1",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
