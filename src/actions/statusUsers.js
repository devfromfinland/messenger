/**
 * server should keep track on this and update clients whenever there is an update
 */

export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'
export const RECEIVE_AUTHED_USERS = 'RECEIVE_AUTHED_USERS'

export function addAuthedUser(username) {
  return {
    type: ADD_AUTHED_USER,
    username,
  }
}

export function removeAuthedUser(username) {
  return {
    type: ADD_AUTHED_USER,
    username,
  }
}

export function receiveAuthedUsers(users) {
  return {
    type: RECEIVE_AUTHED_USERS,
    users
  }
}