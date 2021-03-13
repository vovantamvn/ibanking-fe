import axiosClient from './axiosClient'

const studentApi = {
  getStudentInfoById: async (id) => {
    return axiosClient.get(`/students/${id}`)
  }
}

export default studentApi
