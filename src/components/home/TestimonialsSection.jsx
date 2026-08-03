"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homemaker',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"Reminds me of my childhood! The traditional jaggery blocks have that authentic, earthy taste you just can’t find in supermarkets anymore. Absolutely pure."',
    mainImage: 'https://images.unsplash.com/photo-1616422285623-14bf929d186c?q=80&w=1200&auto=format&fit=crop', // Sugarcane/farm/food vibe
    leftPreview: 'https://images.unsplash.com/photo-1596647242821-6677983636f3?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1620665287754-5231cda089e9?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Artisan Baker',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"I’ve replaced all refined sugar in my bakery with Khatauli Gud powder. The texture is phenomenal, and my customers love the rich, natural caramel-like flavor it adds."',
    mainImage: 'https://images.unsplash.com/photo-1596647242821-6677983636f3?q=80&w=1200&auto=format&fit=crop',
    leftPreview: 'https://images.unsplash.com/photo-1616422285623-14bf929d186c?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Dr. Anil Kumar',
    role: 'Nutritionist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"Exceptional quality. I always recommend this to my clients looking for a healthier, chemical-free alternative to sugar. Packed with essential minerals and incredibly clean."',
    mainImage: 'https://images.unsplash.com/photo-1620665287754-5231cda089e9?q=80&w=1200&auto=format&fit=crop',
    leftPreview: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1616422285623-14bf929d186c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Health Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"The jaggery cubes are a game changer for my morning tea. So pure, perfectly portioned, and they dissolve beautifully. I love that it’s completely natural!"',
    mainImage: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop',
    leftPreview: 'https://images.unsplash.com/photo-1620665287754-5231cda089e9?q=80&w=600&auto=format&fit=crop',
    rightPreview: 'https://images.unsplash.com/photo-1596647242821-6677983636f3?q=80&w=600&auto=format&fit=crop',
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
    <section className="w-full bg-[#FCFAF5] py-20 px-6 sm:px-10 lg:px-20 font-sans text-amber-950 overflow-hidden border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mb-12 space-y-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight text-amber-950">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light pt-2">
            At Khatauli Gud, we bring you the purest, chemical-free sweetness straight from tradition. Here's what our community thinks.
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
              className="w-12 h-12 rounded-full border border-amber-600/40 flex items-center justify-center text-amber-900 hover:border-amber-600 hover:bg-amber-600 hover:text-white transition-all shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-all shadow-md"
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
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-amber-900/10"
                >
                  <img
                    src={current.leftPreview}
                    alt="Product Preview Left"
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
                  className="aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-amber-900/10"
                >
                  <img
                    src={current.mainImage}
                    alt="Featured Customer View"
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
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-amber-900/10"
                >
                  <img
                    src={current.rightPreview}
                    alt="Product Preview Right"
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
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-amber-950 font-serif leading-relaxed italic max-w-xl">
                  {current.quote}
                </p>
              </div>

              {/* Center Divider Line (Desktop) */}
              <div className="hidden lg:block lg:col-span-1 justify-self-center">
                <div className="w-[1px] h-16 bg-amber-900/20" />
              </div>

              {/* Right Column: Author Profile */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border border-amber-200 shadow-sm"
                />
                <div>
                  <h4 className="text-xl font-serif font-normal text-amber-950">
                    {current.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-light">
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