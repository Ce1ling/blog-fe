import axios from "../../../axios"
import { Post } from "../../../stores"

import type { PostResponse } from '../api'

type Id = number | string

export const api = {
  getPostDetails: async (id: Id) => {
    return (await axios.get<PostResponse<Post[]>>(`/api/blog/details?id=${id}`)).data
  },
  deletePost: async (id: Id) => {
    return (await axios.delete<PostResponse<null>>(`/api/blog?id=${id}`)).data
  }
}