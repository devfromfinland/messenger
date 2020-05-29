import { 
  RECEIVE_CONVERSATIONS, 
  ADD_CONVERSATION, 
  ADD_MESSAGE, 
  ADD_USER_TO_COM 
} from '../actions/conversations'

export default function conversations(state = null, action) {
  switch (action.type) {
    case ADD_USER_TO_COM:
      // console.log('@reducer conversations, action: ', action)
      // console.log('@reducer conversations, state: ', state)
      return {
        ...state,
        [action.conversationId]: {
          ...state[action.conversationId],
          users: [
            ...state[action.conversationId].users,
            action.username
          ]
        }
      }
    case ADD_MESSAGE:
      // console.log('@reducer conversations, action: ', action)
      // console.log('@reducer conversations, state: ', state)
      const { message } = action
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
      // console.log('@reducer conversations, action: ', action)
      // console.log('@reducer conversations, state: ', state)
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