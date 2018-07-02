import React, { Component } from 'react'
import io from 'socket.io-client'

class Chat extends Component {

  componentDidMount() {
    const socket = io('localhost:8080')
    socket.on('connect', function(){
      console.log('connected to server', socket)
    })
  }

  onClick = () => {
    console.log('button clicked')
  }

  render() {
    return (
      <div>
        <h1>Chat Interface</h1>
        <div id="output"></div>
        <div id="feedback"></div>
        <input id="handle" type="text" placeholder="Handle" />
        <input id="message" type="text" placeholder="Message" />
        <button onClick={this.onClick} id="send">Send</button>
      </div>
    )
  }
}

export default Chat
