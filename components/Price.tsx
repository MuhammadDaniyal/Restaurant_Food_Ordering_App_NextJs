"use client";

import { ProductType } from "@/types/ProductType";
import { useCartStore } from "@/utils/store";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Price = ({ singleProduct }: { singleProduct: ProductType }) => {
  const { addToCart } = useCartStore();

  const { id, price, option } = singleProduct;
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    if (option?.length) {
      setTotal(
        quantity * price + option[selected].additionalPrice // options are not required in type ts, for this purpose written this ternary condition
      );
    }
  }, [quantity, selected, price, option]);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCart = () => {
    addToCart({
      // The spread syntax (...) essentially takes the properties of the chosen object (destructure) and adds them to the containing object.
      id: singleProduct.id,
      title: singleProduct.title,
      img: singleProduct.img,
      price: Number(total),
      // 'singleProduct.option' is possibly 'undefined' to prevent this i write this condition
      ...(singleProduct.option?.length && {
        optionTitle: singleProduct.option[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("This Product added to the Cart");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total}</h2>
      {/* OPTION CONTAINER */}
      <div className=" flex gap-4">
        {option?.map((opt, i) => (
          <button
            key={opt.title}
            className="text-red-500 ring-red-500 ring-1 rounded-md bg-white p-2 min-w-[6rem]"
            style={{
              background: selected === i ? "rgb(239 68 68 /1)" : "white",
              color: selected === i ? "white" : "rgb(239 68 68 /1)",
            }}
            onClick={() => setSelected(i)}
          >
            {opt.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className=" flex justify-between items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full ring-1 ring-red-500 p-3">
          <span>Quantity</span>
          <div className=" flex gap-3 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Add to Cart Button - add to cart krna py cartItemtype ka depend pr yeh pura product cart page py jaega  */}
        <button
          className="uppercase w-56 p-3 bg-red-500 text-white ring-1 ring-red-500"
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
