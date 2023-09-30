import { CartItemType } from "./CartItemType";

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  statud: string;
  createdAt: Date;
  intent_id?: string;
};

/**
 * Cart Item sa jb checkout krenga to cart ki tamam detail order.products ma data chlejaega
 */
