import CategoryIcon from "./CategoryIcon";
import { SecondaryHeading } from "./Heading";
import RoundedButton from "./RoundedButton";
import Catagory from "../Data/Catagory.json"
import { Link } from "react-router-dom";

const CategoryBox = () => {
  return (
    <div>
      <div className="p-8 gap-10 flex flex-col">
      <div className="flex justify-between gap-6 md:gap-0 flex-row">
          <SecondaryHeading>Category</SecondaryHeading>
          <Link to="/menu">
          <RoundedButton text={"See more"} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 my-5">
        
          {Catagory.menu.map((catagory, index) => {
            return (
             <Link  key={index} to={`/${catagory.path}`}>
              <CategoryIcon
               
                categoryName={catagory.category}
                imgUrl={`/${catagory.image}`}
              />
              </Link>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
