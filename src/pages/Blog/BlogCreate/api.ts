import axios from "../../../axios"
import { Post } from "../../../stores/useBlogStore"

import type { PostResponse } from '../api'


export interface CreatePost {
  title: string
  content: string
}

export const api = {
  createPost: async (blog: CreatePost) => {
    return (await axios.post<PostResponse<number>>(`/api/blog`, blog)).data
  },
  editPost: async (id: string, blog: CreatePost) => {
    return (await axios.put<PostResponse<Post[]>>(`/api/blog?id=${id}`, blog)).data
  }
}