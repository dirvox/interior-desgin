"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link'

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About us', href: '/about-us' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blogs', href: '/blogs' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="relative w-full bg-[#181818] text-white pt-16 md:pt-24 pb-8 px-6 sm:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 md:pb-24">
          
          {/* Left Column: Heading & Newsletter Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-normal leading-snug max-w-md">
              Timeless Furniture for Modern Living Designs made to elevate
            </h2>

            {/* Newsletter Input & Subscribe Button */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md">
              <input
                type="email"
                placeholder="Your email....."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border border-gray-600 focus:border-[#9e712a] text-white text-sm px-4 py-3 outline-none w-full transition-colors rounded-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: '#886022' }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#9e712a] text-white text-sm font-medium px-8 py-3 rounded-sm transition-colors whitespace-nowrap shadow-md"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Middle Column: Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col space-y-3 pt-2"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#9e712a] text-sm md:text-base font-light transition-colors w-max"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Right Column Spacer (Leaves space for Chair Overlap on Desktop) */}
          <div className="hidden lg:block lg:col-span-3" />

        </div>

        {/* Bottom Giant Brand Title & Chair Overlap Container */}
        <div className="relative pt-6 border-t border-gray-800/60">
          
          {/* Overlapping Chair Image */}
          {/* Ensure /chair.avif or your chair cutout image is in your public/ folder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute right-4 sm:right-12 md:right-24 -top-32 sm:-top-48 md:-top-64 lg:-top-72 w-44 sm:w-64 md:w-80 lg:w-[420px] z-20 pointer-events-none"
          >
            <img 
              src="/chair.avif" 
              alt="Yellow Modern Accent Chair" 
              className="w-full h-auto object-contain drop-shadow-2xl"
              onError={(e) => {
                // Online fallback image in case local file path is missing
                e.currentTarget.src = "https://png.pngtree.com/png-clipart/20230427/original/pngtree-modern-chair-isolated-on-transparent-background-png-image_9115293.png";
              }}
            />
          </motion.div>

          {/* Massive Brand Name "Artivio" */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] sm:text-[16vw] lg:text-[15vw] font-serif font-extrabold text-white tracking-widest leading-none select-none overflow-hidden text-center md:text-left -mb-4"
          >
            ARTIVIO
          </motion.h1>

        </div>

      </div>

      {/* Decorative "Made in Framer" Badge (Bottom Right) */}
       <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute bottom-4 right-4 z-30 hidden sm:block"
    >
      <a
        href="mailto:devanshjinraniya46@gmail.com?subject=Website%20Inquiry"
        className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white/95 px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#b57b44] hover:text-[#b57b44] hover:shadow-xl"
      >
        <Mail
          size={14}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        <span>Made by Devansh</span>
      </a>
    </motion.div>
    </footer>
  );
}