import axios from "../../../axios"

import type { PostResponse } from '../api'

type Id = number | string

export const api = {
  getPostDetails: async (id: Id) => {
    return (await axios.get<PostResponse>(`/api/blog/details?id=${id}`)).data
  },
  deletePost: async (id: Id) => {
    return (await axios.delete<PostResponse>(`/api/blog?id=${id}`)).data
  }
}