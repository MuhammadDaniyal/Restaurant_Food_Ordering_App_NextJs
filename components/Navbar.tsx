import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  // TEMPORARY
  const user = false;
  return (
    <>
      {/* // NAVBAR */}
      <div className="h-12 md:h-[70px] flex justify-between items-center p-4 uppercase border-b-2 border-b-red-500 text-red-500 cursor-pointer lg:px-20 xl:px-40">
        {/* LEFT LINKS */}
        <div className="hidden md:flex gap-4 flex-1">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        {/* LOGO */}
        <div className="text-xl font-semibold md:font-bold flex-1 md:text-center">
          <Link href={"/"}>FOODIE</Link>
        </div>
        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Menu />
        </div>
        {/* RIGHT LINKS */}
        <div className="hidden md:flex gap-4 justify-end items-center flex-1">
          <div className="md:absolute top-2 right-2 2xl:static flex item-center gap-2 cursor-pointer bg-orange-300 rounded-md px-1 py-1">
            <Image src={"/phone.png"} alt="phone no" height={20} width={20} />
            <span>123 456 78</span>
          </div>
          <UserLinks />
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
