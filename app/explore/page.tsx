import React from "react";
import LandingComponent from "../Components/LandingComponent";
import HeaderSection from "../Components/HeaderSection";
import HowitWork from "../Components/HowitWork";
import Navbar from "../Components/Navbar";
import ExploreHeroSection from "../Components/ExploreHeroSection";
import WhatMakesThisGalleryDifferent from "../Components/WhatMakesThisGalleryDifferent";
import ImageCard from "../Components/ImageCard";

const imageData = [
  {
    image: "/img18.jpg",
    title: "Crystal cleat image quality",
    text: "Every photograph displays in high resolution, exactly as the artistic intended.",
  },
  {
    image: "/img3.PNG",
    title: "Simple navigation that works",
    text: "Find what you're looking for without friction or unnecessary steps. ",
  },
  {
    image: "/img5.png",
    title: "Organized by what matters",
    text: "Categories that make sense, curated to help you discover new work.",
  },
];

export default function Page() {
  return (
    <div>
      <ExploreHeroSection />
      <WhatMakesThisGalleryDifferent />
      <div className="my-10">
        <div style={{ display: "flex", gap: "20px", width: "80%", marginLeft:"auto", marginRight:"auto" }}>
          {imageData.map((item, index) => (
            <ImageCard
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
