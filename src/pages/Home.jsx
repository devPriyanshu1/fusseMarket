import { useState, useEffect } from "react";
import Hero from "../component/home/Hero";
import ServicesPreview from "../component/home/ServicesPreview";
import Process from "../component/home/Process";
import Testimonials from "../component/home/Testimonials";
import CTASection from "../component/cta/CTASection";
import Project from "../component/home/Projects";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Hero />
      <ServicesPreview />
      <Process />
      {isMobile ? <Project /> : <Testimonials />}
      <CTASection />
    </>
  );
};

export default Home;
