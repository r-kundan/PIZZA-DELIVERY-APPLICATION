// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeItem } from "../Redux/Slices/cartSlice";

// function AddToCart() {
// //   const items = useSelector(state => state.items);
// const items = useSelector(state => state.cart.items);

//   const dispatch = useDispatch();
//   return (
//     <div>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.text}
//           {/* <button onClick={() => dispatch(removeItem(item.id))}>delete</button> */}
//           <button onClick={() => dispatch(removeItem({ id: item.id }))}>delete</button>

//         </li>
//       ))}
//     </div>
//   );
// }

// export default AddToCart;


// AddToCart.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Redux/Slices/cartSlice";

function AddToCart() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(items);
    }, [items]);

    return (
        <div className="flex flex-col justify-center items-center h-96">
            {items.length === 0 ? (
                <h1>You haven't added anything to cart.</h1>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => dispatch(removeItem({ id: item.id }))}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AddToCart;
