import { Shield, Users, TrendingUp, Sparkles, Zap } from "lucide-react";
import Container from "../common/Container";

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest communication and ethical execution in everything we do.",
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      glowColor: "rose",
      delay: "0"
    },
    {
      icon: Users,
      title: "Client-First",
      description: "We focus on long-term partnerships, not short-term wins.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "blue",
      delay: "200"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Every solution is designed to deliver measurable impact.",
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      glowColor: "violet",
      delay: "400"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-500" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <Container>
        {/* Ultra Premium Header */}
        <div className="relative max-w-4xl mx-auto text-center mb-24">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-xl mb-8 shadow-2xl shadow-primary/20 animate-float">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <p className="text-sm font-bold text-white uppercase tracking-[0.2em]">
              What We Stand For
            </p>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse delay-300" />
          </div>

          {/* Main Heading with Gradient */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Our Core
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Values
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse" />
            <div className="w-32 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-pulse delay-200" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-pink-500 to-pink-500 rounded-full" />
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            The principles that define how we work and collaborate.
          </p>
        </div>

        {/* Premium Value Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${value.delay}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-3xl scale-90 group-hover:scale-110`} />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 shadow-2xl hover:shadow-primary/20">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>

                  {/* Icon Container with 3D Effect */}
                  <div className="relative mb-8">
                    {/* Outer Glow Ring */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse`} />
                    
                    {/* Icon Box */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      
                      {/* Sparkle Effect */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                    </div>

                    {/* Connecting Line */}
                    <div className={`absolute top-full left-10 w-px h-8 bg-gradient-to-b ${value.gradient} opacity-30`} />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl" />
                </div>

                {/* Floating Particles */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-2 h-2 bg-gradient-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-60 animate-float-slow`} style={{ animationDelay: '0s' }} />
                  <div className={`w-1.5 h-1.5 bg-gradient-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-40 animate-float-slow absolute -top-8 -right-8`} style={{ animationDelay: '0.5s' }} />
                  <div className={`w-1 h-1 bg-gradient-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-50 animate-float-slow absolute -bottom-6 -left-6`} style={{ animationDelay: '1s' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center justify-center mt-20 gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse delay-200" />
          <div className="w-2 h-2 rounded-full bg-pink-500/50 animate-pulse delay-400" />
        </div>
      </Container>

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
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -20px); }
          66% { transform: translate(-20px, 20px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default CoreValues;
