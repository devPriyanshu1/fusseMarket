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
    <section className="relative bg-gradient-to-b from-slate-50 via-slate-100 to-slate-900 overflow-hidden">
      <div className="relative py-16 md:py-28">
        <Container>

          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 px-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6">
              Our Journey
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              From humble beginnings to industry innovation
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative max-w-6xl mx-auto px-4">

            {/* CENTER VERTICAL LINE - Enhanced visibility */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30 shadow-sm" />

            <div className="space-y-16 md:space-y-24">
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
                    {/* DESKTOP VIEW */}
                    <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">

                      {/* LEFT CARD (EVEN) */}
                      {isEven && (
                        <div className="text-right pr-8 relative">
                          <div className="relative inline-block max-w-lg ml-auto">

                            {/* CARD */}
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
                              <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold mb-4 shadow-md`}>
                                {item.year}
                              </span>
                              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {item.title}
                              </h3>
                              <p className="text-slate-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* HORIZONTAL LINE */}
                          <div className={`absolute top-1/2 right-0 w-8 h-[3px] bg-gradient-to-r ${item.gradient} -translate-y-1/2 rounded-full shadow-sm`} />
                        </div>
                      )}

                      {/* RIGHT CARD (ODD) */}
                      {!isEven && (
                        <>
                          <div />
                          <div className="text-left pl-8 relative">
                            <div className="relative inline-block max-w-lg mr-auto">

                              {/* CARD */}
                              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
                                <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold mb-4 shadow-md`}>
                                  {item.year}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                  {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* HORIZONTAL LINE */}
                            <div className={`absolute top-1/2 left-0 w-8 h-[3px] bg-gradient-to-r ${item.gradient} -translate-y-1/2 rounded-full shadow-sm`} />
                          </div>
                        </>
                      )}
                    </div>

                    {/* CENTER ICON */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-10">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl ring-4 ring-white`}>
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* MOBILE VIEW */}
                    <div className="md:hidden pl-20 pr-4">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                        <span className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-bold mb-3 shadow-md`}>
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
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
