/**
 * This file helps the app to communicate with server
 * Stage 1: communicate with the fake server (_DATA.js file)
 * Stage 2: communicate with real server
 */

 // STAGE 1:
import { _getRooms, _getConversations, _getUsers } from './_DATA'

export function getUsers() {
  return _getUsers()
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
  ]).then(([users, rooms, conversations]) => {
    console.log('api, users: ', users)
    return ({
      users,
      rooms,
      conversations,
    })
  })
}