import React, { Component } from 'react';
import { Platform, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';

import Profile from './index';

const ProfileNavigator = createStackNavigator(
	{
		Profile: { screen: Profile },
	},
	{
		initialRouteName: 'Profile',
	});

class ProfileManager extends Component {

	static navigationOptions = {
		title: 'Profile',
    tabBarIcon: ({focused, tintColor}) => {
			return <Icon name='user' color={tintColor} size={24} />
		}
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<ProfileNavigator
				screenProps={this.props.screenProps}
			/>
		);
	}
}

export default ProfileManager
