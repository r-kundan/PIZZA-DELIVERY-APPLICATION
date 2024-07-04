import React, { useState } from "react";
import DessertsData from "../Data/Catagory.json"
import CategoryIcon from "./CategoryIcon";
import { PrimaryHeading, SecondaryHeading } from "./Heading";
import RoundedButton from "./RoundedButton";
import {useDispatch } from "react-redux" 
import { addItem } from "../Redux/Slices/cartSlice";



function Desserts() {
  const dispatch = useDispatch();
  const [addedToCartMap, setAddedToCartMap] = useState({});


  const handleAddToCart = (items) => {
 
    dispatch(addItem({ ...items, quantity: 1 }));
    setAddedToCartMap({
      ...addedToCartMap,
      [items.id]: true,
    });
  };
  const DessertCategory = DessertsData.menu.find(category => category.id === 4);
  return (
    <div className=" flex justify-center items-center flex-col mt-8">
      <PrimaryHeading>Dessert Food</PrimaryHeading>
      <div className="flex flex-col">
        {DessertCategory.items.map((type, index) => {
          const isAdded = addedToCartMap[type.id];

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
                <RoundedButton
                  text={isAdded ? "Added" : "Add to Cart"} 
                  onClick={() => handleAddToCart(type)}
                  disabled={isAdded} 
                />

              </div>
            </div>
          );
        })}
      </div>
    
    </div>
  )
}

export default Desserts