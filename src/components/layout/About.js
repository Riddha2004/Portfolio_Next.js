'use client';
import Link from "next/link";
import { useState } from "react";
export default function About() {
   const [read,setRead] = useState(false)
    return (
       <section className="pt-16">
          <div className="flex items-center gap-2 md:text-6xl text-4xl font-bold p-4 justify-center">
            <div className="text-[#ededed]">About</div>
            <div className="text-[#00abf0]">Me</div>
          </div>
          <div className="p-8 flex items-center justify-center mt-16">
          <div className="rounded-[50%] w-[266px] h-[292px] border-[0.2rem] border-t-[#00abf0] border-b-[#00abf0] border-l-[#112e42] border-r-[#112e42] ">
             <div className="px-4 pt-4">
                 <img src={'/About.jpeg'} alt="" className="rounded-[50%] w-[230px] h-[250px] border border-[#00abf0]" />
             </div>
          </div>
          </div>
          <div className="m-8">
             <div className="flex items-center justify-center text-[#edededed] text-3xl font-bold">
                 Coding Enthuciast!
             </div>
          </div>
          <div className={!read ? 'line-clamp-2 md:m-8 text-[#ededed] text-center md:px-24 md:mx-10 px-2':"md:m-8 text-[#ededed] flex items-center justify-center text-center px-24 md:mx-10"}>
              <p>Hi I&apos;m Riddha Roy Chowdhury pusuing my B.Tech Degree in Electronics and Communication Enginnering(ECE) at National Institute of Techonology Durgapur (NIT Durgapur) and Coding Enthuciast, Web Developer. I teke the privilage to navigate into the world of Coding, Competitive Programming, Web development and obviously in the field of Electronics & Communication. My effort is also to make a venture in the Entertainment world and improve its dimension through Programming and Web development. I have already entered into the field of Programming and web development and successfully worked on few projects like Food delivery Website, Password Manager and few more. Still I am aspiring to create some innovative projects which would develop my journey in the world of Programming and Web development. </p>
          </div>
          <div className="text-[#081b29] flex items-center justify-center p-4 pb-16">
             <button onClick={()=>setRead(prev => !prev)} className="px-8 py-3 text-lg font-medium bg-[#00abf0] rounded-lg">
               {!read && (
                  <div>Read More</div>
               )}
               {!!read && (
                  <div>Read Less</div>
               )}
             </button>
          </div>
       </section>
    );
}