import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { Provider } from 'react-redux'
import { createSwitchNavigator } from 'react-navigation'

import configureStore from './store'

import TabNavigator from './navigators/TabNavigator'
import StartUpNavigator from './views/StartUp/Navigator'
import StartUpLoader from './views/StartUp/loader'
import AuthContainer from './containers/Auth'

const store = configureStore()

const SwitchNav = createSwitchNavigator(
  {
    App: TabNavigator,
    Auth: AuthContainer,
    AuthLoader: StartUpLoader
  }, 
  {
    initialRouteName: 'Auth'
  }
)

export default class App extends Component {
  
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <SwitchNav />
      </Provider>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})




// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Doubasdasdle tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};