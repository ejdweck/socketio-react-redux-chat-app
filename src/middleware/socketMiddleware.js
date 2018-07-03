import { OPEN_WEBSOCKET, UPDATE_SOCKET_OBJECT, ADD_MESSAGE } from '../actions/types'
import { openWebsocket } from '../actions/actions'
import io from 'socket.io-client'

var socket

const handleServerMessage = (data, store, clientId) => {
  console.log('data ', data)

  // package into a variable server message data
  const response = {
    message: data.message,
    handle: data.handle
  }
  // dispatch action that adds new message to the state array
  store.dispatch({
    type: ADD_MESSAGE,
    payload: response
  })
}

const socketMiddleware = store => next => action => {
  if(action.type === OPEN_WEBSOCKET) {
    socket = io('localhost:8080')
    socket.on('connect', function(){
      console.log('connected to server', socket)
    })
    const clientId = socket.id
    socket.on('chat', (data) => handleServerMessage(data, store, clientId))

    store.dispatch({
      type: UPDATE_SOCKET_OBJECT,
      payload: socket,
    })
  }

  if (action.type === UPDATE_SOCKET_OBJECT) {

  }

  next(action)
}

export default socketMiddleware
