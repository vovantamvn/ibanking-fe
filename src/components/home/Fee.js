import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Grid,
  Typography,
  Button,
} from '@material-ui/core'

import TextFieldValidation from './TextFieldValidation'
import TextFieldDisable from './TextFieldDisable'

import { fetchStudentInfo, refreshStudentInfo } from '../../actions/student'
import Errors from '../../utils/Errors'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'

const styleMarginTop = {
  marginTop: '10px',
}

const validateAmount = (amount, balance, cost) => {
  const regex = /^[1-9][0-9]+$/
  if (!regex.test(amount)) {
    return Errors.cash.invalidFormat
  }
  if (amount > balance) {
    return Errors.cash.mustBeLessThanBalance
  }
  if (amount > cost) {
    return Errors.cash.mustBeLessThanCost
  }
  if (amount % 1000 !== 0) {
    return Errors.cash.mustBeDivisibleBy1000
  }
  return Errors.emptyError
}

const initialAmount = '0'

export default function Fee (props) {
  const dispatch = useDispatch()

  const studentCode = useSelector(state => state.student.studentCode)
  const fullName = useSelector(state => state.student.fullName)
  const cost = useSelector(state => state.student.cost)
  const balance = useSelector(state => state.user.balance)
  const error = useSelector(state => state.student.error)

  const [amount, setAmount] = useState(initialAmount)
  const [open, setOpen] = useState(false)

  const [isLockCode, setLockCode] = useState(false)
  const [isError, setError] = useState(true)

  const onChangeStudentCode = (result) => {
    if (result.data) {
      dispatch(fetchStudentInfo(result.data))
    } else {
      dispatch(refreshStudentInfo())
    }
  }

  const onChangeAmount = (result) => {
    if (result.data) {
      setAmount(result.data)
      setError(false)
    } else {
      setAmount(initialAmount)
      setError(true)
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

      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <TextFieldValidation
            disabled={isLockCode}
            label={'Mã số sinh viên'}
            externalError={error}
            onChange={onChangeStudentCode}
          />
        </Grid>
        <Grid item>
          <TextFieldDisable label='Họ và tên' value={fullName}/>
        </Grid>
        <Grid item>
          <TextFieldDisable label='Số tiền học phí' value={cost}/>
        </Grid>
        <Grid item>
          <Button
            style={styleMarginTop}
            variant={'outlined'}
            onClick={() => setLockCode(true)}
            disabled={error !== Errors.emptyError}>
            Xác nhận
          </Button>
        </Grid>
      </Grid>

      <Typography variant='h3'>Thông tin thanh toán</Typography>

      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <TextFieldDisable label={'Số dư khả dụng'} value={balance}/>
        </Grid>

        <Grid item>
          <TextFieldValidation
            label={'Số tiền nộp'}
            onChange={onChangeAmount}
            disabled={!isLockCode}
            validation={(amount) => validateAmount(amount, balance, cost)}/>
        </Grid>

        <Grid item>
          <Button
            color='primary'
            style={styleMarginTop}
            onClick={handleClickOpen}
            disabled={isError}
            variant='outlined'>
            Chuyển tiền
          </Button>
        </Grid>
      </Grid>

      <Dialog open={open}>
        <DialogTitle>Xác nhận</DialogTitle>

        <DialogContent>
          <DialogContentText>
            {`Bạn xác nhận chuyển ${amount} vào sinh viên có mã số ${studentCode}`}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Đóng
          </Button>
          <Button onClick={() => props.onSubmit(studentCode, amount)}
                  color='primary' autoFocus>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
