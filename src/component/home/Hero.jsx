import Button from "../common/Button";
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Welcome to Our Industry Solutions
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tailored services for Technology, Healthcare, Finance, and more!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/services" size="lg" className="shadow-2xl">
              Explore Our Services
              <span className="ml-2">→</span>
            </Button>

            <Button href="/contact" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-2xl">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
