import EducationTile from "@/components/layout/EducationTile";


export default function Education() {
    return (
       <section className="pt-24 bg-[#081b29] pb-24">
          <div className="flex items-center justify-center gap-4 md:text-6xl text-4xl font-bold p-8">
             <h1 className="text-[#ededed]">My</h1>
             <h1 className="text-[#00abf0]">Journey</h1>
          </div>
          <div className="md:flex  ml-6">
            <div className="max-w-xl mx-auto">
                <h1 className="text-[#ededed] text-2xl font-bold p-4">College</h1>
                <div className="border-l-2 border-[#00abf0]">
                <EducationTile 
                  years={'2022-2026'} 
                  image={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nitdgpfront.jpg/220px-Nitdgpfront.jpg'}
                  name={'National Institute of Techonology Durgapur'}
                  info={'I am currently studying at the National Institute of Techonolgy Durgapur in the Electronics and Communucation Engineering Branch since 2022 November and I am currently having a CGPA of 9.3 '}
                />
                </div>
            </div>
            <div className="max-w-xl mx-auto">
                <h1 className="text-[#ededed] text-2xl font-bold p-4">Schooling</h1>
                <div className="border-l-2 border-[#00abf0]">
                <EducationTile 
                  years={'2008-2020'} 
                  image={'https://cache.careers360.mobi/media/schools/social-media/media-gallery/23292/2019/12/5/The%20Frank%20Anthony%20Public%20School-Campus-View.JPG'}
                  name={'Frank Anthony Public School, Kolkata - ICSE'}
                  info={'I successfully completed my ICSE or my 10th Board examinations from the Frank Anthony Public School, Kolkata located in the heart of central Kolkata with a decent score of 94.4% percentage.'}
                />
                <EducationTile 
                  years={'2020-2022'} 
                  image={'https://cache.careers360.mobi/media/schools/social-media/media-gallery/23292/2019/12/5/The%20Frank%20Anthony%20Public%20School-Campus-View.JPG'}
                  name={'Frank Anthony Public School, Kolkata - ISC'}
                  info={'I also successfully completed my ISC or my 12th Board examinations from the Frank Anthony Public School, Kolkata with a decent aggregate score of 95.75% percentage.'}
                />
                </div>
            </div>
          </div>
       </section>
    );
}