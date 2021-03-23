import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json'
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
