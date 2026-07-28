"use client"
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  // The heading text split into words for the staggered animation
  const headingText = "About Intorida Studio";
  const words = headingText.split(" ");

  // Framer Motion Variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Variants for individual words and the paragraph
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for an elegant feel
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#f4f0eb] text-zinc-100 flex flex-col items-center pt-24 md:pt-32 px-6 md:px-12 lg:px-24">
      
      {/* Text Content Container */}
      <motion.div
        className="w-full max-w-4xl flex flex-col items-center text-center mb-16 md:mb-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Staggered Heading Animation */}
        <h1 className="text-4xl  md:text-6xl lg:text-7xl font-serif text-black tracking-wide mb-6 md:mb-8 flex flex-wrap justify-center gap-x-3 md:gap-x-4">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle Fade-up Animation */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-gray-800 font-light max-w-2xl leading-relaxed"
        >
          We create refined spaces through bespoke furniture, architectural
          harmony, and thoughtful craftsmanship.
        </motion.p>
      </motion.div>

      {/* Hero Image Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.8, // Waits for text animations to finish
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="w-full max-w-6xl aspect-[4/3] md:aspect-[18/9]  relative overflow-hidden"
      >
        {/* Replace the src with your actual interior image path */}
        <img
          src="/about-hero.jpeg"
          alt="Refined interior space by Intorida Studio"
          className="w-full h-full object-contain opacity-80"
        />
        
        {/* Optional: Subtle gradient overlay to blend the image into the dark background */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 pointer-events-none"></div> */}
      </motion.div>
      
    </section>
  );
};

export default AboutHero;