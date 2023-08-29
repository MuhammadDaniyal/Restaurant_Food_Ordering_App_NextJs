import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-[70px] border-t-2 border-t-red-500 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between bg-fuchsia-50">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
