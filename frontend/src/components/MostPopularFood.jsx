import React from 'react'
import { SecondaryHeading } from "./Heading";
import RoundedButton from "./RoundedButton";
import ProductItem from './ProductItem';
import { Link } from "react-router-dom";


function MostPopularFood() {
  return (
    <div>
         <div className=" p-8">
        <div className="flex justify-between gap-6 md:gap-0 flex-col md:flex-row">
          <SecondaryHeading>Most Popular Food</SecondaryHeading>
          <Link to="/menu">
          <RoundedButton text={"See more"} />
          </Link>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 xl:gap-24">
          <ProductItem
            foodName={"Sweet Corn Soup"}
            discount={"Flat Rs.100 off"}
            price={"119"}
            rating={"5.0"}
            imgUrl={"/food.jpg"}
          />
          <ProductItem
            foodName={"Avocado and Egg Toast"}
            discount={"Flat Rs.100 off"}
            price={"210"}
            rating={"5.0"}
            imgUrl={"/food2.avif"}
          />
          <ProductItem
            foodName={"Pancakes for breakfast"}
            discount={"Flat Rs.100 off"}
            price={"200"}
            rating={"5.0"}
            imgUrl={"/food3.avif"}
          />
          
        </div>
      </div>
    </div>
  )
}

export default MostPopularFood