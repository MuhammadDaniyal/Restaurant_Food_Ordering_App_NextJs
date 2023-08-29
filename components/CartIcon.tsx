import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface ChildProps {
//   setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
// }

const CartIcon = () => {
  return (
    <>
      <Link href={"/cart"} className="flex items-center gap-4">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <Image src={"/cart.png"} alt="icon" fill />
        </div>
        <span>Cart (3)</span>
      </Link>
    </>
  );
};

export default CartIcon;
