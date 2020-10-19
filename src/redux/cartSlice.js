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

      const index = state.cart.findIndex(
        (cartItem) => cartItem.uuid === action.payload.uuid
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`product with ${action.payload.uuid} not in basket`);
      }

      state.cart = newCart;
    },
  },
});

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
