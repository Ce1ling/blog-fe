import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3211',
  timeout: 5000
})


server.defaults.headers.post['Content-Type'] = 'application/json'
server.defaults.headers.put['Content-Type'] = 'application/json'
server.defaults.headers.delete['Content-Type'] = 'application/json'

server.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  return config
})

server.interceptors.response.use(response => {
  return response
})

export default server