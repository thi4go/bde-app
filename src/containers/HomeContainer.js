import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { battles } from '../store/modules/battles'
import Home from './home/Home'
import HomeDetail from './home/Detail'


const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		HomeDetail: { screen: HomeDetail}
	},
	{
		initialRouteName: 'Home',
  });
  

class HomeContainer extends Component {
  static navigationOptions = {
		title: 'Home',
    tabBarIcon: ({focused, tintColor}) => {
			return <Icon name='home' color={tintColor} size={24} />
		}
  }
  
  constructor (props) {
    super (props)
  }

  async componentDidMount () {
    await this.props.dispatch(battles())

    console.log("HOMECONTAINER")
    console.log("HOMECONTAINER")
    console.log("HOMECONTAINER")

    console.log(this.props)
  }

  render() {
    return (
      <HomeNavigator />
    )
  }

}


function mapStateToProps(state) {

  return state
}

export default connect(mapStateToProps)(HomeContainer)