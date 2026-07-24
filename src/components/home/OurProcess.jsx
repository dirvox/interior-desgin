import React from 'react';

const processSteps = [
  {
    number: "1",
    title: "Discovery & Consultation",
    description: "Understanding your vision, requirements, and lifestyle to lay a strong foundational blueprint.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageLeft: true, // Image Left, Text Right
  },
  {
    number: "2",
    title: "Concept Design",
    description: "Developing detailed spatial layouts, material palettes, and architectural design direction.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    imageLeft: false, // Text Left, Image Right
  },
  {
    number: "3",
    title: "3D Visualization",
    description: "Photorealistic renders of your future space to visualize every light, texture, and detail.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    imageLeft: true, // Image Left, Text Right
  },
  {
    number: "4",
    title: "Production & Installation",
    description: "Precision craftsmanship and flawless execution delivered on schedule.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    imageLeft: false, // Text Left, Image Right
  },
];

export default function OurProcess() {
  return (
    <section className="w-full bg-[#f5f1ea] py-20 px-6 sm:px-12 lg:px-24 font-sans text-[#1c1c1c]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-2">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#9e712a]">
            OUR APPROACH
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal">
            Our Process
          </h2>
        </div>

        {/* Process Steps Loop */}
        <div className="space-y-24 md:space-y-36">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
            >
              
              {/* IMAGE COLUMN */}
              <div
                className={`md:col-span-6 ${
                  step.imageLeft ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="aspect-[4/3] sm:aspect-[16/11] rounded-sm overflow-hidden shadow-md border border-[#e1d9ce]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* TEXT COLUMN */}
              <div
                className={`md:col-span-6 flex flex-col justify-center ${
                  step.imageLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                {/* Large Gold Step Number */}
                <span className="text-7xl sm:text-8xl md:text-9xl font-serif text-[#9e712a] leading-none mb-4 font-light select-none">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#1c1c1c] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-base text-[#6b655f] font-light leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}