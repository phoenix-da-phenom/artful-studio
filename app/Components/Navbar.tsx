"use client"
import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
export default function Navbar() {
    const [showExpansion, setShowExpansion]= useState<boolean>(false);
    console.log(showExpansion)
    
  return (
    <div className="border-b border-gray-300 py-1">
    
        <nav className="px-10 flex items-center gap-10">
            <div className='flex  flex-col items-center'>
                <Image src={'/logo.png'} height={25} width={40} alt='logo'/>
                <h4 className='text-[9px] font-bold text-gray-600'>Artful Studio</h4>
            </div>
            <ul className='hidden lg:flex gap-4 items-center text-sm font-extralight cursor-pointer'>
                <li>Gallery</li>
                 <li>Images</li>
                 <li>Community</li>
                 <li className='flex items-end gap-1' onClick={( )=> setShowExpansion(prev => !prev)}>More <SlArrowDown className={`transition-transform duration-300 ${
      showExpansion ? "-rotate-90" : "rotate-0"
    }`} /> </li>
            </ul>
            {
                showExpansion && ( <div className="transition-all duration-100 ease-out">
            <ul className='flex gap-3 items-center font-extralight cursor-pointer'>
                <li>item1 </li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
           </div>)      


            }


            <div className=' flex items-center   ml-auto '>
                <div className='lg:hidden'>
                    <GiHamburgerMenu />
                </div>
               
                <div className='hidden lg:flex flex-row gap-4'>
                <button className='bg-primary px-3 py-1 rounded-sm text-white hover:bg-primary/90 hover:cursor-pointer'>sign in</button>
                <button className='cursor-pointer'>Join</button>
                </div>
               
               
            </div>




        </nav>



    </div>
  )
}
