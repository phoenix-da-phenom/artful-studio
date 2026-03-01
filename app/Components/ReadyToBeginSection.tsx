"use client"
import React, { Fragment } from "react";
import TextHeader from "./TextHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ReadyToBeginSection() {
  const router = useRouter()
  return (
    <section className="min-h-screen">
      <div className="mt-10">
        <TextHeader className="font-semibold text-4xl sm:text-5xl md:text-2xl py-4">
          <h4 className="text-center">Ready to begin</h4>

          <span className="block mt-4 text-sm sm:text-base font-light opacity-90 max-w-2xl mx-auto">
            Join the studio and start sharing your perspective with artists and
            photographers
          </span>
        </TextHeader>
       <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-90  mx-auto">
          <button onClick={()=>router.push("/explore")} className="bg-secondary text-black px-8 py-3 font-semibold rounded-sm hover:bg-gray-200 transition">
            Browse
          </button>

          <button className="border border-white px-8 py-3 font-semibold rounded-sm hover:bg-white/10 transition">
            Pricing
          </button>
        </div>
      </div>
      <div className="p-3 mt-5">
        <Image
          src="/collabo.PNG"
          height={1300}
          width={1200}
          alt="image"
          className=" mx-auto"
        />
      </div>
    </section>
  );
}

export default ReadyToBeginSection;
