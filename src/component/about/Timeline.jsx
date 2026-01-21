import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Users,
  Trophy,
  Calendar,
  Star,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import Container from "../common/Container";

const timelineData = [
  {
    year: "November 2024",
    title: "The Beginning",
    description:
      "Fusse Market was established with a vision to bridge the gap between traditional marketing approaches and the digital revolution. Our founding team combined their experience to create something truly unique.",
    icon: Rocket,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "shadow-blue-500/50",
    bgGlow: "bg-blue-500/10",
  },
  {
    year: "December 2024",
    title: "First Client",
    description:
      "We secured our first major client, Affnet Consultants, marking the beginning of our professional journey in the digital marketing landscape.",
    icon: Users,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "shadow-purple-500/50",
    bgGlow: "bg-purple-500/10",
  },
  {
    year: "January 2025",
    title: "Expanding Services",
    description:
      "We expanded our offerings to include SEO strategies and content marketing, enabling more holistic digital growth solutions.",
    icon: Trophy,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "shadow-orange-500/50",
    bgGlow: "bg-orange-500/10",
  },
  {
    year: "February 2025",
    title: "Team Growth",
    description:
      "New specialists in paid advertising and graphic design joined us, strengthening our multi-channel delivery capabilities.",
    icon: Users,
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    glowColor: "shadow-emerald-500/50",
    bgGlow: "bg-emerald-500/10",
  },
  {
    year: "March 2025",
    title: "Looking Forward",
    description:
      "We continue expanding into emerging digital territories while staying focused on measurable results and client success.",
    icon: Calendar,
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
    glowColor: "shadow-indigo-500/50",
    bgGlow: "bg-indigo-500/10",
  },
  {
    year: "July 2025",
    title: "SaaS CRM Launch",
    description:
      "Our first SaaS CRM launched with Yathath Ventures, built to streamline workflows, automate growth, and enable smarter decisions.",
    icon: Star,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    glowColor: "shadow-pink-500/50",
    bgGlow: "bg-pink-500/10",
  },
];

const Timeline = () => {
  const itemsRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-200 to-slate-900">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        
        {/* Animated Stars (only in dark section) */}
        <div className="absolute inset-0 top-1/2">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative py-32">
        <Container>
          {/* Ultra Premium Header */}
          <div className="relative max-w-4xl mx-auto text-center mb-24">
            {/* Floating Badge */}
           

            {/* Main Heading */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
              <span>
                Our
              </span>
              <br />
              <span className="relative inline-block">
                <span>
                  Journey
                </span>
                {/* Animated Underline */}
                {/* <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full" /> */}

              </span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From humble beginnings to industry innovation
            </p>
          </div>

          {/* Premium Interactive Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Animated Vertical Line with Gradient */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-purple-500/50 to-blue-500/50 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>

            {/* Timeline Items */}
            <div className="space-y-24 md:space-y-32">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                const isVisible = visibleItems.includes(index);
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    ref={(el) => (itemsRef.current[index] = el)}
                    className={`relative transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Desktop Layout (Alternating Left/Right) */}
                    <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
                      {/* Left Side Content (for even indices) */}
                      {isEven && (
                        <div className="text-right">
                          <div className="group relative inline-block w-full max-w-lg ml-auto">
                            {/* Glow Effect */}
                            <div className={`absolute -inset-4 ${item.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-110`} />
                            
                            {/* Card */}
                            <div className="relative bg-white backdrop-blur-2xl rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 shadow-2xl hover:shadow-primary/20">
                              {/* Shine Effect */}
                              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              </div>

                              {/* Year Badge */}
                              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} mb-4 shadow-lg ${item.glowColor}`}>
                                <Calendar className="w-4 h-4 text-white" />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">
                                  {item.year}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300">
                                {item.title}
                              </h3>

                              {/* Description */}
                              <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                                {item.description}
                              </p>

                              {/* Expand Button */}
                              <button className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                                <span>Learn more</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>

                              {/* Corner Decoration */}
                              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} opacity-5 rounded-bl-full blur-2xl`} />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Right Side Content (for odd indices) */}
                      {!isEven && (
                        <>
                          {/* Empty space on left for odd items */}
                          <div />
                          <div className="text-left">
                            <div className="group relative inline-block w-full max-w-lg mr-auto">
                              {/* Glow Effect */}
                              <div className={`absolute -inset-4 ${item.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-110`} />
                              
                              {/* Card */}
                              <div className="relative bg-white backdrop-blur-2xl rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 shadow-2xl hover:shadow-primary/20">
                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Year Badge */}
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} mb-4 shadow-lg ${item.glowColor}`}>
                                  <Calendar className="w-4 h-4 text-white" />
                                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                                    {item.year}
                                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300">
                                  {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                                  {item.description}
                                </p>

                                {/* Expand Button */}
                                <button className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                                  <span>Learn more</span>
                                  <ArrowRight className="w-4 h-4" />
                                </button>

                                {/* Corner Decoration */}
                                <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-br-full blur-2xl`} />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden pl-20">
                      <div className="group relative">
                        {/* Glow Effect */}
                        <div className={`absolute -inset-4 ${item.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                        
                        {/* Card */}
                        <div className="relative bg-white backdrop-blur-2xl rounded-3xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-500 shadow-2xl">
                          {/* Year Badge */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} mb-3 shadow-lg text-xs`}>
                            <Calendar className="w-3 h-3 text-white" />
                            <span className="font-bold text-white uppercase tracking-wider">
                              {item.year}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon (Absolute Positioned) */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
                      {/* Outer Glow Ring */}
                      <div className={`absolute -inset-2 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-50 transition-all duration-500 animate-pulse`} />
                      
                      {/* Icon Container */}
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-2xl ${item.glowColor} transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer border-4 border-white`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        
                        {/* Sparkle Effect */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100 animate-ping" />
                        
                        {/* Pulse Ring */}
                        {isHovered && (
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-ping" />
                        )}
                      </div>

                      {/* Connecting Line Decoration */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-full ml-4' : 'right-full mr-4'} w-12 h-0.5 bg-gradient-to-r ${item.gradient}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="flex items-center justify-center mt-20 gap-3">
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-blue-500/50 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </Container>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
