import { create } from 'zustand'
import axios from '../axios'

import type { AxiosResponse } from 'axios'


export type AxiosItem = {
  id: number
  title: string
  content: string
  author: string
  create_at: number
  update_at: number
  avatar?: string
}

export interface State {
  list: AxiosItem[]
}

export interface Action {
  getBlog: () => void
  getBlogDetails: (id: number) => Promise<AxiosItem[]>
}

export const useBlogStore = create<State & Action>(set => ({
  list: [],
  getBlog: async () => {
    const res = await axios.get<AxiosResponse>('/api/blog')
    set({ list: res.data.data })
  },
  getBlogDetails: async (id) => {
    const res = await axios.get<AxiosResponse>(`/api/blog/details?id=${id}`)
    return res.data.data
  }
}))