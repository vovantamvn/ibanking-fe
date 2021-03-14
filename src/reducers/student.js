import { STUDENT_GET_INFO, STUDENT_REFRESH_INFO } from '../actions/actionTypes'

const initialState = {
  fullName: '',
  cost: '',
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
        fullName: '',
        cost: '',
        error: 'there is a error'
      }

    default:
      return state
  }
}

export default studentReducer
