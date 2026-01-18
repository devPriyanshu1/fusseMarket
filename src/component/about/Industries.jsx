import {
  ShoppingCart,
  HeartPulse,
  Utensils,
  Cpu,
  GraduationCap,
  Briefcase,
  Leaf,
  Home,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Container from "../common/Container";

const industries = [
  {
    title: "E-Commerce & Retail",
    description: "Driving sales and building loyal customer bases.",
    icon: ShoppingCart,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgPattern: "bg-blue-500/5",
    glowColor: "shadow-blue-500/30",
  },
  {
    title: "Healthcare",
    description: "Connecting providers with patients through digital channels.",
    icon: HeartPulse,
    gradient: "from-red-500 via-rose-500 to-pink-500",
    bgPattern: "bg-red-500/5",
    glowColor: "shadow-red-500/30",
  },
  {
    title: "Food & Hospitality",
    description: "Creating enticing digital experiences for guests.",
    icon: Utensils,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgPattern: "bg-orange-500/5",
    glowColor: "shadow-orange-500/30",
  },
  {
    title: "Technology",
    description: "Helping tech companies communicate complex solutions.",
    icon: Cpu,
    gradient: "from-indigo-500 via-purple-500 to-violet-500",
    bgPattern: "bg-indigo-500/5",
    glowColor: "shadow-indigo-500/30",
  },
  {
    title: "Education",
    description: "Building engaging platforms for learning institutions.",
    icon: GraduationCap,
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    bgPattern: "bg-emerald-500/5",
    glowColor: "shadow-emerald-500/30",
  },
  {
    title: "Professional Services",
    description: "Elevating service providers' digital presence.",
    icon: Briefcase,
    gradient: "from-slate-600 via-gray-600 to-zinc-600",
    bgPattern: "bg-slate-500/5",
    glowColor: "shadow-slate-500/30",
  },
  {
    title: "Health & Wellness",
    description: "Connecting wellness brands with health-conscious consumers.",
    icon: Leaf,
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    bgPattern: "bg-teal-500/5",
    glowColor: "shadow-teal-500/30",
  },
  {
    title: "Real Estate",
    description: "Showcasing properties and building agent visibility.",
    icon: Home,
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    bgPattern: "bg-fuchsia-500/5",
    glowColor: "shadow-fuchsia-500/30",
  },
];

const Industries = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container>
        {/* Ultra Premium Header */}
        <div className="relative max-w-4xl mx-auto text-center mb-20">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 border border-primary/20 backdrop-blur-sm mb-6 shadow-lg animate-float">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Delivering Impact Across Diverse Sectors
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Industries We
            </span>{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Serve
              </span>
              {/* Animated Underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full animate-pulse" />
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tailored digital strategies for every industry, powered by deep expertise
          </p>
        </div>

        {/* Premium Industry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 ${industry.bgPattern} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-105`} />
                
                {/* Main Card */}
                <div className="relative h-full bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                  {/* Content Container */}
                  <div className="relative flex flex-col items-center text-center gap-4">
                    {/* Icon Container */}
                    <div className="relative">
                      {/* Outer Glow Ring */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 animate-pulse`} />
                      
                      {/* Icon Box */}
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center shadow-lg ${industry.glowColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                        
                        {/* Sparkle Effect */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300 leading-snug">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {industry.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className={`text-xs font-semibold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}>
                        Explore
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${industry.gradient} opacity-5 rounded-tl-full`} />
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <span className="text-[10px] font-bold text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bottom Glow Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
                </div>

                {/* Floating Particle Effects */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.gradient} rounded-full opacity-0 group-hover:opacity-50 animate-float-particle-1`} />
                  <div className={`w-1 h-1 bg-gradient-to-r ${industry.gradient} rounded-full opacity-0 group-hover:opacity-40 animate-float-particle-2 absolute -top-6 -right-6`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 relative">
          <div className="inline-flex items-center gap-2 text-slate-600">
            <span className="text-sm">Don't see your industry?</span>
            <a 
              href="#contact" 
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group/link"
            >
              Let's discuss your needs
              <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </Container>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -12px); }
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-particle-1 {
          animation: float-particle-1 4s ease-in-out infinite;
        }
        .animate-float-particle-2 {
          animation: float-particle-2 5s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Industries;
