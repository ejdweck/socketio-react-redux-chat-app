import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './chat.css'
import io from 'socket.io-client'


// user input component
import InputBar from './InputBar'

import { openWebsocket} from '../actions/actions'

import { List, Image, Message, Item, Grid } from 'semantic-ui-react'
import logo from '../images/blazers-horizontal.png'

class Chat extends Component {

  componentDidMount() {
    this.props.openWebsocket('localhost:8080')
  }

  componentDidUpdate() {
    var elem = document.getElementById('chatroom-messages-list');
    elem.scrollTop = elem.scrollHeight;
  }

  render() {
    return (
      <div>
        <Grid celled padded id='chat-grid'>
          <Grid.Row columns={1} id='chatroom-title'>
            <Image src={logo}/>
          </Grid.Row>
          <Grid.Row columns={1} id='chatroom-messages-list'>
            <Grid.Column width={16}>
              <Item.Group relaxed>
                {
                  this.props.chat.messages.map((message, i) =>
                  <Item key={i} verticalAlign='top' >
                    <Item.Content>
                      <Item.Header id='chat-handle'>
                        {this.props.chat.messages[i].handle}
                      </Item.Header>
                      <Item.Description id='chat-message'>
                        {this.props.chat.messages[i].message}
                      </Item.Description>
                    </Item.Content>
                  </Item>)
                }
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} id='chatroom-input-bar'>
            <Grid.Column >
              <InputBar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
