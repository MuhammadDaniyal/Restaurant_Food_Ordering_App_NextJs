"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/menu");
      toast("Product has been deleted");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // unauthenticated - we donot return anything
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  return (
    <button
      className=" p-2 rounded-md bg-red-400 absolute top-4 right-4"
      onClick={handleDelete}
    >
      <Image src={"/delete.png"} alt="dlt" width={20} height={20} />
    </button>
  );
};

export default DeleteButton;
