import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const idsParam = searchParams.get("ids");

  if (!idsParam) {
    return NextResponse.json(
      { error: "ids parameter is required" },
      { status: 400 }
    );
  }

  const ids = idsParam.split(",").slice(0, 4); // Max 4 products

  try {
    const products = await prisma.product.findMany({
      where: {
        id: { in: ids },
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch comparison products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products for comparison" },
      { status: 500 }
    );
  }
}
