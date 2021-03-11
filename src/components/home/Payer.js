import React from 'react'
import { Col, Input, Row } from 'antd'
import PropTypes from 'prop-types'

Payer.propTypes = {
  username: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

function Payer (props) {

  return (
    <Row>
      <Col span={8} push={8}>
        <h2>Thông tin người gửi:</h2>
        <Input disabled={true} value={props.username}/>
        <Input disabled={true} value={props.phone}/>
        <Input disabled={true} value={props.email}/>
      </Col>
    </Row>
  )
}

export default Payer
