import { createSlice } from "@reduxjs/toolkit";

const initialState =  {

    items: [],
    totalPrice: 0,
  }
  const cartSlice = createSlice({
    name: 'cart',
    initialState ,
    reducers: {
      addItem: (state, action) => {
        state.items.push(action.payload);
        state.totalPrice += action.payload.price;
      },
      removeItem: (state, action) => {

        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.totalPrice = state.totalPrice - state.items[index].price;
          state.items.splice(index, 1);
        }
      },
      clearCart: (state) => {
        state.items = [];
        state.totalPrice = 0;
      },
      updateItemQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.items.find(item => item.id === id);
        if (item) {
          state.totalPrice += (quantity - item.quantity) * item.price;
          item.quantity = quantity;
        }
      },
    },
  });
  
  export const { addItem, removeItem, clearCart, updateItemQuantity } = cartSlice.actions;
  export default cartSlice.reducer;
  
