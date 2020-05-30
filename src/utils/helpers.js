import { v4 as uuidv4 } from 'uuid'

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatMessage (username, content, timestamp, toUser = null, toRoom = null) {
  return {
    username,
    content,
    timestamp,
    toUser,
    toRoom,
  }
}

// very simple ID generation of a message
export function generateMsgId (username, timestamp) {
  return '' + username + '-' + timestamp
}

export function generateRoomId() {
  return uuidv4()
}

export function generateConversationId() {
  return uuidv4()
}