"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // cleanup this interval function otherwise it cause memory leaking
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-118px)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex flex-col items-center justify-center gap-8 text-red-500 font-bold flex-1 bg-fuchsia-50">
        <h1 className=" text-4xl text-center uppercase p-4 md:p-8 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <Link href={'/menu'}  className="text-white bg-red-500 py-4 px-8">Order Now</Link>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full relative flex-1">
        <Image
          src={data[currentSlide].image}
          alt="slider1"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
