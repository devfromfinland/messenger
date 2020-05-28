import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Chat, MeetingRoom } from '@material-ui/icons'
// import Rooms from './Rooms'
// import Users from './Users'

class Dashboard extends Component {
  checkStatus = () => {
    // check redux's state

    return 'offline' // other return values: 'online', 'idle'
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
                      <Link to={'/rooms/' + room.roomId}>
                        <MeetingRoom color='primary' />
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
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