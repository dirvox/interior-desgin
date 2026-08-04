"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"Our once-sterile villa is now a warm, beautiful masterpiece. The custom furniture and clever space planning are genius. Truly a life-changing design experience that reflects us perfectly."',
    mainImage: '/images/IMG_4732.JPG.jpeg', // Modern luxury living room
    leftPreview: '/images/IMG_3190.JPG.jpeg', // Kitchen cabinetry close-up
    rightPreview: '/images/IMG_4733.JPG.jpeg', // Textured textiles close-up
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Commercial Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"The design team optimized our retail spaces beyond expectations. Every square foot is purposeful, the branding integration is seamless, and our clients have noticed a significant difference. A game changer for commercial projects."',
    mainImage: '/images/IMG_4732.JPG.jpeg', // Modern luxury living room
    leftPreview: '/images/IMG_3190.JPG.jpeg', // Kitchen cabinetry close-up
    rightPreview: '/images/IMG_4733.JPG.jpeg', // Textured textiles close-up
  },
  {
    id: 3,
    name: 'Dr. Anil Kumar',
    role: 'Private Practice Physician',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"Patients always complement our new clinic environment. It’s calming, functional, and supports our workflow exceptionally well. The attention to ergonomic details and supportive design is commendable."',
    mainImage: '/images/IMG_4732.JPG.jpeg', // Modern luxury living room
    leftPreview: '/images/IMG_3190.JPG.jpeg', // Kitchen cabinetry close-up
    rightPreview: '/images/IMG_4733.JPG.jpeg', // Textured textiles close-up
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Urban Professional',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: '"The bespoke media unit and custom kitchen island are game changers in our small apartment. Beautifully crafted and perfectly portioned storage. I love that it looks so natural and clean!"',
    mainImage: '/images/IMG_4732.JPG.jpeg', // Modern luxury living room
    leftPreview: '/images/IMG_3190.JPG.jpeg', // Kitchen cabinetry close-up
    rightPreview: '/images/IMG_4733.JPG.jpeg', // Textured textiles close-up
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
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light pt-2">
            We transform spaces into beautiful, functional works of art. Hear from the communities we've served, from residential homes to commercial icons.
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
                    alt="Interior Design Detail Left"
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
                    alt="Featured Project View"
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
                    alt="Interior Design Detail Right"
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