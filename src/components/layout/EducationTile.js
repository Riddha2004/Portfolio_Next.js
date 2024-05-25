export default function EducationTile({years,image,name,info}) {
    return (
     <div className="mr-6">
        <div className="w-6 h-6 rounded-full bg-[#00abf0] -ml-3 mt-4"></div>
        <div className="border border-[#00abf0] mb-4 rounded-lg ml-8">
         <div className="p-4">
            <h1 className="text-[#00abf0] mb-2 font-semibold">{years}</h1>
            <div className="gap-4 w-[80px] h-[80px]">
              <img src={image} alt="" />
            </div>
            <h1 className="text-[#ededed] py-1 font-semibold flex">{name}</h1>
            <div className="text-[#ededed]">
                {info}
            </div>
         </div>
        </div>
     </div>
    );
}