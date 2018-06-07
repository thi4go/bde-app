import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { createSwitchNavigator } from 'react-navigation';

import TabNavigation from './components/TabNavigation';
import StartUpManager from './views/StartUp/manager';
import StartUpLoader from './views/StartUp/loader';


const SwitchNav = createSwitchNavigator(
  {
    App: TabNavigation,
    Auth: StartUpManager,
    AuthLoader: StartUpLoader
  }, 
  {
    initialRouteName: 'Auth'
  }
);

export default class App extends Component {
  
  render() {
    return <SwitchNav />;
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
});




// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Doubasdasdle tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};