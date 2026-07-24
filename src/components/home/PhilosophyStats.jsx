"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// Component for individual animated stat counters
function StatCounter({ value, suffix = '', label }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      // Animate counter from 0 to target value when scrolled into view
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Smooth ease-out
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, ease: 'easeOut' } 
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[#f7f5f0] border border-[#e8e2d9] p-8 md:p-10 flex flex-col items-center justify-center text-center rounded-sm shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#9e712a] font-normal mb-3">
        {displayValue}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-[#6b655f] font-sans font-normal tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

export default function PhilosophyStats() {
  const statsData = [
    { value: 12, suffix: '+', label: 'Years experience' },
    { value: 320, suffix: '+', label: 'Completed projects' },
    { value: 180, suffix: '+', label: 'Happy clients' },
    { value: 15, suffix: '', label: 'Design awards' },
  ];

  // Animation variants for the left text column
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: 0.2,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Grid container variant for right-side stat cards stagger effect
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full bg-[#f4f0eb] py-20 px-6 md:px-12 lg:px-20 font-sans text-[#2b2b2b] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Side with Entrance Animations */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6"
          variants={leftColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtitle Accent Label */}
          <motion.p
            variants={textItemVariants}
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#9e712a]"
          >
            OUR PHILOSOPHY
          </motion.p>

          {/* Main Headline */}
          <motion.h2
            variants={textItemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1c1c1c] leading-[1.15]"
          >
            Crafting Spaces <br />
            That Reflect Identity
          </motion.h2>

          {/* Paragraph Description */}
          <motion.p
            variants={textItemVariants}
            className="text-sm md:text-base text-[#6b655f] leading-relaxed font-light max-w-md"
          >
            LUXORA is a boutique interior and furniture design studio specializing in high-end residential and commercial projects that merge elegance with functionality.
          </motion.p>
        </motion.div>

        {/* Right Counter Stats Grid */}
        <motion.div
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsData.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}