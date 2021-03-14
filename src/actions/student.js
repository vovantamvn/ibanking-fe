import { STUDENT_GET_FEE, STUDENT_GET_INFO, STUDENT_REFRESH_INFO } from './actionTypes'
import studentApi from '../api/studentApi'

const getStudentInfo = user => {
  return {
    type: STUDENT_GET_INFO,
    payload: user
  }
}

const getFeeOfStudent = fee => {
  return {
    type: STUDENT_GET_FEE,
    payload: fee
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

      dispatch(getStudentInfo(studentData))
      dispatch(getFeeOfStudent(feeData))
    } catch (error) {
      dispatch(refreshStudentInfo())
    }
  }
}
