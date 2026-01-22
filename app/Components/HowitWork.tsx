import React from "react";
import TextHeader from "./TextHeader";
import { FaSignInAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import { FaShareNodes } from "react-icons/fa6";
export default function HowitWork() {
  return (
    <div className="h-screen flex flex-col justify-center pb-15">
      <div className="mt-15 py-5">
        <h4 className="text-center font-semibold">Process</h4>

        <TextHeader className="font-semibold text-4xl text-center py-1 mt-2">
          Three steps to share your vision
          <span className="text-sm font-light">
            Sign in to your account and enter the gallery, The work is already
            there, waiting. Everything you need is within your reach.
          </span>
        </TextHeader>
      </div>

      <div className="flex flex-col lg:flex-row justify-center">
        {/* Step 1 */}
        <div className="flex flex-col gap-5 h-40 text-center justify-center items-center w-100">
          <FaSignInAlt className="size-14 text-secondary" />
          <div>
            <h4 className="font-semibold text-xl">Step one, login</h4>
            <p className="text-sm">
              Create an account or sign in to access the full studio
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-5 h-40 text-center justify-center items-center w-100">
          <RiCompassFill className="size-14 text-secondary" />
          <div>
            <h4 className="font-semibold text-xl">Step two, explore</h4>
            <p className="text-sm">
              Browse curated collections and discover photographs that matter.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-5 h-40 text-center justify-center items-center w-100">
          <FaShareNodes className="size-14 text-secondary" />
          <div>
            <h4 className="font-semibold text-xl">Step three, engage</h4>
            <p className="text-sm">
              Share images with friends, leave comments, and like the work you admire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
