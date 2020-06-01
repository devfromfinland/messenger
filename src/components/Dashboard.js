import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleJoinRoom } from '../actions/rooms'
import { handleAddUserToConversation } from '../actions/conversations'
import RoomsDashboard from './RoomsDashboard'
import UsersDashboard from './UsersDashboard'

class Dashboard extends Component {
  handleJoinRoom = (e, roomId, conversationId) => {
    e.preventDefault()

    const { authedUser, dispatch } = this.props

    dispatch(handleJoinRoom(authedUser, roomId))
    dispatch(handleAddUserToConversation(authedUser, conversationId))
  }

  render() {
    const { authedUser, rooms, users, statusUsers } = this.props

    return(
      <Container>
        <Row className='text-center'>
          <Col>
            <h1>DASHBOARD</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{flex: 4}}>
            <RoomsDashboard 
              authedUser={authedUser}
              rooms={rooms}
              onJoinRoom={this.handleJoinRoom}
            />
          </Col>

          <Col style={{flex: 1}}>
            {' '}
          </Col>

          <Col style={{flex: 4}}>
            <UsersDashboard 
              authedUser={authedUser}
              users={users}
              statusUsers={statusUsers}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({ authedUser, conversations, rooms, users, statusUsers }) {
  return {
    authedUser,
    conversations: conversations ? Object.values(conversations) : null,
    rooms: rooms ? Object.values(rooms) : null,
    users: users ? Object.values(users) : null,
    statusUsers: statusUsers ? statusUsers : null,
  }
}

export default connect(mapStateToProps)(Dashboard)