import { ADD_MESSAGE } from '../actions/types'
import { addMessage } from '../actions/actions'
import io from 'socket.io-client'

const chatMiddleware = store => next => action => {
  const state = store.getState()
  if(action.type === ADD_MESSAGE) {
    //console.log('in middle ware, adding message')
    const socket = state.socket.socket
    //console.log('socket from add message middleware', socket)
    socket.emit('chat', {
      message: action.payload,
      handle: 'TODO',
    })

  }

  next(action)
}

export default chatMiddleware
