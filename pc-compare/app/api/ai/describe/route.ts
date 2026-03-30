import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateProductDescription, generateComparisonSummary, isAIAvailable } from "@/lib/ai";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { productId, compareIds } = body;

  // Check if AI is available
  if (!isAIAvailable()) {
    return NextResponse.json({
      description: "AI descriptions are not available. Add your GEMINI_API_KEY to the .env file to enable this feature.",
      available: false,
    });
  }

  try {
    // Single product description
    if (productId) {
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }

      // Return cached description if available
      if (product.description) {
        return NextResponse.json({ description: product.description, cached: true, available: true });
      }

      const description = await generateProductDescription(product);

      // Cache the description
      await prisma.product.update({
        where: { id: productId },
        data: { description },
      });

      return NextResponse.json({ description, cached: false, available: true });
    }

    // Comparison summary
    if (compareIds && Array.isArray(compareIds)) {
      const products = await prisma.product.findMany({
        where: { id: { in: compareIds.slice(0, 4) } },
      });

      if (products.length < 2) {
        return NextResponse.json(
          { error: "Need at least 2 products to compare" },
          { status: 400 }
        );
      }

      const summary = await generateComparisonSummary(products);
      return NextResponse.json({ summary, available: true });
    }

    return NextResponse.json(
      { error: "Provide either productId or compareIds" },
      { status: 400 }
    );
  } catch (error: unknown) {
    console.error("AI generation failed:", error);

    // Extract meaningful error message from Anthropic API errors
    let message = "Failed to generate AI content.";
    if (error && typeof error === "object" && "message" in error) {
      const errMsg = (error as { message: string }).message;
      if (errMsg.includes("API key not valid") || errMsg.includes("API_KEY_INVALID")) {
        message = "Invalid Gemini API key. Check your GEMINI_API_KEY in the .env file.";
      } else if (errMsg.includes("quota") || errMsg.includes("RESOURCE_EXHAUSTED")) {
        message = "API quota exhausted. Try again later or check your Google AI Studio billing.";
      } else if (errMsg.includes("rate")) {
        message = "Rate limit exceeded. Try again in a moment.";
      } else {
        message = errMsg;
      }
    }

    return NextResponse.json(
      { description: message, available: false, error: true },
      { status: 200 } // Return 200 so the client can display the message
    );
  }
}
