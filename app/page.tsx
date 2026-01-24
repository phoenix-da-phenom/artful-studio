import Image from "next/image";
import Navbar from "./Components/Navbar";
import LandingComponent from "./Components/LandingComponent";
import HeaderSection from "./Components/HeaderSection";
import HowitWork from "./Components/HowitWork";

export default function Home() {
  return (
    <div>
      <LandingComponent />
      <HeaderSection />
      <HowitWork />
    </div>
  );
}
