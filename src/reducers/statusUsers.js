import { ADD_AUTHED_USER, RECEIVE_AUTHED_USERS, REMOVE_AUTHED_USER } from '../actions/statusUsers'

export default function statusUsers(state = null, action) {
  switch (action.type) {
    case RECEIVE_AUTHED_USERS:
      return action.users
    case REMOVE_AUTHED_USER:
      console.log('@reducer, state: ', state)
      return state
    case ADD_AUTHED_USER:
      console.log('@reducer, state: ', state)
      return state
    default:
      return state
  }
}