import Image from "next/image";
import Link from "next/link";
import LinkedIn from "@/components/icons/LinkedIn";
import Instagram from "@/components/icons/Instagram";
import Github from "@/components/icons/Github";

export default function Hero() {
    return (
      <div className="md:flex justify-between pt-12 ">
         <div className="md:flex-rows p-4 md:ml-16 md:max-w-xl">
            <div className="text-[#ededed] font-bold md:text-6xl text-5xl pb-2 text-center md:text-left">Hi, I'm Riddha Roy Chowdhury</div>
            <div className="text-[#00abf0] font-semibold text-4xl pt-4 pb-4 text-center md:text-left">Coding Enthuciast</div>
            <div className="pt-4 pb-4">
                <div className="text-wrap md:mr-16 text-[#ededed] font-md text-center md:text-left">
                    <p>Welcome to my portfolio, this is a website built and maintained by me. Feel free to navigate through my Portfolio website to know more about me, my works and my experiences. Do Enjoy your time navigating through the website!</p>
                </div>
            </div>
            <div className="md:flex items-center md:ml-0 ml-24 pt-12 gap-16">
                <button className="py-3 px-12 bg-[#00abf0] rounded-lg text-lg font-semibold border border-[#00abf0] hover:bg-[#081b29] hover:text-[#00abf0] transition-all duration-500 ease-linear delay-0 mb-2 mr-3 md:mr-0">
                    Resume
                </button>
            </div>
            <div className="flex gap-6 pt-4 pb-4 mt-6">
                <Link href={'https://www.linkedin.com/in/riddha-roy-chowdhury-b0738a281/'} className="rounded-full text-[#00abf0] p-3 px-3 border border-[#00abf0] "><LinkedIn/></Link>
                <Link href={'https://www.instagram.com/riddharc20_4/?next=%2F'} className="rounded-full text-[#00abf0] p-3 px-3 border border-[#00abf0] "><Instagram/></Link>
                <Link href={'https://github.com/Riddha2004'} className="rounded-full text-[#00abf0] p-3 px-3 border border-[#00abf0] "><Github/></Link>
            </div>
         </div>
         <div className="hidden md:block md:mr-36 md:pl-12 p-4 md:max-w-xl">
            <Image src={'/Home.png'} width={'480'} height={'480'} alt=""></Image>
         </div>
      </div>
    );
}