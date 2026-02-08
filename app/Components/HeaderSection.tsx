import React from "react";
import TextHeader from "./TextHeader";

export default function HeaderSection() {
  return (
    <section
      className="
        relative 
        min-h-[70vh] 
        flex 
        items-center 
        justify-center 
        overflow-hidden
      "
    >
      {/* Background image */}
      <div
        className="
          absolute 
          inset-0 
          bg-[url('/bg.webp')] 
          bg-cover 
          bg-center 
          bg-no-repeat
          scale-105
        "
      />

      {/* Gradient overlay */}
      <div
        className="
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-black/70 
          via-black/50 
          to-black/80
        "
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl text-center text-white">
        <h4 className="uppercase tracking-widest text-xs font-semibold opacity-80">
          studio
        </h4>

        <TextHeader className="font-semibold text-4xl sm:text-5xl md:text-6xl py-4">
          Where art lives
          <span className="block mt-4 text-sm sm:text-base font-light opacity-90 max-w-2xl mx-auto">
            A space for photographers to exhibit work, connect with others, and
            build something real
          </span>
         </TextHeader>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="bg-secondary text-black px-8 py-3 font-semibold rounded-sm hover:bg-gray-200 transition">
            Browse
          </button>

          <button className="border border-white px-8 py-3 font-semibold rounded-sm hover:bg-white/10 transition">
            Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
