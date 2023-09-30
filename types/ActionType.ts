import { CartItemType } from "./CartItemType";

export type ActionType = {
  // we going to take item(product - cartItem) and return a function
  addToCart: (item: CartItemType) => void; // it take a payload
  removeFromCart: (item: CartItemType) => void; // it take a payload
};
