import { STUDENT_GET_INFO, STUDENT_REFRESH_INFO } from './actionTypes'
import studentApi from '../api/studentApi'

const getStudentInfo = user => {
  return {
    type: STUDENT_GET_INFO,
    payload: user
  }
}

const refreshStudentInfo = () => {
  return {
    type: STUDENT_REFRESH_INFO
  }
}

export const fetchStudentInfo = (studentCode) => {
  return async (dispatch) => {
    try {
      const studentData = await studentApi.getStudentByStudentCode(studentCode)
      const feeData = await studentApi.getFeeByStudentCode(studentCode)

      dispatch(getStudentInfo({
        fullName: studentData.fullName,
        cost: feeData.cost
      }))
    } catch (error) {
      dispatch(refreshStudentInfo())
    }
  }
}
