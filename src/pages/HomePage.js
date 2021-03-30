import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core'
import Payer from '../components/home/Payer'
import Fee from '../components/home/Fee'
import { useEffect } from 'react'
import { fetchUserInfo } from '../actions/user'

export default function HomePage () {
  const dispatch = useDispatch()
  const username = useSelector(state => state.user.username)

  useEffect(() => {
    dispatch(fetchUserInfo(username))
  }, [])

  return (
    <Container maxWidth='sm'>
      <Payer />
      <Fee />
    </Container>
  )
}
