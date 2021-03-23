import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentInfo } from '../../actions/student'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Container, Grid, TextField, Typography } from '@material-ui/core'
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

export default function Fee () {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const fullName = useSelector(state => state.student.fullName)
  const cost = useSelector(state => state.student.cost)
  const error = useSelector(state => state.student.error)

  const onStudentCodeChange = (event) => {
    const studentCode = event.target.value
    const regex = /^[0-9]{9}$/

    if (regex.test(studentCode)) {
      const action = fetchStudentInfo(studentCode)
      dispatch(action)
    }
  }

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
          <MyField label='Mã số sinh viên' error={error} onChange={onStudentCodeChange} />
        </Grid>

        <Grid item>
          <Filed label='Họ và tên' value={fullName} />
        </Grid>

        <Grid item>
          <Filed label='Số tiền học phí' value={cost} />
        </Grid>

        <Grid item>
          <Button
            color='primary'
            style={{ marginTop: '10px' }}
            onClick={handleClickOpen}
            variant='outlined'
          >Chuyển tiền
          </Button>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id='alert-dialog-title'>Nhập mã OTP</DialogTitle>

        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Hãy nhập mã OTP đã được gửi về địa chỉ email của bạn!
          </DialogContentText>

          <TextField />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Đóng
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
