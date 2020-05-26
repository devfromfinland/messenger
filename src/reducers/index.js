import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import conversations from './conversations'
import rooms from './rooms'
// import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  conversations,
  rooms,
  // loadingBar: loadingBarReducer,
})