import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { TextField } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import userApi from '../../api/userApi'

ConfirmDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
}

ErrorDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
}

ConfirmBanking.prototype = {
  open: PropTypes.bool.isRequired,
  studentCode: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
}

function ErrorDialog (props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Có lỗi</DialogTitle>

      <DialogContent>
        <DialogContentText color={'error'}>
          {props.error}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={props.handleClose} color='primary'>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>)
}

function ConfirmBanking (props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Xác nhận</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {`Bạn xác nhận chuyển ${props.amout} vào sinh viên có mã số ${props.studentCode}`}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={props.handleClose} color='primary'>
          Đóng
        </Button>
        <Button onClick={props.onSubmit} color='primary' autoFocus>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>)
}

function ConfirmOtp (props) {
  const [otp, setOtp] = useState('')
  const { open, handleClose } = props

  const onSubmit = () => {
    userApi.verifyOtp(props.billId, otp).
      then(res => {handleClose()}).
      catch(error => console.log(error))
  }

  return (
    <Dialog open={open}>
      <DialogTitle id='alert-dialog-title'>Nhập mã OTP</DialogTitle>

      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Hãy nhập mã OTP đã được gửi về địa chỉ email của bạn!
        </DialogContentText>

        <TextField value={otp} onChange={(event) => {
          setOtp(event.target.value)
        }}/>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Đóng
        </Button>
        <Button onClick={onSubmit} color='primary' autoFocus>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  )
}

/**
 * Return error if has else return null
 * @param amount
 * @param balance
 */
function checkIfHasError (amount, balance, cost, studentCode) {
  if (studentCode == null) {
    return 'Mã số sinh viên không hợp lệ!'
  }

  const regex = /^[1-9][0-9]+$/
  if (!regex.test(amount)) {
    return 'Số tiền không đúng định dạng!'
  }

  if (amount > balance) {
    return 'Số tiền không được lớn hơn số dư khả dụng!'
  }

  if (amount > cost) {
    return 'Số tiền không được lớn hơn số học phí!'
  }

  if (amount % 1000 !== 0) {
    return 'Số tiền không phải là bội số của 1000 đồng!'
  }

  return null
}

function callApiBanking (studentCode, amount, setBillId) {

  userApi.submitBanking(studentCode, amount).
    then(res => setBillId(res)).
    catch(error => console.log(error))
}

export default function ConfirmDialog (props) {
  const [billId, setBillId] = useState(0)

  const studentCode = useSelector(state => state.student.studentCode)
  const cost = useSelector(state => state.student.cost)

  const { amount, balance, open, handleClose } = props

  const error = checkIfHasError(amount, balance, cost, studentCode)

  if (error != null) {
    return <ErrorDialog open={open} error={error} handleClose={handleClose}/>
  }

  if (billId == 0) {
    return <ConfirmBanking
      open={open}
      studentCode={studentCode}
      amout={amount}
      handleClose={handleClose}
      onSubmit={() => {
        callApiBanking(studentCode, amount, setBillId)
      }}
    />

  } else {
    return <ConfirmOtp
      open={open}
      billId={billId}
      handleClose={handleClose}/>
  }
}