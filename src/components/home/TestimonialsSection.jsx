"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Anderson',
    role: 'Interior Consultant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"The craftsmanship exceeded my expectations. Every detail feels refined, and the space looks elegant. The team delivered outstanding quality on time."',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    leftPreview: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Sophia Reynolds',
    role: 'Architectural Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"An extraordinary transformation! Their bespoke approach brought warmth and sophistication to our home while maintaining seamless functionality."',
    mainImage: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop',
    leftPreview: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'David Vance',
    role: 'Commercial Project Lead',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"Working with Arkwood was a breeze. From concept drawings to final installation, the professionalism and attention to detail were world-class."',
    mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
    leftPreview: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Emma Watson',
    role: 'Luxury Homeowner',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"Flawless execution! Their sustainable wood choices paired with modern aesthetics gave our living space a unique, timeless identity."',
    mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    leftPreview: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Prev

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  // Animation variants for circular/slide transitions
  const imageVariants = {
    initial: (dir) => ({
      opacity: 0,
      scale: 0.85,
      rotate: dir * 4,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.85,
      rotate: -dir * 4,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
  };

  return (
    <section className="w-full bg-[#f5f1ea] py-20 px-6 sm:px-10 lg:px-20 font-sans text-[#1c1c1c] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mb-12 space-y-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-[#6b655f] font-light pt-2">
            At Arkwood, we create sustainable furniture that harmonizes style and environmental awareness.
          </p>
        </div>

        {/* Carousel Content Layout */}
        <div className="w-full relative min-h-[500px]">
          
          {/* Navigation Controls (Top Right Desktop / Centered Mobile) */}
          <div className="flex justify-center md:justify-end gap-3 mb-6 md:mb-0 md:absolute md:-top-16 md:right-0 z-30">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#9e712a]/40 flex items-center justify-center text-[#1c1c1c] hover:border-[#9e712a] hover:bg-[#9e712a] hover:text-white transition-all shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#9e712a] text-white flex items-center justify-center hover:bg-[#886022] transition-all shadow-md"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Main Visual Showcase (Grid with featured center + flank previews) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-10">
            
            {/* Left Preview Image (Desktop Only) */}
            <div className="hidden md:block md:col-span-3">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`left-${current.id}`}
                  custom={direction}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-[#e1d9ce]"
                >
                  <img
                    src={current.leftPreview}
                    alt="Interior Preview Left"
                    className="w-full h-full object-cover grayscale-[20%] opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Central Featured Main Image */}
            <div className="md:col-span-6">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`main-${current.id}`}
                  custom={direction}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden shadow-md border border-[#e1d9ce]"
                >
                  <img
                    src={current.mainImage}
                    alt="Featured Interior Design"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Preview Image (Desktop Only) */}
            <div className="hidden md:block md:col-span-3">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`right-${current.id}`}
                  custom={direction}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-[#e1d9ce]"
                >
                  <img
                    src={current.rightPreview}
                    alt="Interior Preview Right"
                    className="w-full h-full object-cover grayscale-[20%] opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Quote & Author Bio Details Row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current.id}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4"
            >
              {/* Left Column: Star Rating & Quote Text */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#9e712a] text-[#9e712a]"
                    />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-[#2b2b2b] font-serif leading-relaxed italic max-w-xl">
                  {current.quote}
                </p>
              </div>

              {/* Center Divider Line (Desktop) */}
              <div className="hidden lg:block lg:col-span-1 justify-self-center">
                <div className="w-[1px] h-16 bg-[#d6cec3]" />
              </div>

              {/* Right Column: Author Profile */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border border-[#e1d9ce] shadow-sm"
                />
                <div>
                  <h4 className="text-xl font-serif font-normal text-[#1c1c1c]">
                    {current.name}
                  </h4>
                  <p className="text-sm text-[#6b655f] font-light">
                    {current.role}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}