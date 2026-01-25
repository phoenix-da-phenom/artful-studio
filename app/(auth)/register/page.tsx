import React from "react";

export default async function page() {
  await new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve("intentional delay")
    }, 1200)
  })
  return (
    <div>
      <div>
        <input type="text" />
        <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Enter password" />
        <button type="submit" />
      </div>
    </div>
  );
}
