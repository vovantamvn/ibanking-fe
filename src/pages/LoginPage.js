import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import userApi from '../api/userApi'
import { setAuthHeader } from '../api/axiosClient'
import PropTypes from 'prop-types'

const useStyle = makeStyles({
  input: {
    marginBottom: '10px'
  }
})

function Field ({ label, value, name, type, onChange }) {
  const classes = useStyle()

  return (
    <TextField
      className={classes.input}
      variant='outlined'
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  )
}

function ErrorField ({ error }) {
  if (typeof error === 'string' && error !== '') {
    return <Typography variant='subtitle1' color='error'>{error}</Typography>
  }
  return null
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
}

export default function LoginPage (props) {
  const initialData = {
    username: '',
    password: ''
  }
  const [data, setData] = useState(initialData)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    const { username, password } = data

    try {
      const token = await userApi.getToken(username, password)

      setAuthHeader(token)
      localStorage.setItem('token', token)

      props.loginSuccess()
    } catch (e) {
      setError('Username hoặc mật khâủ sai!')
    }
  }

  return (
    <Container align='center'>
      <Typography variant='h3'>Đăng nhập</Typography>
      <Grid container direction='column'>
        <Grid item>
          <Field
            label='Username *'
            name='username'
            value={data.username}
            type='text'
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <Field
            label='Mật khẩu *'
            name='password'
            value={data.password}
            type='password'
            onChange={handleChange}
          />
        </Grid>

        <ErrorField error={error} />

        <Grid item>
          <Button
            variant='outlined'
            color='primary'
            size='large'
            onClick={handleSubmit}
          >Log in
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
