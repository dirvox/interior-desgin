"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you offer custom furniture design?",
    answer: "Yes, we specialize in bespoke furniture tailored to your space, ensuring each piece reflects your style, functionality, and overall interior design concept perfectly.",
    defaultOpen: true,
  },
  {
    question: "Can you work within my budget?",
    answer: "Absolutely. We discuss your budget extensively during the discovery phase and source materials and furnishings that align with your financial parameters without compromising on style.",
  },
  {
    question: "Do you handle both design and execution?",
    answer: "Yes, we offer comprehensive turnkey solutions, managing everything from the initial concept design to the final installation and styling.",
  },
  {
    question: "Will I see designs before execution?",
    answer: "Definitely. We provide detailed 3D visualizations and material boards so you can fully approve the look and feel before any construction or purchasing begins.",
  },
  {
    question: "Do you provide material and color guidance?",
    answer: "Yes, our team curates a personalized selection of fabrics, finishes, paints, and materials that harmonize with your space's lighting and your personal taste.",
  }
];

const AccordionIcon = ({ isOpen }) => {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 0 : 180 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex items-center justify-center w-6 h-6 border border-[#C29E75] rounded-full text-[#C29E75] shrink-0 ml-4"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </motion.div>
  );
};

const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.defaultOpen || false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 bg-transparent overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
      >
        <span className="text-xl md:text-2xl font-serif text-gray-900 tracking-tight">
          {faq.question}
        </span>
        <AccordionIcon isOpen={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 text-gray-600 font-sans leading-relaxed text-sm md:text-base pr-12">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="bg-[#FDFBF7] min-h-screen py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Heading */}
        <div className="w-full lg:w-1/3 flex flex-col pt-4">
          <h3 className="text-[#C29E75] text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            F A Q
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] tracking-tight">
            Have Questions?<br />
            We’re Here to Help.
          </h2>
        </div>

        {/* Right Column: Accordion List */}
        <div className="w-full lg:w-2/3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </div>
        
      </div>
    </section>
  );
}