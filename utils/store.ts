import { ActionType } from "@/types/ActionType";
import { CartType } from "@/types/CartType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

/**
 * PERSIST DATA:
 *  the data must be written to non-volatile storage — a type of memory that can retain that information long-term, even if the application is no longer running.
 */

export const useCartStore = create(
  persist<CartType & ActionType>(
    (set, get) => ({
      // FIRST - State
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      // SECOND - actions
      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );
        console.log(productInState);

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                }
              : item
          );
          console.log(updatedProducts);
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          // lets add this item to over state
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },
      removeFromCart(item) {
        // lets add this item to over state
        console.log(item);
        set((state) => ({
          products: state.products.filter(
            (products) => products.id !== item.id
          ),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
    }),
    {
      name: "cart", // unique name - by default, 'localStorage' is used
      skipHydration: true, // Prevent Hydration Error - nextjs trying to change component type by default server side component we change into useclient Client side component error sy bachna kalya skip hydration
    }
  )
);
