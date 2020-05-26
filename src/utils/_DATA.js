// This play a role as a backend server with these features:
// 1. provide initial data (fake get from database)
// 2. fake functions as real ones from database (function start with an underscore character '_')

// Stage 1: Handle everything with redux and initial dummy data
// Stage 2: Establish connection between client and server
// Stage 3: Save data to server's database


let users = {
  'vietpa': {
    username: 'vietpa',
    name: 'Viet Phan',
    avatarURL: '',
    conversations: [ 'Com_ID1', 'Com_ID2' ],
    rooms: [ 'room1', 'room2' ]
  },
  'hoangfinnair': {
    username: 'hoangfinnair',
    name: 'Hoang',
    avatarURL: '',
    conversations: [ 'Com_ID1', 'Com_ID2' ],
    rooms: [ 'room1', 'room2' ]
  },
  'stevedoan': {
    username: 'stevedoan',
    name: 'Tho Doan',
    avatarURL: '',
    conversations: [ 'Com_ID1' ],
    rooms: [ 'room1' ]
  },
}

let rooms = {
  'room1': {
    roomId: 'room1',
    roomName: 'TechHunting Team',
    users: [ 'vietpa', 'hoangfinnair', 'stevedoan' ],
    conversationId: 'Com_ID1',
    owners: [ 'vietpa']
  },
  'room2': {
    roomId: 'room2',
    roomName: 'Dev Team',
    users: [ 'vietpa', 'hoangfinnair'],
    conversationId: 'Com_ID2',
    owners: [ 'hoangfinnair' ]
  },
}

let conversations = {
  'Com_ID1': {
    conversationId: 'Com_ID1',
    users: [ 'vietpa', 'hoangfinnair', 'stevedoan' ],
    room: 'room1',
    messages: [
      {
        msgId: 'vietpa-1590507105088',
        username: 'vietpa',
        timestamp: 1590507105088,
        content: 'Hi team'
      },
      {
        msgId: 'hoangfinnair-1590593505088',
        username: 'hoangfinnair',
        timestamp: 1590593505088,
        content: 'Hi anh Viet, hi team :)'
      },
    ]
  },
  'Com_ID2': {
    conversationId: 'Com_ID2',
    users: [ 'vietpa', 'hoangfinnair'],
    room: 'room2',
    messages: [
      {
        msgId: 'hoangfinnair-1590507115088',
        username: 'hoangfinnair',
        timestamp: 1590507115088,
        content: 'Hi anh Viet, I created this room for us to discuss about software development'
      },
      {
        msgId: 'vietpa-1590593525088',
        username: 'vietpa',
        timestamp: 1590593525088,
        content: 'OK Hoang'
      },
    ]
  },
  'Com_ID3': {
    conversationId: 'Com_ID3',
    users: [ 'vietpa', 'stevedoan'],
    room: null,
    messages: [
      {
        msgId: 'stevedoan-1590507135088',
        username: 'stevedoan',
        timestamp: 1590507135088,
        content: 'Hi anh Viet, shall we reserve another team meeting to discuss UX/UI matter?'
      },
      {
        msgId: 'vietpa-1590593535088',
        username: 'vietpa',
        timestamp: 1590593535088,
        content: 'Yes Steve, please book a time for team'
      },
    ]
  },
  'Com_ID4': {
    conversationId: 'Com_ID4',
    users: [ 'vietpa', 'hoangfinnair'],
    room: null,
    messages: [
      {
        msgId: 'hoangfinnair-1590507145088',
        username: 'hoangfinnair',
        timestamp: 1590507145088,
        content: 'a room for dev team has just been created'
      },
      {
        msgId: 'vietpa-1590593555088',
        username: 'vietpa',
        timestamp: 1590593555088,
        content: 'Thanks Hoang'
      },
    ]
  },
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getRooms() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...rooms}), 1000)
  })
}

export function _getConversations() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...conversations}), 1000)
  })
}