import { INCREMENT_COUNTER } from './types'

export const incrementCounter = () => dispatch => {
  dispatch({
    type: INCREMENT_COUNTER,
    payload: 'Incrementing counter'
  })
}
