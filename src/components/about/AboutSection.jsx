"use client"
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-[#f4f0eb]  py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-[#B68A4A] text-sm font-medium mb-5">
            About Artivio
          </p>

          <h2 className="text-[#1B1B1B] font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-5xl mx-auto">
            Founded on a Vision of Timeless Design and Meaningful Living
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-serif text-[#222] leading-tight">
              Where Architecture
              <br />
              Meets Thoughtful Living
            </h3>

            <p className="mt-8 text-gray-600 leading-9 text-lg max-w-lg">
              We combine architecture, technology, and craftsmanship to
              design spaces that are functional, elegant, and tailored to each
              client's unique lifestyle.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="overflow-hidden rounded-md"
          >
            <img
              src="/images/IMG_7763.PNG"
              alt="Luxury Interior"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}