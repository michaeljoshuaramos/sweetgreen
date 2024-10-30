import { MenuItem } from "./menu";

export type CartState = {
  cartItems: MenuItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
