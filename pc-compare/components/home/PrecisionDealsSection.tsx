import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  affiliateUrl: string;
  featured: boolean;
}

// Category → display label map
const CATEGORY_LABELS: Record<string, string> = {
  ram:         "Memory",
  cpu:         "Processors",
  gpu:         "Graphics Cards",
  motherboard: "Motherboards",
  storage:     "Storage",
  case:        "PC Cases",
  cooling:     "Cooling",
  psu:         "Power Supplies",
};

// Badges for variety
const DEAL_BADGES = ["BEST SELLER", "HOT DEAL", "NEW LOW", "TOP RATED"];

export default function PrecisionDealsSection({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="bg-surface-container-low py-24 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline text-4xl font-black tracking-hero text-white mb-2">
              PRECISION DEALS
            </h2>
            <p className="text-on-surface-variant font-body text-sm">
              Real-time price drops from verified hardware architects.
            </p>
          </div>
          <Link
            href="/category/all"
            className="font-label text-primary flex items-center gap-2 hover:gap-4 transition-all text-sm"
          >
            VIEW ALL DEALS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, i) => {
            const badge = i < 3 ? DEAL_BADGES[i] : null;
            return (
              <div
                key={product.id}
                className="bg-surface rounded-xl p-5 border border-outline-variant/10 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-square bg-surface-container-highest rounded-lg mb-5 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  {badge && (
                    <div className="absolute top-3 right-3 bg-secondary-container text-on-secondary-container font-label font-bold text-[9px] px-2 py-1 rounded tracking-wider">
                      {badge}
                    </div>
                  )}
                </div>

                {/* Category label */}
                <span className="font-label text-[10px] text-primary-container tracking-widest uppercase mb-1 block">
                  {CATEGORY_LABELS[product.category] ?? product.category}
                </span>

                {/* Product name */}
                <h4 className="font-headline font-bold text-white text-base mb-4 line-clamp-2 flex-1">
                  {product.name}
                </h4>

                {/* Price + action */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-2xl font-black text-white">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface-container-highest p-3 rounded-lg hover:bg-primary hover:text-on-primary transition-colors"
                    aria-label={`Buy ${product.name}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
