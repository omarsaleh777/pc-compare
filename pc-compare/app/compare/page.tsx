"use client";

import { useEffect, useState } from "react";
import CompareTable from "@/components/CompareTable";
import { getCompareIds, toggleCompare } from "@/lib/compare";

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
  const [products, setProducts] = useState<Product[]>([]);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [aiSummary, setAiSummary] = useState("");
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    const ids = getCompareIds();
    setCompareIds(ids);

    if (ids.length === 0) {
      setLoading(false);
      return;
    }

    fetch(`/api/compare?ids=${ids.join(",")}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function handleRemove(id: string) {
    const newIds = toggleCompare(id);
    setCompareIds([...newIds]);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleAiSummary() {
    setLoadingAi(true);
    try {
      const res = await fetch("/api/ai/describe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ compareIds }),
      });
      const data = await res.json();
      setAiSummary(data.summary || data.description);
    } catch {
      setAiSummary("Failed to generate summary.");
    }
    setLoadingAi(false);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Compare Products</h1>
      <p className="text-gray-600 mb-6">
        {compareIds.length}/4 products selected
      </p>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl font-medium text-gray-700 mb-2">
            No products selected
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Browse categories and click &quot;+ Compare&quot; on products to add them here.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 text-sm"
          >
            Browse Products
          </a>
        </div>
      ) : products.length === 1 ? (
        <div>
          {/* Show the single product chip */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {products.map((p) => (
              <span
                key={p.id}
                className="inline-flex items-center gap-1 bg-gray-100 rounded px-3 py-1 text-sm"
              >
                {p.name.slice(0, 40)}
                <button
                  onClick={() => handleRemove(p.id)}
                  className="text-red-500 hover:text-red-700 ml-1"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="text-center py-8 border rounded-lg bg-gray-50">
            <p className="text-gray-700 font-medium mb-2">
              Add at least one more product to compare
            </p>
            <p className="text-sm text-gray-500 mb-4">
              You need 2–4 products for a side-by-side comparison.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm"
            >
              Browse Products
            </a>
          </div>
        </div>
      ) : (
        <>
          {/* Remove buttons */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {products.map((p) => (
              <span
                key={p.id}
                className="inline-flex items-center gap-1 bg-gray-100 rounded px-3 py-1 text-sm"
              >
                {p.name.slice(0, 30)}...
                <button
                  onClick={() => handleRemove(p.id)}
                  className="text-red-500 hover:text-red-700 ml-1"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <CompareTable products={products} />

          {/* AI Summary */}
          <div className="mt-6">
            {aiSummary ? (
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">AI Comparison Summary</h3>
                <p className="text-sm text-gray-700">{aiSummary}</p>
              </div>
            ) : (
              <button
                onClick={handleAiSummary}
                disabled={loadingAi || products.length < 2}
                className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded text-sm disabled:opacity-50"
              >
                {loadingAi ? "Generating..." : "Generate AI Comparison Summary"}
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
}
