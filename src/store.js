import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import socketMiddleware from './middleware/socketMiddleware'
import chatMiddleware from './middleware/chatMiddleware'

const initialState = {}

const middleware = [thunk, socketMiddleware, chatMiddleware]

const store = createStore(
  rootReducer,
  initialState,
  compose (
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
