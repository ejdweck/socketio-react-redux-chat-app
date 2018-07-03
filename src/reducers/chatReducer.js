import { SEND_MESSAGE, ADD_MESSAGE } from '../actions/types'

const initialState = {
  messages: [],
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_MESSAGE:
      var message = {
        handle: action.payload.handle,
        message: action.payload.message,
      }
      return {
        ...state,
        messages: [...state.messages, message]
      }

      case SEND_MESSAGE:
        return {
          ...state,
        }
    default:
      return state
  }
}
