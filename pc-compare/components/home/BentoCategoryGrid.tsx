import Link from "next/link";

const BENTO_ITEMS = [
  {
    slug:     "gpu",
    label:    "Graphics Cards",
    tag:      "MOST VIEWED",
    desc:     "Push the limits of ray-tracing and high-refresh gaming.",
    span:     "md:col-span-3 lg:col-span-3 row-span-2",
    size:     "large",
    imgUrl:   "https://lh3.googleusercontent.com/aida-public/AB6AXuAfp_JMPtZlZgc20XSY_RNhvh8ldDGJMWcJ0Gv0vpBlQrqDNjU0Ah7D9XG59iiYKdW-VMakrbuCWkJGgXou6e81QoBEksVum5tkvcjY0qFIX0cSaGSvxk2Ztm8ssP8VknTZ-sDFSjB_TTJQuT9N2wfVnScSHNN-AcrxfLxpzIKy8ZUJTO8R-_d91fbs6gyEyqHUydJHSJlKT-yse0bwzs2wIlbJQw76HmgXwJ1mAL3hhZwMQYSewmV8oSeLXAj60dm16hTLaz46mixO",
    imgAlt:   "high-end triple fan graphics card with rgb lighting",
  },
  {
    slug:     "cpu",
    label:    "Processors",
    desc:     "Unleash multi-threaded power.",
    span:     "md:col-span-3 lg:col-span-3",
    size:     "medium",
    imgUrl:   "https://lh3.googleusercontent.com/aida-public/AB6AXuCRX4GA-R1Wtqlz132M6U6Rdy7lec52XQDi-p2eBKDuaUIluxM_UjQvYIk5vJrQeH86qjuylBk7gKAuiVE6D-JRT88qXS9MGH7B9pZArz-ZIqyY0PhhwkIrB6tAeCW8ai7uJn_1CRnMyQ3SxI2ROxMzDS8LL9cEG5_m4jEDLjOxFDrZSOWvMZpmHtY900VIRcviQlIfodEPTEFQSt5D2nSZGsS658vLrYkRnE7LMGwgciRHQGZcxFRs8jHaaRiP6SrM_BVCzOwwXS87",
    imgAlt:   "macro view of a cpu chip with orange and blue rim lighting",
  },
  {
    slug:     "ram",
    label:    "Memory",
    desc:     "DDR5 High-Speed Kits",
    span:     "md:col-span-2 lg:col-span-2",
    size:     "small",
    icon:     "🧠",
  },
  {
    slug:     "storage",
    label:    "Storage",
    desc:     "NVMe SSD & HDD",
    span:     "md:col-span-1 lg:col-span-1",
    size:     "small",
    icon:     "💾",
  },
];

export default function BentoCategoryGrid() {
  return (
    <section className="px-6 lg:px-8 py-20 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:h-[560px]">

        {BENTO_ITEMS.map((item) => (
          <Link
            key={item.slug}
            href={`/category/${item.slug}`}
            className={`${item.span} bg-surface-container-low rounded-xl overflow-hidden relative group border border-outline-variant/10 hover:border-outline-variant/30 transition-all duration-300`}
          >
            {/* Image-backed large + medium cards */}
            {item.imgUrl && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imgUrl}
                  alt={item.imgAlt}
                  className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${item.size === "large" ? "opacity-60" : "opacity-40"}`}
                />
                <div className={`absolute inset-0 ${item.size === "large"
                  ? "bg-gradient-to-t from-surface-container-low via-transparent to-transparent"
                  : "bg-gradient-to-r from-surface-container-low to-transparent"
                }`} />

                {/* Text overlay */}
                <div className={`absolute ${item.size === "large" ? "bottom-0 left-0 p-8" : "inset-0 p-8 flex flex-col justify-center"}`}>
                  {item.tag && (
                    <span className="font-label text-secondary-container bg-on-secondary-container/20 px-3 py-1 rounded text-xs mb-4 inline-block tracking-wider">
                      {item.tag}
                    </span>
                  )}
                  <h3 className={`font-headline font-bold text-white mb-1 ${item.size === "large" ? "text-4xl" : "text-2xl"}`}>
                    {item.label}
                  </h3>
                  <p className="text-on-surface-variant text-sm max-w-xs">{item.desc}</p>
                </div>
              </>
            )}

            {/* Icon-backed small cards */}
            {item.icon && (
              <div className="bento-overlay absolute inset-0 flex flex-col justify-between p-8 hover:bg-surface-container/50 transition-colors">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="font-label text-sm font-bold uppercase tracking-wider text-white">{item.label}</h3>
                  <p className="text-on-surface-variant text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            )}
          </Link>
        ))}

      </div>
    </section>
  );
}
