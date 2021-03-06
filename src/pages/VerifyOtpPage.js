import React, { useState } from 'react'
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import userApi from '../api/userApi'

const useStyle = makeStyles({
  input: {
    marginTop: '10px',
  },
})

const rootStatus = {
  NO_THING: 'NO_THING',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

export default function VerityOtpPage (props) {
  const classes = useStyle()
  const { billId, backToHome } = props

  const [isDisable, setDisable] = useState(true)
  const [otp, setOtp] = useState('')
  const [status, setStatus] = useState(rootStatus.NO_THING)
  const [text, setText] = useState('')

  const onChange = (event) => {
    const value = event.target.value
    setOtp(value)

    if (value !== '') {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onClick = () => {
    setStatus(rootStatus.PENDING)

    userApi.verifyOtp(billId, otp).then(() => {
      setText('Giao dịch thành công!')
      setStatus(rootStatus.SUCCESS)
    }).catch((error) => {
      const message = error.response.data
      setText(message)
      setStatus(rootStatus.ERROR)
    })
  }

  if (status === rootStatus.PENDING) {
    return <Typography variant={'h4'} align={'center'}>Pending...</Typography>
  }

  if (status === rootStatus.ERROR) {
    return (
      <Grid container direction={'column'} alignItems={'center'}>
        <Grid item>
          <Typography variant={'h4'}
                      align={'center'}
                      color={'error'}>
            {text}
          </Typography>
        </Grid>

        <Grid>
          <Button
            variant={'outlined'}
            onClick={() => setStatus(rootStatus.NO_THING)}>
            Trở lại
          </Button>
          <Button
            color={'primary'}
            variant={'outlined'}
            onClick={backToHome}>
            Home
          </Button>
        </Grid>
      </Grid>
    )
  }

  if (status === rootStatus.SUCCESS) {
    return (
      <Grid container direction={'column'} alignItems={'center'}>
        <Grid item>
          <Typography variant={'h4'}
                      align={'center'}>
            {text}
          </Typography>
        </Grid>

        <Grid>
          <Button
            variant={'outlined'}
            onClick={backToHome}>
            Home
          </Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Container>
      <Typography align={'center'} variant={'h4'}>
        Nhập mã xác thực OTP:
      </Typography>
      <Grid container direction={'column'} alignItems={'center'}>
        <Grid item>
          <TextField
            className={classes.input}
            label={'OTP'}
            type={'text'}
            value={otp}
            onChange={onChange}
            variant={'outlined'}
          />
        </Grid>
        <Grid item>
          <Button
            className={classes.input}
            onClick={onClick}
            disabled={isDisable}
            variant={'outlined'}>Submit</Button>
        </Grid>
      </Grid>
    </Container>
  )
}