"use client";

import { useState, useMemo } from "react";

/**
 * Bottleneck calculation data.
 * Maps CPU/GPU tiers so we can estimate relative performance.
 */
interface TierEntry {
  name: string;
  /** Relative performance score 0–100 for gaming. */
  score: number;
}

const CPU_TIERS: TierEntry[] = [
  { name: "Intel Core i3-13100F",    score: 35 },
  { name: "AMD Ryzen 5 5600X",       score: 55 },
  { name: "Intel Core i5-13400F",    score: 60 },
  { name: "AMD Ryzen 5 7600X",       score: 68 },
  { name: "Intel Core i5-14600K",    score: 72 },
  { name: "AMD Ryzen 7 7800X3D",     score: 85 },
  { name: "Intel Core i7-14700K",    score: 80 },
  { name: "AMD Ryzen 9 7950X",       score: 82 },
  { name: "Intel Core i9-14900K",    score: 84 },
];

const GPU_TIERS: TierEntry[] = [
  { name: "AMD Radeon RX 7600 8GB",        score: 35 },
  { name: "NVIDIA GeForce RTX 4060 8GB",   score: 42 },
  { name: "Intel Arc A770 16GB",           score: 38 },
  { name: "NVIDIA GeForce RTX 4060 Ti",    score: 50 },
  { name: "AMD Radeon RX 7800 XT",         score: 62 },
  { name: "NVIDIA GeForce RTX 4070 Super", score: 70 },
  { name: "NVIDIA GeForce RTX 4070 Ti Super", score: 78 },
  { name: "AMD Radeon RX 7900 XTX",        score: 80 },
  { name: "MSI GeForce RTX 4080 Super",    score: 85 },
  { name: "NVIDIA GeForce RTX 4090",       score: 100 },
];

const RESOLUTIONS = ["1080p", "1440p", "4K"] as const;

/**
 * Simple bottleneck heuristic:
 *  - At 1080p, the CPU matters more → weight CPU heavier
 *  - At 4K, the GPU matters more → weight GPU heavier
 *
 * bottleneck% = |cpuWeighted – gpuWeighted| / max(cpuWeighted, gpuWeighted) * 100
 *
 * If CPU score is lower → CPU bottleneck. If GPU score is lower → GPU bottleneck.
 */
function calculateBottleneck(
  cpuScore: number,
  gpuScore: number,
  resolution: typeof RESOLUTIONS[number]
) {
  let cpuWeight: number;
  let gpuWeight: number;

  switch (resolution) {
    case "1080p": cpuWeight = 0.6; gpuWeight = 0.4; break;
    case "1440p": cpuWeight = 0.4; gpuWeight = 0.6; break;
    case "4K":    cpuWeight = 0.25; gpuWeight = 0.75; break;
  }

  const cpuWeighted = cpuScore * cpuWeight;
  const gpuWeighted = gpuScore * gpuWeight;
  const diff = Math.abs(cpuWeighted - gpuWeighted);
  const maxVal = Math.max(cpuWeighted, gpuWeighted);
  const bottleneckPct = maxVal > 0 ? Math.round((diff / maxVal) * 100) : 0;

  const source = cpuWeighted < gpuWeighted ? "CPU" : cpuWeighted > gpuWeighted ? "GPU" : "None";

  return {
    bottleneckPct: Math.min(bottleneckPct, 100),
    source,
    cpuWeighted: Math.round(cpuWeighted),
    gpuWeighted: Math.round(gpuWeighted),
  };
}

