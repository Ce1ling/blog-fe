import axios from "../../../axios"

import type { BlogResponse } from '../api'

type Id = number | string

export const api = {
  getBlogDetails: async (id: Id) => {
    return (await axios.get<BlogResponse>(`/api/blog/details?id=${id}`)).data
  },
  deleteBlog: async (id: Id) => {
    return (await axios.delete<BlogResponse>(`/api/blog?id=${id}`)).data
  }
}