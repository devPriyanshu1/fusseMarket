import { useEffect, useRef } from "react";
import PageHero from "../component/layout/PageHero";
import VisionMission from "../component/about/VisionMission";
import CoreValues from "../component/about/CoreValues";
import Expertise from "../component/about/Expertise";
import Industries from "../component/about/Industries";
import Timeline from "../component/about/Timeline";
import { Sparkles, TrendingUp, Award, Users } from "lucide-react";

const About = () => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Particle animation for hero background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight * 0.7, 600);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.3;
        
        const colors = [
          "rgba(236, 72, 153, ",  // pink
          "rgba(168, 85, 247, ",  // purple
          "rgba(59, 130, 246, ",  // blue
          "rgba(14, 165, 233, ",  // cyan
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color + this.opacity + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;

      const floatingElements = hero.querySelectorAll(".parallax-float");
      floatingElements.forEach((el, index) => {
        const speed = (index + 1) * 0.5;
        el.style.transform = 
          `translate(${xPercent * speed}px, ${yPercent * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Premium Animated Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

        {/* Floating Gradient Orbs (Parallax) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl parallax-float transition-transform duration-300 ease-out" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl parallax-float transition-transform duration-300 ease-out" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl parallax-float transition-transform duration-300 ease-out" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Badge */}
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 opacity-0 animate-fade-in-down"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              About Us
            </span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
          </div>

          {/* Main Title */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fuse Market
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Transforming Businesses Through Digital Innovation
          </p>

          {/* Decorative Line */}
          <div 
            className="flex items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-0 animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll Down</span>
              <svg 
                className="w-6 h-6 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Floating Stats Bar - Premium Touch */}
      <div className="relative z-20 -mt-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden backdrop-blur-xl">
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200">
              {/* Stat 1 */}
              <div className="group bg-white p-6 md:p-8 text-center hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-500 cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-500 mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  Projects Delivered
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group bg-white p-6 md:p-8 text-center hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-transparent transition-all duration-500 cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  30+
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group bg-white p-6 md:p-8 text-center hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-transparent transition-all duration-500 cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Award className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  Industries Served
                </div>
              </div>

              {/* Stat 4 */}
              <div className="group bg-white p-6 md:p-8 text-center hover:bg-gradient-to-br hover:from-orange-500/5 hover:to-transparent transition-all duration-500 cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Sections with Premium Transitions */}
      <div className="relative">
        {/* Section 1: Vision & Mission */}
        <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <VisionMission />
        </div>

        {/* Premium Divider 1 */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div 
                  className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" 
                  style={{ animationDelay: '200ms' }}
                />
                <div 
                  className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" 
                  style={{ animationDelay: '400ms' }}
                />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>
          </div>
        </div>

        {/* Section 2: Core Values */}
        <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <CoreValues />
        </div>

        {/* Premium Divider 2 with Floating Elements */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div 
            className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
          
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl mb-4"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Our Capabilities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Expertise */}
        <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <Expertise />
        </div>

        {/* Premium Divider 3 */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white" />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
            </div>
          </div>
        </div>

        {/* Section 4: Industries */}
        <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <Industries />
        </div>

        {/* Premium Transition to Timeline */}
        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200" />
          
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 shadow-2xl"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-[0.2em]">
                Our Story
              </span>
              <div 
                className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" 
                style={{ animationDelay: '300ms' }}
              />
            </div>
          </div>
        </div>

        {/* Section 5: Timeline */}
        <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <Timeline />
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div 
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow and succeed in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white font-bold shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
              <TrendingUp className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <span>View Our Work</span>
              <Award className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
