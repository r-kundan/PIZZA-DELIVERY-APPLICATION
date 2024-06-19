import Image from "next/image";
import Link from "next/link";
import { BiSolidStar } from "react-icons/bi";

function ProductItem({ item }) {
  return (
    <>
      <Link href={`/product/${item.id}`}>
        <div className="w-72 -mt-12">
          <div className="h-36 w-36 rounded-full relative top-20 left-4 bg-slate-200">
            <Image
              src={item.imgUrl}
              className="rounded-full"
              fill
              alt="img product"
            />
          </div>
          <div className="rounded-3xl bg-secondary flex flex-col items-center p-5 min-h-80">
            <div className="self-end justify-self-start text-lg ">
              {item.rating}
              <BiSolidStar className="ml-2 fill-primary w-6 h-6 inline" />
            </div>

            <div className="flex flex-col grow justify-center items-center gap-5">
              <h2 className="text-wrap text-center font-medium text-2xl">
                {item.foodName}
              </h2>
              <h5 className="font-medium text-xl">{item.discount}</h5>
              <h6 className="text-2xl font-medium "> {item.price}</h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
