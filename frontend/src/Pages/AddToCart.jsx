import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../Redux/Slices/cartSlice";
import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";

function AddToCart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const handleUpdateQuantity = (item, newQuantity) => {
    dispatch(updateItemQuantity({ id: item.id, quantity: newQuantity }));
  };


  return (
    <div className=" flex justify-center items-center flex-col mt-8">
      {items.length === 0 ? (
        <h1 className="flex flex-col md:flex-row justify-start items-center md:gap-16 gap-8 bg-base md:m-10 m-3 p-4 text-wrap rounded-2xl">You haven't added anything to cart.</h1>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex flex-col md:flex-row justify-start items-center md:gap-16 gap-8 bg-base md:m-10 m-3 p-4 text-wrap rounded-2xl">
              {item.name} - {`$${((item.price)*(item.quantity)).toFixed(2)}`}

              <div>
              {item.quantity > 0 && (
                    <button
                      className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
                      onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                    >
                      -
                    </button>
                  )}
                <span>{item.quantity}</span>
                <button
                  className="ml-2 text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
                  onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
                onClick={() => dispatch(removeItem({ id: item.id }))}
              >
                {" "}
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
                <h2 className="flex flex-col md:flex-row justify-start items-center md:gap-16 gap-8 bg-base md:m-10 m-3 p-4 text-wrap rounded-2xl">Total Price: ${totalPrice.toFixed(2)}</h2>

    </div>
  );
}

export default AddToCart;
