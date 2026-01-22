"use client";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

export default function Navbar() {
  const [showExpansion, setShowExpansion] = useState(false); // desktop "More"
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-1">
      <nav className="px-5 lg:px-10 flex items-center gap-6 relative">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/logo1.png"
            alt="logo"
            width={47}
            height={35}
            className="w-8 sm:w-9 md:w-11 lg:w-12 h-auto"
          />
          <h4 className="text-[9px] font-bold text-gray-600">Artful Studio</h4>
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-4 items-center text-sm font-extralight cursor-pointer">
          <li>Gallery</li>
          <li>Images</li>
          <li>Community</li>
          <li
            className="flex items-center gap-1"
            onClick={() => setShowExpansion((prev) => !prev)}
          >
            More
            <SlArrowDown
              className={`transition-transform duration-300 ${
                showExpansion ? "-rotate-90" : "rotate-0"
              }`}
            />
          </li>
        </ul>

        {/* Desktop more dropdown */}
        {showExpansion && (
          <div className="hidden lg:block absolute top-full left-[320px] mt-2 bg-white shadow-md rounded-md px-4 py-2">
            <ul className="flex flex-col gap-2 text-sm">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}

        {/* Right section */}
        <div className="ml-auto flex items-center gap-4">
          {/* Hamburger */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="lg:hidden text-xl"
          >
            <GiHamburgerMenu />
          </button>

          {/* Desktop buttons */}
          <div className="hidden lg:flex gap-4">
            <button className="bg-primary px-3 py-1 rounded-sm border border-gray-400 text-white hover:bg-primary/90">
              Sign in
            </button>
            <button>Join</button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[56px] z-50 transition-all duration-600 ${
          isMobileOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="
  flex flex-col gap-4 px-5 py-4 text-sm font-light
  bg-white/70
  backdrop-blur-md
  border border-white/30
  shadow-lg
"
        >
          <li>Gallery</li>
          <li>Images</li>
          <li>Community</li>

          {/* Mobile More */}
          <li
            className="flex items-center gap-1"
            onClick={() => setIsMobileMoreOpen((prev) => !prev)}
          >
            More
            <SlArrowDown
              className={`transition-transform duration-300 ${
                isMobileMoreOpen ? "-rotate-90" : "rotate-0"
              }`}
            />
          </li>

          {isMobileMoreOpen && (
            <ul className="ml-4 flex flex-col gap-2 text-gray-600">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          )}

          <hr />

          <button className="bg-primary px-3 py-2 rounded-sm text-white">
            Sign in
          </button>
          <button>Join</button>
        </ul>
      </div>
    </div>
  );
}
