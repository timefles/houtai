import axios from 'axios'
import store from '@/store'
// import { getStamp, clearToken, clearStamp } from './auth'
// import router from '@/router'
// import { Message } from 'element-ui'
const request = axios.create({
  baseURL: 'http://liufusong.top:8899/api/private/v1/',
  timeout: 8000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (store.state.user && store.state.user.token) {
    console.log(223)
    config.headers.Authorization = store.state.user.token
  }
  return config
}, function (error) {
  console.log(244)
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
