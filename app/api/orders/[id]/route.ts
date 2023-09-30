import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const body = await req.json();

    await prisma.order.update({
      where: {
        id: id, // first find the order then update
      },
      // take only status value from frontend so change only single value islya obj ma , send data you want to change
      data: { statud: body },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order Status Has Been Updated" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
