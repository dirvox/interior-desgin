"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Portfolio", href: "/portfolio" },
];

// Wrap Next.js Link with Framer Motion to preserve animations
const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Framer Motion hook to track window scroll
  const { scrollY } = useScroll();

  // Detect scroll direction dynamically
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Always show at the top of the page
    if (latest < 50) {
      setIsVisible(true);
    }
    // Scroll Down -> Hide Navbar
    else if (latest > previous && latest > 100) {
      setIsVisible(false);
      setIsOpen(false); // Close mobile drawer on scroll down
    }
    // Scroll Up -> Show Navbar
    else if (latest < previous) {
      setIsVisible(true);
    }
  });

  const linkVariants = {
    closed: { opacity: 0, y: 15 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <motion.header
      // Slide up (-100%) when scrolling down, slide to 0 when scrolling up
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full font-sans fixed top-0 left-0 z-50 shadow-md "
    >
      {/* Top Dark Brown Accent Strip */}
      {/* <div className="h-2.5 bg-[#38281f] w-full" /> */}

      {/* Main Navigation Bar */}
      <nav className="bg-[#ede7e1] text-[#2b2b2b] px-6 flex items-center justify-between border-b border-[#e1d9ce]/60 transition-colors">
        <div className="flex items-center ">
          {/* Logo */}
          <img
            src="/logo-rm-new.png"
            alt="Artivio Spaces Logo"
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain"
          />

          {/* Brand Name */}
          <MotionLink
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col leading-none"
          >
            <span
              className="font-serif font-semibold text-[#9b7b5b] tracking-[0.25em]
                 text-[18px] sm:text-2xl md:text-3xl"
            >
              ARTIVIO
            </span>

            <span
              className=" text-[10px] sm:text-[10px] md:text-xs
                 tracking-[0.7em] font-medium uppercase text-[#9b7b5b]"
            >
              SPACES
            </span>
          </MotionLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <MotionLink
              key={link.name}
              href={link.href}
              className="relative text-[#3b3b3b] hover:text-[#000000] transition-colors py-1"
              whileHover="hover"
            >
              {link.name}
              {/* Subtle Animated Underline */}
              <motion.span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-[#9e712a]"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />
            </MotionLink>
          ))}
        </div>

        {/* Desktop Call To Action Button */}
        <div className="hidden md:flex items-center">
          <MotionLink
            href="/booking"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-[#9e712a] hover:bg-[#886022] text-white px-6 py-2.5 text-sm font-medium transition-all shadow-md rounded-sm"
          >
            <span>Book now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MotionLink>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#1c1c1c] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#ede7e1] border-b border-[#e1d9ce] overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <MotionLink
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#2b2b2b] hover:text-[#9e712a] transition-colors py-1"
                >
                  {link.name}
                </MotionLink>
              ))}

              <MotionLink
                href="#book"
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-[#9e712a] text-white py-3 text-sm font-medium shadow-md rounded-sm"
              >
                <span>Book now</span>
                <ArrowRight className="w-4 h-4" />
              </MotionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}