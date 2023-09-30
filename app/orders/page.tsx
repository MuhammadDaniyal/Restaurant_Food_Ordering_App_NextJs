"use client";

import { OrderType } from "@/types/OrderType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const OrdersPage = () => {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == "unauthenticated") {
    router.push("/");
  }

  const { isLoading, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  // REACT QUERY MUTATION
  // mutations are typically used to create/update/delete data or perform server side-effects. For this purpose, React Query exports a useMutation hook.
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          content: "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    /**
     * the QueryClient has an invalidateQueries method that lets you intelligently mark queries as stale and potentially refetch them too!
     */
    // if success then going to revalidate the list of orders data (fetching)
    onSuccess() {
      // Invalidate every query with a key that starts with `orders`
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    // You can handle this with useState managment but we use directly Event approch to get input value directly
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ id, status });
    input.value = "";
    toast.success("Order Status has been changed");
  };

  if (isLoading || status == "loading") return "Loading...";

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
          {data.map((item: OrderType) => (
            <tr
              className={`text-sm md:text-base ${
                item.statud !== "delivered" && "bg-red-50"
              }`}
              key={item.id}
            >
              <td className="hidden md:block py-2 md:py-4 px-1">{item.id}</td>
              <td className="py-2 md:py-4 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-2 md:py-4 px-1">{item.price}</td>
              <td className="hidden md:block py-2 md:py-4 px-1">
                {item.products[0].title}
              </td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className=" flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      placeholder={item.statud}
                      className=" p-2 ring-1 ring-red-100 rounded-md"
                    />
                    <button className=" bg-red-400 rounded-full p-2 cursor-pointer">
                      <Image
                        src={"/edit.png"}
                        width={12}
                        height={12}
                        alt="edit"
                      />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="py-2 md:py-4 px-1">{item.statud}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

/**
 * Cart Item sa jb checkout krenga to cart ki tamam detail order.products ma data chlejaega
 */
