import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentInfo, refreshStudentInfo } from '../../actions/student'
import Button from '@material-ui/core/Button'
import { Container, Grid, TextField, Typography } from '@material-ui/core'
import ConfirmDialog from './ConfirmDialog'
import { useStyle } from './style'

function Filed ({ label, value }) {
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

function MyField ({ label, error, onChange }) {
  const classes = useStyle()
  let hasError = false
  let message = label

  if (typeof error === 'string' && error !== '') {
    hasError = true
    message = error
  }

  return (
    <TextField
      autoFocus
      className={classes.input}
      label={message}
      variant='outlined'
      error={hasError}
      onChange={onChange}
    />
  )
}

const styleMarginTop = {
  marginTop: '10px',
}

export default function Fee () {
  const dispatch = useDispatch()

  const fullName = useSelector(state => state.student.fullName)
  const cost = useSelector(state => state.student.cost)
  const error = useSelector(state => state.student.error)

  const balance = useSelector(state => state.user.balance)

  const [amount, setAmount] = useState(0)

  const onStudentCodeChange = (event) => {
    const studentCode = event.target.value
    const regex = /^[0-9]{9}$/

    if (regex.test(studentCode)) {
      const action = fetchStudentInfo(studentCode)
      dispatch(action)
    } else {
      dispatch(refreshStudentInfo())
    }
  }

  const handleAmount = (event) => {
    const value = event.target.value
    setAmount(value)
  }

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      <Typography variant='h3'>Thông tin học phí</Typography>
      <Grid container direction='column' align='center'>
        <Grid item>
          <MyField
            label='Mã số sinh viên'
            error={error}
            onChange={onStudentCodeChange}/>
        </Grid>
        <Grid item>
          <Filed label='Họ và tên' value={fullName}/>
        </Grid>
        <Grid item>
          <Filed label='Số tiền học phí' value={cost}/>
        </Grid>
      </Grid>

      <Typography variant='h3'>Thông tin thanh toán</Typography>
      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <TextField
            style={styleMarginTop}
            variant={'outlined'}
            label='Số dư khả dụng'
            value={balance}
            disabled
          />
        </Grid>
        <Grid item>
          <TextField
            style={styleMarginTop}
            variant='outlined'
            type='number'
            label='Số tiền nộp'
            value={amount}
            onChange={handleAmount}
          />
        </Grid>
        <Grid item>
          <Button
            color='primary'
            style={styleMarginTop}
            onClick={handleClickOpen}
            variant='outlined'
          >Chuyển tiền
          </Button>
        </Grid>
      </Grid>

      <ConfirmDialog
        amount={amount}
        balance={balance}
        handleClose={handleClose}
        open={open}/>
    </Container>
  )
}
