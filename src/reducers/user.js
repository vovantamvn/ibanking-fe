import { USER_GET_INFO } from '../actions/actionTypes'

const initialState = {
  user: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_GET_INFO:
      return state

    default:
      return state
  }
}

export default userReducer
