import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Users,
  Trophy,
  Calendar,
  Star,
} from "lucide-react";
import Container from "../common/Container";

const timelineData = [
  {
    year: "November 2024",
    title: "The Beginning",
    description:
      "Fusse Market was established with a vision to bridge the gap between traditional marketing approaches and the digital revolution.",
    icon: Rocket,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    year: "December 2024",
    title: "First Client",
    description:
      "We secured our first major client, Affnet Consultants, marking the beginning of our professional journey.",
    icon: Users,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    year: "January 2025",
    title: "Expanding Services",
    description:
      "We expanded our offerings to include SEO strategies and content marketing.",
    icon: Trophy,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    year: "February 2025",
    title: "Team Growth",
    description:
      "New specialists joined us, strengthening our delivery capabilities.",
    icon: Users,
    gradient: "from-emerald-500 via-green-500 to-lime-500",
  },
  {
    year: "March 2025",
    title: "Looking Forward",
    description:
      "We continue expanding into emerging digital territories.",
    icon: Calendar,
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
  },
  {
    year: "July 2025",
    title: "SaaS CRM Launch",
    description:
      "Our first SaaS CRM launched to streamline workflows and automate growth.",
    icon: Star,
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
];

const Timeline = () => {
  const itemsRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-slate-200 to-slate-900 overflow-hidden">
      <div className="relative py-28">
        <Container>

          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-6xl font-black text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600">
              From humble beginnings to industry innovation
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative max-w-6xl mx-auto">

            {/* CENTER VERTICAL LINE */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-primary/40" />

            <div className="space-y-24">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                const isVisible = visibleItems.includes(index);

                return (
                  <div
                    key={index}
                    ref={(el) => (itemsRef.current[index] = el)}
                    className={`relative transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">

                      {/* LEFT CARD (EVEN) */}
                      {isEven && (
                        <div className="text-right pr-8 relative">
                          <div className="relative inline-block max-w-lg ml-auto">

                            {/* CARD */}
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                              <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold mb-4`}>
                                {item.year}
                              </span>
                              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {item.title}
                              </h3>
                              <p className="text-slate-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* HORIZONTAL LINE (CARD → CENTER) with gradient */}
                          <div className={`absolute top-1/2 right-0 w-8 h-[3px] bg-gradient-to-r ${item.gradient} -translate-y-1/2 rounded-full`} />
                        </div>
                      )}

                      {/* RIGHT CARD (ODD) */}
                      {!isEven && (
                        <>
                          <div />
                          <div className="text-left pl-8 relative">
                            <div className="relative inline-block max-w-lg mr-auto">

                              {/* CARD */}
                              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                                <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold mb-4`}>
                                  {item.year}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                  {item.title}
                                </h3>
                                <p className="text-slate-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* HORIZONTAL LINE (CENTER → CARD) with gradient */}
                            <div className={`absolute top-1/2 left-0 w-8 h-[3px] bg-gradient-to-r ${item.gradient} -translate-y-1/2 rounded-full`} />
                          </div>
                        </>
                      )}
                    </div>

                    {/* CENTER ICON */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* MOBILE VIEW */}
                    <div className="md:hidden pl-20">
                      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
                        <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold mb-3`}>
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Timeline;
