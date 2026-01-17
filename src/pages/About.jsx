import PageHero from "../component/layout/PageHero";

const About = () => {
  return (
    <>
      <PageHero
        title="About Fuse Market"
        subtitle="Learn more about our mission and expertise."
        image="/images/hero/about.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Fuse Market is dedicated to helping businesses thrive in the digital world.
            With years of experience in digital marketing and web development, we provide
            comprehensive solutions tailored to your unique needs.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To empower businesses with innovative digital solutions that drive growth
              and success in an ever-evolving marketplace.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-slate-600">
              To be the leading partner for businesses seeking to harness the power
              of digital transformation and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
