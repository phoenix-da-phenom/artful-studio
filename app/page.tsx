import Image from "next/image";
import Navbar from "./Components/Navbar";
import LandingComponent from "./Components/LandingComponent";
import HeaderSection from "./Components/HeaderSection";
import HowitWork from "./Components/HowitWork";

import FeaturesListSection from "./Components/FeaturesListSection";
import FeaturesListSection2 from "./Components/FeaturesListSection2";
import ReadyToBeginSection from "./Components/ReadyToBeginSection";
import Footer from "./Components/Footer"


const data= [
  {image :"/img16.jpg",
    caption:"View photography",
        description:"Browse galleries organized by artists and themes. Each collection reveals something new about the craft and the vision behind it."
    },
    {
      image:"/img7.png",
      caption: "Send images to your circle",
      description:"Browse galleries organized by artists and themes. Each collection reveals something new about the craft and the vision behind it."
    },
     {
      image:"/img6.png",
      caption: "Send images to your circle",
      description:"Browse galleries organized by artists and themes. Each collection reveals something new about the craft and the vision behind it."
    }
    
]

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

{data.map((item, index)=>(
  <FeaturesListSection
    key={index}
    count={index + 1}
    caption={item.caption}
    image={item.image}
    description={item.description}/>
))}
      {/* <FeaturesListSection
      image={"/img16.jpg"}
        caption="View photography"
        description="Browse galleries organized by artists and themes. Each
        collection reveals something new about the craft and the vision
        behind it."
      /> */}
      {/* <FeaturesListSection2
     
        caption="Send images to your circle"
        description="Share photographs with friends directly from the studio. Let them see what you see. BUild conversations around the work that moves you."
      />

       <FeaturesListSection
         image={"/img7.png"}
        caption="View photography that speaks"
        description="Browse galleries organized by artists and themes. Each
        collection reveals something new about the craft and the vision
        behind it."
      /> */}
      <ReadyToBeginSection/>
    <Footer/>
    </div>
  );
}
