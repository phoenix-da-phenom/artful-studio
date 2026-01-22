import Image from "next/image";
import Navbar from "./Components/Navbar";
import LandingComponent from "./Components/LandingComponent";
import HeaderSection from "./Components/HeaderSection";

export default function Home() {
  return (
    <div className="py-2 bg-background/30 min-h-screen">
      <Navbar/>
      <LandingComponent/>
      <HeaderSection/>
   
    </div>
  );
}
