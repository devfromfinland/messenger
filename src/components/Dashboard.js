import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Rooms from './Rooms'
import Users from './Users'

class Dashboard extends Component {
  render() {
    return(
      <Container>
        <Row className='text-center'>
          <Col>
            <h1>DASHBOARD</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{flex: 4}}>
            <Rooms />
          </Col>
          <Col style={{flex: 1}}>
            {' '}
          </Col>
          <Col style={{flex: 4}}>
            <Users />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard