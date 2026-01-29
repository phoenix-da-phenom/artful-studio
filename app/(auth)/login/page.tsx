"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function ForgotPasswordPage() {
   const router = useRouter(); // ✅ hook at top level
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };
  const handleLoginRedirect = () => {
    router.push("/register"); // ✅ fixed path
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full
          sm:max-w-xl
          lg:max-w-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl
          p-6 sm:p-10
          shadow-2xl
        "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
           Login
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            No worries —Connection is secured.
          </p>
        </motion.div>

        {/* Content */}
        {!sent ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <input
                type="email"
                required
                placeholder=" "
                className="
                  peer
                  w-full
                  px-4 pt-5 pb-2
                  rounded-xl
                  bg-white/10
                  text-white
                  border border-white/20
                  outline-none
                  focus:border-indigo-400
                  focus:ring-2 focus:ring-indigo-400/40
                  transition
                "
              />

              <label
                className="
                  absolute
                  left-4
                  top-4
                  text-gray-400
                  pointer-events-none
                  transition-all
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-base
                  peer-focus:top-1
                  peer-focus:text-xs
                  peer-focus:text-indigo-400
                  peer-not-placeholder-shown:top-1
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:text-indigo-400
                "
              >
                Email address
              </label>
            </motion.div>


  <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <input
                type="password"
                required
                placeholder=" "
                className="
                  peer
                  w-full
                  px-4 pt-5 pb-2
                  rounded-xl
                  bg-white/10
                  text-white
                  border border-white/20
                  outline-none
                  focus:border-indigo-400
                  focus:ring-2 focus:ring-indigo-400/40
                  transition
                "
              />

              <label
                className="
                  absolute
                  left-4
                  top-4
                  text-gray-400
                  pointer-events-none
                  transition-all
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-base
                  peer-focus:top-1
                  peer-focus:text-xs
                  peer-focus:text-indigo-400
                  peer-not-placeholder-shown:top-1
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:text-indigo-400
                "
              >
                Password
              </label>
            </motion.div>
            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="
                w-full
                py-3 sm:py-4
                rounded-xl
                bg-indigo-500
                text-white
                font-semibold
                shadow-lg
                hover:bg-indigo-600
                transition
                disabled:opacity-70
              "
            >
              {loading ? "Sending link..." : "Send reset link"}
            </motion.button>
          </form>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
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

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-center text-sm mt-8"
        >
          You don't have an account?{" "}
          <span className="text-indigo-400 cursor-pointer hover:underline"   onClick={handleLoginRedirect}>
           Register here
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}