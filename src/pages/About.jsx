import PageHero from "../component/layout/PageHero";
import VisionMission from "../component/about/VisionMission";
import CoreValues from "../component/about/CoreValues";
import Expertise from "../component/about/Expertise";
import Industries from "../component/about/Industries";
import Timeline from "../component/about/Timeline";
import Container from "../component/common/Container";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "5", label: "Industries Served", icon: Target },
    { number: "100%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  return (
    <>
      {/* HERO */}
      <PageHero
        title="About Fuse Market"
        subtitle="Premium digital solutions crafted for growth-focused brands"
        image="/AboutOverlay.webp"
      />

      {/* PAGE WRAPPER — VERY IMPORTANT */}
      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100">

        {/* STATS */}
        <section className="py-24">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="text-center bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-extrabold text-slate-900">
                      {stat.number}
                    </div>
                    <p className="text-slate-600 mt-2">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <VisionMission />
        <CoreValues />
        <Expertise />
        <Industries />
      </div>

      <Timeline />

      {/* CTA */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center">
        <Container>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to grow with{" "}
              Fuse Market?
           
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Let’s build scalable digital systems that actually convert.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-white font-bold shadow-xl hover:scale-105 transition"
          >
            Get Free Consultation
          </a>
        </Container>
      </section>
    </>
  );
};

export default About;
