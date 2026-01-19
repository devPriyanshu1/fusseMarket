import { TrendingUp, ShieldCheck, Users, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import "./Hero.css";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  return (
    <section className="relative w-full min-h-[91vh] flex items-center justify-center text-white overflow-hidden [clip-path:polygon(0_0,100%_0,100%_95%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]">
      {/* Background overlay image - fixed */}
      <div className="hero-background">
        <img
          src="/BackgroundOverlay.png"
          alt="Background overlay"
          className="hero-background-image"
        />
        {/* Gradient overlay with theme colors */}
        <div className="hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in space-y-6 md:space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white animate-slide-up tracking-tight">
            Build Your
            <br />
            <span
              className="cursive-text"
              style={{ color: "var(--color-primary)" }}
            >
              Future
            </span>{" "}
            Today
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4 md:pt-6">
            <button
              href="/services"
              size="lg"
              className="inline-flex items-center justify-center px-6 py-3 bg-white accent/90 text-black font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Discover Services
              <span className="ml-2">→</span>
            </button>

            <button
              href="/contact"
              size="lg"
              className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
            >
              Start a Conversation
            </button>
          </div>

          <div
            className="flex items-center justify-center gap-6 md:gap-8 pt-8 md:pt-12 text-xs sm:text-sm"
            style={{ color: "var(--color-muted)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
