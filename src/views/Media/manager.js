import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Media from './index';

const MediaNavigator = createStackNavigator(
	{
		Media: { screen: Media },
	},
	{
		initialRouteName: 'Media',
	});

class MediaManager extends Component {

	static navigationOptions = {
		title: 'Media',
    tabBarIcon: ({focused, tintColor}) => {
			return <Icon name='camera' color={tintColor} size={24} />
		}
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<MediaNavigator
				screenProps={this.props.screenProps}
			/>
		);
	}
}

export default MediaManager
