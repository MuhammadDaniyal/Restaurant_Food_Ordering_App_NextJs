import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
// import { singleProduct } from "@/data";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import React from "react";

const getSingleProduct = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache", // by defult it cache our data it's actully good but for dev purpose to see our items better iam not going to cache data
  });
  if (!res.ok) {
    throw new Error("Failed to Fetch Products");
  }
  const data = await res.json();
  return data;
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getSingleProduct(params.id);
  // console.log(singleProduct);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-9rem)] md:h-[calc(100vh-188px)] flex flex-col justify-around gap-2 text-red-500 md:flex-row md:items-center md:gap-8 relative">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full flex-1 h-1/3 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt="sinlge img"
            className=" object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-2/3 flex flex-1 flex-col gap-3 my-2 md:h-[70%] md:justify-center md:gap-4 xl:gap-6">
        <h1 className=" text-3xl xl:text-4xl font-bold uppercase">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price singleProduct={singleProduct} />
      </div>
      <DeleteButton id={singleProduct.id} />
    </div>
  );
};

export default SingleProductPage;