export default function BottleneckCalculator() {
  const [selectedCpu, setSelectedCpu] = useState(CPU_TIERS[5].name);
  const [selectedGpu, setSelectedGpu] = useState(GPU_TIERS[5].name);
  const [resolution, setResolution] = useState<typeof RESOLUTIONS[number]>("1440p");

  const result = useMemo(() => {
    const cpuEntry = CPU_TIERS.find((c) => c.name === selectedCpu);
    const gpuEntry = GPU_TIERS.find((g) => g.name === selectedGpu);
    if (!cpuEntry || !gpuEntry) return null;
    return calculateBottleneck(cpuEntry.score, gpuEntry.score, resolution);
  }, [selectedCpu, selectedGpu, resolution]);

  const selectClasses =
    "w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  const getBottleneckColor = (pct: number) => {
    if (pct <= 10) return "text-primary";
    if (pct <= 25) return "text-secondary-fixed-dim";
    return "text-error";
  };

  const getBarColor = (pct: number) => {
    if (pct <= 10) return "bg-primary";
    if (pct <= 25) return "bg-secondary-fixed-dim";
    return "bg-error";
  };

  return (
    <section className="bg-surface-container-low py-20 px-6 lg:px-8">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block">
            Performance Analysis
          </span>
          <h2 className="font-headline text-4xl font-black tracking-hero text-on-surface mb-3">
            BOTTLENECK CALCULATOR
          </h2>
          <p className="text-on-surface-variant text-sm max-w-md mx-auto">
            Find out if your CPU or GPU is holding back your system at your target resolution.
          </p>
        </div>

        {/* Selector grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2 block">
              Processor
            </label>
            <select
              value={selectedCpu}
              onChange={(e) => setSelectedCpu(e.target.value)}
              className={selectClasses}
            >
              {CPU_TIERS.map((cpu) => (
                <option key={cpu.name} value={cpu.name}>{cpu.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2 block">
              Graphics Card
            </label>
            <select
              value={selectedGpu}
              onChange={(e) => setSelectedGpu(e.target.value)}
              className={selectClasses}
            >
              {GPU_TIERS.map((gpu) => (
                <option key={gpu.name} value={gpu.name}>{gpu.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2 block">
              Resolution
            </label>
            <div className="flex gap-2">
              {RESOLUTIONS.map((res) => (
                <button
                  key={res}
                  onClick={() => setResolution(res)}
                  className={`flex-1 py-3 rounded-lg font-label font-bold text-sm tracking-wider transition-all active:scale-95 ${
                    resolution === res
                      ? "bg-primary-gradient text-on-primary"
                      : "bg-surface-container-highest border border-outline-variant/30 text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result card */}
        {result && (
          <div className="bg-surface border border-outline-variant/20 rounded-xl p-8 text-center">
            {/* Bottleneck percentage */}
            <div className={`text-6xl font-black font-headline mb-2 ${getBottleneckColor(result.bottleneckPct)}`}>
              {result.bottleneckPct}%
            </div>
            <p className="text-on-surface-variant text-sm font-label mb-6">
              {result.source === "None"
                ? "Perfectly balanced — no bottleneck detected"
                : `${result.source} bottleneck at ${resolution} resolution`}
            </p>

            {/* Visual bar */}
            <div className="flex gap-4 items-center mb-6">
              <div className="flex-1">
                <div className="flex justify-between text-xs font-label text-on-surface-variant mb-1">
                  <span>CPU</span>
                  <span>{result.cpuWeighted}%</span>
                </div>
                <div className="h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(result.cpuWeighted * 2, 100)}%` }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs font-label text-on-surface-variant mb-1">
                  <span>GPU</span>
                  <span>{result.gpuWeighted}%</span>
                </div>
                <div className="h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${getBarColor(result.bottleneckPct)}`}
                    style={{ width: `${Math.min(result.gpuWeighted * 2, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-surface-container-low rounded-lg p-4 text-left">
              <h4 className="font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                Recommendation
              </h4>
              <p className="text-sm text-on-surface">
                {result.bottleneckPct <= 10
                  ? "Great pairing! Your CPU and GPU are well-matched for this resolution. You'll get the most out of both components."
                  : result.source === "CPU"
                  ? `Your CPU is holding back the GPU by ~${result.bottleneckPct}%. Consider upgrading to a higher-tier processor for better performance at ${resolution}.`
                  : `Your GPU is the bottleneck by ~${result.bottleneckPct}%. Consider upgrading your graphics card to fully utilize your CPU at ${resolution}.`}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
