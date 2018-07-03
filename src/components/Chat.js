import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './chat.css'
import io from 'socket.io-client'

// chat ui component from react-chat-ui
import { ChatFeed, Message } from 'react-chat-ui'

// reactstrap components
import { Button, Container, Row, Col, Input } from 'reactstrap'

// user input component
import InputBar from './InputBar'

import { openWebsocket} from '../actions/actions'


class Chat extends Component {

  componentDidMount() {
    this.props.openWebsocket('localhost:8080')
  }

  render() {
    return (
      <div>
        <h1>Chat Interface</h1>
        <Container id="chatroom-container">
          
        </Container>
        <Container id="chatroom-input">
          <InputBar />
        </Container>
      </div>
    )
  }
}

Chat.propTypes = {
  openWebsocket: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  chat: state.chat
})

export default connect(mapStateToProps, { openWebsocket })(Chat)
