"use client"; // Required in Next.js App Router for Framer Motion

import React from "react";
import { motion } from "framer-motion";

// Sample data for the 8-9 interior design case studies
const caseStudies = [
  { id: 1, title: 'Office Interior', category: 'Civic, Buildings, Housing', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 2, title: 'Modern Kitchen', category: 'Residential, Remodel', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 3, title: 'Minimalist Living', category: 'Housing, Apartment', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
//   { id: 4, title: 'Boutique Hotel', category: 'Commercial, Hospitality', img: 'https://images.unsplash.com/photo-1598928506311-c55dd1b3112e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 5, title: 'Urban Studio', category: 'Housing, Civic', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 6, title: 'Open Space Dining', category: 'Residential, Interior', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 7, title: 'Luxury Lounge', category: 'Commercial, Buildings', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 8, title: 'Nordic Bedroom', category: 'Housing, Apartment', img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
];

export default function InteriorCaseStudies() {
  return (
    // Outer Wrapper with the beige background color from the image
    <div className="bg-[#f7f4ef] text-[#1c1c1c] min-h-screen py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Left Section (Sticky on Desktop) */}
        <div className="lg:w-2/5 flex-shrink-0">
          <div className="lg:sticky lg:top-32 flex flex-col items-start">
            
            {/* Slide in animation for the sticky text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#d7b58c] text-sm tracking-widest uppercase font-semibold mb-6 block">
                | Case Studies
              </span>
              <h2 className="text-5xl md:text-6xl font-bold uppercase leading-[1.1] mb-10 tracking-tight">
                We design your space <br /> for best experience
              </h2>
              
              {/* Custom styled button matching the image's corner accents */}
              <button className="relative group bg-[#e5d1b8] hover:bg-[#d7bc9e] transition-colors duration-300 px-8 py-4 text-sm font-semibold tracking-wider text-black">
                {/* Corner aesthetic accents */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black -translate-x-1 -translate-y-1 opacity-50"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black translate-x-1 -translate-y-1 opacity-50"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black -translate-x-1 translate-y-1 opacity-50"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black translate-x-1 translate-y-1 opacity-50"></span>
                MORE WORKS
              </button>
            </motion.div>

          </div>
        </div>

        {/* Right Section (Scrolling Cards) */}
        <div className="lg:w-3/5 flex flex-col gap-24">
          {caseStudies.map((card) => (
            
            /* Scroll-triggered reveal for each card */
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }} 
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with hover zoom */}
              <div className="w-full overflow-hidden mb-6">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto aspect-[16/10] object-cover block"
                  loading="lazy"
                />
              </div>
              
              {/* Card Footer Details */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#e0ddd7] pb-6 gap-2">
                <h3 className="text-2xl font-bold uppercase tracking-wide">
                  {card.title}
                </h3>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  {card.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}