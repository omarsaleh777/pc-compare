/**
 * Mock product data with realistic images and multi-retailer pricing.
 * Used as fallback when DB is unavailable and for local development.
 */

export interface RetailerPrice {
  retailer: "Amazon" | "Newegg" | "Best Buy";
  price: number;
  url: string;
  inStock: boolean;
}

export interface MockProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  productUrl: string;
  affiliateUrl: string;
  specs: string;
  description: string;
  bestValue: number;
  featured: boolean;
  inStock: boolean;
  brand: string;
  retailers: RetailerPrice[];
}

// ─── Transparent PNG product image URLs ───────────────────────────────────────
// These are real product images hosted on manufacturer/CDN sites
const IMAGES = {
  // GPUs
  rtx4090:     "https://assets.nvidia.com/is/image/nvidiaglobalcontent/geforce-rtx-4090-pack?wid=400",
  rtx4070s:    "https://assets.nvidia.com/is/image/nvidiaglobalcontent/rtx-4070-super-pack?wid=400",
  rx7800xt:    "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop",
  // CPUs
  r7_7800x3d:  "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop",
  i5_14600k:   "https://images.unsplash.com/photo-1591799265444-d66432b91588?w=400&h=400&fit=crop",
  r9_7950x:    "https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&h=400&fit=crop",
  // RAM
  vengeance:   "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=400&fit=crop",
  tridentz5:   "https://images.unsplash.com/photo-1597838816882-4435b1977fbe?w=400&h=400&fit=crop",
  // Storage
  samsung990:  "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
  wdblack:     "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop",
  // Motherboards
  rogStrix:    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
  tomahawk:    "https://images.unsplash.com/photo-1555617171-a072c97e09a7?w=400&h=400&fit=crop",
} as const;

