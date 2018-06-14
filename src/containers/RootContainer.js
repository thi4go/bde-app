import React, { Component } from 'react'

import { createSwitchNavigator } from 'react-navigation'

import AppContainer from './AppContainer'
import AuthContainer from './AuthContainer'
import AuthLoader from './auth/Loader'

import NavigationService from '../lib/NavigationService'



const SwitchNav = createSwitchNavigator(
  {
    App: AppContainer,
    Auth: AuthContainer,
    AuthLoader: AuthLoader
  }, 
  {
    initialRouteName: 'AuthLoader'
  }
)


class RootContainer extends Component {

  render () {
    return (
      <SwitchNav 
        ref={navigatorRef => NavigationService.setSwitchNav(navigatorRef)}
      />
    )  
  }

}



export default RootContainer