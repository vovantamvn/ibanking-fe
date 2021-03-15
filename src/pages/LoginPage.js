import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

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

export default function LoginPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = (event) => {
    console.log(email)
    console.log(password)
  }

  return (
    <Container align='center'>
      <Typography variant='h3'>Đăng nhập</Typography>
      <Grid container direction='column'>
        <Grid item>
          <Field
            label='Email *'
            name='email'
            value={email}
            type='text'
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <Field
            label='Mật khẩu *'
            name='password'
            value={password}
            type='password'
            onChange={handleChange}
          />
        </Grid>

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