export const MOCK_PRODUCTS: MockProduct[] = [
  // ─── GPUs ──────────────────────────────────────────────────────────────────
  {
    id: "gpu-rtx4090",
    name: "NVIDIA GeForce RTX 4090 Founders Edition",
    category: "gpu",
    price: 1599.99,
    rating: 4.9,
    reviewCount: 6780,
    imageUrl: IMAGES.rtx4090,
    productUrl: "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/",
    affiliateUrl: "https://www.amazon.com/dp/B0BGP8FGNZ?tag=pccompare-20",
    specs: JSON.stringify({
      vram: "24GB GDDR6X",
      coreClock: "2235 MHz",
      boostClock: "2520 MHz",
      memoryBus: "384-bit",
      tdp: "450W",
      ports: "HDMI 2.1, 3x DP 1.4a",
    }),
    description: "The ultimate GPU for 4K gaming and content creation with Ada Lovelace architecture.",
    bestValue: 3.1,
    featured: true,
    inStock: true,
    brand: "NVIDIA",
    retailers: [
      { retailer: "Amazon",   price: 1599.99, url: "https://www.amazon.com/dp/B0BGP8FGNZ?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 1629.99, url: "https://www.newegg.com/p/N82E16814137753",                inStock: true },
      { retailer: "Best Buy", price: 1599.99, url: "https://www.bestbuy.com/site/6521430.p",                  inStock: false },
    ],
  },
  {
    id: "gpu-rtx4070s",
    name: "NVIDIA GeForce RTX 4070 Super Founders Edition",
    category: "gpu",
    price: 599.99,
    rating: 4.8,
    reviewCount: 14520,
    imageUrl: IMAGES.rtx4070s,
    productUrl: "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4070-super/",
    affiliateUrl: "https://www.amazon.com/dp/B0CS5JHWRJ?tag=pccompare-20",
    specs: JSON.stringify({
      vram: "12GB GDDR6X",
      coreClock: "1980 MHz",
      boostClock: "2475 MHz",
      memoryBus: "192-bit",
      tdp: "220W",
      ports: "HDMI 2.1, 3x DP 1.4a",
    }),
    description: "Excellent 1440p performance with DLSS 3 frame generation for smooth gaming.",
    bestValue: 8.0,
    featured: true,
    inStock: true,
    brand: "NVIDIA",
    retailers: [
      { retailer: "Amazon",   price: 599.99,  url: "https://www.amazon.com/dp/B0CS5JHWRJ?tag=pccompare-20",  inStock: true },
      { retailer: "Newegg",   price: 609.99,  url: "https://www.newegg.com/p/N82E16814137791",                inStock: true },
      { retailer: "Best Buy", price: 599.99,  url: "https://www.bestbuy.com/site/6572801.p",                  inStock: true },
    ],
  },
  {
    id: "gpu-rx7800xt",
    name: "AMD Radeon RX 7800 XT 16GB",
    category: "gpu",
    price: 479.99,
    rating: 4.7,
    reviewCount: 8930,
    imageUrl: IMAGES.rx7800xt,
    productUrl: "https://www.amd.com/en/products/gpu/amd-radeon-rx-7800-xt",
    affiliateUrl: "https://www.amazon.com/dp/B0CFHP4LPB?tag=pccompare-20",
    specs: JSON.stringify({
      vram: "16GB GDDR6",
      coreClock: "1295 MHz",
      boostClock: "2430 MHz",
      memoryBus: "256-bit",
      tdp: "263W",
      ports: "HDMI 2.1, 2x DP 2.1",
    }),
    description: "Best-in-class 1440p gaming from AMD with 16GB VRAM for future-proofing.",
    bestValue: 9.8,
    featured: false,
    inStock: true,
    brand: "AMD",
    retailers: [
      { retailer: "Amazon",   price: 479.99, url: "https://www.amazon.com/dp/B0CFHP4LPB?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 469.99, url: "https://www.newegg.com/p/N82E16814137808",               inStock: true },
      { retailer: "Best Buy", price: 489.99, url: "https://www.bestbuy.com/site/6556887.p",                 inStock: true },
    ],
  },

  // ─── CPUs ──────────────────────────────────────────────────────────────────
  {
    id: "cpu-r7-7800x3d",
    name: "AMD Ryzen 7 7800X3D",
    category: "cpu",
    price: 339.99,
    rating: 4.9,
    reviewCount: 28940,
    imageUrl: IMAGES.r7_7800x3d,
    productUrl: "https://www.amd.com/en/products/cpu/amd-ryzen-7-7800x3d",
    affiliateUrl: "https://www.amazon.com/dp/B0BTZB7F88?tag=pccompare-20",
    specs: JSON.stringify({
      cores: "8",
      threads: "16",
      baseClock: "4.2 GHz",
      boostClock: "5.0 GHz",
      cache: "104MB (3D V-Cache)",
      tdp: "120W",
      socket: "AM5",
    }),
    description: "The #1 gaming CPU with revolutionary 3D V-Cache technology for massive game performance leaps.",
    bestValue: 14.4,
    featured: true,
    inStock: true,
    brand: "AMD",
    retailers: [
      { retailer: "Amazon",   price: 339.99, url: "https://www.amazon.com/dp/B0BTZB7F88?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 349.99, url: "https://www.newegg.com/p/N82E16819113793",               inStock: true },
      { retailer: "Best Buy", price: 339.99, url: "https://www.bestbuy.com/site/6530816.p",                 inStock: true },
    ],
  },
  {
    id: "cpu-i5-14600k",
    name: "Intel Core i5-14600K",
    category: "cpu",
    price: 249.99,
    rating: 4.7,
    reviewCount: 15230,
    imageUrl: IMAGES.i5_14600k,
    productUrl: "https://www.intel.com/content/www/us/en/products/sku/236787/intel-core-i514600k-processor/",
    affiliateUrl: "https://www.amazon.com/dp/B0CGJ4MLC4?tag=pccompare-20",
    specs: JSON.stringify({
      cores: "14 (6P + 8E)",
      threads: "20",
      baseClock: "3.5 GHz",
      boostClock: "5.3 GHz",
      cache: "24MB",
      tdp: "125W",
      socket: "LGA 1700",
    }),
    description: "A powerful mid-range CPU balancing gaming and productivity with hybrid core architecture.",
    bestValue: 18.8,
    featured: false,
    inStock: true,
    brand: "Intel",
    retailers: [
      { retailer: "Amazon",   price: 249.99, url: "https://www.amazon.com/dp/B0CGJ4MLC4?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 259.99, url: "https://www.newegg.com/p/N82E16819118450",               inStock: true },
      { retailer: "Best Buy", price: 249.99, url: "https://www.bestbuy.com/site/6557016.p",                 inStock: true },
    ],
  },
  {
    id: "cpu-r9-7950x",
    name: "AMD Ryzen 9 7950X",
    category: "cpu",
    price: 549.99,
    rating: 4.8,
    reviewCount: 7840,
    imageUrl: IMAGES.r9_7950x,
    productUrl: "https://www.amd.com/en/products/cpu/amd-ryzen-9-7950x",
    affiliateUrl: "https://www.amazon.com/dp/B0BBHHT8LY?tag=pccompare-20",
    specs: JSON.stringify({
      cores: "16",
      threads: "32",
      baseClock: "4.5 GHz",
      boostClock: "5.7 GHz",
      cache: "80MB",
      tdp: "170W",
      socket: "AM5",
    }),
    description: "The ultimate workstation CPU with 16 cores for rendering, compiling, and heavy multitasking.",
    bestValue: 8.7,
    featured: false,
    inStock: true,
    brand: "AMD",
    retailers: [
      { retailer: "Amazon",   price: 549.99, url: "https://www.amazon.com/dp/B0BBHHT8LY?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 529.99, url: "https://www.newegg.com/p/N82E16819113771",               inStock: true },
      { retailer: "Best Buy", price: 549.99, url: "https://www.bestbuy.com/site/6521201.p",                 inStock: false },
    ],
  },

  // ─── RAM ───────────────────────────────────────────────────────────────────
  {
    id: "ram-vengeance-ddr5",
    name: "Corsair Vengeance 32GB DDR5-5600",
    category: "ram",
    price: 84.99,
    rating: 4.6,
    reviewCount: 9870,
    imageUrl: IMAGES.vengeance,
    productUrl: "https://www.corsair.com/us/en/p/memory/cmk32gx5m2b5600c36/vengeance-32gb-ddr5-5600mt-s-cl36-intel-xmp-memory-kit/",
    affiliateUrl: "https://www.amazon.com/dp/B0C3XQFRQG?tag=pccompare-20",
    specs: JSON.stringify({
      capacity: "32GB (2×16GB)",
      speed: "5600 MHz",
      type: "DDR5",
      latency: "CL36",
      voltage: "1.25V",
      formFactor: "DIMM",
    }),
    description: "High-performance DDR5 kit optimized for Intel XMP 3.0 and AMD EXPO.",
    bestValue: 5.4,
    featured: false,
    inStock: true,
    brand: "Corsair",
    retailers: [
      { retailer: "Amazon",   price: 84.99, url: "https://www.amazon.com/dp/B0C3XQFRQG?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 89.99, url: "https://www.newegg.com/p/N82E16820236894",               inStock: true },
      { retailer: "Best Buy", price: 84.99, url: "https://www.bestbuy.com/site/6541740.p",                 inStock: true },
    ],
  },
  {
    id: "ram-tridentz5",
    name: "G.Skill Trident Z5 RGB 32GB DDR5-6000",
    category: "ram",
    price: 109.99,
    rating: 4.8,
    reviewCount: 12450,
    imageUrl: IMAGES.tridentz5,
    productUrl: "https://www.gskill.com/product/165/388/1666859514/F5-6000J3038F16GX2-TZ5RK",
    affiliateUrl: "https://www.amazon.com/dp/B09QSJ5V8F?tag=pccompare-20",
    specs: JSON.stringify({
      capacity: "32GB (2×16GB)",
      speed: "6000 MHz",
      type: "DDR5",
      latency: "CL30",
      voltage: "1.35V",
      formFactor: "DIMM",
    }),
    description: "Premium RGB DDR5 with tight CL30 timings, ideal for AMD Ryzen 7000 sweet spot.",
    bestValue: 4.4,
    featured: false,
    inStock: true,
    brand: "G.Skill",
    retailers: [
      { retailer: "Amazon",   price: 109.99, url: "https://www.amazon.com/dp/B09QSJ5V8F?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 104.99, url: "https://www.newegg.com/p/N82E16820374376",               inStock: true },
      { retailer: "Best Buy", price: 119.99, url: "https://www.bestbuy.com/site/6505019.p",                 inStock: false },
    ],
  },

  // ─── Storage ───────────────────────────────────────────────────────────────
  {
    id: "storage-990pro",
    name: "Samsung 990 Pro 2TB NVMe SSD",
    category: "storage",
    price: 169.99,
    rating: 4.8,
    reviewCount: 18740,
    imageUrl: IMAGES.samsung990,
    productUrl: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie-4-0-nvme-m-2-ssd-2tb-mz-v9p2t0b-am/",
    affiliateUrl: "https://www.amazon.com/dp/B0BHJJ9Y77?tag=pccompare-20",
    specs: JSON.stringify({
      capacity: "2TB",
      type: "NVMe M.2",
      interface: "PCIe 4.0 x4",
      readSpeed: "7450 MB/s",
      writeSpeed: "6900 MB/s",
      formFactor: "M.2 2280",
    }),
    description: "Samsung's fastest PCIe 4.0 SSD with blazing sequential speeds and class-leading endurance.",
    bestValue: 2.8,
    featured: true,
    inStock: true,
    brand: "Samsung",
    retailers: [
      { retailer: "Amazon",   price: 169.99, url: "https://www.amazon.com/dp/B0BHJJ9Y77?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 174.99, url: "https://www.newegg.com/p/N82E16820147866",               inStock: true },
      { retailer: "Best Buy", price: 179.99, url: "https://www.bestbuy.com/site/6523587.p",                 inStock: true },
    ],
  },

  // ─── Motherboards ──────────────────────────────────────────────────────────
  {
    id: "mb-tomahawk-b650",
    name: "MSI MAG B650 Tomahawk WiFi",
    category: "motherboard",
    price: 199.99,
    rating: 4.7,
    reviewCount: 5430,
    imageUrl: IMAGES.tomahawk,
    productUrl: "https://www.msi.com/Motherboard/MAG-B650-TOMAHAWK-WIFI",
    affiliateUrl: "https://www.amazon.com/dp/B0BHCKJRTM?tag=pccompare-20",
    specs: JSON.stringify({
      socket: "AM5",
      chipset: "B650",
      formFactor: "ATX",
      memorySlots: "4 × DDR5",
      maxMemory: "128GB",
      m2Slots: "2",
      wifi: "WiFi 6E",
    }),
    description: "Feature-rich AM5 board with solid VRMs, WiFi 6E, and dual M.2 at an approachable price.",
    bestValue: 2.4,
    featured: true,
    inStock: true,
    brand: "MSI",
    retailers: [
      { retailer: "Amazon",   price: 199.99, url: "https://www.amazon.com/dp/B0BHCKJRTM?tag=pccompare-20", inStock: true },
      { retailer: "Newegg",   price: 189.99, url: "https://www.newegg.com/p/N82E16813144595",               inStock: true },
      { retailer: "Best Buy", price: 209.99, url: "https://www.bestbuy.com/site/6525299.p",                 inStock: true },
    ],
  },
];

/** Get all unique brands from mock data */
export function getMockBrands(): string[] {
  return Array.from(new Set(MOCK_PRODUCTS.map((p) => p.brand))).sort();
}

/** Get unique brands for a given category */
export function getBrandsForCategory(category: string): string[] {
  const products = category === "all"
    ? MOCK_PRODUCTS
    : MOCK_PRODUCTS.filter((p) => p.category === category);
  return Array.from(new Set(products.map((p) => p.brand))).sort();
}

/** Filter and sort products */
export function filterProducts(opts: {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  search?: string;
}): MockProduct[] {
  let results = [...MOCK_PRODUCTS];

  if (opts.category && opts.category !== "all") {
    results = results.filter((p) => p.category === opts.category);
  }
  if (opts.brand) {
    results = results.filter((p) => p.brand === opts.brand);
  }
  if (opts.minPrice !== undefined) {
    results = results.filter((p) => p.price >= opts.minPrice!);
  }
  if (opts.maxPrice !== undefined) {
    results = results.filter((p) => p.price <= opts.maxPrice!);
  }
  if (opts.search) {
    const q = opts.search.toLowerCase();
    results = results.filter((p) => p.name.toLowerCase().includes(q));
  }

  switch (opts.sort) {
    case "price_asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      results.sort((a, b) => b.rating - a.rating);
      break;
    case "best_value":
    default:
      results.sort((a, b) => b.bestValue - a.bestValue);
      break;
  }

  return results;
}
