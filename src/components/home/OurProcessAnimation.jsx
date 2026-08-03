"use client"
import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "1",
    title: "Discovery & Consultation",
    description:
      "Understanding your vision, requirements, and lifestyle to lay a strong foundational blueprint.",
    image: "/process-1.png",
    imageLeft: true,
  },
  {
    number: "2",
    title: "Concept Design",
    description:
      "Developing detailed spatial layouts, material palettes, and architectural design direction.",
    image: "/process-2.png",
    imageLeft: false,
  },
  {
    number: "3",
    title: "3D Visualization",
    description:
      "Photorealistic renders of your future space to visualize every light, texture, and detail.",
    image: "/process-3.png",
    imageLeft: true,
  },
  {
    number: "4",
    title: "Production & Installation",
    description:
      "Precision craftsmanship and flawless execution delivered on schedule.",
    image: "/process-4.png",
    imageLeft: false,
  },
];


// shadow-[0_-15px_40px_rgba(0,0,0,0.04)]

const ProcessCard = ({ step, index, total }) => {
  return (
    <div
      className="sticky w-full bg-[#f5f1ea]    overflow-hidden"
      style={{
        // Visually stack them slightly offset from one another (20px per card)
        top: `calc(2vh + ${index * 10}px)`,
        // Give space to scroll before the next card arrives, except for the last one
        marginBottom: index === total - 1 ? "0" : "0vh",
        zIndex: index + 10,
      }}
    >
      <div className="max-w-7xl mx-auto px-6   py-16 md:py-24">
        <div className="relative grid grid-cols-1 md:grid-cols-12  items-center w-full">
          
          {/* IMAGE COLUMN */}
          <div
            className={`md:col-span-6 w-full ${
              step.imageLeft ? "md:order-1" : "md:order-2"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden shadow-xl border border-[#e1d9ce] relative bg-gray-200"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* TEXT COLUMN */}
          <div
            className={`md:col-span-6 flex md:p-10 flex-col justify-center ${
              step.imageLeft ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="flex flex-col max-w-lg mx-auto md:mx-0 w-full">
              {/* Large Gold Step Number */}
              <motion.span
                initial={{ opacity: 0, x: step.imageLeft ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-7xl sm:text-8xl md:text-9xl font-serif text-[#9e712a] leading-none mb-4 font-light select-none"
              >
                {step.number}
              </motion.span>

              {/* Step Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#1c1c1c] mb-4"
              >
                {step.title}
              </motion.h3>

              {/* Step Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg text-[#6b655f] font-light leading-relaxed"
              >
                {step.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OurProcessAnimation() {
  return (
    // Note: Do not add "overflow-hidden" to this section, as it disables the CSS sticky property
    <section className="w-full min-h-screen bg-[#f5f1ea] pt-2 font-sans text-[#1c1c1c]">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-20 space-y-4"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#9e712a]">
            OUR APPROACH
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1c1c1c]">
            Our Process
          </h2>
        </motion.div>
      </div>

      {/* Sticky Process Cards Container */}
      <div className="relative w-full">
        {processSteps.map((step, index) => (
          <ProcessCard
            key={step.number}
            step={step}
            index={index}
            total={processSteps.length}
          />
        ))}
      </div>
      
    </section>
  );
}