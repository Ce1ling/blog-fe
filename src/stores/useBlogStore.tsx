import { create } from 'zustand'


export interface BlogItem {
  id: number
  title: string
  content: string
  author: string
  create_at: number
  update_at: number
  avatar?: string
}

export interface State {
  blogs: BlogItem[]
  details: BlogItem | null
}

export interface Action {
  setBlogs: (list: BlogItem[]) => void
  setBlogDetails: (details: State['details']) => void
}

export const useBlogStore = create<State & Action>(set => ({
  blogs: [],
  details: null,
  setBlogs: (blogs) => set({ blogs }),
  setBlogDetails: (details) => set({ details }),
}))