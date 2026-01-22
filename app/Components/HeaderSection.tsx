import React from "react";
import TextHeader from "./TextHeader";

export default function HeaderSection() {
  return (
    <section className="min-h-50">
      <h4 className="text-center font-semibold">studio</h4>
      <div>
        <TextHeader className="font-semibold text-4xl text-center py-1 mt-2">
          Where art lives
          <span className="text-sm font-light">
            A space for photographers to exhibit work, connect with others, and
            build something real
          </span>
        </TextHeader>
      </div>
      <div className="flex my-10  gap-2 justify-center">
        <button className="bg-secondary p-4 rounded-sm border border-gray-400  text-white font-semibold cursor-pointer">
          Browse
        </button>
        <button className="bg-transparent p-4 border border-gray-400 rounded-sm font-semibold cursor-pointer text-foreground ">
          Price
        </button>
      </div>
    </section>
  );
}
