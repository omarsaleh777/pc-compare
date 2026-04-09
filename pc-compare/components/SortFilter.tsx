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
  const inputClasses =
    "bg-surface-container-highest border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <div className="flex items-center gap-2">
        <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant">
          Sort:
        </label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className={inputClasses}
        >
          <option value="best_value">Best Value</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant">
          Price:
        </label>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          className={`${inputClasses} w-24`}
        />
        <span className="text-sm text-outline">–</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className={`${inputClasses} w-24`}
        />
      </div>
    </div>
  );
}
