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
    <div className="border rounded-lg p-4 flex flex-col">
      {/* Badges */}
      <div className="flex gap-2 mb-2 min-h-[24px]">
        {isBestValue && (
          <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
            Best Value
          </span>
        )}
        {isCheapest && (
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-0.5 rounded">
            Cheapest
          </span>
        )}
      </div>

      {/* Image */}
      <Link href={`/product/${id}`} className="block mb-3">
        <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden">
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
        <h3 className="font-medium text-sm line-clamp-2 mb-2">{name}</h3>
      </Link>

      <div className="mt-auto">
        <p className="text-lg font-bold">${price.toFixed(2)}</p>

        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <span>{"★".repeat(Math.round(rating))}</span>
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
            className={`text-sm py-2 px-3 rounded border ${
              isInCompare
                ? "bg-blue-100 border-blue-300 text-blue-700"
                : compareIds.length >= 4
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            {isInCompare ? "✓ Compare" : "+ Compare"}
          </button>
        </div>
      </div>
    </div>
  );
}
