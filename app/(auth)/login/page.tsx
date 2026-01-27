import React from "react";

export default async function page() {
   await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("internal delay")
        },1200)
    })
return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-xl p-8">
      <h4 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h4>

      <form className="space-y-6">
        {/* Email field with floating label */}
        <div className="relative">
          <input
            type="email"
            id="email"
            className="peer w-full px-4 pt-6 pb-2 border border-gray-400 rounded-lg 
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
                     transition-all duration-200 bg-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 
                     pointer-events-none transition-all duration-200
                     peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                     peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm"
          >
            Email address
          </label>
        </div>

        {/* Password field with floating label */}
        <div className="relative">
          <input
            type="password"
            id="password"
            className="peer w-full px-4 pt-6 pb-2 border border-gray-400 rounded-lg 
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
                     transition-all duration-200 bg-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 
                     pointer-events-none transition-all duration-200
                     peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                     peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:ring-offset-2 transition-colors duration-200 mt-2"
        >
          Log in
        </button>
      </form>
    </div>
  </div>
);
}
