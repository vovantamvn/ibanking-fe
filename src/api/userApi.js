import axiosClient from './axiosClient'

const userApi = {
  getToken: (username, password) => {
    const data = {
      username,
      password
    }
    return axiosClient.post('/authenticate', data)
  }
}

export default userApi
