"use client"; // <- THIS MUST BE FIRST

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => (prev.length < 10 ? prev + "." : "Loading"));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image src="/loading-icon.svg" alt="Loading" width={100} height={100} />
      <p className="mt-4 text-lg font-semibold">{loadingText}</p>
    </div>
  );
}


// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Loading() {
  

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
//       <div className="flex flex-col items-center gap-6 animate-fadeIn">
//         <Image src="/logo1.png" alt="logo" width={60} height={45} />
//         <p className="text-xs tracking-widest text-gray-500 animate-pulse">
//           LOADING...
//         </p>
//       </div>
//     </div>
//   );
// }
