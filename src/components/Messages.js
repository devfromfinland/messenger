import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, InputGroup, Button, Form } from 'react-bootstrap'
import Message from './Message'
import { generateMsgId, generateConversationId } from '../utils/helpers'
import { handleNewMessage, handleNewConversation } from '../actions/conversations'
import EmptyPage from './EmptyPage'

class Messages extends Component {
  state = {
    text: ''
  }

  // function used for scrolling the bottom of the chat when it is too long
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" })
  }

  componentDidMount() {
    const { authedUser, toUser, users } = this.props

    if (toUser === authedUser || !users.find((b) => b.username === toUser)) {
      return
    }

    this.scrollToBottom()
  }
  
  componentDidUpdate() {
    const { authedUser, toUser, conversations, users } = this.props

    if (toUser === authedUser || !users.find((b) => b.username === toUser)) {
      return
    }

    this.scrollToBottom()
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { authedUser, dispatch, toUser, conversations } = this.props
    let comId

    // check if this is the first message
    // if yes --> create a new conversationId before adding msg
    if (!conversations) {
      comId = generateConversationId()
      let newConversation = {
        conversationId: comId,
        users: [authedUser, toUser],
        room: null, // chat between 2 people, not in a room
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
    const { authedUser, toUser, conversations, users } = this.props
    const { text } = this.state

    // if user is not exist or user = authedUser -> return to Dashboad
    if (toUser === authedUser || !users.find((b) => b.username === toUser)) {
      return <EmptyPage />
    }

    // if user is exist, but no conversation yet -> start a new conversation
    if (!conversations) {
      return <Container>
        <Row>
          <Col className='chat-area'>
            Feel free to start your conversation

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
                  <Button 
                    variant="primary"
                    type='submit'
                    style={{borderTopRightRadius: 0}}>
                    Send
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    }

    // if user is exist and there was conversation -> load and show the conversation
    const messages = Object.values(conversations.messages)
      .sort((a, b) => a.timestamp - b.timestamp)

    return (
      <Container>
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

function mapStateToProps({ authedUser, users, conversations }, props) {
  let toUser = props.match.params.id

  return {
    authedUser,
    toUser,
    users: Object.values(users),
    conversations: Object.values(conversations) // filter: not in a room, and contain both users in a conversation
      .filter((a) => a.room === null)
      .filter((b) => b.users.find((c) => c === toUser) 
        && b.users.find((d) => d === authedUser))[0],
  }
}

export default connect(mapStateToProps)(Messages)