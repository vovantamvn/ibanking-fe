import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxNzMzMTY3OSwiaWF0IjoxNjE2ODk5Njc5fQ._F40v6BlJShLlA-PzGjN5TSvQ5WwaOgxOVPIrVo3AX5g54MjnvTLexpOA7oiYFp7UOg5TZRcdgskAx9L5odBhw'
  },
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async (config) => {
  return config
})

axiosClient.interceptors.response.use(async (response) => {
  if (response && response.data) {
    return response.data
  }

  return response
}, async (error) => {
  throw error
})

export const setAuthHeader = (token) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default axiosClient
