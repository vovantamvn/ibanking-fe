import React from 'react'
import { Input, Button, Space } from 'antd'

class Fee extends React.Component {

  constructor (props) {
    super(props)
    this.setState({
      'studentCode': '',
      'fullName': '',
    })

    console.log('constructor')
  }

  componentDidMount () {
    console.log('didmount')
  }

  onSubmitHandler = () => {
    try {
      const { studentCode, fullName } = this.state
    } catch {
      //this.state.error = true
    }
  }

  onChangeHandler = (e) => {
    const key = e.target.name
    const value = e.target.value
    this.setState({ [key]: value })
  }

  render () {
    return (
      <div>
        <h2>Thông tin sinh viên:</h2>
        <Space direction={'vertical'}>
          <Input name={'studentCode'} placeholder={'MSSV'}
                 onChange={this.onChangeHandler}/>
          <Input name={'fullName'} placeholder={'HO TEN'}
                 onChange={this.onChangeHandler}/>
          <Input disabled={true} value={this.props.cost}/>
          <Button type="primary" onClick={this.onSubmitHandler}>Chuyển tiền</Button>
        </Space>
      </div>

    )
  }
}

export default Fee
