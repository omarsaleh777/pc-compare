"use client";

export function getCompareIds(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("compareIds") || "[]");
}

export function toggleCompare(id: string): string[] {
  const ids = getCompareIds();
  const index = ids.indexOf(id);

  if (index > -1) {
    ids.splice(index, 1);
  } else if (ids.length < 4) {
    ids.push(id);
  }

  localStorage.setItem("compareIds", JSON.stringify(ids));
  window.dispatchEvent(new Event("compareUpdated"));
  return ids;
}
