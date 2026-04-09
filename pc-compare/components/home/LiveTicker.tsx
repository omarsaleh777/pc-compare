"use client";

const TICKER_ITEMS = [
  { name: "RTX 4090",             change: -120.00, up: false },
  { name: "Ryzen 9 7950X",        change: -45.00,  up: false },
  { name: "i9-14900K",            change: +12.00,  up: true  },
  { name: "WD_BLACK SN850X",      change: -25.00,  up: false },
  { name: "Corsair Vengeance 32GB",change: -15.00,  up: false },
  { name: "Z790 Aorus Elite",     change: +8.00,   up: true  },
  { name: "RTX 4080 Super",       change: -60.00,  up: false },
  { name: "Ryzen 7 7800X3D",      change: -30.00,  up: false },
];

// Duplicate for seamless infinite scroll
const ALL_ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function LiveTicker() {
  return (
    <div className="bg-surface-container-lowest border-y border-outline-variant/10 py-3 overflow-hidden">
      <div className="flex items-center">

        {/* Static badge */}
        <div className="flex items-center gap-3 px-6 shrink-0 border-r border-outline-variant/20 mr-6">
          <div className="pulse-dot animate-pulse" />
          <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
            Live Price Tracking
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-track gap-10">
            {ALL_ITEMS.map((item, i) => (
              <span key={i} className="font-label text-sm text-on-surface whitespace-nowrap">
                {item.name}{" "}
                <span className={item.up ? "text-error" : "text-primary-container"}>
                  {item.up ? "+" : ""}${Math.abs(item.change).toFixed(2)}
                </span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
