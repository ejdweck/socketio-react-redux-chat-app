import { INCREMENT_COUNTER } from '../actions/types'

const initialState = {
  count: 0,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        count: state.count +1
      })

    default:
      return state
  }
}
