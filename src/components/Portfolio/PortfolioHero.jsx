"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

// --- Mock Data ---
const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Commercial"];

const projects = [
  { id: 1, tag: "Living Room", title: "Modern Minimalist", size: "large", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80" },
  { id: 2, tag: "Kitchen", title: "Organic Oak", size: "small", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" },
  { id: 3, tag: "Bedroom", title: "Serene Oasis", size: "small", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" },
  { id: 4, tag: "Commercial", title: "Boutique Hotel", size: "large", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80" },
  { id: 5, tag: "Office", title: "Creative Studio", size: "small", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" },
];

const testimonials = [
  { id: 1, name: "Sarah Jenkins", text: "They transformed our outdated layout into a breathtaking, functional space." },
  { id: 2, name: "Marcus Reed", text: "Exceptional attention to detail. The team captured exactly what we envisioned." },
];

// --- Animated Counter Component ---
const AnimatedCounter = ({ from = 0, to, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, to, from, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- Main Portfolio Page ---
export default function PortfolioHero() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sliderPos, setSliderPos] = useState(50);

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.tag === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-800 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h4 className="text-[#9e712a] uppercase tracking-[0.2em] text-sm font-bold mb-4">Our Portfolio</h4>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-6">Crafted Spaces</h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Explore a curated selection of our finest interior design projects, where form meets function.
          </p>
        </motion.div>
      </section>

      {/* 2. FEATURED PROJECT (Full Width) */}
      <section className="w-full h-[60vh] min-h-[500px] relative mb-24 overflow-hidden group">
        <motion.img 
          initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=2000&q=80" 
          alt="Featured Project"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#000000] font-bold tracking-widest text-sm uppercase mb-2 block">Featured</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">The Glasshouse Estate</h2>
            <button className="border-b-2 border-white text-white pb-1 hover:text-[#9e712a] hover:border-[#9e712a] transition-colors">
              View Case Study
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. CATEGORIES & MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                activeCategory === cat 
                  ? "bg-[#9e712a] text-white" 
                  : "bg-transparent text-stone-500 hover:text-[#9e712a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento/Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`relative group overflow-hidden rounded-xl bg-stone-200 ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#9e712a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <span className="uppercase tracking-widest text-xs mb-2">{project.tag}</span>
                <h3 className="font-serif text-2xl mb-4">{project.title}</h3>
                <span className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-[#9e712a] transition-colors cursor-pointer">
                  View Project →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. STATISTICS */}
      <section className="bg-stone-900 text-white py-20 mb-32">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="font-serif text-5xl md:text-6xl text-[#9e712a] mb-2">
              <AnimatedCounter to={500} suffix="+" />
            </h3>
            <p className="uppercase tracking-widest text-sm text-stone-400">Projects Completed</p>
          </div>
          <div>
            <h3 className="font-serif text-5xl md:text-6xl text-[#9e712a] mb-2">
              <AnimatedCounter to={12} suffix="+" />
            </h3>
            <p className="uppercase tracking-widest text-sm text-stone-400">Years Experience</p>
          </div>
          <div>
            <h3 className="font-serif text-5xl md:text-6xl text-[#9e712a] mb-2">
              <AnimatedCounter to={98} suffix="%" />
            </h3>
            <p className="uppercase tracking-widest text-sm text-stone-400">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SLIDER */}
      <section className="max-w-5xl mx-auto px-4 mb-32 text-center">
        <h2 className="font-serif text-4xl mb-4">The Transformation</h2>
        <p className="text-stone-500 mb-12">Drag the slider to see the difference.</p>
        
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl select-none group">
          {/* After Image (Background) */}
          <img src="/tansformationImage.jpeg" alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          
          {/* Before Image (Foreground, clipped) */}
          <div className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
             <img src="/without-interior.png" alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
          </div>

          {/* Slider Input */}
          <input 
            type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />

          {/* Custom Slider Handle */}
          <div className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#60A5FA] rounded-full shadow-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" /> <path d="M9 18l6-6-6-6" /> {/* Quick double arrow illusion */}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      {/* <section className="bg-stone-100 py-24 mb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <svg className="w-12 h-12 mx-auto text-[#9e712a] mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {testimonials.map((t) => (
              <div key={t.id} className="min-w-full snap-center px-4">
                <p className="font-serif text-2xl md:text-3xl mb-6 italic leading-relaxed text-stone-700">"{t.text}"</p>
                <span className="uppercase tracking-widest text-sm font-bold text-[#9e712a]">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Let's Design Your Dream Home</h2>
          <p className="text-stone-500 mb-10 text-lg">Book a complimentary consultation with our lead designers today.</p>
          <Link href={"/booking"}>
          <button className="bg-[#9e712a] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-stone-900 transition-colors shadow-xl hover:shadow-2xl">
            Start Your Project
          </button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}