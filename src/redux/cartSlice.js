import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log('action =>', action);
      state.cart = [...state.cart, action.payload.cart];
    },
    removeFromCart: (state, action) => {
      console.log('action =>', action);
      state.cart = state.cart - action.payload.cart;
    },
  },
});

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
