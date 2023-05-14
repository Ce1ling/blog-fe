import { create } from 'zustand'


import type { MenuProps } from 'antd'


interface State {
  items: NonNullable<MenuProps['items']>
  active: string
}

interface Action {
  setActive: (state: string) => void
  resetActive: () => void
}

export const useHeaderStore = create<State & Action>((set) => ({
  items: [
    {
      key: '1',
      label: 'Blog',
    },
    {
      key: '2',
      label: 'Projects',
    },
    {
      key: '3',
      label: 'SignIn'
    }
  ],
  active: '1',
  setActive: (active) => set({ active }),
  resetActive: () => set({ active: '1' })
}))