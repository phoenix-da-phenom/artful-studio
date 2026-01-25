"use client";
import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="animate-logoFade">
          <Image
            src="/logo1.png"
            alt="Artful Studio logo"
            width={60}
            height={45}
            priority
          />
        </div>

     
        {/* Text */}
        <p className="text-xs tracking-widest text-gray-500 animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
}
