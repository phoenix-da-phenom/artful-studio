"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 animate-fadeIn">
        <Image src="/logo1.png" alt="logo" width={60} height={45} />
        <p className="text-xs tracking-widest text-gray-500 animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
}
