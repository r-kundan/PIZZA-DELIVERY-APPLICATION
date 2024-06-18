import React from "react";
import SidesFood from "../Data/Catagory.json"
import CategoryIcon from "./CategoryIcon";
import { PrimaryHeading, SecondaryHeading } from "./Heading";

function SideFood() {
  const sidesCategory = SidesFood.menu.find(category => category.id === 2);
  return (
    <div className=" flex justify-center items-center flex-col mt-8">
      <PrimaryHeading>Side Food</PrimaryHeading>
      <div className="flex flex-col">
        {sidesCategory.items.map((type, index) => {
          return (
            <div  key={index} className="flex flex-col md:flex-row justify-start items-center md:gap-16 gap-8 bg-base md:m-10 m-3 p-4 text-wrap rounded-2xl">
              <CategoryIcon
               
               
                imgUrl={`/${type.image}`}
              />
              <div className="flex flex-col gap-2">
                <SecondaryHeading>{type.name}</SecondaryHeading>
                <p className="text-wrap"><span className="text-xl text-orange-300">Description:- </span>{type.description}</p>
                <p className="text-wrap"> <span className="text-xl text-orange-300">Price:-  </span>$ {type.price}</p>
                <p className="text-wrap"> <span className="text-xl text-orange-300">Sizes:- </span>{type.sizes}</p>
              </div>
            </div>
          );
        })}
      </div>
    
    </div>
  )
}

export default SideFood