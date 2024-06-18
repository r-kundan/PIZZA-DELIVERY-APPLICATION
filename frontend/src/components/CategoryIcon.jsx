
const CategoryIcon = ({ categoryName,imgUrl, variant }) => {
  let variantClass = "rounded-2xl   rounded-bl-[70px] rounded-tr-[70px]";
  if (variant == "circle") {
    variantClass = "rounded-full";
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className=" w-[240px] h-[254px] ">
          <img
            src={imgUrl}
            alt={categoryName}
            fill="true"
            className={` w-[240px] h-[254px] object-cover ${variantClass}`}
          />
        </div>
        <p className="font-medium text-xl text-center">{categoryName}</p>
      </div>
    </div>
  );
};

export default CategoryIcon;
