"use client";

import { useEffect, useState } from "react";
import CompareTable from "@/components/CompareTable";
import { useCompareStore } from "@/lib/store";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  specs: string;
  affiliateUrl: string;
  imageUrl: string;
}

export default function ComparePage() {
  const { ids, remove } = useCompareStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ids.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`/api/compare?ids=${ids.join(",")}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [ids]);

  return (
    <main className="max-w-[1400px] mx-auto px-6 lg:px-8 py-10">
      <h1 className="font-headline text-4xl font-black tracking-hero text-on-surface mb-2">
        Compare Products
      </h1>
      <p className="text-on-surface-variant text-sm mb-8 font-label tracking-wide">
        {ids.length}/4 products selected
      </p>

      {loading ? (
        <div className="flex items-center gap-3 text-on-surface-variant">
          <div className="pulse-dot animate-pulse" />
          <span className="font-label text-sm">Loading comparison...</span>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 border border-outline-variant/20 rounded-xl bg-surface-container-low">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-xl font-headline font-bold text-on-surface mb-2">
            No products selected
          </p>
          <p className="text-sm text-on-surface-variant mb-8 max-w-sm mx-auto">
            Browse categories and click &quot;+ Compare&quot; on products to add them here.
          </p>
          <a
            href="/"
            className="inline-block bg-primary-gradient text-on-primary py-3 px-8 rounded-lg
              font-label font-bold text-sm tracking-wider uppercase
              hover:brightness-110 active:scale-95 transition-all"
          >
            Browse Products
          </a>
        </div>
      ) : products.length === 1 ? (
        <div>
          <div className="flex gap-2 mb-6 flex-wrap">
            {products.map((p) => (
              <span
                key={p.id}
                className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface rounded-lg px-4 py-2 text-sm font-label"
              >
                {p.name.slice(0, 40)}
                <button
                  onClick={() => remove(p.id)}
                  className="text-error hover:text-on-error-container ml-1 transition-colors"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="text-center py-12 border border-outline-variant/20 rounded-xl bg-surface-container-low">
            <p className="font-headline font-bold text-on-surface mb-2">
              Add at least one more product to compare
            </p>
            <p className="text-sm text-on-surface-variant mb-6">
              You need 2–4 products for a side-by-side comparison.
            </p>
            <a
              href="/"
              className="inline-block bg-primary-gradient text-on-primary py-2.5 px-6 rounded-lg
                font-label font-bold text-sm tracking-wider uppercase
                hover:brightness-110 active:scale-95 transition-all"
            >
              Browse Products
            </a>
          </div>
        </div>
      ) : (
        <>
          {/* Product chips */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {products.map((p) => (
              <span
                key={p.id}
                className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface rounded-lg px-4 py-2 text-sm font-label"
              >
                {p.name.slice(0, 30)}...
                <button
                  onClick={() => remove(p.id)}
                  className="text-error hover:text-on-error-container ml-1 transition-colors"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <CompareTable products={products} />
        </>
      )}
    </main>
  );
}
