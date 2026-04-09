import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CompareStore {
  /** IDs of products currently in the compare list (max 4) */
  ids: string[];
  /** Add a product to compare. Returns false if already at max. */
  add: (id: string) => boolean;
  /** Remove a product from compare. */
  remove: (id: string) => void;
  /** Toggle a product in/out of compare. */
  toggle: (id: string) => void;
  /** Clear all compare items. */
  clear: () => void;
  /** Check if a product is in compare. */
  has: (id: string) => boolean;
}

const MAX_COMPARE = 4;

export const useCompareStore = create<CompareStore>()(
  persist(
    (set, get) => ({
      ids: [],

      add: (id: string) => {
        const { ids } = get();
        if (ids.includes(id) || ids.length >= MAX_COMPARE) return false;
        set({ ids: [...ids, id] });
        // Notify legacy listeners (Header badge)
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("compareUpdated"));
        }
        return true;
      },

      remove: (id: string) => {
        set({ ids: get().ids.filter((i) => i !== id) });
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("compareUpdated"));
        }
      },

      toggle: (id: string) => {
        const { ids, add, remove } = get();
        if (ids.includes(id)) {
          remove(id);
        } else {
          add(id);
        }
      },

      clear: () => {
        set({ ids: [] });
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("compareUpdated"));
        }
      },

      has: (id: string) => get().ids.includes(id),
    }),
    {
      name: "compareIds",
      // Store only the IDs array, not the functions
      partialize: (state) => ({ ids: state.ids }),
    }
  )
);
