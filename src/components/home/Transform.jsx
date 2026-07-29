"use client"
import React, { useState } from "react";

const Transform = () => {
     const [sliderPos, setSliderPos] = useState(50);
  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 mb-32 mt-20 text-center">
        <h2 className="font-serif text-5xl mb-4">The Transformation</h2>
        <p className="text-stone-500 mb-12">
          Drag the slider to see the difference.
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl select-none group">
          {/* After Image (Background) */}
          <img
            src="/tansformationImage.jpeg"
            alt="After"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Before Image (Foreground, clipped) */}
          <div
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src="/without-interior.png"
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
            />
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />

          {/* Custom Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#60A5FA] rounded-full shadow-lg flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" /> <path d="M9 18l6-6-6-6" />{" "}
                {/* Quick double arrow illusion */}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transform;
