import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import { testimonialsData } from "../../data/testimonialsData";

const AUTO_SLIDE_INTERVAL = 3000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔮 Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // 🔁 Auto slide
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  const getItem = (offset) => {
    const i =
      (index + offset + testimonialsData.length) %
      testimonialsData.length;
    return testimonialsData[i];
  };

  const cards = [getItem(-1), getItem(0), getItem(1)];

  return (
    <section className="section bg-slate-50 overflow-hidden">
      <Container>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by growing brands across industries"
          centered
        />

        <div
          className="relative mt-20 flex items-center justify-center gap-10"
          onMouseMove={onMouseMove}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            onMouseLeave();
          }}
        >
          {cards.map((item, i) => {
            const isCenter = i === 1;

            return (
              <motion.div
                key={item.name}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  isCenter
                    ? "w-[420px] h-[520px] shadow-2xl"
                    : "w-[300px] h-[420px] opacity-60"
                }`}
                animate={{ scale: isCenter ? 1 : 0.95 }}
              >
                {/* IMAGE */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    x: useTransform(
                      smoothX,
                      (v) => v * (isCenter ? 0.04 : 0.02)
                    ),
                    y: useTransform(
                      smoothY,
                      (v) => v * (isCenter ? 0.04 : 0.02)
                    ),
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CATEGORY BADGE */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur text-white">
                    {item.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-4 line-clamp-3">
                    {item.feedback}
                  </p>

                  {/* VISIT LINK */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                  >
                    Visit Website →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PROGRESS BAR */}
        <div className="mt-10 flex justify-center">
          <div className="h-[3px] w-48 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              animate={{
                width: `${((index + 1) / testimonialsData.length) * 100}%`,
              }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
