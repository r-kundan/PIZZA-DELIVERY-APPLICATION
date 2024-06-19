import React from "react";
import MostPopularFood from "../components/MostPopularFood";
import CategoryBox from "../components/CategoryBox";
import TopOfHomePAge from "../components/TopOfHomePAge";


function Home() {
  return (
    <div className="flex flex-col gap-10 md:pt-16 justify-center items-center">
        <TopOfHomePAge/>
        <CategoryBox/>
     <MostPopularFood/>
    </div>
  );
}

export default Home;
