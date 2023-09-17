import { featuredProducts } from "@/data";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import React from "react";

const getFeaturedData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache", // by defult it cache our data it's actully good but for dev purpose to see our items better iam not going to cache data
  });
  if (!res.ok) {
    throw new Error("Failed to Fetch Category");
  }
  const data = await res.json();
  return data;
};

const Featured = async () => {
  // const featuredProducts: ProductType[] = await getFeaturedData();
  return (
    <div className="  overflow-x-scroll text-red-500 scrollbar-hide">
      {/* WRAPPER */}
      {/** width will be maximum item size */}
      <div className=" flex w-max">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className=" w-screen h-[60vh] flex flex-col items-center justify-around px-4 py-6 gap-6 
            hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[80vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" className=" object-contain" fill />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
