"use client"; // Required for Framer Motion and React State

import { useState } from "react";
import { motion } from "framer-motion";

// --- Mock Data ---
const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Office"];

const articles = [
  {
    id: 1,
    tag: "Kitchen",
    title: "5 Kitchen Island Trends for 2024",
    desc: "From waterfall edges to bold contrasting materials, see what's dominating kitchen layouts this year.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    tag: "Bedroom",
    title: "Layering Textures for a Better Sleep",
    desc: "How combining linen, wool, and velvet can transform your bedroom into a serene evening retreat.",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    tag: "Office",
    title: "Maximizing Natural Light",
    desc: "Struggling with a dark workspace? Here are architectural and decorative hacks to bounce light around.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    tag: "Bathroom",
    title: "Creating a Spa-Like Bathroom",
    desc: "Simple updates from rainfall showerheads to organic bath mats that elevate your morning routine.",
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    tag: "Living Room",
    title: "Zoning an Open Concept Layout",
    desc: "Use rugs, lighting, and furniture placement to define distinct areas without building walls.",
    img: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    tag: "All",
    title: "Thrifting for Vintage Centerpieces",
    desc: "A guide to hunting down unique mid-century finds that add character and history to any space.",
    img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80",
  },
];

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BlogsHero() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic based on active category
  const filteredArticles = articles.filter((article) =>
    activeCategory === "All" ? true : article.tag === activeCategory
  );

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[50vh] min-h-[400px] bg-cover bg-center text-white mb-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-wide mb-4">
            Curated Spaces
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide opacity-90">
            Your Ultimate Interior Design Blog
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
                  activeCategory === cat
                    ? "bg-[#8c7b6b] border-[#8c7b6b] text-white"
                    : "border-stone-300 text-stone-600 hover:border-[#8c7b6b] hover:text-[#8c7b6b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-auto min-w-[250px]">
            <input
              type="text"
              placeholder="Search articles, styles..."
              className="w-full px-5 py-2.5 rounded-full border border-stone-300 focus:outline-none focus:border-[#8c7b6b] transition-colors bg-transparent"
            />
          </div>
        </div>

        {/* Featured Blog */}
        {activeCategory === "All" && (
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl border-b border-stone-200 pb-4 mb-6">
              Featured
            </h2>
            <motion.article
              whileHover={{ y: -5 }}
              className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <img
                src="/blogspage.jpeg"
                alt="Modern Minimalist Living Room"
                className="w-full md:w-1/2 h-[300px] md:h-[450px] object-cover"
              />
              <div className="flex flex-col justify-center p-8 md:p-12 w-full md:w-1/2">
                <span className="text-[#8c7b6b] text-xs font-bold uppercase tracking-wider mb-3">
                  Living Room
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mb-4 text-stone-900">
                  The Art of Warm Minimalism
                </h3>
                <p className="text-stone-500 mb-6 leading-relaxed">
                  Discover how to create a clean, uncluttered space without losing
                  the cozy, lived-in feel. We explore natural textures, neutral
                  palettes, and strategic lighting techniques.
                </p>
                <span className="font-bold underline decoration-2 underline-offset-4 hover:text-[#8c7b6b] transition-colors self-start">
                  Read Article
                </span>
              </div>
            </motion.article>
          </motion.section>
        )}

        {/* Latest Articles Grid */}
        <section>
          <h2 className="font-serif text-3xl border-b border-stone-200 pb-4 mb-6">
            Latest Articles
          </h2>

          {filteredArticles.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                >
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-[#8c7b6b] text-xs font-bold uppercase tracking-wider mb-2">
                      {article.tag}
                    </span>
                    <h4 className="font-serif text-xl mb-3 text-stone-900">
                      {article.title}
                    </h4>
                    <p className="text-stone-500 text-sm mb-6 flex-grow">
                      {article.desc}
                    </p>
                    <span className="font-bold text-sm underline decoration-2 underline-offset-4 hover:text-[#8c7b6b] transition-colors self-start mt-auto">
                      Read Article
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-stone-500">
              No articles found for this category.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}