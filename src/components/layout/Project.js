import Link from "next/link";
export default function Project() {
    return (
          <section className="pt-24 pb-24">
               <div className="flex items-center justify-center gap-6 text-6xl font-bold p-8">
                   <h1 className="text-[#ededed]">My</h1>
                   <h1 className="text-[#00abf0]">Projects</h1>
               </div>
               <div className="md:flex items-center justify-center gap-10">
                   <div className="border-[0.2rem] rounded-lg border-[#00abf0] m-8 mb-24">
                    <Link href={'https://food-delivery-app-phi-khaki.vercel.app/'} className="flex items-center justify-center p-4">
                        <img src="/FoodDeliveryapp.png" alt="" />
                    </Link>
                    <div className="bg-[#112e42] text-center text-[#ededed] m-2">
                        <Link href={'https://food-delivery-app-phi-khaki.vercel.app/'} className="underline">Visit: https://food-delivery-app-phi-khaki.vercel.app/</Link>
                     <div className="text-center text-[#ededed] p-4">
                         This my Full Stack Project of Food Delivery App built with Next.js, Mongo DB Atlas, Mongoose and NextAuth.js and stripe for payment  
                         Do Check out!
                     </div>
                    </div>
                   </div>
                   <div className="border-[0.2rem] rounded-lg border-[#00abf0] m-8 mb-24">
                    <Link href={'https://password-manager-lake-chi.vercel.app/'} className="flex items-center justify-center p-4">
                        <img src="/PasswordManager.png" alt="" />
                    </Link>
                    <div className="bg-[#112e42] text-center text-[#ededed] m-2">
                         <Link href={'https://password-manager-lake-chi.vercel.app/'} className="underline">Vist: https://password-manager-lake-chi.vercel.app/</Link>
                    <div className="text-center text-[#ededed] p-4">
                         This my Full Stack Project of Password Manager App built with Next.js, Mongo DB Atlas, Mongoose and NextAuth.js 
                          Do Check out! 
                     </div> 
                    </div>
                   </div>
               </div>
          </section>
    );
}