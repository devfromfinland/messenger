export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS'
export const ADD_CONVERSATION = 'ADD_CONVERSATION'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_USER_TO_COM = 'ADD_USER_TO_COM'

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

export function addUserToConversation (username, conversationId) {
  return {
    type: ADD_USER_TO_COM,
    username,
    conversationId,
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
    //
  }
}

export function handleAddUserToConversation (username, conversationId) {
  return (dispatch) => {
    // save to redux
    dispatch(addUserToConversation(username, conversationId))

    // save to database, if error, remove it from redux
    //
  }
}