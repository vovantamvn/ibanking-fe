import userApi from '../api/userApi'
import { USER_SET_INFO, USER_SET_USERNAME } from './actionTypes'

const getUserInfo = (user) => {
  return {
    type: USER_SET_INFO,
    payload: user
  }
}

export const setUsername = (username) => {
  return {
    type: USER_SET_USERNAME,
    payload: username
  }
}

export const fetchUserInfo = (username) => {
  return async (dispatch) => {
    try {
      const user = await userApi.getUserInfo(username)
      dispatch(getUserInfo(user))
    } catch (e) {
      console.log(e)
    }
  }
}
