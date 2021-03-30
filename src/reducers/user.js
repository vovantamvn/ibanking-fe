import { USER_SET_INFO, USER_SET_USERNAME } from '../actions/actionTypes'

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  username: '',
  balance: 0
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_INFO:
      return {
        ...action.payload
      }

    case USER_SET_USERNAME:
      return {
        ...state,
        username: action.payload
      }

    default:
      return state
  }
}

export default userReducer
