import { create } from 'zustand'


export type Item = {
  id: string
  title: string
  desc: string
  avatar?: string
}

export interface State {
  list: Item[]
}

export interface Action {
}

export const useBlogStore = create<State & Action>(set => ({
  list: [
    {
      id: '1',
      title: 'Ant Design Title 1',
      desc: 'Ant Design Desc 1',
    },
    {
      id: '2',
      title: 'Ant Design Title 2',
      desc: 'Ant Design Desc 2',
    },
    {
      id: '3',
      title: 'Ant Design Title 3',
      desc: 'Ant Design Desc 3',
    },
    {
      id: '4',
      title: 'Ant Design Title 4',
      desc: 'Ant Design Desc 4',
    },
  ]
}))