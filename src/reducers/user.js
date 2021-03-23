import { USER_GET_INFO } from '../actions/actionTypes'

const initialState = {
  fullName: 'VO VAN TAM',
  email: 'vovantam.dev@gmmail.com',
  phone: '0859292354'
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
