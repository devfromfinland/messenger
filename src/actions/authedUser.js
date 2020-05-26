export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (username) {
  return {
    type: SET_AUTHED_USER,
    username,
  }
}