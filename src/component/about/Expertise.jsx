import {
  Code,
  Paintbrush,
  TrendingUp,
  Layers,
  BarChart3,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Container from "../common/Container";

const expertise = [
  {
    title: "Web Development",
    description:
      "Fast, scalable, conversion-focused websites built with modern tech.",
    icon: Code,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    hoverGradient: "group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-indigo-500",
    bgGlow: "bg-cyan-500/20",
    borderGlow: "group-hover:shadow-cyan-500/50",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design systems that look great and convert better.",
    icon: Paintbrush,
    gradient: "from-pink-500 via-rose-500 to-red-600",
    hoverGradient: "group-hover:from-pink-400 group-hover:via-rose-400 group-hover:to-red-500",
    bgGlow: "bg-pink-500/20",
    borderGlow: "group-hover:shadow-pink-500/50",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, ads, and growth strategies designed for measurable ROI.",
    icon: TrendingUp,
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    hoverGradient: "group-hover:from-emerald-400 group-hover:via-green-400 group-hover:to-teal-500",
    bgGlow: "bg-emerald-500/20",
    borderGlow: "group-hover:shadow-emerald-500/50",
  },
  {
    title: "Brand Strategy",
    description:
      "Clear positioning and messaging that builds trust and authority.",
    icon: Layers,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    hoverGradient: "group-hover:from-violet-400 group-hover:via-purple-400 group-hover:to-fuchsia-500",
    bgGlow: "bg-violet-500/20",
    borderGlow: "group-hover:shadow-violet-500/50",
  },
  {
    title: "Performance Optimization",
    description:
      "Continuous improvement through testing, data, and refinement.",
    icon: BarChart3,
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    hoverGradient: "group-hover:from-orange-400 group-hover:via-amber-400 group-hover:to-yellow-500",
    bgGlow: "bg-orange-500/20",
    borderGlow: "group-hover:shadow-orange-500/50",
  },
  {
    title: "SEO & Analytics",
    description:
      "Data-driven insights to track performance and guide decisions.",
    icon: Search,
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    hoverGradient: "group-hover:from-blue-400 group-hover:via-indigo-400 group-hover:to-purple-500",
    bgGlow: "bg-blue-500/20",
    borderGlow: "group-hover:shadow-blue-500/50",
  },
];

const Expertise = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container>
        {/* Ultra Premium Header */}
        <div className="relative max-w-4xl mx-auto text-center mb-20">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 backdrop-blur-sm mb-6 shadow-lg animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              What We Do Best
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expertise
              </span>
              {/* Underline Decoration */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full" />
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions crafted with precision, powered by innovation
          </p>
        </div>

        {/* Premium Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect Background */}
                <div className={`absolute -inset-1 ${item.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-105`} />
                
                {/* Main Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 shadow-xl group-hover:shadow-2xl overflow-hidden">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    {/* Outer Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                    
                    {/* Icon Box */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} ${item.hoverGradient} rounded-2xl flex items-center justify-center shadow-lg ${item.borderGlow} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      
                      {/* Sparkle */}
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                    </div>

                    {/* Connecting Dots */}
                    <div className="absolute -bottom-3 left-8 flex gap-1">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-60 transition-all duration-300`} />
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-60 transition-all duration-300 delay-75`} />
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-60 transition-all duration-300 delay-150`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                      <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        Learn more
                      </span>
                      <ArrowRight className={`w-4 h-4 bg-gradient-to-r ${item.gradient} text-transparent`} style={{ color: 'inherit' }} />
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-slate-100/50 to-transparent rounded-full blur-2xl" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-40 animate-float-particle-1`} />
                  <div className={`w-1.5 h-1.5 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-30 animate-float-particle-2 absolute -top-8 -right-8`} />
                  <div className={`w-1 h-1 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-40 animate-float-particle-3 absolute -bottom-6 -left-6`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm">
            Need something specific?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Let's talk about your project
            </a>
          </p>
        </div>
      </Container>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -15px); }
          66% { transform: translate(-15px, 15px); }
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-20px, 20px); }
          66% { transform: translate(20px, -10px); }
        }
        @keyframes float-particle-3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(10px, 20px); }
          66% { transform: translate(-15px, -15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-particle-1 {
          animation: float-particle-1 6s ease-in-out infinite;
        }
        .animate-float-particle-2 {
          animation: float-particle-2 7s ease-in-out infinite;
        }
        .animate-float-particle-3 {
          animation: float-particle-3 8s ease-in-out infinite;
        }
        .delay-75 { animation-delay: 75ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
};

export default Expertise;
