import Payer from '../components/home/Payer'
import Fee from '../components/home/Fee'
import React from 'react'
import studentApi from '../api/studentApi'

function HomePage () {
  studentApi.getStudentInfoById(1)

  return (
    <div>
      <Payer username={'sv011'} phone={'0859292354'} email={'email'}/>
      <Fee/>
    </div>
  )
}

export default HomePage
