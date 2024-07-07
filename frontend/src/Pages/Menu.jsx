import React from "react";
import Desserts from "../components/Desserts";
import Drinks from "../components/Drinks";
import SideFood from "../components/SideFood";
import Pizzas from "../components/Pizzas";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className=" flex flex-col justify-center items-center">
   
     
      <Desserts />
      <Pizzas />
      <SideFood />
      <Drinks />
    </div>
  );
}

export default Menu;
