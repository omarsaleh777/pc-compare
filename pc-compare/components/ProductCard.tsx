"use client";

import Image from "next/image";
import Link from "next/link";
import { useCompareStore } from "@/lib/store";

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
}: ProductCardProps) {
  const { ids, toggle } = useCompareStore();
  const isInCompare = ids.includes(id);

  return (
    <div className="group bg-surface-container-low border border-outline-variant/10 rounded-xl p-5
      hover:border-outline-variant/30 hover:-translate-y-1 hover:shadow-card-hover
      transition-all duration-300 flex flex-col">

      {/* Badges */}
      <div className="flex gap-2 mb-3 min-h-[22px]">
        {isBestValue && (
          <span className="font-label text-[10px] font-bold tracking-wider uppercase
            bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded">
            Best Value
          </span>
        )}
        {isCheapest && (
          <span className="font-label text-[10px] font-bold tracking-wider uppercase
            bg-primary-container text-on-primary-container px-2.5 py-0.5 rounded">
            Cheapest
          </span>
        )}
      </div>

      {/* Image */}
      <Link href={`/product/${id}`} className="block mb-4">
        <div className="relative w-full aspect-square bg-surface-container-highest rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain p-3 group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            unoptimized
          />
        </div>
      </Link>

      {/* Info */}
      <Link href={`/product/${id}`} className="hover:underline underline-offset-2">
        <h3 className="font-headline font-bold text-sm text-on-surface line-clamp-2 mb-2">
          {name}
        </h3>
      </Link>

      <div className="mt-auto">
        <p className="text-xl font-black text-on-surface mb-1">
          ${price.toFixed(2)}
        </p>

        <div className="flex items-center gap-1 text-sm text-on-surface-variant mb-4">
          <span className="text-secondary-fixed-dim">
            {"★".repeat(Math.round(rating))}
          </span>
          <span>{rating.toFixed(1)}</span>
          <span className="text-outline">({reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex gap-2">
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-label font-bold tracking-wider uppercase
              bg-primary-gradient text-on-primary py-2.5 px-3 rounded-lg
              hover:brightness-110 active:scale-95 transition-all"
          >
            Buy Now
          </a>
          <button
            onClick={() => toggle(id)}
            disabled={!isInCompare && ids.length >= 4}
            className={`text-sm font-label font-bold py-2.5 px-3 rounded-lg border transition-all active:scale-95 ${
              isInCompare
                ? "bg-primary/10 border-primary/30 text-primary"
                : ids.length >= 4
                ? "bg-surface-container border-outline-variant/20 text-outline cursor-not-allowed opacity-50"
                : "border-outline-variant/30 text-on-surface-variant hover:bg-surface-container hover:text-primary"
            }`}
          >
            {isInCompare ? "✓ Compare" : "+ Compare"}
          </button>
        </div>
      </div>
    </div>
  );
}
