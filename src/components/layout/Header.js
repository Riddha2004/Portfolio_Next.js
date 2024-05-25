'use client';
import Link from "next/link";
import Bars3 from "@/components/icons/Bars3";
import { useState } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (
      <header className="bg-[#081b29] text-[#ededed] sticky top-0">
         <nav className="flex items-center md:hidden justify-between">
           <div className="text-2xl font-bold p-4 md:ml-12 ml-4">
           <Link href={'/'}>Riddha</Link>
           </div>
             <button 
               className="p-1 border mr-4"
               onClick={()=>setMobileNavOpen(prev => !prev)}
               >
                <Bars3/>
             </button>
         </nav>
         {mobileNavOpen && (
           <div 
           onClick={()=>setMobileNavOpen(false)}
           className="md:hidden p-4 bg-[#081b29] rounded-lg mt-2 flex flex-col gap-2 text-center hover:text-[#00abf0]">
            <Link href={'/'} className="hover:text-[#00abf0]">Home</Link>
            <Link href={'/#about'} className="hover:text-[#00abf0]">About</Link>
            <Link href={'/#education'} className="hover:text-[#00abf0]">Education</Link>
            <Link href={'/#skills'} className="hover:text-[#00abf0]">Skills</Link>
            <Link href={'/#project'} className="hover:text-[#00abf0]">Projects</Link>
            </div>
         )}
         <nav className="hidden md:flex items-center justify-between">
           <div className="text-2xl font-bold p-4 ml-16">
           <Link href={'/'}>Riddha</Link>
           </div>
          <div className="flex items-center gap-12 p-4 text-lg mr-16">
             <Link href={'/'} className="hover:text-[#00abf0]">Home</Link>
             <Link href={'/#about'} className="hover:text-[#00abf0]">About</Link>
             <Link href={'/#education'} className="hover:text-[#00abf0]">Education</Link>
             <Link href={'/#skills'} className="hover:text-[#00abf0]">Skills</Link>
             <Link href={'/#project'} className="hover:text-[#00abf0]">Projects</Link>
          </div>
         </nav>
      </header>  
    );
}