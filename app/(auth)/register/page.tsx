"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter(); // ✅ hook at top level
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  // Intentional delay (safe for client components)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageReady(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  
  const handleLoginRedirect = () => {
    router.push("/login"); // ✅ fixed path
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  if (!pageReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full sm:max-w-xl lg:max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Register Now
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            No worries — we’ll send you a reset link.
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="relative">
              <input
                type="email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/10 text-white border border-white/20 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 transition"
              />
              <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-400 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-400">
                Email address
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full py-3 sm:py-4 rounded-xl bg-indigo-500 text-white font-semibold shadow-lg hover:bg-indigo-600 transition disabled:opacity-70"
            >
              {loading ? "Sending link..." : "Send reset link"}
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20">
              <span className="text-2xl">📧</span>
            </div>
            <h2 className="text-xl font-semibold text-white">
              Check your email
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              We’ve sent a password reset link to your inbox.
            </p>
          </motion.div>
        )}

        <p className="text-gray-400 text-center text-sm mt-8">
          Remember your password?{" "}
          <span className="text-indigo-400 cursor-pointer hover:underline"   onClick={handleLoginRedirect}>
            Back to login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
