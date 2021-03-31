import {
  STUDENT_FETCH_ERROR,
  STUDENT_GET_INFO,
  STUDENT_REFRESH_INFO,
} from '../actions/actionTypes'

const initialState = {
  studentCode: null,
  fullName: '',
  cost: '0',
  error: 'Không được để trống',
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_GET_INFO:
      return {
        ...action.payload,
        error: '',
      }

    case STUDENT_FETCH_ERROR:
      return {
        studentCode: null,
        fullName: '',
        cost: '',
        error: 'Mã số sinh viên không đúng',
      }

    case STUDENT_REFRESH_INFO:
      return initialState

    default:
      return state
  }
}

export default studentReducer
