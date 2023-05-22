import axios from "../../axios"
import qs from 'qs'

import type { Post, PostPaging } from '../../stores/useBlogStore'


export interface PostData {
  paging: PostPaging
  data: Post[]
}

export interface PostResponse<T> {
  code: number
  msg: string
  data: T
}

export const api = {
  getPosts: async (paging?: Omit<PostPaging, 'total'>) => {
    return (await axios.get<PostResponse<PostData>>(`/api/blog?${qs.stringify(paging)}`)).data
  },
}