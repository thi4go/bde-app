import React, { Component } from 'react'

import { connect } from 'react-redux'

import SignIn from '../views/StartUp/signin'

class AuthContainer extends Component {

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

export default connect(mapStateToProps)(AuthContainer)