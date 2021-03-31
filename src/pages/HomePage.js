import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core'
import Payer from '../components/home/Payer'
import Fee from '../components/home/Fee'
import { useEffect, useState } from 'react'
import { fetchUserInfo } from '../actions/user'
import VerityOtpPage from './VerifyOtpPage'
import userApi from '../api/userApi'
import { refreshStudentInfo } from '../actions/student'

export default function HomePage () {
  useEffect(() => {
    dispatch(fetchUserInfo(username))
    dispatch(refreshStudentInfo())
  })

  const dispatch = useDispatch()
  const username = useSelector(state => state.user.username)

  const [isRedirect, setRedirect] = useState(false)
  const [billId, setBillId] = useState(0)

  const onSubmit = (studentCode, amount) => {
    userApi.submitBanking(studentCode, amount).then(id => {
      setBillId(id)
      setRedirect(true)
    }).catch(error => {
      console.log(error.response)
    })
  }

  const backToHome = () => {
    setRedirect(false)
  }

  if (isRedirect) {
    return <VerityOtpPage
      billId={billId}
      backToHome={backToHome}/>
  }

  return (
    <Container maxWidth='sm'>
      <Payer/>
      <Fee onSubmit={onSubmit}/>
    </Container>
  )
}
