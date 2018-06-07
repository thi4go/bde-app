import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from './signin';
import Register from './register';

const StartUpNavigator = FluidNavigator(
	{
		SignIn: { screen: SignIn },
		Register: { screen: Register }
	});

class StartUpManager extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<StartUpNavigator
				screenProps={this.props.screenProps}
			/>
		);
	}
}

export default StartUpManager
