"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const images = [
  { src: "/fella.jpg", w: 420, h: 520, style: "top-0 left-0 rotate-[-3deg]" },
  { src: "/img18.jpg", w: 500, h: 420, style: "top-16 left-40 rotate-[2deg]" },
  { src: "/ishowspeed.jpg", w: 380, h: 480, style: "top-4 left-[60%] rotate-[4deg]" },

  { src: "/img15.jpg", w: 460, h: 340, style: "top-[60%] left-10 rotate-[1deg]" },
  { src: "/img17.jpg", w: 420, h: 460, style: "top-[55%] left-[40%] rotate-[-4deg]" },
  { src: "/img14.jpg", w: 500, h: 360, style: "top-[65%] left-[65%] rotate-[3deg]" },

   { src: "/img14.jpg", w: 200, h: 260, style: "top-[15%] left-[15%] rotate-[3deg]" },
   { src: "/616208539_10226830878037032_6096442200362001308_n.jpg", w: 330, h: 320, style: "top-[30%] left-[0%] rotate-[-15deg]" },
    { src: "/617132192_26424974857090245_5044848430248785369_n.jpg", w: 100, h: 120, style: "top-[0%] left-[40%] rotate-[15deg]" },
];

export default function LandingDisplayImages() {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      onClick={() => setActive(null)}
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-neutral-950"
    >
      {/* Backdrop blur when focused */}
      {active !== null && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 transition-all" />
      )}

      <div className="relative w-full max-w-6xl h-[90vh]">
        {images.map((img, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setActive(index);
              }}
              className={`
                absolute cursor-pointer transition-all duration-500 ease-out
                ${img.style}
                ${
                  active !== null && !isActive
                    ? "blur-sm opacity-40 scale-95"
                    : "opacity-100"
                }
                ${
                  isActive
                    ? "z-30 scale-110 shadow-2xl"
                    : "z-20 hover:scale-105"
                }
              `}
            >
              <Image
                src={img.src}
                alt="gallery image"
                width={img.w}
                height={img.h}
                className="rounded-xl object-cover select-none"
                priority={index < 3}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
