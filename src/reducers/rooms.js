import { RECEIVE_ROOMS, CREATE_ROOM, JOIN_ROOM } from '../actions/rooms'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case CREATE_ROOM:
      // console.log('@reducer, action: ', action)
      // console.log('@reducer, state: ', state)
      const { room } = action
      return { 
        ...state, 
        [room.roomId]: room 
      }
    case JOIN_ROOM:
      // TODO: add action.username to state's action.roomId
      // console.log('@reducer, action: ', action)
      // console.log('@reducer, state: ', state)
      return {
        ...state,
        [action.roomId]: {
          ...state[action.roomId],
          users: [
            ...state[action.roomId].users,
            action.username
          ]
        }
      }
    case RECEIVE_ROOMS:
      return action.rooms
    default:
      return state
  }
}