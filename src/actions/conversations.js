export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS'
export const ADD_CONVERSATION = 'ADD_CONVERSATION'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export function receiveConversations (conversations) {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations,
  }
}

export function addMessage (message, conversationId) {
  return {
    type: ADD_MESSAGE,
    message, // { msgId, username, timestamp, content }
    conversationId,
  }
}

export function addConversation (conversation) {
  return {
    type: ADD_CONVERSATION,
    conversation // { conversationId, users, room, messages }
  }
}

export function handleNewMessage (message, conversationId) {
  return (dispatch) => {
    // console.log('@action, message: ', message)
    // console.log('@action, conversationId: ', conversationId)
    dispatch(addMessage(message, conversationId))

    // save to database, if error, remove the recently added message
    
  }
}

export function handleNewConversation (conversation) {
  return (dispatch) => {
    // save to redux
    dispatch(addConversation(conversation))

    // save to database, if error, remove the recently added conversation
    
  }

}