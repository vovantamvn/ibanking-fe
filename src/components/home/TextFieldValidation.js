import React, { useState } from 'react'
import { Container, TextField, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import Errors from '../../utils/Errors'

const initialValue = ''
const initialError = Errors.emptyError

TextFieldValidation.propTypes = {
  label: PropTypes.string,
  validation: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  externalError: PropTypes.string,
}

TextFieldValidation.defaultProps = {
  label: '',
  externalError: initialError,
}

export default function TextFieldValidation (props) {
  const { label, externalError, validation, onChange } = props

  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(initialError)

  const handleDataChange = (event) => {
    const value = event.target.value
    setValue(value)

    if (validation) {
      const error = validation(value)

      if (error !== initialError) {
        setError(error)
        onChange({
          data: null,
          error: error,
        })

        return
      }
    }

    setError(initialError)
    onChange({
      data: value,
      error: null,
    })
  }

  const message = (externalError !== initialError)
    ? externalError
    : error

  const errorElement = (error !== initialError || externalError !==
    initialError)
    ? <Typography variant={'subtitle1'} color={'error'}>{message}</Typography>
    : null

  return (
    <Container>
      <TextField
        label={label}
        value={value}
        variant='outlined'
        onChange={handleDataChange}
      />

      {errorElement}
    </Container>
  )
}