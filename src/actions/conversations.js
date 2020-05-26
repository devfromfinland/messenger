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