import React from "react";
import TheButton from "./TheButton";
import Image from "next/image";

const ExploreHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <h4 className="text-3xl md:text-4xl font-semibold">
              See what matters most clearly
            </h4>

            <p className="text-gray-600 leading-relaxed">
              A gallery built for those who understand that an image tells the
              whole story. Browse, discover and lose yourself in photographs
              that capture the world as it truly is.
            </p>

            <div>
              <TheButton />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative min-h-[300px]">
            <Image
              src="/fella.jpg"
              alt="Gallery preview"
              fill
              className="object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreHeroSection;

