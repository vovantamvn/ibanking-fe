import Payer from '../components/home/Payer'
import Fee from '../components/home/Fee'

function HomePage () {
  return (
    <div>
      <Payer username='sv011' phone='0859292354' email='email' />
      <Fee />
    </div>
  )
}

export default HomePage
