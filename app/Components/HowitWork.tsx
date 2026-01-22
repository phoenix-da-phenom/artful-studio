import React from "react";
import TextHeader from "./TextHeader";
import { FaSignInAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import { FaShareNodes } from "react-icons/fa6";
export default function HowitWork() {
  return (
    <div className="min-h-screen flex flex-col justify-start lg:justify-center px-4 w-full">
      
      {/* Header */}
      <div className="py-6 lg:py-5">
        <h4 className="text-center font-semibold">Process</h4>

        <TextHeader className="font-semibold text-3xl lg:text-4xl text-center py-1 mt-2">
          Three steps to share your vision
          <span className="block text-sm font-light mt-2">
            Sign in to your account and enter the gallery. The work is already
            there, waiting. Everything you need is within your reach.
          </span>
        </TextHeader>
      </div>

      {/* Steps */}
   <div className="flex flex-col lg:flex-row justify-center gap-10">

  {/* Step 1 */}
  <div className="flex flex-col items-center text-center gap-4 w-full lg:w-1/3">
    <FaSignInAlt className="size-12 lg:size-14 text-secondary" />
    <h4 className="font-semibold text-lg lg:text-xl">
      Step one, login
    </h4>
    <p className="text-sm max-w-[260px]">
      Create an account or sign in to access the full studio
    </p>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center text-center gap-4 w-full lg:w-1/3">
    <RiCompassFill className="size-12 lg:size-14 text-secondary" />
    <h4 className="font-semibold text-lg lg:text-xl">
      Step two, explore
    </h4>
    <p className="text-sm max-w-[260px]">
      Browse curated collections and discover photographs that matter.
    </p>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center text-center gap-4 w-full lg:w-1/3">
    <FaShareNodes className="size-12 lg:size-14 text-secondary" />
    <h4 className="font-semibold text-lg lg:text-xl">
      Step three, engage
    </h4>
    <p className="text-sm max-w-[260px]">
      Share images with friends, leave comments, and like the work you admire.
    </p>
  </div>

</div>

    </div>
  );
}
