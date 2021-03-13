import { STUDENT_GET_INFO } from '../actions/actionTypes'
// import studentApi from '../api/studentApi'

const initialState = {
  studentCode: '',
  fullName: '',
  cost: ''
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_GET_INFO:
      // const data = await studentApi.getStudentInfoById(action.payload)

      // console.log(data)
      console.log('LOL')

      return {
        ...state,
        fullName: 'LOL',
        cost: '1.000.000'
      }

    default:
      return state
  }
}

export default studentReducer
