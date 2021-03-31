import {
  STUDENT_FETCH_ERROR,
  STUDENT_GET_INFO,
  STUDENT_REFRESH_INFO,
} from './actionTypes'
import studentApi from '../api/studentApi'

const getStudentInfo = user => {
  return {
    type: STUDENT_GET_INFO,
    payload: user
  }
}

export const refreshStudentInfo = () => {
  return {
    type: STUDENT_REFRESH_INFO
  }
}

export const fetchStudentError = () => {
  return {
    type: STUDENT_FETCH_ERROR
  }
}

export const fetchStudentInfo = (studentCode) => {
  return async (dispatch) => {
    try {
      const studentData = await studentApi.getStudentByStudentCode(studentCode)
      const feeData = await studentApi.getFeeByStudentCode(studentCode)

      dispatch(getStudentInfo({
        fullName: studentData.fullName,
        cost: feeData.cost,
        studentCode: studentCode
      }))
    } catch (error) {
      dispatch(fetchStudentError())
    }
  }
}
