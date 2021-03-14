import axiosClient from './axiosClient'

const studentApi = {
  getStudentByStudentCode: (studentCode) => {
    return axiosClient.get(`/students/${studentCode}`)
  },

  getFeeByStudentCode: studentCode => {
    return axiosClient.get(`/students/${studentCode}/fees`)
  }
}

export default studentApi
