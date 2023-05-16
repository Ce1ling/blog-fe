import { create } from 'zustand'
import { BookOutlined, FundProjectionScreenOutlined, LoginOutlined } from '@ant-design/icons'

import type { MenuProps } from 'antd'


interface State {
  items: NonNullable<MenuProps['items']>
  active: string
}

interface Action {
  setActive: (state: string) => void
  resetActive: () => void
}

export const useHeaderStore = create<State & Action>(set => ({
  items: [
    {
      key: '1',
      label: 'Blog',
      icon: <BookOutlined />
    },
    {
      key: '2',
      label: 'Projects',
      icon: <FundProjectionScreenOutlined />
    },
    {
      key: '3',
      label: 'Login',
      icon: <LoginOutlined />
    }
  ],
  active: '1',
  setActive: (active) => set({ active }),
  resetActive: () => set({ active: '1' })
}))