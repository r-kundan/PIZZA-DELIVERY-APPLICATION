import React, { useState } from "react";
import PizzaData from "../Data/PizzaData.json";
import CategoryIcon from "./CategoryIcon";
import { PrimaryHeading, SecondaryHeading } from "./Heading";
import RoundedButton from "./RoundedButton";

import {useDispatch } from "react-redux" 
import { addItem } from "../Redux/Slices/cartSlice";
import { Link } from "react-router-dom";


function Pizzas() {

  const dispatch = useDispatch();
  const [addedToCartMap, setAddedToCartMap] = useState({});


  const handleAddToCart = (pizza) => {
    dispatch(addItem({ ...pizza, quantity: 1 }));

    setAddedToCartMap({
      ...addedToCartMap,
      [pizza.id]: true,
    });
  };


  return (
    <div className=" flex justify-center items-center flex-col mt-8">
        <div className="flex justify-center items-center">
      <ul className="flex md:gap-4 text-xl shadow-md m-2  mt-6 rounded-md">
        <li className="m-2">
          <Link
            className={({ isActive }) =>
              ` ${
                isActive ? `text-primary` : "text-white "
              } hover:underline hover:underline-offset-4`
            }
            to="/pizzas"
          >
            Pizza
          </Link>
        </li>
        <li className="m-2">
          <Link
            className={({ isActive }) =>
              ` ${
                isActive ? `text-primary` : "text-white "
              } hover:underline hover:underline-offset-4`
            }
            to="/sides-food"
          >
            sidesFood
          </Link>
        </li>
        <li className="m-2">
          <Link
            className={({ isActive }) =>
              ` ${
                isActive ? `text-primary` : "text-white "
              } hover:underline hover:underline-offset-4`
            }
            to="/drinks"
          >
            Drinks
          </Link>
        </li>
        <li className="m-2">
          <Link
            className={({ isActive }) =>
              ` ${
                isActive ? `text-primary` : "text-white "
              } hover:underline hover:underline-offset-4`
            }
            to="/desserts"
          >
            Desserts
          </Link>
        </li>
      </ul>
      </div>
      <PrimaryHeading>Pizza Types</PrimaryHeading>
      <div className="flex flex-col">
        {PizzaData.pizzas.map((type, index) => {
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
                  text={isAdded ? "Added" : "Add to Cart"} // Change button text based on state
                  onClick={() => handleAddToCart(type)}
                  disabled={isAdded} // Disable button after it's clicked
                />

              </div>
            </div>
          );
        })}
      </div>
   
    </div>
  );
}

export default Pizzas;
