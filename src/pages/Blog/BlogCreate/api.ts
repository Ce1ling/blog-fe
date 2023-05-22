import axios from "../../../axios"

import type { PostResponse } from '../api'


export interface CreatePost {
  title: string
  content: string
}

export const api = {
  createPost: async (blog: CreatePost) => {
    return (await axios.post<PostResponse>(`/api/blog`, blog)).data
  },
  editPost: async (id: string, blog: CreatePost) => {
    return (await axios.put<PostResponse>(`/api/blog?id=${id}`, blog)).data
  }
}