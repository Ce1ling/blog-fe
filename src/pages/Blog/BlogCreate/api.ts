import axios from "../../../axios"

import type { BlogResponse } from '../api'


export interface CreateBlog {
  title: string
  content: string
}

export const api = {
  createBlog: async (blog: CreateBlog) => {
    return (await axios.post<BlogResponse>(`/api/blog`, blog)).data
  },
  editBlog: async (id: string, blog: CreateBlog) => {
    return (await axios.put<BlogResponse>(`/api/blog?id=${id}`, blog)).data
  }
}