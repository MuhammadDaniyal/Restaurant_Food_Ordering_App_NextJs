"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const AddProduct = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // unauthenticated - we donot return anything
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  return (
    <div>
      <form className="flex flex-wrap gap-6">
        <h1 className="text-4xl mb-2 text-gray-300 font-bold">
          Add New Product
        </h1>
        <div className="w-full flex flex-col gap-2 ">
          <label className=" text-sm">Title</label>
          <input
            type="text"
            name="title"
            className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
            placeholder="Title"
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className=" text-sm">Description</label>
          <textarea
            name="desc"
            className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
            placeholder="A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil and creamy mozzarella."
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className=" text-sm">Price</label>
          <input
            type="number"
            name="price"
            className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
            placeholder="Price"
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className=" text-sm">Category</label>
          <input
            type="text"
            name="category"
            className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
            placeholder="Category"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className=" text-sm">
            Options
            <div>
              <input
                type="text"
                name="optionTitle"
                className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
                placeholder="Option Title"
              />
              <input
                type="number"
                name="additionalPrice"
                className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
                placeholder="Additional Price"
              />
            </div>
            <button className="bg-gray-500 p-2 text-white">Add Option</button>
          </label>
        </div>
        <div>
          <div className=" ring-1 ring-red-500 p-2 rounded-md cursor-pointer">
            <span>Small</span>
            <span>4</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
