import axios from "../../axios"
import qs from 'qs'

import type { Post, PostPaging } from '../../stores/useBlogStore'


export interface PostData {
  paging: PostPaging
  data: Post[]
}

export interface PostResponse {
  code: number
  msg: string
  data: PostData
}

export const api = {
  getBlogs: async (paging?: Omit<PostPaging, 'total'>) => {
    return (await axios.get<PostResponse>(`/api/blog?${qs.stringify(paging)}`)).data
  },
}