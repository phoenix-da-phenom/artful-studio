import Image from "next/image";
import Footer from "../Components/Footer";

export default function page() {
  return (
    <div className="bg-black text-white h-full">
      <div className=" px-2 lg:px-8">
        <div className="py-8">
          <h1 className="text-2xl font-bold mb-2">Unsplash Avatars</h1>
          <p>Real avatar. Powered by creators everywhere.</p>
        </div>
        <div id="avatar" className="flex justify-center">
          <Image src={"/People.png"} alt="avatar" width={900} height={900} />
        </div>
        <div id="pets" className="flex justify-center my-15">
          <Image src="/Dogs.png" alt="avatar" width={900} height={900} />
        </div>

        <div id="art" className="flex justify-center pb-15">
          <Image src="/Abstract.png" alt="avatar" width={900} height={900} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
