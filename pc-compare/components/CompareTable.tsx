"use client";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  specs: string;
  affiliateUrl: string;
  imageUrl: string;
}

interface CompareTableProps {
  products: Product[];
}

export default function CompareTable({ products }: CompareTableProps) {
  if (products.length === 0) return null;

  // Parse all specs and collect union of keys
  const parsedSpecs = products.map((p) => JSON.parse(p.specs) as Record<string, string>);
  const allKeys = Array.from(new Set(parsedSpecs.flatMap((s) => Object.keys(s))));

  // Find cheapest and highest rated
  const cheapestPrice = Math.min(...products.map((p) => p.price));
  const highestRating = Math.max(...products.map((p) => p.rating));

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-left w-36">
              Spec
            </th>
            {products.map((p) => (
              <th
                key={p.id}
                className="border border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-center min-w-[180px]"
              >
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price row */}
          <tr>
            <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-gray-700 dark:text-gray-300">
              Price
            </td>
            {products.map((p) => (
              <td
                key={p.id}
                className={`border border-gray-200 dark:border-gray-700 p-3 text-center font-bold ${
                  p.price === cheapestPrice
                    ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                ${p.price.toFixed(2)}
                {p.price !== cheapestPrice && (
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-normal">
                    +${(p.price - cheapestPrice).toFixed(2)}
                  </span>
                )}
              </td>
            ))}
          </tr>

          {/* Rating row */}
          <tr>
            <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-gray-700 dark:text-gray-300">
              Rating
            </td>
            {products.map((p) => (
              <td
                key={p.id}
                className={`border border-gray-200 dark:border-gray-700 p-3 text-center ${
                  p.rating === highestRating
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {"★".repeat(Math.round(p.rating))} {p.rating.toFixed(1)}
              </td>
            ))}
          </tr>

          {/* Spec rows */}
          {allKeys.map((key) => (
            <tr key={key}>
              <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium capitalize text-gray-700 dark:text-gray-300">
                {key}
              </td>
              {parsedSpecs.map((specs, i) => (
                <td
                  key={products[i].id}
                  className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-900 dark:text-white"
                >
                  {specs[key] || "—"}
                </td>
              ))}
            </tr>
          ))}

          {/* Buy row */}
          <tr>
            <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-gray-700 dark:text-gray-300">
              Buy
            </td>
            {products.map((p) => (
              <td key={p.id} className="border border-gray-200 dark:border-gray-700 p-3 text-center">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm"
                >
                  Buy Now
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
