import axios from 'axios'
import { handleError } from './errors'

import type { AxiosError } from 'axios'


const server = axios.create({
  baseURL: 'http://localhost:3211',
  timeout: 5000
})

server.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  return config
}, (err: AxiosError) => {
  handleError(err.message)
  return Promise.reject(err)
})

server.interceptors.response.use(response => {
  return response
}, (err: AxiosError) => {
  handleError(err.message)
  return Promise.reject(err)
})

export default server