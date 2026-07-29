"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function  HeroSection() {
  // Container animation variants for staggered children reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Fade-up animation variants for elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth cubic-bezier
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden font-sans">
      
      {/* 
        Responsive Background Images:
        1. Mobile View: Hidden on md+ screens (block md:hidden)
        2. Desktop/Laptop View: Hidden on mobile screens (hidden md:block)
      */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background Image (Vertical aspect ratio optimization) */}
        <div 
          className="block md:hidden absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
          style={{
            backgroundImage: `url('/hero-phone.png')`,
          }}
        />

        {/* Desktop / Laptop Background Image (Horizontal aspect ratio optimization) */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
          style={{
            backgroundImage: `url('/hero-image.PNG')`,
          }}
        />

        {/* Dark Warm Overlay for High Contrast & Text Readability */}
        <div className="absolute inset-0 bg-black/10 backdrop-brightness-90" />
      </div>

      {/* Hero Content Overlay */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle Accent Line */}
        <motion.p 
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase font-semibold text-[#ffffff] mb-4 md:mb-6"
        >
          Interior & Furniture Design Studio
        </motion.p>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white leading-[1.1] mb-6 max-w-4xl"
        >
          Designing Timeless <br className="hidden sm:block" />
          <span className="italic font-light">Luxury Interiors</span>
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We create refined spaces through bespoke furniture, architectural harmony, and thoughtful craftsmanship.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#9e712a] hover:bg-[#886022] text-white px-8 py-4 text-sm md:text-base font-medium transition-all shadow-lg rounded-sm"
          >
            <span>Explore our projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#consultation"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-white/60 hover:border-white text-white px-8 py-4 text-sm md:text-base font-medium transition-all rounded-sm backdrop-blur-sm"
          >
            Book a free consultation
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Badge Bottom Right */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md text-black px-3 py-1.5 rounded text-xs font-semibold shadow-md"
      >
        <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2z"/>
        </svg>
        <span>Made in Framer</span>
      </motion.div> */}
    </section>
  );
}