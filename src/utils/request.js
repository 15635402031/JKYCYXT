/**
 * 基于axios的请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://192.168.4.226:8080'
})

// 请求拦截器

// 响应拦截器
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default request
