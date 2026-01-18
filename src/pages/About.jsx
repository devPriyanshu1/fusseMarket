import PageHero from "../component/layout/PageHero";

import VisionMission from "../component/about/VisionMission";
import CoreValues from "../component/about/CoreValues";
import Expertise from "../component/about/Expertise";
import Industries from "../component/about/Industries";
import Timeline from "../component/about/Timeline";

const About = () => {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="About Fuse Market"
        subtitle="Transforming Businesses Through Digital Innovation"
      />

      {/* About Sections */}
      <VisionMission />
      <CoreValues />
      <Expertise />
      <Industries />
      <Timeline />
    </>
  );
};

export default About;
