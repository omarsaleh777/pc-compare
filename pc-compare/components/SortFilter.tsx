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
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort:</label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="best_value">Best Value</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Price:</label>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm w-24 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">–</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm w-24 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
