import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { _battles } from '../../store/modules/battles'
import Home from './Home'
import HomeDetail from './Detail'
import StorageService from '../../lib/StorageService'
import HeaderBarConfig from '../../components/HeaderBarConfig'


const HomeNavigator = createStackNavigator(
	{
		Home: { 
      screen: Home,
      navigationOptions: HeaderBarConfig
    },
		HomeDetail: { screen: HomeDetail}
	},
	{
    initialRouteName: 'Home',
  });
  

class HomeContainer extends Component {
  
  constructor (props) {
    super (props)
  }

  async componentDidMount () {
    await this.props.dispatch(_battles())
    const res = await StorageService.get('session')
  }

  render() {
    return (
        <HomeNavigator />
    )
  }

}


function mapStateToProps(state) {
  const { data } = state.battles

  return { data }
}

export default connect(mapStateToProps)(HomeContainer)