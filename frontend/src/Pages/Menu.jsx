import React from "react";
import Desserts from "../components/Desserts";
import Drinks from "../components/Drinks";
import SideFood from "../components/SideFood";
import Pizzas from "../components/Pizzas";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className=" flex flex-col justify-center items-center">
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
     
      <Desserts />
      <Pizzas />
      <SideFood />
      <Drinks />
    </div>
  );
}

export default Menu;
