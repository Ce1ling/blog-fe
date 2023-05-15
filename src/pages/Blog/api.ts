import axios from "../../axios"

import type { BlogItem } from '../../stores/useBlogStore'


export interface BlogResponse {
  code: number
  msg: string
  data: BlogItem[]
}

export const api = {
  getBlogs: async () => {
    return (await axios.get<BlogResponse>(`/api/blog`)).data
  },
}