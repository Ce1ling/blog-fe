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

export interface PostPaging {
  page: number
  per_page: number
  total: number
}

export interface State {
  blogs: BlogItem[]
  details: BlogItem | null
  paging: PostPaging
}

export interface Action {
  setBlogs: (psots: BlogItem[]) => void
  setBlogDetails: (details: State['details']) => void
  setPaging: (paging: PostPaging) => void
}

export const useBlogStore = create<State & Action>(set => ({
  blogs: [],
  details: null,
  paging: {
    page: 1,
    per_page: 10,
    total: 10,
  },
  setBlogs: (blogs: BlogItem[]) => set({ blogs }),
  setBlogDetails: (details) => set({ details }),
  setPaging: (paging: PostPaging) => set({ paging })
}))