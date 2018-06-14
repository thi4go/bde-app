import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import HomeContainer from './HomeContainer'
import MediaManager from '../views/Media/manager'
import ProfileManager from '../views/Profile/manager'
import RankingManager from '../views/Ranking/manager'

const TabBar = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeContainer },
    Ranking: { screen: RankingManager },
    Media: { screen: MediaManager },
    Profile: { screen: ProfileManager }
  }, {
    labeled: false,
    shifting: true,
    initialRouteName: 'Home',
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