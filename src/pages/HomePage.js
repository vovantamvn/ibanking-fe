import Payer from '../components/home/Payer'
import Fee from '../components/home/Fee'
import { Container } from '@material-ui/core'

export default function HomePage () {
  return (
    <Container maxWidth='sm'>
      <Payer username='sv011' phone='0859292354' email='email' />
      <Fee />
    </Container>
  )
}
