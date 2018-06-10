import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignInContainer from './container';
import Register from './register';


const StartUpNavigator = FluidNavigator(
	{
		SignIn: { screen: SignInContainer },
		Register: { screen: Register }
	});


export default StartUpNavigator
