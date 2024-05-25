export default function SkillsBars({name,percentage,className="h-3.5 w-[80%] bg-[#00abf0] rounded-sm ",image}) {
  return (
    <div className="py-4 px-1">
        <div className="flex items-center justify-between pb-2 font-bold">
            <div className="flex items-center gap-4 text-[#ededed]">
              <div className="w-[40px] h-[40px]"><img src={image} alt={''}/></div>
              <div>{name}</div>
            </div>
            <div className="text-[#ededed]">{percentage}</div>
            </div>
       {/* <div className="border border-[#00abf0] h-7 w-full md:w-[32vw] rounded-lg p-1.5">
            <div className={className}></div>
      </div> */}
    </div>
  );
}