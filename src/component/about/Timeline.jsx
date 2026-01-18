import { useEffect, useRef } from "react";
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
      "Fusse Market was established with a vision to bridge the gap between traditional marketing approaches and the digital revolution. Our founding team combined their experience to create something truly unique.",
    icon: Rocket,
  },
  {
    year: "December 2024",
    title: "First Client",
    description:
      "We secured our first major client, Affnet Consultants, marking the beginning of our professional journey in the digital marketing landscape.",
    icon: Users,
  },
  {
    year: "January 2025",
    title: "Expanding Services",
    description:
      "We expanded our offerings to include SEO strategies and content marketing, enabling more holistic digital growth solutions.",
    icon: Trophy,
  },
  {
    year: "February 2025",
    title: "Team Growth",
    description:
      "New specialists in paid advertising and graphic design joined us, strengthening our multi-channel delivery capabilities.",
    icon: Users,
  },
  {
    year: "March 2025",
    title: "Looking Forward",
    description:
      "We continue expanding into emerging digital territories while staying focused on measurable results and client success.",
    icon: Calendar,
  },
  {
    year: "July 2025",
    title: "SaaS CRM Launch",
    description:
      "Our first SaaS CRM launched with Yathath Ventures, built to streamline workflows, automate growth, and enable smarter decisions.",
    icon: Star,
  },
];

const Timeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 120}ms`;
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section bg-slate-50">
      <Container>
        {/* Timeline Header with underline */}
        <div className="group text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Journey
            </h2>
            <span
              className="
                absolute left-1/2 -bottom-2 h-[3px] w-12
                -translate-x-1/2 rounded-full bg-primary
                transition-all duration-300
                group-hover:w-20
              "
            />
          </div>

          <p className="mt-4 text-slate-600">
            Milestones that shaped our growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto space-y-12">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="
                  relative pl-16 opacity-0 translate-y-6
                  transition-all duration-700
                "
              >
                {/* Dot */}
                <div
                  className="
                    absolute left-1 top-1.5 h-8 w-8 rounded-full
                    bg-primary text-white flex items-center justify-center
                    transition-all duration-300
                    hover:shadow-[0_0_0_6px_rgba(255,44,85,0.15)]
                  "
                >
                  <Icon size={14} />
                </div>

                {/* Card */}
                <div
                  className="
                    bg-white rounded-2xl border border-slate-200 p-6
                    shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <span className="text-xs font-semibold text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
