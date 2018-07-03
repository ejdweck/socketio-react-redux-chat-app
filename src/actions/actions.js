import {
  INCREMENT_COUNTER,
  ADD_MESSAGE,
  OPEN_WEBSOCKET,
  UPDATE_SOCKET_OBJECT
} from './types'

// count reducer
export const incrementCounter = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNTER,
    payload: 'Incrementing counter'
  })
}

// chat reducer
export const addMessage = (data) => dispatch => {
  dispatch({
    type: ADD_MESSAGE,
    payload: data
  })
}

//socket reducer
export const openWebsocket = (endpoint) => dispatch => {
  dispatch({
    type: OPEN_WEBSOCKET,
    payload: endpoint
  })
}

export const updateSocketObject = (socket) => dispatch => {
  dispatch({
    type: UPDATE_SOCKET_OBJECT,
    payload: socket
  })
}
