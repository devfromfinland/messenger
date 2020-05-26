import { RECEIVE_CONVERSATIONS, ADD_CONVERSATION, ADD_MESSAGE } from '../actions/conversations'

export default function conversations(state = null, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      // TODO: add action.message to action.conversationId in state
      return state
    case ADD_CONVERSATION:
      // TODO: add new action.conversation to state
      return state
    case RECEIVE_CONVERSATIONS:
      return action.conversations
    default:
      return state
  }
}