import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './chat.css'
import io from 'socket.io-client'


// user input component
import InputBar from './InputBar'

import { openWebsocket} from '../actions/actions'

import { List, Image, Message } from 'semantic-ui-react'


class Chat extends Component {

  componentDidMount() {
    this.props.openWebsocket('localhost:8080')
  }

  render() {
    return (
      <div>
        <h1>Chat Interface</h1>
        <div id="chatroom-container">
          <List>
            {
              this.props.chat.messages.map((message, i) =>
                <Message
                  header='test'
                  content={this.props.chat.messages[i]}
                />)
            }
          </List>
        </div>
        <div id="chatroom-input">
          <InputBar />
        </div>
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
