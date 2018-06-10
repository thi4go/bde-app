import React, { Component } from 'react'

import { connect } from 'react-redux'
import SignIn from './signin'

class SignInContainer extends Component {

  constructor (props) {
    super(props)

    console.log(props)
  }

  render () {

    return <SignIn />
  }
 
}

function mapStateToProps (state) {
  const { valid, user } = state.auth

  return { valid, user}
}

export default connect(mapStateToProps)(SignInContainer)