import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import { testimonialsData } from "../../data/testimonialsData";

const AUTO_SLIDE_INTERVAL = 3000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const total = testimonialsData.length;

  /* AUTO SLIDE WITH PROGRESS SYNC */
  useEffect(() => {
    // Reset progress immediately when the slide (index) changes
    setProgress(0);

    // Define the frequency (smoothness vs performance)
    const stepTime = 50;

    // Start the progress timer
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        // Calculate how much to add based on the delay
        const increment = (100 / AUTO_SLIDE_INTERVAL) * stepTime;
        const next = prev + increment;

        // Safety check to ensure it doesn't exceed 100
        return next >= 100 ? 100 : next;
      });
    }, stepTime);

    // Start the slide change timer
    intervalRef.current = setInterval(() => {
      // Move to next slide
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_SLIDE_INTERVAL);

    // CLEANUP: vital for preventing memory leaks and weird jumps
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [total, index]);

  const getItem = (offset) => {
    const i =
      (index + offset + testimonialsData.length) % testimonialsData.length;
    return testimonialsData[i];
  };

  const cards = [getItem(-1), getItem(0), getItem(1)];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-[--color-light] to-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary), transparent)",
        }}
      ></div>

      <Container>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by growing brands across industries"
          centered
        />

        <div className="relative mt-16 md:mt-20">
          <div className="flex justify-center gap-6 md:gap-10 px-4">
            {[-1, 0, 1].map((pos) => {
              const item = getItem(pos);
              const isCenter = pos === 0;

              return (
                <motion.div
                  key={`testimonial-${item.id}-${pos}`}
                  className={`relative rounded-2xl overflow-hidden
                    ${
                      isCenter
                        ? "w-[440px] h-[480px] shadow-2xl"
                        : "w-[340px] h-[400px] opacity-50 hidden md:block"
                    }`}
                  style={{
                    border: isCenter
                      ? "1px solid rgba(216, 77, 121, 0.2)"
                      : "1px solid rgba(180, 167, 214, 0.15)",
                    boxShadow: isCenter
                      ? "0 25px 70px rgba(216, 77, 121, 0.25), 0 15px 40px rgba(180, 167, 214, 0.15)"
                      : "0 15px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  animate={{
                    scale: isCenter ? 1 : 0.92,
                    y: isCenter ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* IMAGE */}
                  <motion.img
                    src={item.logo}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* GRADIENT OVERLAY */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, var(--color-dark) 0%, rgba(45, 30, 46, 0.85) 50%, rgba(45, 30, 46, 0.3) 100%)",
                    }}
                  />

                  {/* BADGE */}
                  <div className="absolute top-5 left-5 z-10">
                    <span
                      className="px-4 py-1.5 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm"
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        color: "var(--color-primary)",
                      }}
                    >
                      Client Project
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
                    <span
                      className="mb-3 text-xs uppercase tracking-wider font-semibold"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {item.category}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm md:text-base text-slate-200 mb-5 line-clamp-3 leading-relaxed">
                      {item.feedback}
                    </p>

                    <motion.a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full w-fit transition-all duration-300"
                      style={{
                        background: "var(--color-primary)",
                        color: "white",
                        boxShadow: "0 4px 16px rgba(216, 77, 121, 0.4)",
                      }}
                      whileHover={{
                        x: 4,
                        boxShadow: "0 6px 20px rgba(216, 77, 121, 0.5)",
                      }}
                    >
                      Visit Website <span>→</span>
                    </motion.a>
                  </div>

                  {/* Shine effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                    }}
                  ></div>
                </motion.div>
              );
            })}
          </div>

          {/* PROGRESS BAR - Desktop Only */}
          <div className="hidden md:flex mt-10 md:mt-12 justify-center px-4">
            <div
              className="w-full max-w-md h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(180, 167, 214, 0.2)" }}
            >
              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                  boxShadow: "0 0 12px rgba(216, 77, 121, 0.5)",
                  width: `${progress}%`,
                  // CSS FIX: Disable transition when resetting to 0 to prevent "rewinding"
                  transition: progress === 0 ? "none" : "width 50ms linear",
                }}
              />
            </div>
          </div>

          {/* Dot indicators for mobile */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: index === i ? "32px" : "8px",
                  height: "8px",
                  background:
                    index === i
                      ? "var(--color-primary)"
                      : "rgba(180, 167, 214, 0.3)",
                  boxShadow:
                    index === i ? "0 4px 12px rgba(216, 77, 121, 0.4)" : "none",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
