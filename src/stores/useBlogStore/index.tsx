import { create } from 'zustand'


export interface Post {
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
  posts: Post[]
  details: Post | null
  paging: PostPaging
}

export interface Action {
  setPosts: (psots: Post[]) => void
  setDetails: (details: State['details']) => void
  setPaging: (paging: PostPaging) => void
}

export const useBlogStore = create<State & Action>(set => ({
  posts: [],
  details: null,
  paging: {
    page: 1,
    per_page: 10,
    total: 10,
  },
  setPosts: (posts: Post[]) => set({ posts }),
  setDetails: (details) => set({ details }),
  setPaging: (paging: PostPaging) => set({ paging })
}))