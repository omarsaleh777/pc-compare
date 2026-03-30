"use client";

interface SortFilterProps {
  sort: string;
  minPrice: string;
  maxPrice: string;
  onSortChange: (sort: string) => void;
  onMinPriceChange: (val: string) => void;
  onMaxPriceChange: (val: string) => void;
}

export default function SortFilter({
  sort,
  minPrice,
  maxPrice,
  onSortChange,
  onMinPriceChange,
  onMaxPriceChange,
}: SortFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">Sort:</label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border rounded px-3 py-1.5 text-sm"
        >
          <option value="best_value">Best Value</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">Price:</label>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          className="border rounded px-3 py-1.5 text-sm w-24"
        />
        <span className="text-sm">–</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="border rounded px-3 py-1.5 text-sm w-24"
        />
      </div>
    </div>
  );
}
