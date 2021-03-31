import { STUDENT_GET_INFO, STUDENT_REFRESH_INFO } from '../actions/actionTypes'

const initialState = {
  studentCode: null,
  fullName: '',
  cost: '0',
  error: ''
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_GET_INFO:
      return {
        ...action.payload,
        error: ''
      }

    case STUDENT_REFRESH_INFO:
      return {
        studentCode: null,
        fullName: '',
        cost: '',
        error: 'Mã số sinh viên không đúng'
      }

    default:
      return state
  }
}

export default studentReducer
