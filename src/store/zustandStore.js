import { create } from 'zustand';

export const useStore = create((set) => ({
  myLocation2: 'dsa',
  locationSet2: (data) => set((state) => ({ myLocation2: data })),
  foodList: [],
  // foodListSet: (data) => set((state) => ({ foodList: data })),
  foodListSet: (data) => set((state) => ({ ...state, foodList: data })),
}));
