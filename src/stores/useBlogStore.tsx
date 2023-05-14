import { create } from 'zustand'
import axios from '../axios'


export interface BlogItem {
  id: number
  title: string
  content: string
  author: string
  create_at: number
  update_at: number
  avatar?: string
}

export interface BlogResponse {
  code: number
  msg: string
  data: BlogItem[]
}

export interface State {
  list: BlogItem[]
  details: BlogItem | null
}

export interface Action {
  getBlog: () => Promise<BlogResponse>
  setBlog: (list: BlogItem[]) => void
  getBlogDetails: (id: number) => Promise<BlogResponse>
  setBlogDetails: (details: State['details']) => void
  delBlog: (id: number) => Promise<BlogResponse>
}

export const useBlogStore = create<State & Action>(set => ({
  list: [],
  details: null,
  getBlog: async () => {
    const res = await axios.get<BlogResponse>('/api/blog')
    return res.data
  },
  setBlog: (list) => set({ list }),
  getBlogDetails: async (id) => {
    const res = await axios.get<BlogResponse>(`/api/blog/details?id=${id}`)
    return res.data
  },
  setBlogDetails: (details) => set({ details }),
  delBlog: async (id: number) => {
    const res = await axios.delete(`/api/blog?id=${id}`)
    return res.data
  }
}))