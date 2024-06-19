import React from "react";
import RoundedButton from "./RoundedButton";

function TopOfHomePAge() {
  return (
    <>
    <div className="flex justify-center flex-col lg:flex-row items-center gap-16 p-8 ">
     <div className="flex flex-col  gap-16 justify-center items-start">
       <div className="w-full ">
         <h4 className="text-3xl md:text-4xl font-semibold mb-8">Are you hungary ? 
           </h4>
         <h1 className="lg:text-8xl text-5xl text-primary font-bold mb-4">
           Don’t wait!
         </h1>
         <p className="text-md md:text-xl font-normal">
           Recommended by every foodie Order now for exclusive Offers.
         </p>
       </div>
       <RoundedButton text={"Order Now"} />
     </div>
 

       <div className="rounded-full w-full xl:w-[750px] xl:h-[750px] justify-center items-center">
         <div className="w-[350px] h-[350px] sm:w-[570px] sm:h-[570px] xl:w-[700px] xl:h-[700px] border-2 border-primary rounded-full flex justify-center items-center">
           <div className="w-[330px] h-[330px] sm:w-[540px] sm:h-[540px] xl:w-[650px] xl:h-[650px] border-2 border-primary  rounded-full flex justify-center items-center">
             <div className="w-[310px] h-[310px] sm:w-[510px] sm:h-[510px] xl:w-[600px] xl:h-[600px] border-2 border-primary  rounded-full flex justify-center items-center">
               <div>
               <img
           src="/min-leaf.png"
           alt=" food image"
           className="relattive translate-x-32 sm:translate-x-36 sm:translate-y-2 xl:translate-x-44 w-24 h-20  sm:w-[200px] sm:h-[180px]"
         />
              <img
           src="/mint-leaf1.png"
           alt=" food image"
           className="relattive -rotate-45 -translate-x-40 sm:-translate-x-60 xl:-translate-x-72 sm:w-[300px] sm:h-[200px] w-32 h-28"
         />
              <img
           src="/mint-leaf3.png"
           alt=" food image"
           className="relattive translate-x-12  translate-y-10 sm:translate-x-28 sm:translate-y-4 xl:translate-y-16 xl:translate-x-28 skew-x-12 -rotate-45 w-32 h-28 sm:w-[300px] sm:h-[280px]"
         />
               </div>
             <img
           src="/about-story.png"
           alt="food image"
           className="w-[295px] h-[295px] sm:w-[460px] sm:h-[460px] xl:w-[550px] xl:h-[550px] rounded-full absolute md:border-2 md:shadow-lg "
         />
             </div>
           </div>
         </div>
       </div>
   
   </div>
  </>
  );
}

export default TopOfHomePAge;
