import { TrendingUp, ShieldCheck, Users, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import "./Hero.css";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  const paragraphs = [
    "Innovative market solutions designed for technology, healthcare, finance, and enterprise leaders who demand excellence.",
    "Transform your business with cutting-edge strategies tailored to your industry's unique challenges and opportunities.",
    "Empower your organization with data-driven insights and proven methodologies that drive measurable results.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % paragraphs.length);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden hero-section">
      {/* Background overlay image - fixed */}
      <div className="hero-background">
        <img
          src="/BackgroundOverlay.webp"
          alt="Background overlay"
          className="hero-background-image"
        />
        {/* Blue blend overlay */}
        <div className="hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent animate-slide-up tracking-tight">
            <span className="cursive-text">Accelerate</span> Your
            <br />
            Business <span className="cursive-text">Growth</span>
          </h1>

          <p
            key={textIndex}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light tracking-wide animate-fade-text"
          >
            {paragraphs[textIndex]}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/services"
              size="lg"
              className="  font-semibold rounded hover:bg-white/90 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:text-black"
            >
              Explore Our Services
              <span className="ml-2">→</span>
            </Button>

            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
