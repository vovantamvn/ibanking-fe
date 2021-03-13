import { STUDENT_GET_INFO } from './actionTypes'

export const getStudentInfo = (studentCode) => {
  return {
    type: STUDENT_GET_INFO,
    payload: studentCode
  }
}
