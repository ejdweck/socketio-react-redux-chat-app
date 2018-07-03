import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../actions/actions'

import { Button, Input } from 'semantic-ui-react'

import './inputbar.css'
class InputBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  handleSubmit = () => {
    // submit text to dialogflow
    const userInput = this.state.input
    console.log('userInput: ', userInput)
    // send message text to middle ware for socket handling
    this.props.addMessage(userInput)
    this.setState({
      input: ''
    })
  }

  updateInputValue = (evt) => {
    this.setState({
      input: evt.target.value
    });
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
            value={this.state.input}
            onChange={evt => this.updateInputValue(evt)}
            onKeyPress={this.onKeyPress}
          />
          <Button content="Send" onClick={this.handleSubmit} />
      </div>
    )
  }
}

InputBar.propTypes = {
  addMessage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  inputbar: state.inputbar
})

export default connect(mapStateToProps, { addMessage }) (InputBar)
