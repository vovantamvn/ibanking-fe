import React from 'react'
import PropTypes from 'prop-types'
import { Container, TextField, Typography, Grid } from '@material-ui/core'
import { useStyle } from './style'

Payer.propTypes = {
  fullName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

function Field ({ label, value }) {
  const classes = useStyle()

  return (
    <TextField
      className={classes.input}
      label={label}
      variant='outlined'
      defaultValue={value}
      disabled
    />
  )
}

export default function Payer (props) {
  return (
    <Container>
      <Typography variant='h3'>Thông tin người gửi</Typography>

      <Grid container alignContent='center' direction='column'>
        <Grid item>
          <Field label='Họ và tên' value={props.fullName} />
        </Grid>

        <Grid item>
          <Field label='Số điện thoại' value={props.phone} />
        </Grid>

        <Grid item>
          <Field label='Email' value={props.email} />
        </Grid>
      </Grid>
    </Container>
  )
}
