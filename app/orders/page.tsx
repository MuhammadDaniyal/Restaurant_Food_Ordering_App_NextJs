import React from "react";

const OrdersPage = () => {
  return (
    <div className="pr-4 pl-4 pb-4 h-[calc(100vh-9rem)] md:h-[calc(100vh-188px)] lg:px-20 xl:px-40 overflow-y-auto scrollbar-hide">
      {/* CONTAINER */}
      <table className=" w-full border-separate border-spacing-2 md:border-spacing-3">
        <thead className=" sticky top-0 z-50 bg-white">
          <tr className=" text-left">
            <th className="py-3 px-1 hidden md:block">Order ID</th>
            <th className="py-3 px-1">Date</th>
            <th className="py-3 px-1">Price</th>
            <th className=" hidden md:block py-3 px-1">Products</th>
            <th className="py-3 px-1">Status</th>
          </tr>
        </thead>
        <tbody className=" overflow-y-scroll scrollbar-hide ">
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          {/* extra */}
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-2 md:py-4 px-1">1237861238721</td>
            <td className="py-2 md:py-4 px-1">19.07.2023</td>
            <td className="py-2 md:py-4 px-1">89.90</td>
            <td className="hidden md:block py-2 md:py-4 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-2 md:py-4 px-1">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
