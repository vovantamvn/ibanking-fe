import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentInfo } from '../../actions/student'
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

  return (
    <Container>
      <Typography variant='h3'>Thông tin sinh viên:</Typography>

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
      </Grid>
    </Container>
  )
}
