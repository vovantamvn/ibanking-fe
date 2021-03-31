import { useSelector } from 'react-redux'
import { Container, TextField, Typography, Grid } from '@material-ui/core'
import { useStyle } from './style'

function Field ({ label, value }) {
  const classes = useStyle()

  return (
    <TextField
      className={classes.input}
      label={label}
      variant='outlined'
      value={value}
      disabled
    />
  )
}

export default function Payer () {
  const { fullName, email, phone } = useSelector(state => state.user)

  return (
    <Container>
      <Typography variant='h3'>Thông tin người gửi</Typography>

      <Grid container alignContent='center' direction='column'>
        <Grid item>
          <Field label='Họ và tên' value={fullName}/>
        </Grid>

        <Grid item>
          <Field label='Số điện thoại' value={phone}/>
        </Grid>

        <Grid item>
          <Field label='Email' value={email}/>
        </Grid>
      </Grid>
    </Container>
  )
}
