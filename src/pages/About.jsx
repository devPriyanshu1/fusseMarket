import PageHero from "../component/layout/PageHero";
import Card from "../component/common/Card";
import SectionHeader from "../component/common/SectionHeader";
import VisionMission from "../component/about/VisionMission";
import CoreValues from "../component/about/CoreValues";
import Expertise from "../component/about/Expertise";
import Timeline from "../component/about/Timeline";

const About = () => {
  return (
    <>
      <PageHero
        title="About Fuse Market"
        subtitle="Transforming Businesses Through Digital Innovation"
        image="/images/hero/about.jpg"
      />

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeader
          title="Our Story"
          subtitle="Building the future of digital transformation"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <Card variant="primary" shadow="lg" className="text-center">
            <p className="text-base leading-relaxed text-gray-700">
              Fuse Market is dedicated to helping businesses thrive in the digital world.
              With years of experience in digital marketing and web development, we provide
              comprehensive solutions tailored to your unique needs. We believe in innovation,
              excellence, and building lasting partnerships with our clients.
            </p>
          </Card>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Vision & Mission"
            subtitle="Our commitment to excellence"
            centered
          />
          <VisionMission />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeader
          title="Core Values"
          subtitle="The principles that guide us"
          centered
        />
        <CoreValues />
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Our Expertise"
            subtitle="Specialized knowledge across multiple domains"
            centered
          />
          <Expertise />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeader
          title="Our Journey"
          subtitle="Key milestones in our growth"
          centered
        />
        <Timeline />
      </section>
    </>
  );
};

export default About;
