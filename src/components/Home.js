import React from 'react'
import Payer from './Payer'
import Fee from './Fee'
import { Space } from 'antd'

class Home extends React.Component {

  render () {
    return (
      <div>
        <Space direction={'vertical'} align={'center'}>
          <Payer username={'sv011'} phone={'0859292354'} email={'email'}/>
          <Fee cost={15000}/>
        </Space>
      </div>
    )
  }
}

export default Home
