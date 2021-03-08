import React from 'react'
import { Input, Space } from 'antd'

class Payer extends React.PureComponent {

  render () {
    return (
      <div>
        <h2>Thông tin người gửi:</h2>
        <Space direction={'vertical'}>
          <Input disabled={true} value={this.props.username}/>
          <Input disabled={true} value={this.props.phone}/>
          <Input disabled={true} value={this.props.email}/>
        </Space>
      </div>
    )
  }
}

export default Payer
