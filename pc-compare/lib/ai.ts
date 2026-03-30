import { GoogleGenerativeAI } from "@google/generative-ai";

function getClient(): GoogleGenerativeAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenerativeAI(apiKey);
}

export function isAIAvailable(): boolean {
  return !!process.env.GEMINI_API_KEY;
}

export async function generateProductDescription(product: {
  name: string;
  category: string;
  price: number;
  rating: number;
  specs: string;
}): Promise<string> {
  const client = getClient();
  if (!client) {
    return "AI descriptions are not available. Set GEMINI_API_KEY in your .env file to enable this feature.";
  }

  const specs = JSON.parse(product.specs);
  const specsText = Object.entries(specs)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");

  const model = client.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent(
    `Write a 2-sentence product description for a PC component listing.
Product: ${product.name}
Category: ${product.category}
Price: $${product.price}
Rating: ${product.rating}/5
Specs: ${specsText}

Be factual, concise, and help the buyer understand the key value. No marketing fluff.`
  );

  return result.response.text().trim();
}

export async function generateComparisonSummary(
  products: {
    name: string;
    price: number;
    rating: number;
    specs: string;
  }[]
): Promise<string> {
  const client = getClient();
  if (!client) {
    return "AI comparison summaries are not available. Set GEMINI_API_KEY in your .env file to enable this feature.";
  }

  const summaries = products.map(
    (p) => `- ${p.name}: $${p.price}, ${p.rating}/5 stars, specs: ${p.specs}`
  );

  const model = client.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent(
    `Compare these PC components in 3 sentences. Mention which offers the best value, the performance leader, and who each is best suited for. Be direct and helpful.

${summaries.join("\n")}`
  );

  return result.response.text().trim();
}
