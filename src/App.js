import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

export default function App () {
  const [isLogin, setLogin] = useState(false)

  const loginSuccess = () => {
    setLogin(true)
  }

  const mainElement = (isLogin) ? <HomePage/> : <LoginPage
    loginSuccess={loginSuccess}/>

  return (
    <>
      <CssBaseline/>
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
