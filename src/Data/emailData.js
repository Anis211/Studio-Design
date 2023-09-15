import { create } from "zustand";

export const useEmailsStore = create((set) => ({
  emails: [],
  catched: false,
  changeCatched: () => set((state) => ({ catched: !state.catched })),
}));
