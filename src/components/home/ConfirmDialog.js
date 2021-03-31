import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ConfirmDialog (props) {
  const { open, amount, handleClose } = props

  const studentCode = useSelector(state => state.student.studentCode)

  return (
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
        <Button onClick={props.onSubmit} color='primary' autoFocus>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  )
}