import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className=" h-[calc(100vh-6rem)] md:h-[calc(100vh-118px)] p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover px-8 py-4 md:h-3/5"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-[55%]`}>
            <h1 className="uppercase font-bold text-2xl md:text-3xl">
              {category.title}
            </h1>
            <p className="text-sm my-2 md:my-6">{category.desc}</p>
            <button
              className={`hidden 2xl:block bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
