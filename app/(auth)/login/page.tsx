import React from "react";

export default async function page() {
   await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("internal delay")
        },1200)
    })
  return (
    <div>
      <div>
        <input type="text" />
        <input type="password" />
        <button type="submit" />
      </div>
    </div>
  );
}
