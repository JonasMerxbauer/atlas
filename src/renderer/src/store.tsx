import { create } from "zustand";

export const useStore = create((set) => ({
  transactions: 0,
  setTransactions: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
