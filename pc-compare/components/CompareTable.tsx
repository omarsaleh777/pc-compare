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

  const parsedSpecs = products.map((p) => JSON.parse(p.specs) as Record<string, string>);
  const allKeys = Array.from(new Set(parsedSpecs.flatMap((s) => Object.keys(s))));

  const cheapestPrice = Math.min(...products.map((p) => p.price));
  const highestRating = Math.max(...products.map((p) => p.rating));

  const cellBase = "border border-outline-variant/20 p-4 text-sm";
  const headerCell = `${cellBase} bg-surface-container-high text-on-surface font-headline font-bold`;
  const labelCell = `${cellBase} font-label text-xs uppercase tracking-wider text-on-surface-variant w-36`;
  const valueCell = `${cellBase} text-center text-on-surface`;

  return (
    <div className="overflow-x-auto rounded-xl border border-outline-variant/20">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className={`${headerCell} text-left`}>Spec</th>
            {products.map((p) => (
              <th key={p.id} className={`${headerCell} text-center min-w-[200px]`}>
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price row */}
          <tr>
            <td className={labelCell}>Price</td>
            {products.map((p) => (
              <td
                key={p.id}
                className={`${valueCell} font-black text-lg ${
                  p.price === cheapestPrice
                    ? "bg-primary/5 text-primary"
                    : ""
                }`}
              >
                ${p.price.toFixed(2)}
                {p.price !== cheapestPrice && (
                  <span className="block text-[10px] text-outline font-normal font-label tracking-wider">
                    +${(p.price - cheapestPrice).toFixed(2)}
                  </span>
                )}
              </td>
            ))}
          </tr>

          {/* Rating row */}
          <tr>
            <td className={labelCell}>Rating</td>
            {products.map((p) => (
              <td
                key={p.id}
                className={`${valueCell} ${
                  p.rating === highestRating
                    ? "bg-secondary-container/10 text-secondary-fixed-dim font-bold"
                    : ""
                }`}
              >
                <span className="text-secondary-fixed-dim">
                  {"★".repeat(Math.round(p.rating))}
                </span>{" "}
                {p.rating.toFixed(1)}
              </td>
            ))}
          </tr>

          {/* Spec rows */}
          {allKeys.map((key) => (
            <tr key={key}>
              <td className={labelCell}>{key}</td>
              {parsedSpecs.map((specs, i) => (
                <td key={products[i].id} className={valueCell}>
                  {specs[key] || "—"}
                </td>
              ))}
            </tr>
          ))}

          {/* Buy row */}
          <tr>
            <td className={labelCell}>Buy</td>
            {products.map((p) => (
              <td key={p.id} className={`${valueCell}`}>
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-gradient text-on-primary py-2.5 px-6 rounded-lg
                    font-label font-bold text-xs tracking-wider uppercase
                    hover:brightness-110 active:scale-95 transition-all"
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
