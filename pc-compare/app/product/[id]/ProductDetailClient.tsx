"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getCompareIds, toggleCompare } from "@/lib/compare";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  affiliateUrl: string;
  specs: string;
  lastUpdated: Date;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {
    setCompareIds(getCompareIds());
  }, []);

  const specs = JSON.parse(product.specs) as Record<string, string>;
  const isInCompare = compareIds.includes(product.id);

  function handleToggleCompare() {
    const newIds = toggleCompare(product.id);
    setCompareIds([...newIds]);
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-gray-500 uppercase mb-1">{product.category}</p>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-sm text-gray-600">
              {product.rating}/5 ({product.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>

          <div className="flex gap-3 mb-6">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Buy on Amazon
            </a>
            <button
              onClick={handleToggleCompare}
              className={`py-2 px-4 rounded-lg text-sm border ${isInCompare
                  ? "bg-blue-100 border-blue-300 text-blue-700"
                  : "hover:bg-gray-100"
                }`}
            >
              {isInCompare ? "✓ In Compare" : "+ Add to Compare"}
            </button>
          </div>

          {/* Specs */}
          <h2 className="font-bold mb-2">Specifications</h2>
          <table className="w-full text-sm mb-6">
            <tbody>
              {Object.entries(specs).map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="py-2 font-medium capitalize w-1/3">{key}</td>
                  <td className="py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-xs text-gray-400">
            Last updated: {new Date(product.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}
