
import Hero from "../component/home/Hero";
import ServicesPreview from "../component/home/ServicesPreview";
import Process from "../component/home/Process";
import Testimonials from "../component/home/Testimonials";
import CTASection from "../component/cta/CTASection";
import Project from "../component/home/Projects";

const Home = () => {


  return (
    <>
      <Hero />
      <ServicesPreview />
      <Process />
      <Testimonials/>
      <CTASection />
    </>
  );
};

export default Home;
