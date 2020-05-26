import { RECEIVE_ROOMS, CREATE_ROOM, JOIN_ROOM } from '../actions/rooms'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case CREATE_ROOM:
      // TODO: add new action.room to state
      return action.rooms
    case JOIN_ROOM:
      // TODO: add action.username to state's action.roomId
      return action.rooms
    case RECEIVE_ROOMS:
      return action.rooms
    default:
      return state
  }
}