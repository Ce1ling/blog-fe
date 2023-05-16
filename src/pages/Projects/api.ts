import axios from '../../axios'
import qs from 'qs'


/** Github repos api 接口的数据结构, 仅列出了可能会用到的 */
export interface ReposResponse {
  /** 唯一 ID */
  id: number,
  /** 名称 */
  name: string
  /** 全称 */
  full_name: string
  /** 描述 */
  description: string | null
  /** 地址 */
  html_url: string
  /** Github API 地址 */
  url: string
  /** 可见性 */
  visibility: string
  /** 默认分支 */
  default_branch: string
  /** 创建时间 */
  created_at: string
  /** 更新时间 */
  updated_at: string
  /** 主页 */
  homepage: string | null
}

/** Github repos api 可接受的参数 */
export interface ReposParams {
  /** 仓库类型. 默认: "owner" */
  type?: 'all' | 'owner' | 'member'
  /** 排序方式. 默认: "full_name" */
  sort?: 'created' | 'updated' | 'pushed' | 'full_name'
  /** 排序顺序. 默认: "full_name" 时为 "asc", 反之为 "desc" */
  direction?: 'asc' | 'desc'
  /** 请求页码. 默认: 1 */
  page?: number
  /** 每页数量. 默认: 30, 最大 100 */
  per_page?: number
}

export const api = {
  getRepos: async (params?: ReposParams) => {
    const res = await axios.get<ReposResponse[]>(`https://api.github.com/users/Ce1ling/repos?${qs.stringify(params)}`)
    return res.data
  }
}