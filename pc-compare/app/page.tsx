import { prisma } from "@/lib/prisma";
import HeroSection from "@/components/home/HeroSection";
import BentoCategoryGrid from "@/components/home/BentoCategoryGrid";
import LiveTicker from "@/components/home/LiveTicker";
import PrecisionDealsSection from "@/components/home/PrecisionDealsSection";
import BottleneckCalculator from "@/components/BottleneckCalculator";

export const metadata = {
  title: "PC Compare — Precision Silicon Architect",
  description:
    "Compare prices, specs, and ratings for PC components. Find the best value RAM, CPU, GPU, storage, and more.",
};

export default async function Home() {
  const featuredDeals = await prisma.product.findMany({
    orderBy: { bestValue: "desc" },
    take: 8,
    select: {
      id: true,
      name: true,
      category: true,
      price: true,
      rating: true,
      imageUrl: true,
      affiliateUrl: true,
      featured: true,
    },
  });

  return (
    <main className="bg-surface">
      <HeroSection />
      <BentoCategoryGrid />
      <LiveTicker />
      <PrecisionDealsSection products={featuredDeals} />
      <BottleneckCalculator />
    </main>
  );
}
