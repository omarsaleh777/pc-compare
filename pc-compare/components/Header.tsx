"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [compareCount, setCompareCount] = useState(0);

  useEffect(() => {
    function updateCount() {
      const ids = JSON.parse(localStorage.getItem("compareIds") || "[]");
      setCompareCount(ids.length);
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
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          PC Compare
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/compare" className="text-sm hover:underline">
            Compare {compareCount > 0 && `(${compareCount})`}
          </Link>
        </nav>
      </div>
    </header>
  );
}
