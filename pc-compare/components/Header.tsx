"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Processors",    slug: "cpu" },
  { label: "Graphics Cards", slug: "gpu" },
  { label: "Memory",        slug: "ram" },
  { label: "Storage",       slug: "storage" },
  { label: "Motherboards",  slug: "motherboard" },
];

export default function Header() {
  const [compareCount, setCompareCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    function updateCount() {
      try {
        const ids = JSON.parse(localStorage.getItem("compareIds") || "[]");
        setCompareCount(ids.length);
      } catch {}
    }
    updateCount();
    window.addEventListener("storage", updateCount);
    window.addEventListener("compareUpdated", updateCount);
    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("compareUpdated", updateCount);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10 shadow-2xl shadow-black/30 h-16">
      <div className="flex justify-between items-center w-full h-full px-6 lg:px-8 max-w-[1400px] mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-primary font-headline shrink-0"
        >
          PC Compare
        </Link>

        {/* Category nav — hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ label, slug }) => {
            const isActive = pathname?.includes(`/category/${slug}`);
            return (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className={`font-label text-sm tracking-tight transition-colors ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/compare"
            className="flex items-center gap-1.5 font-label text-sm text-on-surface-variant hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-surface-container"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
            </svg>
            Compare
            {compareCount > 0 && (
              <span className="bg-primary text-on-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {compareCount}
              </span>
            )}
          </Link>
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
