import axios from 'axios'


const server = axios.create({
  baseURL: 'http://localhost:3211',
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
})

server.interceptors.request.use(config => {
  // TODO: might do something...
  return config
})

server.interceptors.response.use(response => {
  // TODO: might do something...
  return response
})

export default server