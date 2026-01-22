"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const images = [
  { src: "/img1.PNG", w: 420, h: 520, style: "top-0 left-0 rotate-[-3deg]" },
  { src: "/img2.PNG", w: 500, h: 420, style: "top-16 left-40 rotate-[2deg]" },
  { src: "/img3.PNG", w: 380, h: 480, style: "top-4 left-[60%] rotate-[4deg]" },

  { src: "/img4.PNG", w: 460, h: 340, style: "top-[60%] left-10 rotate-[1deg]" },
  { src: "/img5.PNG", w: 420, h: 460, style: "top-[55%] left-[40%] rotate-[-4deg]" },
  { src: "/img6.PNG", w: 500, h: 360, style: "top-[65%] left-[65%] rotate-[3deg]" },
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
