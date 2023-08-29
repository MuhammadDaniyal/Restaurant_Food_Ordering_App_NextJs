"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

// interface MenuCartProps {
//     sum: (a: number, b: number) => number;
//     setOpenMenu: (params: any) => any;

//     // 👇️ turn off type checking
//     doSomething: (params: any) => any;
//   }

const Menu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  // TEMPORARY
  const user = false;
  return (
    <div>
      {openMenu ? (
        <Image
          src={"/close.png"}
          alt="Menu Icon"
          width={20}
          height={20}
          onClick={() => setOpenMenu(false)}
        />
      ) : (
        <Image
          src={"/open.png"}
          alt="Menu Icon"
          width={20}
          height={20}
          onClick={() => setOpenMenu(true)}
        />
      )}
      {openMenu && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex items-center justify-center flex-col gap-8 text-3xl z-10">
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setOpenMenu(false)}
            >
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} onClick={() => setOpenMenu(false)}>
              Login
            </Link>
          ) : (
            <Link href={"/orders"} onClick={() => setOpenMenu(false)}>
              Orders
            </Link>
          )}
          <Link href={"/cart"} onClick={() => setOpenMenu(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
