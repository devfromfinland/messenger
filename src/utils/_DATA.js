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
    avatarURL: '/img/viet.jpg',
    conversations: [ 'Com_ID1', 'Com_ID2' ],
    rooms: [ 'room1', 'room2' ]
  },
  'hoangfinnair': {
    username: 'hoangfinnair',
    name: 'Hoang',
    avatarURL: '/img/hoang.jpg',
    conversations: [ 'Com_ID1', 'Com_ID2' ],
    rooms: [ 'room1', 'room2' ]
  },
  'stevedoan': {
    username: 'stevedoan',
    name: 'Tho Doan',
    avatarURL: '/img/tho.jpg',
    conversations: [ 'Com_ID1' ],
    rooms: [ 'room1' ]
  },
}

let authedUsers = {
  'vietpa': {
    username: 'vietpa',
    status: 'online'
  },
  'hoangfinnair': {
    username: 'hoangfinnair',
    status: 'idle'
  },
  'stevedoan': {
    username: 'stevedoan',
    status: 'offline'
  }
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
    messages: {
      'vietpa-1590507105088': {
        msgId: 'vietpa-1590507105088',
        username: 'vietpa',
        timestamp: 1590507105088,
        content: 'Hi team'
      },
      'hoangfinnair-1590593505088': {
        msgId: 'hoangfinnair-1590593505088',
        username: 'hoangfinnair',
        timestamp: 1590593505088,
        content: 'Hi anh Viet, hi team :)'
      },
    }
  },
  'Com_ID2': {
    conversationId: 'Com_ID2',
    users: [ 'vietpa', 'hoangfinnair'],
    room: 'room2',
    messages: {
      'hoangfinnair-1590507115088': {
        msgId: 'hoangfinnair-1590507115088',
        username: 'hoangfinnair',
        timestamp: 1590507115088,
        content: 'Hi anh Viet, I created this room for us to discuss about software development'
      },
      'vietpa-1590593525088': {
        msgId: 'vietpa-1590593525088',
        username: 'vietpa',
        timestamp: 1590593525088,
        content: 'OK Hoang'
      },
    }
  },
  'Com_ID3': {
    conversationId: 'Com_ID3',
    users: [ 'vietpa', 'stevedoan'],
    room: null,
    messages: {
      'stevedoan-1590507135088': {
        msgId: 'stevedoan-1590507135088',
        username: 'stevedoan',
        timestamp: 1590507135088,
        content: 'Hi anh Viet, shall we reserve another team meeting to discuss UX/UI matter?'
      },
      'vietpa-1590593535088': {
        msgId: 'vietpa-1590593535088',
        username: 'vietpa',
        timestamp: 1590593535088,
        content: 'Yes Steve, please book a time for team'
      },
    }
  },
  'Com_ID4': {
    conversationId: 'Com_ID4',
    users: [ 'vietpa', 'hoangfinnair'],
    room: null,
    messages: {
      'hoangfinnair-1590507145088': {
        msgId: 'hoangfinnair-1590507145088',
        username: 'hoangfinnair',
        timestamp: 1590507145088,
        content: 'a room for dev team has just been created'
      },
      'vietpa-1590593555088': {
        msgId: 'vietpa-1590593555088',
        username: 'vietpa',
        timestamp: 1590593555088,
        content: 'Thanks Hoang'
      },
    }
  },
}

export function _getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...users}), 1000)
  })
}

export function _getAuthedUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...authedUsers}), 1000)
  })
}

export function _getRooms() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...rooms}), 1000)
  })
}

export function _getConversations() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...conversations}), 1000)
  })
}