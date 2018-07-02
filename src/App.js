import React, { Component } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App
