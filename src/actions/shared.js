import { receiveUsers } from './users'
import { receiveRooms } from './rooms'
import { receiveConversations } from './conversations'
import { setAuthedUser } from './authedUser'
import { getInitialData } from '../utils/api'

const AUTHED_ID = 'vietpa'

export function handleInitialData () {
  return (dispatch) => {
    // dispatch(showLoading())
    return getInitialData()
      .then(({users, rooms, conversations}) => {
        
        dispatch(receiveUsers(users))
        dispatch(receiveRooms(rooms))
        dispatch(receiveConversations(conversations))
        dispatch(setAuthedUser(AUTHED_ID))
        // dispatch(hideLoading())
      })
  }
}