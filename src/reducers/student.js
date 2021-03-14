import { STUDENT_GET_FEE, STUDENT_GET_INFO, STUDENT_REFRESH_INFO } from '../actions/actionTypes'

const initialState = {
  fullName: '',
  cost: ''
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_GET_INFO:
      return {
        ...state,
        fullName: action.payload.fullName
      }

    case STUDENT_GET_FEE:
      return {
        ...state,
        cost: action.payload.cost
      }

    case STUDENT_REFRESH_INFO:
      return {
        fullName: '',
        cost: ''
      }

    default:
      return state
  }
}

export default studentReducer
