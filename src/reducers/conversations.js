import { RECEIVE_CONVERSATIONS, ADD_CONVERSATION, ADD_MESSAGE } from '../actions/conversations'

export default function conversations(state = null, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      // console.log('@reducer, action: ', action)
      // console.log('@reducer, state: ', state)
      const { message } = action
      const appendMessage = {
        [message.msgId]: message
      }
      // TODO: add action.message to action.conversationId in state
      return {
        ...state,
        [action.conversationId]: {
          ...state[action.conversationId],
          messages: {
            ...state[action.conversationId].messages,
            [message.msgId]: message,
          }
        }
      }
    case ADD_CONVERSATION:
      // TODO: add new action.conversation to state
      console.log('@reducer, action: ', action)
      console.log('@reducer, state: ', state)
      return {
        ...state,
        [action.conversation.conversationId]: action.conversation
      }
    case RECEIVE_CONVERSATIONS:
      return action.conversations
    default:
      return state
  }
}