import { RECEIVE_USERS } from '../actions/users'

export default function users (state = null, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      console.log('reducer, RECEIVE_USERS, action:', action)
      return action.users
    default:
      return state
  }
}