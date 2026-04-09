"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  affiliateUrl: string;
  bestValue: number;
  isBestValue?: boolean;
  isCheapest?: boolean;
  compareIds: string[];
  onToggleCompare: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  rating,
  reviewCount,
  imageUrl,
  affiliateUrl,
  isBestValue,
  isCheapest,
  compareIds,
  onToggleCompare,
}: ProductCardProps) {
  const isInCompare = compareIds.includes(id);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col bg-white dark:bg-gray-900">
      {/* Badges */}
      <div className="flex gap-2 mb-2 min-h-[24px]">
        {isBestValue && (
          <span className="text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-400 px-2 py-0.5 rounded">
            Best Value
          </span>
        )}
        {isCheapest && (
          <span className="text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 px-2 py-0.5 rounded">
            Cheapest
          </span>
        )}
      </div>

      {/* Image */}
      <Link href={`/product/${id}`} className="block mb-3">
        <div className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            unoptimized
          />
        </div>
      </Link>

      {/* Info */}
      <Link href={`/product/${id}`} className="hover:underline">
        <h3 className="font-medium text-sm line-clamp-2 mb-2 text-gray-900 dark:text-white">{name}</h3>
      </Link>

      <div className="mt-auto">
        <p className="text-lg font-bold text-gray-900 dark:text-white">${price.toFixed(2)}</p>

        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span className="text-yellow-500">{"★".repeat(Math.round(rating))}</span>
          <span>{rating.toFixed(1)}</span>
          <span>({reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex gap-2">
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700"
          >
            Buy Now
          </a>
          <button
            onClick={() => onToggleCompare(id)}
            disabled={!isInCompare && compareIds.length >= 4}
            className={`text-sm py-2 px-3 rounded border transition-colors ${
              isInCompare
                ? "bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-400"
                : compareIds.length >= 4
                ? "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            {isInCompare ? "✓ Compare" : "+ Compare"}
          </button>
        </div>
      </div>
    </div>
  );
}
