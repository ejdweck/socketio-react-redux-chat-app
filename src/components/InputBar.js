import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/actions'

import { Button, Input } from 'semantic-ui-react'

import './inputbar.css'
class InputBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      handle: '',
    }
  }

  handleSubmit = () => {
    // if the user hasn't entered a chatroom handle, prompt them
    if (this.state.handle === "") {
      alert('please enter a handle')
      return
    }
    // if the user hasn't entered a text message, prompt them
    if (this.state.input === "") {
      alert('please enter a message')
      return
    }
    const userInput = this.state.input
    const user = this.state.handle
    console.log('userInput: ', userInput)
    // send message text to middle ware for socket handling
    var data = {
      handle: user,
      message: userInput,
    }
    this.props.sendMessage(data)
    this.setState({
      input: ''
    })
  }

  updateInputValue = (evt) => {
    this.setState({
      input: evt.target.value
    });
  }

  updateHandleValue = (evt) => {
    this.setState({
      handle: evt.target.value
    })
  }

  onKeyPress = (e) => {
    // 13 is enter key
    if (e.which === 13) {
      this.handleSubmit()
    }
  }

  render () {
    return (
      <div>
        <Input
          fluid={true}
          placeholder='chatroom handle'
          onChange={evt => this.updateHandleValue(evt)}
        />
        <Input
            fluid={true}
            placeholder='message'
            value={this.state.input}
            onChange={evt => this.updateInputValue(evt)}
            onKeyPress={this.onKeyPress}
        />
          <Button id='submit-btn' content="Send" onClick={this.handleSubmit} />
      </div>
    )
  }
}

InputBar.propTypes = {
  sendMessage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  inputbar: state.inputbar
})

export default connect(mapStateToProps, { sendMessage }) (InputBar)
