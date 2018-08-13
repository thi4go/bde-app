import React, { Component } from 'react'
import { Dimensions, Image, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { _battles } from '../../store/modules/battles'

import Ranking from './Ranking'
import BattlesContainer from './BattlesContainer'
import HeaderBarConfig from '../../components/HeaderBarConfig'


const Tabs =(createMaterialTopTabNavigator(
	{
		Ranking: { 
			screen: Ranking,
			navigationOptions: {
				title: 'Rank',
				swipeEnabled: true,
				tabBarIcon: () => {
					return <Icon name='timeline' color='black' size={24} />
				}
			}
		},
		Battles: { 
			screen: BattlesContainer,
			navigationOptions: {
				title: 'Batalhas',
				swipeEnabled: true,
				tabBarIcon: () => {
					return <Icon name='subject' color='black' size={24} />
				}
				
			}
		},
	},
	{
		initialRouteName: 'Battles',
		initialLayout: {
			height: 0,
			width: Dimensions.get('window').width,
		},
		tabBarOptions: {
			activeTintColor: 'black',
			inactiveTintColor: 'gray',
			showIcon: true,
			style: {
				backgroundColor: 'white',
			},
			tabStyle: {
				height: 50,
			},
			indicatorStyle: {
				backgroundColor: 'black'
			},
			labelStyle: {
				fontSize: 12
			}
		}
	}
))


const MicNavigator = createStackNavigator(
	{
		Mic: { 
			screen: Tabs, 
			navigationOptions: HeaderBarConfig 
		}
	},
	{
		initialRouteName: 'Mic',
		headerMode: 'float',
	}
)

class MicContainer extends Component {

	constructor (props) {
		super(props)

	}

	componentWillMount () {

		if (Object.keys(this.props.battles).length == 0) {
			this.props.dispatch(_battles())
		}

	}
	
	render() {
		return (
			<MicNavigator	/>
		)
	}
}


function mapStateToProps(state) {
  const { battles } = state

  return { battles }
}


export default connect(mapStateToProps)(MicContainer)
