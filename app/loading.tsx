"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 animate-fadeIn">
        {/* Spinner */}
        <div className="relative w-10 h-10">
          <span className="absolute inset-0 rounded-full border-2 border-gray-300" />
          <span className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>

        {/* Text */}
        <p className="text-sm tracking-widest text-gray-500 animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
}
