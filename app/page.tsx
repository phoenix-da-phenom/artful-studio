import Image from "next/image";
import Navbar from "./Components/Navbar";
import LandingComponent from "./Components/LandingComponent";
import HeaderSection from "./Components/HeaderSection";
import HowitWork from "./Components/HowitWork";

import FeaturesListSection from "./Components/FeaturesListSection";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 1200);
  });

  return (
    <div>
      <LandingComponent />
      <HeaderSection />
      <HowitWork />

      <FeaturesListSection
        caption="View photography"
        description="Browse galleries organized by artists and themes. Each
        collection reveals something new about the craft and the vision
        behind it."
      />
    </div>
  );
}
