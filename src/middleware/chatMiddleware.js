import { SEND_MESSAGE, ADD_MESSAGE } from '../actions/types'
import { sendMessage } from '../actions/actions'
import io from 'socket.io-client'

const chatMiddleware = store => next => action => {
  const state = store.getState()
  if(action.type === SEND_MESSAGE) {
    //console.log('in middle ware, adding message')
    const socket = state.socket.socket
    //console.log('socket from add message middleware', socket)
    socket.emit('chat', {
      message: action.payload,
      handle: 'TODO',
    })
  }
  if (action.type === ADD_MESSAGE) {

  }

  next(action)
}

export default chatMiddleware
