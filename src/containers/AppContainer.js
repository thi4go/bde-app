import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {Icon} from 'react-native-elements'
import HomeContainer from './home/HomeContainer'
import MicContainer from './mic/MicContainer'
import ProfileContainer from './profile/ProfileContainer'

import MediaManager from '../views/Media/manager'


const TabBar = createMaterialBottomTabNavigator(
  {
    Home: { 
      screen: HomeContainer,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name='home' color={tintColor} size={25} />
        }
      }
    },
    Mic: { 
      screen: MicContainer,
      navigationOptions: {
        title: 'Mic',
        tabBarIcon: ({tintColor}) => {
          return <Icon name='mic' color={tintColor} size={26} />
        }
      }
    },
    Media: { screen: MediaManager },
    Profile: { 
      screen: ProfileContainer,
      navigationOptions: {
        title: 'Mic',
        tabBarIcon: ({tintColor}) => {
          return <Icon name='person' color={tintColor} size={24} />
        }
      }
    }
  }, {
    labeled: false,
    shifting: true,
    initialRouteName: 'Mic',
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    barStyle: { backgroundColor: 'white' },
  }
)
  

class AppContainer extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		return <TabBar />
	}

}

export default AppContainer