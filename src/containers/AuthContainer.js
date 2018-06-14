import React, { Component } from 'react'
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import Login from './auth/Login'
import Register from './auth/Register'


const Navigator = FluidNavigator(
	{
		Login: { screen: Login },
		Register: { screen: Register }
  });
	
	
class AuthContainer extends Component {

	constructor (props) {
		super(props)
	}


	render () {
		const { navigation } = this.props
		return <Navigator screenProps={navigation} />
	}

}


export default AuthContainer