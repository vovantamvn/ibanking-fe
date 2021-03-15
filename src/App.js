import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

export default function App () {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative' color='primary'>
        <Toolbar>
          <Typography variant='h6'>IBanking</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <LoginPage />
      </main>
    </>
  )
}
