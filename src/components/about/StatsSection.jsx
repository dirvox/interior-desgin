"use client"

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Design Awards",
  },
  {
    value: 32,
    suffix: "+",
    label: "Global Projects",
  },
  {
    value: 10,
    suffix: "K",
    label: "Square Meters Designed",
  },
  {
    value: 100,
    suffix: "",
    label: "Happy Clients",
  },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#f4f0eb] pb-20 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="border border-[#E6E2DA] bg-white py-8 px-6 text-center transition-all"
            >
              <h2 className="text-4xl lg:text-5xl font-serif text-[#B8893E] mb-2">
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                />
              </h2>

              <p className="text-gray-600 text-sm md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src="/images/IMG_4732.JPG.jpeg"
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#222]">
              Crafted with Precision
              <br />
              and Attention to Detail
            </h2>

            <p className="mt-8 text-gray-600 leading-9 text-lg max-w-lg">
              We oversee every stage of the project,
              ensuring seamless execution,
              refined finishes,
              and a consistent design vision from
              concept to completion.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}