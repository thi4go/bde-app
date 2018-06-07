import React, { Component } from 'react';
import { Platform, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Ranking from './index';

const RankingNavigator = createStackNavigator(
	{
		Ranking: { screen: Ranking },
	},
	{
		initialRouteName: 'Ranking',
	});

class RankingManager extends Component {

	static navigationOptions = {
		title: 'Ranking',
    tabBarIcon: ({focused, tintColor}) => {
			return <Icon name='microphone' color={tintColor} size={24} />
		}
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<RankingNavigator
				screenProps={this.props.screenProps}
			/>
		);
	}
}

export default RankingManager
