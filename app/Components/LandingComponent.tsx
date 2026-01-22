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

      <div className="flex  gap-2 justify-center">
        <button className="bg-secondary p-4 rounded-sm border border-gray-400  text-white font-semibold cursor-pointer">Explore</button>
          <button className="bg-transparent p-4 border border-gray-400 rounded-sm font-semibold cursor-pointer text-foreground ">Login</button>
      </div>

      <div className="my-10">
        <LandingDisplayImages/>
      </div>
    </div>
  );
}
