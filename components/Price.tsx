"use client";

import React, { useState, useEffect } from "react";

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ id, price, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price) // options are not required in type ts, for this purpose written this ternary condition
    );
  }, [quantity, selected, price, options]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTION CONTAINER */}
      <div className=" flex gap-4">
        {options?.map((opt, i) => (
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
        {/* Add to Cart Button */}
        <button className="uppercase w-56 p-3 bg-red-500 text-white ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
