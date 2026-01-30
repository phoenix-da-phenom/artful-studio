import Image from "next/image";
import React from "react";

export default function FeaturesListSection() {
  return (
    <section className="min-h-screen bg-primary/20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12">
        
        {/* SECTION TITLE */}
        <h4 className="font-semibold mb-16">
          <span className="underline mr-2">01</span>
          <span className="underline">Curated galleries</span>
        </h4>

        {/* MAIN CONTENT */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">
          
          {/* IMAGE */}
          <div className="relative w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[520px]">
            <Image
              src="/img14.jpg"
              alt="Curated gallery preview"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-full max-w-xl text-center md:text-left">
              
              <p className="text-sm font-semibold tracking-wide mb-4">
                Collection
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15]">
                View photography <br className="hidden sm:block" />
                that speaks
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700">
                Browse galleries organized by artists and themes. Each
                collection reveals something new about the craft and the vision
                behind it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
