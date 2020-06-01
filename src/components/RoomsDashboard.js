import React, { Fragment } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RoomsDashboard (props) {
  const { authedUser, rooms, onJoinRoom } = props

  return (
    <Fragment>
      <div className='mb-4 mt-4'>
        <h3>Rooms ({rooms.length} available)</h3>
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
                    <Button variant='link' style={{padding: 0}}>Enter room</Button>
                  </Link>
                : <Button 
                  variant='link' 
                  style={{padding: 0}} 
                  onClick={(e) => onJoinRoom(e, room.roomId, room.conversationId)}>
                    Join room
                  </Button>
                }
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Link to='/createRoomChat'>
        <Button variant='primary'>Create a new room</Button>
      </Link>
    </Fragment>
  )
}