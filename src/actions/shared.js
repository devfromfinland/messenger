import { receiveUsers } from './users'
import { receiveRooms } from './rooms'
import { receiveConversations } from './conversations'
import { receiveAuthedUsers } from './statusUsers'
import { setAuthedUser } from './authedUser'
import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'vietpa'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, rooms, conversations, authedUsers}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveRooms(rooms))
        dispatch(receiveConversations(conversations))
        dispatch(receiveAuthedUsers(authedUsers))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('@action: error in handling initial data')
      })
  }
}