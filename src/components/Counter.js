import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { incrementCounter } from '../actions/actions'

class Counter extends Component {

  buttonClicked = () => {
    console.log('button clicked to increment')
    this.props.incrementCounter()
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>This button incremenets the counter</h1>
        <button onClick={this.buttonClicked}>Increment</button>
      </div>
    )
  }
}

Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps, { incrementCounter })(Counter)
