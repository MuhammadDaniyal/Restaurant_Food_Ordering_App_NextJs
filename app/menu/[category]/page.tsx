// import { pizzas } from "@/data";
import { pizzas } from "@/data";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getSpecificCategoryData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=${category}`,
    {
      cache: "no-cache", // by defult it cache our data it's actully good but for dev purpose to see our items better iam not going to cache data
    }
  );
  if (!res.ok) {
    throw new Error("Failed to Fetch Products");
  }
  const data = await res.json();
  return data;
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getSpecificCategoryData(params.category);
  console.log(params.category);

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          key={item.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 p-4 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group odd:bg-fuchsia-50 card"
          href={`/product/${item.id}`}
          style={{}}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="i" className=" object-contain" fill />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className=" group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md cursor-pointer">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
