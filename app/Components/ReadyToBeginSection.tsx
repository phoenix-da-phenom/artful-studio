import React, { Fragment } from "react";
import TextHeader from "./TextHeader";

function ReadyToBeginSection() {
  return (
    <section className="min-h-screen">
      <div className="mt-10">
        <TextHeader className="font-semibold text-4xl sm:text-5xl md:text-2xl py-4">
            <h4 className="text-center">Ready to begin</h4>
        
          <span className="block mt-4 text-sm sm:text-base font-light opacity-90 max-w-2xl mx-auto">
           Join the studio and start sharing your perspective with artists and photographers
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

export default ReadyToBeginSection;
