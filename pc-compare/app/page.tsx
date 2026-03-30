import { prisma } from "@/lib/prisma";
import CategoryGrid from "@/components/CategoryGrid";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "PC Compare — Find the Best PC Component Deals",
  description:
    "Compare prices, ratings, and specs for PC components. Find the best value RAM, CPU, GPU, storage, and more.",
};

export default async function Home() {
  const [featured, bestValue] = await Promise.all([
    prisma.product.findMany({
      where: { featured: true },
      take: 8,
    }),
    prisma.product.findMany({
      orderBy: { bestValue: "desc" },
      take: 4,
    }),
  ]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Find the Best PC Components
        </h1>
        <p className="text-gray-600 mb-6">
          Compare prices, specs, and ratings across 80+ products
        </p>
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
        <CategoryGrid />
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden mb-3">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  unoptimized
                />
              </div>
              <h3 className="font-medium text-sm line-clamp-2 mb-1">
                {product.name}
              </h3>
              <p className="font-bold">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                {"★".repeat(Math.round(product.rating))} {product.rating}/5
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Value */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Best Value Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestValue.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded mb-2 inline-block">
                Best Value
              </span>
              <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden mb-3">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  unoptimized
                />
              </div>
              <h3 className="font-medium text-sm line-clamp-2 mb-1">
                {product.name}
              </h3>
              <p className="font-bold">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">
                {"★".repeat(Math.round(product.rating))} {product.rating}/5
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
