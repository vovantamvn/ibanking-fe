import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Grid,
  Typography,
  Button,
} from '@material-ui/core'

import ConfirmDialog from './ConfirmDialog'
import TextFieldValidation from './TextFieldValidation'
import TextFieldDisable from './TextFieldDisable'

import { fetchStudentInfo, refreshStudentInfo } from '../../actions/student'
import Errors from '../../utils/Errors'

const styleMarginTop = {
  marginTop: '10px',
}

const validateStudentCode = (value) => {
  const regex = /^[0-9]{9}$/

  if (!regex.test(value)) {
    return Errors.student.studentCodeMustHave9Numbers
  }
  return Errors.emptyError
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

const setStateError = (setError, key, value) => {
  setError(prev => {
    prev[key] = value
    return prev
  })
}

const initialAmount = '0'
const initialError = {
  studentCode: true,
  amount: true,
}

export default function Fee () {
  const dispatch = useDispatch()

  const fullName = useSelector(state => state.student.fullName)
  const cost = useSelector(state => state.student.cost)
  const balance = useSelector(state => state.user.balance)
  const error = useSelector(state => state.student.error)

  const [amount, setAmount] = useState(initialAmount)
  const [isError, setError] = useState(initialError)
  const [open, setOpen] = useState(false)

  const onChangeStudentCode = (result) => {
    if (result.data) {
      dispatch(fetchStudentInfo(result.data))
      setStateError(setError, 'studentCode', false)
    } else {
      dispatch(refreshStudentInfo())
      setStateError(setError, 'studentCode', true)
    }
  }

  const onChangeAmount = (result) => {
    if (result.data) {
      setAmount(result.data)
      setStateError(setError, 'amount', false)
    } else {
      setAmount(initialAmount)
      setStateError(setError, 'amount', true)
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const isDisable = isError.amount || isError.studentCode

  return (
    <Container>
      <Typography variant='h3'>Thông tin học phí</Typography>

      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <TextFieldValidation
            label={'Mã số sinh viên'}
            externalError={error}
            validation={validateStudentCode}
            onChange={onChangeStudentCode}
          />
        </Grid>

        <Grid item>
          <TextFieldDisable label='Họ và tên' value={fullName}/>
        </Grid>
        <Grid item>
          <TextFieldDisable label='Số tiền học phí' value={cost}/>
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
            validation={(amount) => validateAmount(amount, balance, cost)}/>
        </Grid>

        <Grid item>
          <Button
            color='primary'
            style={styleMarginTop}
            onClick={handleClickOpen}
            disabled={isDisable}
            variant='outlined'>
            Chuyển tiền
          </Button>
        </Grid>
      </Grid>

      <ConfirmDialog
        open={open}
        amount={amount}
        handleClose={handleClose}
        />
    </Container>
  )
}
