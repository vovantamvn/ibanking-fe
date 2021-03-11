import { combineReducers } from 'redux'
import userReducer from './user'
import studentReducer from './student'

const rootReducer = combineReducers({
  user: userReducer,
  student: studentReducer
})

export default rootReducer
