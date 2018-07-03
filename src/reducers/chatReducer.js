import { ADD_MESSAGE } from '../actions/types'

const initialState = {
  messages: [],
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return state
  }
}
