import React from 'react'
import { Input, Button, Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentInfo } from '../../actions/student'

function Fee () {
  const fullName = useSelector(state => state.student.fullName)
  const cost = useSelector(state => state.student.cost)
  const dispatch = useDispatch()

  const onStudentCodeChange = (event) => {
    const studentCode = event.target.value
    const regex = /^[0-9]{10}$/

    if (regex.test(studentCode)) {
      const action = getStudentInfo(studentCode)
      dispatch(action)
    }
  }

  return (
    <Row>
      <Col span={8} push={8}>
        <h2>Thông tin sinh viên:</h2>

        <Input name={'studentCode'} placeholder={'MSSV'}
               onChange={onStudentCodeChange}/>

        <Input name={'fullName'} placeholder={'HO TEN'} disabled={true}
               value={fullName}/>

        <Input disabled={true} value={cost}/>

        <Button type="primary" onClick={null}>
          Chuyển tiền
        </Button>
      </Col>
    </Row>
  )
}

export default Fee