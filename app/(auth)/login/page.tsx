import React from "react";

export default async function page() {
   await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("internal delay")
        },1200)
    })
  return (
    <div className="w-[450px]">
    <div className="border border-gray-400 rounded-md shadow-2xl  p-6" >
     <h4 className="text-3xl font-semibold text-center mb-4">Login</h4>
     
      <div className="flex flex-col gap-4">
        <input className="border p-2 border-gray-400 rounded-md w-full" type="text" />
        <input className="border p-2 border-gray-400 rounded-md w-full" type="password" />
        <button className="bg-primary p-2 font-semibold text-foreground hover:bg-primary/25" type="submit" >login</button>
      </div>
    </div>

    </div>

  );
}
