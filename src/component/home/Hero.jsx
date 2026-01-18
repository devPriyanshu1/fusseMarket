import { TrendingUp, ShieldCheck, Users, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import heroBg from "../../assets/hero-bg.jpg";
import "./Hero.css";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`hero-section ${scrolled ? "hero-fade" : ""}`}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay" />

      <Container className="hero-content">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="hero-title">
            We Build Digital Products <br />
            <span className="hero-accent">That Scale Businesses</span>
          </h1>

          <p className="hero-subtitle">
            High-impact digital solutions built to drive real business growth.
          </p>

          <div className="hero-actions">
            <Button href="/services" size="lg">
              Explore Services
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="btn-outline"
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Trust */}
          <div className="hero-trust">
            <div className="trust-item">
              <Users size={18} /> <span>500+ Brands</span>
            </div>
            <div className="trust-item">
              <TrendingUp size={18} /> <span>ROI-Driven Strategy</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={18} /> <span>Trusted Nationwide</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
