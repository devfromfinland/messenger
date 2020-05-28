export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (username) {
  return {
    type: SET_AUTHED_USER,
    username,
  }
}

export function handleLogOut(username) {
  return (dispatch) => {
    dispatch(setAuthedUser(''))

    // update 'username' in statusUsers
  }
}

export function handleLogin(username) {
  return (dispatch) => {
    dispatch(setAuthedUser(username))

    // update 'username' in statusUsers
  }
}