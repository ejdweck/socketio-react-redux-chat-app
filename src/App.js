import React, { Component } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import Chat from './components/Chat'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Chat />
        </div>
      </Provider>
    );
  }
}

export default App
