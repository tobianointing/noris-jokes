import create from "zustand"

interface StoreType {
  categories: string[]
}

const useJokeCategoryStore = create((set) => ({
  categories: [],
  increasePopulation: () => set((state: StoreType) => ({ categories: state.categories })),
  removeAllBears: () => set({ categories: [] }),
}))
