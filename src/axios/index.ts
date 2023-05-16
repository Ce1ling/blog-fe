import axios from 'axios'
import { message } from 'antd'

import type { AxiosError } from 'axios'


const server = axios.create({
  baseURL: 'http://localhost:3211',
  timeout: 5000
})

server.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  return config
}, (err: AxiosError) => {
  return Promise.reject(err)
})

server.interceptors.response.use(response => {
  return response
}, (err: AxiosError) => {
  if (err.code === 'ERR_NETWORK') {
    message.error('网络错误, 获取数据失败')
  }
  return Promise.reject(err)
})

export default server