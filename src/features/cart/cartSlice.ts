import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type CartState, type MenuItem } from "../../utils";

const initialState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find((i) => i.name === newCartItem.name);

      if (!item) {
        state.cartItems.push(newCartItem);
      }

      state.numItemsInCart += 1;
      state.cartTotal += Number(newCartItem.price) * 1;

      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
