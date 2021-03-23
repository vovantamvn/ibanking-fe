import { useSelector } from 'react-redux'
import { Container } from '@material-ui/core'
import Payer from '../components/home/Payer'
import Fee from '../components/home/Fee'

export default function HomePage () {
  const { fullName, email, phone } = useSelector(state => state.user)

  return (
    <Container maxWidth='sm'>
      <Payer
        fullName={fullName}
        phone={phone}
        email={email}
      />

      <Fee />

    </Container>
  )
}
