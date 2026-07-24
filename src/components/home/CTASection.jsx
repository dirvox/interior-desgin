"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  // Staggered reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="w-full bg-[#f5f1ea] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 font-sans text-[#1c1c1c] overflow-hidden">
      
      {/* Outer Wrapper Container */}
      <div className="max-w-6xl mx-auto rounded-sm overflow-hidden shadow-sm relative min-h-[500px] sm:min-h-[600px] md:min-h-[550px] flex items-center justify-center">
        
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/cta-img.avif"
            alt="Warm Yellow Modern Sofa Living Space"
            className="w-full h-[550px] object-cover object-center scale-105 transition-transform duration-1000 hover:scale-100"
           
          />
          
          {/* Subtle Warm Overlay for High Contrast & Text Readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1ea]/85 via-[#f5f1ea]/50 to-transparent" /> */}
        </div>

        {/* Foreground Content Area (Positioned above the image) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 py-16 sm:py-20 px-6 sm:px-12 text-center flex flex-col items-center max-w-2xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#1c1c1c] leading-[1.15] mb-4 sm:mb-6"
          >
            Design your <br />
            space, define your
          </motion.h2>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-[#000000] font-normal leading-relaxed max-w-lg mb-8"
          >
            At arkwood, we create sustainable furniture that harmonizes style and environmental awareness.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 bg-[#9e712a] hover:bg-[#886022] text-white px-7 sm:px-9 py-3.5 sm:py-4 text-sm md:text-base font-medium transition-all shadow-lg rounded-sm"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}