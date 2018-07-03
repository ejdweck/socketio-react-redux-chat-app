import { SEND_MESSAGE, ADD_MESSAGE } from '../actions/types'

const initialState = {
  messages: ['test', 'test2', 'test3'],
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      }

      case SEND_MESSAGE:
        return {
          ...state,
        }
    default:
      return state
  }
}
