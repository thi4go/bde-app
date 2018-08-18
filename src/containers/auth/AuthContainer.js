import React, { Component } from 'react';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { ToastAndroid } from 'react-native';
import Login from '../../components/Login';
import Register from '../../components/Register';
import { _onLogin } from '../../store/modules/auth';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	const { isLoading, errorMsg } = state.auth

	return { isLoading, errorMsg }
}

class LoginContainer extends Component {

	handleSubmit = async (values) => {
		const payload = {
      email: values.email,
      password: values.password
    }
		console.log(this.props)
    try {
      var resp = await this.props.dispatch(_onLogin(payload));
    } catch (err) {
			console.log('errr')
      console.log(err)
    }
    
    if(this.props.errorMsg) {
      ToastAndroid.show(this.props.errorMsg, ToastAndroid.LONG)
    } else {
			console.log('resp')
    console.log(resp)

      // NavigationService.switchNavigate('App')
    }
	}

	render () {
		return <Login 
			onSubmit={this.handleSubmit} 
			nav={this.props.navigation}
			isLoading={this.props.isLoading}
		/>
	}
}

LoginContainer = connect(mapStateToProps)(LoginContainer);


class RegisterContainer extends Component {

	handleSubmit = (values) => {

	}

	render () {
		return <Register onSubmit={this.handleSubmit} nav={this.props.navigation} />
	}
} 

RegisterContainer = connect(mapStateToProps)(RegisterContainer); 


const AuthContainer = 
	FluidNavigator({
		Login: { screen: LoginContainer },
		Register: { screen: RegisterContainer }
	});
	

export default AuthContainer;