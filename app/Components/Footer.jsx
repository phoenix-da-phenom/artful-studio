import Image from "next/image";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-20 py-10 text-sm bg-transparent">
      {/* Top Section */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Logo + Contact */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo1.png"
            alt="Artful Studio Logo"
            height={80}
            width={80}
          />

          <div>
            <h6 className="font-semibold">Address</h6>
            <p>Ojudo Berger, Lagos</p>
          </div>

          <div>
            <h6 className="font-semibold">Contact</h6>
            <p>081849y384</p>
            <p className="break-all">ehinormichael@ymail.com</p>
          </div>

          <div className="flex gap-4 text-gray-600 text-2xl">
            <FaFacebook className="hover:text-black cursor-pointer" />
            <FaInstagramSquare className="hover:text-black cursor-pointer" />
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaLinkedin className="hover:text-black cursor-pointer" />
            <FaYoutube className="hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <ul className="space-y-2 font-medium">
            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            <li className="hover:text-gray-600 cursor-pointer">Gallery</li>
            <li className="hover:text-gray-600 cursor-pointer">Image Detail</li>
            <li className="hover:text-gray-600 cursor-pointer">Login</li>
            <li className="hover:text-gray-600 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <ul className="space-y-2 font-medium">
            <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Share Work</li>
            <li className="hover:text-gray-600 cursor-pointer">Community</li>
            <li className="hover:text-gray-600 cursor-pointer">Resources</li>
            <li className="hover:text-gray-600 cursor-pointer">Supports</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p>
          &copy; {new Date().getFullYear()} Artful Studio Photos. All rights reserved.
        </p>

        <ul className="flex flex-wrap justify-center md:justify-end gap-6">
          <li className="hover:text-gray-600 cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            Terms of Service
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            Cookie Settings
          </li>
        </ul>
      </div>
    </footer>
  );
}