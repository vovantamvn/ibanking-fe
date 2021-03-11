import { STUDENT_GET_INFO } from '../actions/actionTypes'

const initialState = {
  studentCode: '',
  fullName: '',
  cost: 0
}

const studentReducer = (state = initialState, action) => {

  switch (action.type) {
    case STUDENT_GET_INFO:
      return {
        ...state,
        fullName: 'MSSV Ran'
      }

    default:
      return state
  }
}

export default studentReducer
