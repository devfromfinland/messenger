/**
 * This file helps the app to communicate with server
 * Stage 1: communicate with the fake server (_DATA.js file)
 * Stage 2: communicate with real server
 */

 // STAGE 1:
import { _getRooms, _getConversations, _getUsers, _getAuthedUsers } from './_DATA'

export function getUsers() {
  return _getUsers()
}

export function getAuthedUsers() {
  return _getAuthedUsers()
}

export function getRooms() {
  return _getRooms()
}

export function getConversations() {
  return _getConversations()
}

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getRooms(),
    _getConversations(),
    _getAuthedUsers(),
  ]).then(([users, rooms, conversations, authedUsers]) => {
    return ({
      users,
      rooms,
      conversations,
      authedUsers,
    })
  })
}