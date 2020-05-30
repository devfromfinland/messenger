import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { generateConversationId, generateRoomId } from '../utils/helpers'
import { handleNewRoom } from '../actions/rooms'
import { handleNewConversation } from '../actions/conversations'

class NewRoom extends Component {
  state = {
    roomName: '',
    errorMsg: '',
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { rooms, authedUser, dispatch } = this.props
    const { roomName } = this.state

    // check if the name is already exist, if yes -> show an error message
    if (rooms.find((a) => a.roomName === roomName)) {
      this.setState(() => ({ errorMsg: 'This name is taken. Try another one!' }))
    } else {
      const roomId = generateRoomId()
      const conversationId = generateConversationId()

      const newRoom = {
        roomId,
        users: [authedUser], // first user = room creator/owner
        roomName,
        owners: [authedUser],
        conversationId,
      }

      const newConversation = {
        conversationId,
        users: [authedUser],
        room: roomId,
        messages: {},
      }

      dispatch(handleNewRoom(newRoom))
      dispatch(handleNewConversation(newConversation))

      this.setState(() => ({ errorMsg: '' }))

      // redirect to Dashboard after a new room is created
      this.props.history.push('/')
    }
    
  }

  render() {
    const { errorMsg } = this.state

    return (
      <div className='text-center'>
        <h3>Create new room</h3>

        <form onSubmit={this.onSubmit}>
          <div className='mt-5'>
            <input 
              type='text' 
              placeholder="Enter room's name" 
              value={this.state.roomName}
              style={{padding: '0.8rem'}} 
              onChange={(e) => this.setState({ roomName: e.target.value})}/>
          </div>

          { errorMsg !== '' && <div className='error-input'>{errorMsg}</div>}

          <Button type='submit' variant='primary' className='mt-3'>Create</Button>
        </form>
        
      </div>
    )
  }
}

function mapStateToProps({ authedUser, rooms }) {
  return {
    authedUser,
    rooms: rooms ? Object.values(rooms) : null
  }
}

export default connect(mapStateToProps)(NewRoom)