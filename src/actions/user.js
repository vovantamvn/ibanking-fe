import { USER_GET_INFO } from './actionTypes'

export const getUserInfo = (id) => {
  return {
    type: USER_GET_INFO,
    payload: id
  }
}
