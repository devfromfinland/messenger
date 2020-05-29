import React, { Component } from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import Message from './Message'
import { connect } from 'react-redux'
import { generateMsgId } from '../utils/helpers'
import { handleNewConversation, handleNewMessage, handleAddUserToConversation } from '../actions/conversations'
import { handleJoinRoom } from '../actions/rooms'
import EmptyPage from './EmptyPage'

class Rooms extends Component {
  state = {
    text: ''
  }

  // function used for scrolling the bottom of the chat when it is too long
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" })
  }

  componentDidMount() {
    const { authedUser, rooms, roomId } = this.props

    if (rooms[roomId] && rooms[roomId].users.find((a) => a === authedUser)) {
      this.scrollToBottom()
    }
  }
  
  componentDidUpdate() {
    const { authedUser, rooms, roomId } = this.props

    if (rooms[roomId] && rooms[roomId].users.find((a) => a === authedUser)) {
      this.scrollToBottom()
    }
  }

  onJoinRoom = () => {
    const { authedUser, roomId, dispatch, conversations } = this.props

    dispatch(handleJoinRoom(authedUser, roomId))
    if (conversations) {
      dispatch(handleAddUserToConversation(authedUser, conversations.conversationId))
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { authedUser, dispatch, roomId, conversations, rooms } = this.props
    let comId

    // check if this is the first message
    // if yes --> create a new conversationId before adding msg
    if (!conversations) {
      comId = rooms[roomId].conversationId // hard-code for testing, should call generateConversationId() function
      let newConversation = {
        conversationId: comId,
        users: [authedUser],  // first user (room owner)
        room: roomId, // chat in a room
        messages: {},
      }
  
      dispatch(handleNewConversation(newConversation))
    } else {
      comId = this.props.conversations.conversationId
    }
    
    // prepare the message for update
    const timestamp = new Date()
    let message = {
      msgId: generateMsgId(authedUser, timestamp.getTime()),
      username: authedUser,
      timestamp: timestamp.getTime(),
      content: text
    }

    // add message to redux and database
    dispatch(handleNewMessage(message, comId))

    // reset the text input
    this.setState(() => ({ text: '' }))
  }

  render() {
    const { authedUser, conversations, roomId, rooms } = this.props
    const { text } = this.state

    // check if this room is exist
    if (!rooms[roomId]) {
      return <EmptyPage />
    }

    // check if the user is belong to this room chat
    if (!rooms[roomId].users.find((a) => a === authedUser)) {
      return <div className='text-center'>
        <h3>You haven't joined this room yet. Need to join first.</h3>
        <div className='mt-3'>
          <Button variant="primary" onClick={this.onJoinRoom}>Join now</Button>
        </div>
      </div>
    }

    const room = rooms[roomId]

    // first time, then create a new conversation first
    if (!conversations) {
      return <Container>
        <Row>
          <Col className='text-right'>
            <p>
              Room name:{' '}
              <strong>{room.roomName}</strong>
            </p>
            <p>
              Members:{' '} 
              <strong>{room.users.join(', ')}</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='chat-area'>
            <p>No conversation in this room yet. Write something to start room discussion!</p>

            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }} />

          </Col>
        </Row>
        <Row>
          <Col className='chat-input'>
            <Form onSubmit={this.onSubmit}>
              <InputGroup className="mb-3">
                <Form.Control
                  type='text'
                  placeholder='Enter text here...'
                  value={text}
                  onChange={(e) => this.setState({text: e.target.value})}
                  className='chat-text'
                />
                <InputGroup.Append>
                  <Button variant="primary" type='submit' style={{borderTopRightRadius: 0}}>Send</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    }

    let messages = Object.values(conversations.messages)
      .sort((a, b) => a.timestamp - a.timestamp)

    return(
      <Container>
        <Row>
          <Col className='text-right'>
            <p>
              Room name:{' '}
              <strong>{room.roomName}</strong>
            </p>
            <p>
              Members:{' '} 
              <strong>{room.users.join(', ')}</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='chat-area'>
            {messages.map((message) => 
              <Message 
                message={message}
                isMe={message.username === authedUser ? true : false}
                key={message.msgId}
              />
            )}

            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }} />

          </Col>
        </Row>
        <Row>
          <Col className='chat-input'>
            <Form onSubmit={this.onSubmit}>
              <InputGroup className="mb-3">
                <Form.Control
                  type='text'
                  placeholder='Enter text here...'
                  value={text}
                  onChange={(e) => this.setState({text: e.target.value})}
                  className='chat-text'
                />
                <InputGroup.Append>
                  <Button variant="primary" type='submit' style={{borderTopRightRadius: 0}}>Send</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({ authedUser, conversations, rooms }, props) {
  let roomId = props.match.params.id
  // console.log('@Rooms, props', props)
  return {
    authedUser,
    roomId,
    rooms,
    conversations: Object.values(conversations)
      .filter((a) => a.room === roomId)[0]
  }
}

export default connect(mapStateToProps)(Rooms)