"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Phone, Mail, User, Building } from 'lucide-react';

export default function LeadFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Residential Interior',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitted(true);
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyfnY_8_VAdtbnrGNoFMYp0LKuy0mUdjz_1rmIDGWZkkpsEwyk4xlPJI-mmKqZiHq9O/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    console.log("Data is devansh " , data)

    if (data.success) {
      setIsSubmitted(true);
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <section className="w-full bg-[#f5f1ea] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 font-sans text-[#1c1c1c] overflow-hidden">
      <div className="max-w-6xl mx-auto bg-[#ede7e1] border border-[#e1d9ce] rounded-lg shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT COLUMN: Interactive Lead Form */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative bg-[#ede7e1]">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#9e712a]" />
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#9e712a]">
                Get a Free Consultation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1c1c1c] mb-3 leading-snug">
              Let's Bring Your Vision To Life
            </h2>
            <p className="text-xs sm:text-sm text-[#6b655f] font-light leading-relaxed mb-8">
              Fill in your details below and our lead designer will get back to you within 24 hours with a custom project estimate.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e712a]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full pl-10 pr-4 py-3.5 bg-[#f5f1ea] border border-[#d6cec3] rounded-sm text-sm text-[#1c1c1c] placeholder-[#8c857b] focus:outline-none focus:border-[#9e712a] focus:ring-1 focus:ring-[#9e712a] transition-all"
                  />
                </div>

                {/* Email & Phone Twin Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e712a]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3.5 bg-[#f5f1ea] border border-[#d6cec3] rounded-sm text-sm text-[#1c1c1c] placeholder-[#8c857b] focus:outline-none focus:border-[#9e712a] focus:ring-1 focus:ring-[#9e712a] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e712a]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3.5 bg-[#f5f1ea] border border-[#d6cec3] rounded-sm text-sm text-[#1c1c1c] placeholder-[#8c857b] focus:outline-none focus:border-[#9e712a] focus:ring-1 focus:ring-[#9e712a] transition-all"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e712a]">
                    <Building className="w-4 h-4" />
                  </div>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3.5 bg-[#f5f1ea] border border-[#d6cec3] rounded-sm text-sm text-[#1c1c1c] focus:outline-none focus:border-[#9e712a] focus:ring-1 focus:ring-[#9e712a] transition-all cursor-pointer"
                  >
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Custom Furniture">Custom Furniture</option>
                    <option value="Full Renovation">Full Renovation</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your project space or requirements..."
                    className="w-full p-4 bg-[#f5f1ea] border border-[#d6cec3] rounded-sm text-sm text-[#1c1c1c] placeholder-[#8c857b] focus:outline-none focus:border-[#9e712a] focus:ring-1 focus:ring-[#9e712a] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group flex items-center justify-center gap-3 bg-[#9e712a] hover:bg-[#886022] text-white py-4 px-6 rounded-sm text-sm font-medium transition-all shadow-md"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-[#9e712a]/10 rounded-full flex items-center justify-center text-[#9e712a]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif text-[#1c1c1c]">Thank You!</h3>
                <p className="text-sm text-[#6b655f] max-w-xs font-light leading-relaxed">
                  Your details have been received. Our senior design team will reach out to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#9e712a] underline hover:text-[#886022] pt-2"
                >
                  Submit another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Image Showcase with Floating Credibility Badges */}
        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Interior Design"
            className="w-full h-full object-cover"
          />

          {/* Dark Soft Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Floating Credibility Card 1 (Top Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3.5 rounded-sm shadow-lg flex items-center gap-3 border border-white/50"
          >
            <div className="w-10 h-10 bg-[#9e712a] text-white rounded-full flex items-center justify-center font-serif text-lg font-bold">
              ★
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1c1c1c]">4.9 / 5 Rating</p>
              <p className="text-[10px] text-[#6b655f]">From 320+ Verified Clients</p>
            </div>
          </motion.div>

          {/* Floating Credibility Card 2 (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-sm shadow-xl border border-white/50"
          >
            <p className="text-xs italic text-[#2b2b2b] font-serif mb-1">
              "The design exceeded our expectations. Flawless execution from start to finish."
            </p>
            <p className="text-[11px] font-semibold text-[#9e712a] uppercase tracking-wider">
              — Architectural Digest
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}