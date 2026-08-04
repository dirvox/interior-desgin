"use client";
import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Kitchen',
    category: 'Residential Interior • 2024',
    location: 'Noida, UP, India',
    image: '/images/IMG_7935.PNG',
    direction: 'left', // Slides from left
  },
  {
    id: 2,
    title: ' Corporate Office',
    category: 'Commercial Interior • 2023',
    location: 'Delhi, India',
    image: '/portfolio2.avif',
    direction: 'right', // Slides from right
  },
  {
    id: 3,
    title: 'Grand Palace Lounge',
    category: 'Hospitality Design • 2023',
    location: 'London, UK',
    image: '/images/hospiat-interior.png',
    direction: 'left', // Slides from left
  },
  {
    id: 4,
    title: 'Minimalist Penthouse',
    category: 'Residential Interior • 2024',
    location: 'Gurgaon , Haryana ,  India',
    image: '/images/IMG_7760.PNG',
    direction: 'right', // Slides from right
  },
];

export default function PortfolioSection() {
  // Variants for Header Text
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  // Dynamic card variants based on left/right slide direction
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -80 : 80,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier ease-out
      },
    },
  };

  return (
    <section className="w-full bg-[#f5f1ea] py-20 px-6 sm:px-10 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#9e712a]">
            SELECTED WORK
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1c1c1c] font-normal leading-tight">
            Our Portfolio
          </h2>
          <p className="text-sm sm:text-base text-[#6b655f] font-light leading-relaxed pt-1">
            At Arkwood, we create sustainable furniture that harmonizes style and environmental awareness.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              custom={item.direction}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative h-[380px] sm:h-[450px] md:h-[480px] lg:h-[520px] rounded-sm overflow-hidden shadow-sm cursor-pointer"
            >
              {/* Background Image with Smooth Zoom Effect on Hover */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for High Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white flex flex-col justify-end">
                <span className="text-xs sm:text-sm text-[#c89852] font-semibold tracking-wide mb-2">
                  {item.category}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white mb-2 leading-snug group-hover:text-[#f4f0eb] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light tracking-wider uppercase">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}