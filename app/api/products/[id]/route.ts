import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET SINGLE PRODUCT
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const singleProduct = await prisma.product.findUnique({
      where: {
        id: id, // first find the order then update
      },
    });
    return new NextResponse(JSON.stringify(singleProduct), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

// DELETE SINGLE PRODUCT
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const session = await getAuthSession();
  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: {
          id: id, // first find the order then update
        },
      });
      return new NextResponse(JSON.stringify("Product has been deleted"), {
        status: 200,
      });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong" }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(
    JSON.stringify({ message: "Only Admin Can Delete" }),
    { status: 403 }
  );
};
