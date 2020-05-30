import React, { Component } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Chat, MeetingRoom } from '@material-ui/icons'
import { handleJoinRoom } from '../actions/rooms'
import { handleAddUserToConversation } from '../actions/conversations'
// import Rooms from './Rooms'
// import Users from './Users'

class Dashboard extends Component {
  checkStatus = () => {
    // check redux's state

    return 'offline' // other return values: 'online', 'idle'
  }

  onJoinRoom = (e, roomId, conversationId) => {
    e.preventDefault()

    const { authedUser, dispatch, rooms } = this.props

    dispatch(handleJoinRoom(authedUser, roomId))
    dispatch(handleAddUserToConversation(authedUser, conversationId))
  }

  render() {
    const { authedUser, conversations, rooms, users, statusUsers } = this.props

    console.log('@Dashboard, statusUsers: ', statusUsers['vietpa'].status)

    return(
      <Container>
        <Row className='text-center'>
          <Col>
            <h1>DASHBOARD</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{flex: 4}}>
            <div className='mb-4 mt-4'>
              <h3>Rooms (x available)</h3>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Room name</th>
                  <th>User count</th>
                </tr>
              </thead>
              <tbody>
                { rooms && rooms.map((room) => 
                  <tr key={room.roomId}>
                    <td>
                      {room.roomName}
                    </td>
                    <td>
                      {room.users.length} {room.users.length > 1 ? 'users' : 'user'}
                    </td>
                    <td>
                      { room.users.find((a) => a === authedUser) 
                      ? <Link to={'/rooms/' + room.roomId}>
                          <Button variant='link'>Enter room</Button>
                        </Link>
                      : <Button variant='link' onClick={(e) => this.onJoinRoom(e, room.roomId, room.conversationId)}>Join room</Button>
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            <Link to='/createRoomChat'>
              <Button variant='primary'>Create a new room</Button>
            </Link>
            
          </Col>
          <Col style={{flex: 1}}>
            {' '}
          </Col>
          <Col style={{flex: 4}}>
            <div className='mb-4 mt-4'>
              <h3>Users (x online)</h3>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                { users && users.map((user) => 
                  <tr key={user.username}>
                    <td>
                      {user.username}
                    </td>
                    <td>
                      { statusUsers[user.username] 
                        ? statusUsers[user.username].status
                        : 'offline'
                        }
                    </td>
                    <td>
                      {
                        user.username === authedUser
                          ? null
                          : <Link to={'/messages/' + user.username}>
                            <Chat color='primary' />
                          </Link>
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
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