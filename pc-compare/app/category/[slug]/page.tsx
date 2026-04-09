"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import SortFilter from "@/components/SortFilter";
import { getCompareIds, toggleCompare } from "@/lib/compare";
import { categories } from "@/components/CategoryGrid";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  affiliateUrl: string;
  bestValue: number;
  inStock: boolean;
}

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const initialSearch = searchParams.get("search") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("best_value");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const categoryInfo = categories.find((c) => c.slug === slug);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [search]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const qp = new URLSearchParams();
    if (slug !== "all") qp.set("category", slug);
    qp.set("sort", sort);
    if (minPrice) qp.set("minPrice", minPrice);
    if (maxPrice) qp.set("maxPrice", maxPrice);
    if (debouncedSearch) qp.set("search", debouncedSearch);

    const res = await fetch(`/api/products?${qp.toString()}`);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }, [slug, sort, minPrice, maxPrice, debouncedSearch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setCompareIds(getCompareIds());
  }, []);

  function handleToggleCompare(id: string) {
    const newIds = toggleCompare(id);
    setCompareIds([...newIds]);
  }

  const bestValueId = products.length > 0
    ? products.reduce((a, b) => (a.bestValue > b.bestValue ? a : b)).id
    : null;
  const cheapestId = products.length > 0
    ? products.reduce((a, b) => (a.price < b.price ? a : b)).id
    : null;

  return (
    <main className="max-w-[1400px] mx-auto px-6 lg:px-8 py-10">
      {/* Page header */}
      <h1 className="font-headline text-4xl font-black tracking-hero text-on-surface mb-2">
        {slug === "all"
          ? "All Products"
          : categoryInfo?.name || slug.toUpperCase()}
      </h1>
      <p className="text-on-surface-variant text-sm mb-8 font-label tracking-wide">
        {loading ? "Loading..." : `${products.length} products found`}
      </p>

      <SortFilter
        sort={sort}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onSortChange={setSort}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
      />

      {/* Search input */}
      <div className="mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter by name..."
          className="bg-surface-container-highest border border-outline-variant/30 rounded-lg
            px-4 py-2.5 text-sm w-full max-w-sm text-on-surface
            placeholder:text-outline
            focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
            transition-colors"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-xl p-5 animate-pulse">
              <div className="bg-surface-container-highest aspect-square rounded-lg mb-4" />
              <div className="bg-surface-container-high h-4 rounded w-3/4 mb-3" />
              <div className="bg-surface-container-high h-5 rounded w-1/3 mb-3" />
              <div className="bg-surface-container-high h-3 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-on-surface-variant text-lg font-label">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isBestValue={product.id === bestValueId}
              isCheapest={product.id === cheapestId}
              compareIds={compareIds}
              onToggleCompare={handleToggleCompare}
            />
          ))}
        </div>
      )}
    </main>
  );
}
