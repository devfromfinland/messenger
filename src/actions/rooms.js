export const RECEIVE_ROOMS = 'RECEIVE_ROOMS'
export const CREATE_ROOM = 'CREATE_ROOM'
export const JOIN_ROOM = 'JOIN_ROOM'

export function receiveRooms(rooms) {
  return {
    type: RECEIVE_ROOMS,
    rooms,
  }
}

export function createRoom(room) {
  return {
    type: CREATE_ROOM,
    room, // { roomId, users, conversationId, roomName }
  }
}

export function joinRoom(username, roomId) {
  return {
    type: JOIN_ROOM,
    username,
    roomId,
  }
}