import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './index';
import HomeDetail from './detail';

const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		HomeDetail: { screen: HomeDetail}
	},
	{
		initialRouteName: 'Home',
	});


class HomeManager extends Component {
	static navigationOptions = {
		title: 'Home',
    tabBarIcon: ({focused, tintColor}) => {
			return <Icon name='home' color={tintColor} size={24} />
		}
	};
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<HomeNavigator
				screenProps={this.props.screenProps}
			/>
		);
	}
}

export default HomeManager
