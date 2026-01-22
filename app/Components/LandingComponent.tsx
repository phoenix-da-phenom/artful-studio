import React from "react";
import TextHeader from "./TextHeader";
import LandingDisplayImages from "./LandingDisplayImages";

export default function LandingComponent() {
  return (
    <div>
      <TextHeader className="font-semibold text-4xl text-center py-5 mt-10">
        Capture moments, share stories
        <span className="text-sm font-light">
          Discover curated photography, connect with artists, and build your
          creative community
        </span>
      </TextHeader>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-50  mx-auto">
          <button className="bg-secondary text-black px-8 py-3 font-semibold rounded-sm hover:bg-gray-200 transition">
            Browse
          </button>

          <button className="border border-white px-8 py-3 font-semibold rounded-sm hover:bg-white/10 transition">
            Pricing
          </button>
        </div>
      <div className="mt-10">
        <LandingDisplayImages/>
      </div>
    </div>
  );
}
