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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/category/${cat.slug}`}
          className="border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors"
        >
          <div className="text-3xl mb-2">{cat.icon}</div>
          <div className="font-medium text-sm">{cat.name}</div>
        </Link>
      ))}
    </div>
  );
}

export { categories };
