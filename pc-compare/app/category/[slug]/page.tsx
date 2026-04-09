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

  // Debounce search input
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

  // Determine best value and cheapest
  const bestValueId = products.length > 0
    ? products.reduce((a, b) => (a.bestValue > b.bestValue ? a : b)).id
    : null;
  const cheapestId = products.length > 0
    ? products.reduce((a, b) => (a.price < b.price ? a : b)).id
    : null;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        {slug === "all"
          ? "All Products"
          : categoryInfo?.name || slug.toUpperCase()}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
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

      {/* Search within category */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter by name..."
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm w-full max-w-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 animate-pulse bg-white dark:bg-gray-900">
              <div className="bg-gray-200 dark:bg-gray-700 aspect-square rounded mb-3" />
              <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4 mb-2" />
              <div className="bg-gray-200 dark:bg-gray-700 h-5 rounded w-1/3 mb-2" />
              <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
