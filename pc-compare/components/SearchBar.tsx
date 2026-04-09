"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export default function SearchBar({
  className,
  placeholder = "Search components, benchmarks, or builds...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/category/all?search=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={
          className ??
          "w-full bg-transparent border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary"
        }
      />
    </form>
  );
}
