import { CartItemType } from "./CartItemType";

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};
