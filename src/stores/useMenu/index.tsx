import { create } from 'zustand'
import { BookOutlined, FundProjectionScreenOutlined, LoginOutlined } from '@ant-design/icons'

import type { MenuItemType } from 'antd/es/menu/hooks/useItems'


type Items = {
  path: string
} & MenuItemType

interface State {
  items: Items[]
  active: string
}

interface Action {
  setActive: (active: string) => void
  resetActive: () => void
}

const ACTIVE_NAME = 'L1en_blog_menu_active'
const ACTIVE_DEFAULT = '1'

export const useMenuStore = create<State & Action>(set => ({
  items: [
    {
      key: '1',
      label: 'Blog',
      path: '/blog',
      icon: <BookOutlined />
    },
    {
      key: '2',
      label: 'Projects',
      path: '/projects',
      icon: <FundProjectionScreenOutlined />
    },
    {
      key: '3',
      label: 'Login',
      path: '/login',
      icon: <LoginOutlined />
    }
  ],
  active: sessionStorage.getItem(ACTIVE_NAME) || ACTIVE_DEFAULT,
  setActive: (active) => {
    set({ active })
    sessionStorage.setItem(ACTIVE_NAME, active)
  },
  resetActive: () => {
    set({ active: ACTIVE_DEFAULT })
    sessionStorage.setItem(ACTIVE_NAME, ACTIVE_DEFAULT)
  }
}))