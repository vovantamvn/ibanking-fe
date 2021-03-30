import axiosClient from './axiosClient'

const userApi = {
  getToken: (username, password) => {
    const data = {
      username,
      password,
    }
    return axiosClient.post('/authenticate', data)
  },

  getUserInfo: (username) => {
    return axiosClient.get(`/accounts/${username}`)
  },

  submitBanking: (studentCode, amount) => {
    const data = {
      studentCode,
      amount,
    }
    return axiosClient.post('/banking', data)
  },

  verifyOtp: (billId, code) => {
    const  data = {
      billId,
      code
    }
    return axiosClient.post('/banking/verify', data)
  }
}

export default userApi
