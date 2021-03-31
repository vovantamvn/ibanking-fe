import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import VerityOtpPage from './pages/VerifyOtpPage'

export default function App () {
  const [isLogin, setLogin] = useState(false)
  const [isBack, setBack] = useState(false)

  const loginSuccess = () => {
    setLogin(true)
  }

  // const mainElement = (isLogin) ? <HomePage /> : <LoginPage loginSuccess={loginSuccess} />

  const back = () => {
    setBack(true)
  }

  // const mainElement = isBack? <HomePage /> : <VerityOtpPage backToHome={back} billId={1} />
  const mainElement = <HomePage />

  return (
    <>
      <CssBaseline />
      <AppBar position='relative' color='primary'>
        <Toolbar>
          <Typography variant='h6'>IBanking</Typography>
        </Toolbar>
      </AppBar>

      <main>
        {mainElement}
      </main>
    </>
  )
}
