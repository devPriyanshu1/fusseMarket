import { useState } from "react";
import { ArrowRight } from "lucide-react";

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

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative inline-block">
            Our Projects
            <span className="block h-1 w-16 bg-primary mx-auto mt-3 rounded-full" />
          </h2>
          <p className="mt-4 text-slate-600">
            Discover our innovative projects showcased in a dynamic gallery.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${activeIndex * 360}px)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative min-w-[340px] h-[420px] rounded-2xl overflow-hidden shadow-lg bg-black"
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="inline-block mb-2 text-xs font-semibold bg-primary/90 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-200 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition"
                  >
                    Visit Website <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="flex justify-center gap-3 mt-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  activeIndex === i
                    ? "bg-primary scale-125"
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
