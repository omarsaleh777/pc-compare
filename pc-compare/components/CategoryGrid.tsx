import Link from "next/link";

const categories = [
  { name: "RAM", slug: "ram", icon: "🧠" },
  { name: "CPU", slug: "cpu", icon: "⚡" },
  { name: "GPU", slug: "gpu", icon: "🎮" },
  { name: "Motherboard", slug: "motherboard", icon: "🔧" },
  { name: "Storage", slug: "storage", icon: "💾" },
  { name: "PC Case", slug: "case", icon: "🖥️" },
  { name: "Cooling", slug: "cooling", icon: "❄️" },
  { name: "Power Supply", slug: "psu", icon: "🔌" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/category/${cat.slug}`}
          className="group border border-outline-variant/20 rounded-xl p-4 text-center
            bg-surface-container-low hover:bg-surface-container
            hover:border-outline-variant/40
            transition-all duration-200 active:scale-[0.98]"
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
          <div className="font-label font-bold text-xs uppercase tracking-wider text-on-surface">
            {cat.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export { categories };
