import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
  // http://localhost:3000/api/products?category=${category}
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  try {
    // The object chosen in the previous step is then spread into the containing object (within the where condition of your query). The spread syntax (...) essentially takes the properties of the chosen object and adds them to the containing object.
    const products = await prisma.product.findMany({
      where: { // containing object
        ...(category ? { categorySlug: category } : { isFeatured: true }), // Sobject chosen
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
export const POST = async () => {
  return new NextResponse("HELLO", { status: 200 });
};
