import { combineReducers } from 'redux'
import countReducer from './countReducer'
import chatReducer from './chatReducer'
import socketReducer from './socketReducer'

export default combineReducers({
  count: countReducer,
  chat: chatReducer,
  socket: socketReducer,
})
