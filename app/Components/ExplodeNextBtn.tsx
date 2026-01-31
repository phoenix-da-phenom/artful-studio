import React from 'react'

export default function ExplodeNextBtn() {
  return (
 
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="bg-secondary text-black px-8 py-3 font-semibold rounded-sm hover:bg-gray-200 transition">
            Browse
          </button>

          <button className="border border-white px-8 py-3 font-semibold rounded-sm hover:bg-white/10 transition">
            Pricing
          </button>
        </div>
  )
}
