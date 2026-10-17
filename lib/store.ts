import { create } from 'zustand'

interface User {
    id: string
    name: string
    email: string
    image: string
    setUser:
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
