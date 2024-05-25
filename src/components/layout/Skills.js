import SkillsBars from "@/components/layout/SkillsBar";

export default function Skills() {
    return (
       <section className="pt-24 pb-16">
           <div className="p-4">
              <div className="flex gap-2 items-center justify-center pb-6">
                <h1 className="text-[#ededed] text-center md:text-6xl text-4xl font-bold">My</h1>
                <h1 className="text-[#00abf0] text-center md:text-6xl text-4xl font-bold">Skills</h1>
              </div>
              <div className="mt-8 md:flex ">
                      <div className="max-w-xl mx-auto">
                        <h2 className="text-[#ededed] font-bold text-3xl pb-4 ml-8">Coding Languagues</h2>
                        <div className="grid grid-cols-1 gap-10 border-4 border-[#00abf0] rounded-lg mb-4 ml-4 text-xl p-4">
                               <SkillsBars
                                 name={'C++'}
                                 
                                 image={'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png'}
                               />
                               <SkillsBars
                                 name={'C Programming'}
                                 
                                 image={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'}
                               />
                               <SkillsBars
                                 name={'Python'}
                                 
                                 image={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/2048px-Python_logo_51.svg.png'}
                               />
                               <SkillsBars
                                   name={'Java'}
                                   
                                   image={'https://upload.wikimedia.org/wikipedia/commons/b/bb/Java-logo.png'}
                               />
                        </div>
                      </div>
                      <div className="max-w-xl mx-auto">
                        <h2 className="text-[#ededed] font-bold text-3xl pb-4 ml-8">Web Development</h2>
                        <div className="grid grid-cols-2 gap-10 border-4 border-[#00abf0] rounded-lg lg mb-4 ml-4 text-xl p-4">
                               <SkillsBars
                                 name={'HTML'}
                                 image={'https://logowik.com/content/uploads/images/492_html5.jpg'}
                               />
                               <SkillsBars
                                 name={'CSS'}
                                 image={'https://logowik.com/content/uploads/images/123_css3.jpg'}
                               />
                               <SkillsBars
                                 name={'Javascript'}
                                 image={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}
                               />
                               <SkillsBars
                                  name={'React.js'}
                                  
                                  image={'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'}
                               />
                               <SkillsBars
                                  name={'Next.js'}
                                  
                                  image={'https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp'}
                               />
                               <SkillsBars
                                  name={'Node.js'}
                                  
                                  image={'https://logowik.com/content/uploads/images/nodejs.jpg'}
                               />
                               <SkillsBars
                                name={'Express.jS'}
                                image={'https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png'}
                                />
                               <SkillsBars
                                   name={'Mongo DB'}
                                   
                                   image={'https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp'}
                               />
                        </div>
                     </div>
              </div>
           </div>
       </section>
    );
}