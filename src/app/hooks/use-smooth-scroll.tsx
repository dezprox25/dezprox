import { create } from 'zustand'

interface SmoothScrollState {
  smoothScroll: boolean
  setSmoothScroll: (value: boolean) => void
}

export const useSmoothScroll = create<SmoothScrollState>((set) => ({
  smoothScroll: true,
  setSmoothScroll: (value) => set({ smoothScroll: value }),
}))
