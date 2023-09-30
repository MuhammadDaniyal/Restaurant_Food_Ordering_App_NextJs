"use client";

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div
      className="h-[calc(100vh-9rem)] md:h-[calc(100vh-188px)] flex flex-col text-red-500
    lg:flex-row  "
    >
      {/* PRODUCT CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll scrollbar-hide overscroll-y-contain lg:h-full lg:w-2/3 2xl:w-1/2 md:px-20 lg:px-20 xl:px-40">
        <div className=" h-full px-[2px]">
          {/* SINGLE PRODUCT */}
          {products.map((product) => (
            <div
              className="flex justify-between items-center mb-4"
              key={product.id}
            >
              {product.img && (
                <Image src={product.img} alt="" width={100} height={100} />
              )}
              <div>
                <h1 className=" uppercase text-xl font-bold">
                  {product.title} x {product.quantity}
                </h1>
                <span>{product.optionTitle}</span>
              </div>
              <h2 className=" font-bold">${product.price}</h2>
              <span
                className=" cursor-pointer font-semibold"
                onClick={() => removeFromCart(product)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col justify-center gap-3 lg:h-full lg:w-1/3 2xl:w-1/2 md:px-20 lg:px-14S xl:px-30 2xl:text-lg 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${Number(totalPrice).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${Number(totalPrice).toFixed(2)}</span>
        </div>
        <button className=" bg-red-500 text-white p-3 w-1/2 rounded-md self-end lg:mt-4">
          Cheakout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
