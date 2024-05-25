import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Education from "@/components/layout/Education";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Project from "@/components/layout/Project";
import Skills from "@/components/layout/Skills";

export default function Home() {
  return (
   <div>
     <Header/>
      <div className="bg-[#081b29]" id="home">
      <Hero/>
     </div>
     <div className="bg-[#112e42]" id="about">
      <About/>
     </div>
     <div className="bg-[#081b29]" id="education">
       <Education/>
     </div>
     <div className="bg-[#112e42]" id="skills">
        <Skills/>
     </div>
     <div className="bg-[#081b29]" id="project">
       <Project/>
     </div>
     <div className="bg-[#112e42]" id="footer">
       <Footer/>
     </div>
  </div>
  );
}
