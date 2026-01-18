import { useEffect, useRef, useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import { motion } from "framer-motion";

const SLIDE_DELAY = 3000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = testimonialsData.length;

  /* AUTO SLIDE */
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, SLIDE_DELAY);

    return () => clearInterval(intervalRef.current);
  }, [paused, total]);

  const getItem = (offset) =>
    testimonialsData[(index + offset + total) % total];

  return (
    <section className="py-28 bg-slate-50 overflow-hidden">
      <Container>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by growing brands across industries"
          center
        />

        <div
          className="relative mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex justify-center gap-10">
            {[-1, 0, 1].map((pos) => {
              const item = getItem(pos);
              const isCenter = pos === 0;

              return (
                <motion.div
                  key={`testimonial-${item.id}-${pos}`}
                  className={`relative rounded-3xl overflow-hidden shadow-xl
                    ${
                      isCenter
                        ? "w-[440px] h-[440px]"
                        : "w-[340px] h-[360px] opacity-60"
                    }`}
                  animate={{
                    scale: isCenter ? 1 : 0.92,
                    y: isCenter ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* IMAGE (NO BLUR) */}
                  <motion.img
                    key={`image-${item.id}`}
                    src={item.logo}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.06 }}
                  />

                  {/* DARK GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* BADGE */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-slate-900 shadow">
                      Client Project
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <span className="mb-2 text-xs uppercase tracking-wide text-white/80">
                      {item.category}
                    </span>

                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>

                    <p className="text-sm text-slate-200 mb-4 line-clamp-3">
                      {item.feedback}
                    </p>

                    <motion.a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold"
                      whileHover={{ x: 6 }}
                    >
                      Visit Website <span>→</span>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-10 flex justify-center">
            <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DELAY / 1000, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
