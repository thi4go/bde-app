import React, { Component } from 'react'
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import Login from '../../components/Login'
import Register from './Register'
import { _onLogin } from '../../store/modules/auth'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
	const { isLoading, errorMsg } = state.auth

	return { isLoading, errorMsg }
}

class LoginContainer extends Component {

	handleSubmit = (values) => {
		console.log(values)
		// const payload = {
    //   email: this.state.email,
    //   password: this.state.password
    // }

    // try {
    //   var resp = await this.props.dispatch(login(payload))
    // } catch (err) {
    //   console.log(err)
    // }
    
    // if(this.props.errorMsg) {
    //   ToastAndroid.show(this.props.errorMsg, ToastAndroid.LONG)
    // } else {

    //   console.log(resp)

    //   NavigationService.switchNavigate('App')
    // }
	}

	render () {
		return <Login onSubmit={this.handleSubmit} />
	}
}

LoginContainer = connect(mapStateToProps)(LoginContainer);

class RegisterContainer extends Component {

	handleSubmit = (values) => {

	}

	render () {

	}
} 

const AuthContainer = FluidNavigator({
		Login: { screen: LoginContainer },
		Register: { screen: Register }
	});
	
export default AuthContainer