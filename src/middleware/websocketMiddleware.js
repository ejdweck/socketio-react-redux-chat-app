import { OPEN_WEBSOCKET, UPDATE_SOCKET_OBJECT } from '../actions/types'
import { openWebsocket } from '../actions/actions'
import io from 'socket.io-client'


handleServerMessage = (data, store, clientId) => {
  console.log('data ', data)
}

const socketMiddleware = store => next => action => {
  if(action.type === OPEN_WEBSOCKET) {
    var socket = io('localhost:8080')
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

  next(action)
}

export default socketMiddleware
