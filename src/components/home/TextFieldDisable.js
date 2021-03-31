import React from 'react'
import { useStyle } from './style'
import { TextField } from '@material-ui/core'

export default function TextFieldDisable (props) {
  const classes = useStyle()
  const { label, value } = props

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