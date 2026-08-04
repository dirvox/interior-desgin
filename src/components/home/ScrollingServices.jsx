"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Mock service data
const services = [
  { id: 'Service 01', title: 'Designing Residential Spaces ', desc: 'Thoughtfully crafted interior concepts that transform houses into homes with style and purpose.' },
  { id: 'Service 02', title: 'Commercial Interior Solutions', desc: 'Designing bespoke commercial interiors that reflect your brand identity while creating functional and engaging spaces.' },
  { id: 'Service 03', title: 'Designer Furniture Concepts', desc: 'Innovative furniture designs tailored to your needs, style, and spatial requirements.' },
  { id: 'Service 04', title: 'Workspace Interiors', desc: 'Designing modern workspaces that foster productivity, collaboration, and employee well-being. ' },
];

// Service Card Component: Completely sharp background with extra padding & spacing
const ServiceCard = ({ id, title, desc, className, style }) => (
  <motion.div
    style={style}
    className={`bg-[#ede7e1] border border-[#e1d9ce] p-6 sm:p-8 md:p-10 flex flex-col justify-between rounded-sm shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
  >
    <div>
      <p className="text-xs sm:text-sm tracking-widest text-[#9e712a] mb-3 font-semibold uppercase">{id}</p>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1c1c1c] font-normal mb-3 leading-snug">{title}</h3>
    </div>
    <p className="text-xs sm:text-sm md:text-base text-[#6b655f] leading-relaxed font-light mt-2">{desc}</p>
  </motion.div>
);

// Background line-drawing layer: a set of paths that "draw" themselves as you scroll
// and a few straight guide lines that slide in from the edges. Pure SVG so it scales
// to any screen size via viewBox + preserveAspectRatio.
const BackgroundLines = ({ scrollYProgress }) => {
  // Diagonal sweeping lines - drawn (pathLength) across the first half of the scroll
  const drawA = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const drawB = useTransform(scrollYProgress, [0.05, 0.6], [0, 1]);
  const drawC = useTransform(scrollYProgress, [0.1, 0.65], [0, 1]);

  // Horizontal + vertical guide lines that slide inward
  const lineLeftX = useTransform(scrollYProgress, [0, 0.5], ['-15%', '0%']);
  const lineRightX = useTransform(scrollYProgress, [0, 0.5], ['15%', '0%']);
  const lineTopY = useTransform(scrollYProgress, [0.1, 0.6], ['-10%', '0%']);
  const lineBottomY = useTransform(scrollYProgress, [0.1, 0.6], ['10%', '0%']);

  const fadeIn = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [0, 1, 1, 0.3]);

  return (
    <motion.div
      style={{ opacity: fadeIn }}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Diagonal drawing lines */}
        <motion.path
          d="M 0 850 L 350 500 L 650 620 L 1000 200"
          stroke="#c9a15a"
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ pathLength: drawA }}
        />
        <motion.path
          d="M 0 150 L 300 400 L 700 300 L 1000 550"
          stroke="#c9a15a"
          strokeWidth="1"
          strokeOpacity="0.6"
          strokeLinecap="round"
          style={{ pathLength: drawB }}
        />
        <motion.path
          d="M 100 1000 L 400 700 L 600 780 L 900 450"
          stroke="#9e712a"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeLinecap="round"
          style={{ pathLength: drawC }}
        />

        {/* Straight guide lines sliding in from the sides */}
        <motion.line
          x1="0" y1="0" x2="0" y2="1000"
          stroke="#c9a15a" strokeOpacity="0.35" strokeWidth="1"
          style={{ x: lineLeftX }}
        />
        <motion.line
          x1="1000" y1="0" x2="1000" y2="1000"
          stroke="#c9a15a" strokeOpacity="0.35" strokeWidth="1"
          style={{ x: lineRightX }}
        />
        <motion.line
          x1="0" y1="0" x2="1000" y2="0"
          stroke="#c9a15a" strokeOpacity="0.3" strokeWidth="1"
          style={{ y: lineTopY }}
        />
        <motion.line
          x1="0" y1="1000" x2="1000" y2="1000"
          stroke="#c9a15a" strokeOpacity="0.3" strokeWidth="1"
          style={{ y: lineBottomY }}
        />
      </svg>
    </motion.div>
  );
};

export default function ScrollingServices() {
  const containerRef = useRef(null);

  // Track scroll progress across the sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animation interval: 10% scroll to 70% scroll
  const animationWindow = [0.1, 0.7];

  // Box displacement offsets
  const translateX = useTransform(scrollYProgress, animationWindow, [0, 140]);
  const translateY = useTransform(scrollYProgress, animationWindow, [0, 90]);

  // Chair starts completely hidden (scale: 0, opacity: 0)
  const chairScale = useTransform(scrollYProgress, animationWindow, [0, 1.1]);
  const chairOpacity = useTransform(scrollYProgress, animationWindow, [1, 1]);

  // Quadrant transform mappings
  const transforms = [
    { translateX: useTransform(translateX, (v) => -v), translateY: useTransform(translateY, (v) => -v) }, // Top-Left
    { translateX: useTransform(translateX, (v) => v), translateY: useTransform(translateY, (v) => -v) },  // Top-Right
    { translateX: useTransform(translateX, (v) => -v), translateY: useTransform(translateY, (v) => v) },   // Bottom-Left
    { translateX: useTransform(translateX, (v) => v), translateY: useTransform(translateY, (v) => v) },    // Bottom-Right
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-[#f5f1ea] font-sans">

      <div className='flex items-center justify-center text-[30px] md:text-[30px] font-bold relative z-10'>Services</div>

      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 overflow-hidden">

        {/* Animated background line layer */}
        <BackgroundLines scrollYProgress={scrollYProgress} />

        {/* Main Grid Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full max-w-5xl mx-auto">

          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              style={transforms[index]}
              className="relative min-h-[180px] sm:min-h-[220px] md:min-h-[260px]"
            />
          ))}

          {/* Central Chair (Starts invisible and emerges smoothly) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <motion.div
              style={{
                scale: chairScale,
                opacity: chairOpacity,
              }}
              className="relative w-48 sm:w-64 md:w-80 lg:w-96 aspect-square flex items-center justify-center"
            >
              <img
                src="/chair.avif"
                alt="Accent Chair"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}