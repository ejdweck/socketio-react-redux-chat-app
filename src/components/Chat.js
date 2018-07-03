import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './chat.css'
import io from 'socket.io-client'


// user input component
import InputBar from './InputBar'

import { openWebsocket} from '../actions/actions'

import { List, Image, Message, Item } from 'semantic-ui-react'


class Chat extends Component {

  componentDidMount() {
    this.props.openWebsocket('localhost:8080')
  }

  render() {
    return (
      <div>
        <h1>Chat Interface</h1>
        <div id="chatroom-container">
          <Item.Group relaxed>
            {
              this.props.chat.messages.map((message, i) =>
              <Item>
                <Item.Image size='tiny' src='src/images/image.png' />
                <Item.Content verticalAlign='middle'>{this.props.chat.messages[i]}</Item.Content>
              </Item>)
            }
          </Item.Group>

        </div>
        <div id="chatroom-input">
          <InputBar />
        </div>
      </div>
    )
  }
}

/*
<List>
  {
    this.props.chat.messages.map((message, i) =>
      <Message
        header='test'
        content={this.props.chat.messages[i]}
      />)
  }
</List>
*/

Chat.propTypes = {
  openWebsocket: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  chat: state.chat
})

export default connect(mapStateToProps, { openWebsocket })(Chat)
