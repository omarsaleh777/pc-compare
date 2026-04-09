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

const CATEGORY_LABELS: Record<string, string> = {
  ram: "Memory", cpu: "Processors", gpu: "Graphics Cards",
  motherboard: "Motherboards", storage: "Storage", case: "PC Cases",
  cooling: "Cooling", psu: "Power Supplies",
};

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
    <main className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="relative aspect-square bg-surface-container-highest rounded-xl overflow-hidden border border-outline-variant/10">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="font-label text-[10px] text-primary-container tracking-widest uppercase mb-2">
            {CATEGORY_LABELS[product.category] ?? product.category}
          </span>
          <h1 className="font-headline text-3xl font-black tracking-hero text-on-surface mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <span className="text-secondary-fixed-dim">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-sm text-on-surface-variant">
              {product.rating}/5 ({product.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          <p className="text-4xl font-black text-on-surface mb-8">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex gap-3 mb-8">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gradient text-on-primary py-3 px-8 rounded-lg
                font-label font-bold text-sm tracking-wider uppercase
                hover:brightness-110 active:scale-95 transition-all"
            >
              Buy on Amazon
            </a>
            <button
              onClick={handleToggleCompare}
              className={`py-3 px-5 rounded-lg font-label font-bold text-sm border transition-all active:scale-95 ${
                isInCompare
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "border-outline-variant/30 text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              {isInCompare ? "✓ In Compare" : "+ Add to Compare"}
            </button>
          </div>

          {/* Specs */}
          <h2 className="font-headline font-bold text-on-surface mb-4 text-lg">
            Specifications
          </h2>
          <div className="border border-outline-variant/20 rounded-xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(specs).map(([key, value], i) => (
                  <tr
                    key={key}
                    className={i % 2 === 0 ? "bg-surface-container-low" : "bg-surface"}
                  >
                    <td className="py-3 px-4 font-label text-xs uppercase tracking-wider text-on-surface-variant w-1/3 border-r border-outline-variant/10">
                      {key}
                    </td>
                    <td className="py-3 px-4 text-on-surface">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[10px] font-label text-outline uppercase tracking-widest">
            Last updated: {new Date(product.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}
