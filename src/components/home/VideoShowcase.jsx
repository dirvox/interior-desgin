"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function VideoShowcase() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Track scroll progress across a 250vh sticky scroll area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Track if video container is in view for auto-play/pause management
  const isInView = useInView(containerRef, { amount: 0.2 });

  // Map scroll progress to video container scale and border-radius
  // Starts as a rounded card (scale: 0.45) and expands to full screen (scale: 1)
  const videoScale = useTransform(scrollYProgress, [0, 0.4], [0.25, 1]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.7], [24, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  // Handle Video Auto-Play/Pause when entering or leaving viewport
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay fallback for strict browser permissions
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-[#f5f1ea] font-sans">
      
      {/* Sticky Frame: Stays locked in view while user scrolls */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Infinite Scrolling Marquee Text */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex items-center z-0 whitespace-nowrap overflow-hidden pointer-events-none select-none"
        >
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
            className="flex items-center gap-12 text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-extrabold text-[#3a444a] tracking-tight uppercase"
          >
            <span>• Explore Homes</span>
            <span>• Living Luxury</span>
            <span>• Modern Spaces</span>
            <span>• Architectural Harmony</span>
            <span>• Explore Homes</span>
            <span>• Living Luxury</span>
            <span>• Modern Spaces</span>
            <span>• Architectural Harmony</span>
          </motion.div>
        </motion.div>

        {/* Expanding Video Card Layer */}
        <motion.div
          style={{
            scale: videoScale,
            borderRadius: videoRadius,
          }}
          className="relative z-10 w-full h-full max-w-[100vw] md:max-w-[100vw] max-h-[60vh] md:max-h-[100vh] shadow-2xl overflow-hidden flex items-center justify-center bg-black origin-center transition-all duration-100 ease-linear"
        >
          <video
            ref={videoRef}
            src="/bottom-video.mp4"
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Dark Subtle Vignette Gradient */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </motion.div>

      </div>

    </section>
  );
}