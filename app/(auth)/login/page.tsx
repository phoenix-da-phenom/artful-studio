"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Logged in 🎉");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 sm:px-6">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full
         max-w-none sm:max-w-xl lg:max-w-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl
          p-5 sm:p-8 lg:p-10
          shadow-2xl
        "
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center"
        >
          Welcome Back
        </motion.h1>

        <p className="text-gray-300 text-center mt-2 text-sm sm:text-base">
          Login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:space-y-5">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="
                w-full
                px-4 py-3 sm:py-4
                rounded-xl
                bg-white/10
                text-white
                placeholder-gray-400
                outline-none
                border border-white/20
                focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/40
                transition
              "
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="password"
              required
              placeholder="Password"
              className="
                w-full
                px-4 py-3 sm:py-4
                rounded-xl
                bg-white/10
                text-white
                placeholder-gray-400
                outline-none
                border border-white/20
                focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-400/40
                transition
              "
            />
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
    w-full
    max-w-none
    sm:max-w-xl
    lg:max-w-2xl
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-2xl
    p-6 sm:p-8 lg:p-2
    shadow-2xl
    text-white
  "
          >
            {loading ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-center text-sm mt-6"
        >
          Don’t have an account?{" "}
          <span className="text-indigo-400 cursor-pointer hover:underline">
            <Link href="/login"/>
            Sign up
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
