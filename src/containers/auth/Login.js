import React from 'react';
import { View, Image, StyleSheet, ToastAndroid } from 'react-native';
import {Transition} from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Text, Input, Button } from 'react-native-elements';
import NavigationService from '../../lib/NavigationService'
import { login } from '../../store/modules/auth'


class Login extends React.Component {

  constructor (props) {
    super(props);
    
    this.state = {
      email: '',
      emailValid: true,
      password: '',
      confirmPassword: '',
      passwordValid: true,
      loginFailed: false
    }

    console.log('login')
  }


  render () {
    return (
      <View style={Styles.container} >

        <View style={Styles.logoContainer}>
          <Transition shared="logo">
            <Image source={require('../../assets/img/004.png')} style={{width: 240, height: 240 }} />    
          </Transition>
        </View>

        <View style={Styles.loginFormContainer} >
          <Input
            leftIcon={
              <Icon
                name='user-o'
                color='black'
                size={23}
              />
            } 
            placeholder='Email' 
            onChangeText={email => this.setState({email})}
            value={this.state.mail} 
            inputStyle={{marginLeft: 10, color: 'black'}}
            autoCapitalize='none'
            style={Styles.textInput}
            keyboardType='email-address'
            errorStyle={{textAlign: 'center', fontSize: 12}}
            errorMessage={this.state.emailValid ? null : "Entre com um email válido "}
            blurOnSubmit={true}
            />

          <Input 
            leftIcon={
              <Icon
                name='lock'
                color='black'
                size={23}
              />
            }
            secureTextEntry={true}
            type='password'
            placeholder='Senha' 
            value={this.state.password} 
            keyboardAppearance='light'
            onChangeText={password => this.setState({password})}
            inputStyle={{marginLeft: 10, color: 'black'}}
            containerStyle={{marginVertical: 10}}
            style={Styles.textInput}
            blurOnSubmit={true}
          />
            

          <Button
            title='LOG IN'
            activeOpacity={1}
            underlayColor="white"
            loading={this.props.isLoading}
            keyboardAppearance='light'
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{alignSelf: 'stretch', marginTop: 20, height: 50, width: 330, backgroundColor: 'black', borderWidth: 1, borderColor: 'white', borderRadius: 5}}
            containerStyle={{marginVertical: 10}}
            titleStyle={{fontWeight: 'bold', color: 'white'}}

            onPress={this.submitLogin.bind(this)}
          />

          <Text>Esqueceu sua senha? Clique aqui</Text>
          

          <Button
            title='Cadastre-se'
            containerStyle={{marginTop: 20, fontWeight: 'bold'}}
            titleStyle={{ fontWeight: "600", color: "black" }}
            buttonStyle={{
              backgroundColor: "white",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            containerStyle={{ marginTop: 20 }}          
            
            onPress={ () => this.props.navigation.navigate('Register')}
          />
        </View>  
      </View>
      
    );
  };

  submitLogin = async () => {

    const payload = {
      email: this.state.email,
      password: this.state.password
    }

    try {
      const resp = await this.props.dispatch(login(payload))
    } catch (err) {
    }

    if(this.props.errorMsg) {
      ToastAndroid.show(this.props.errorMsg, ToastAndroid.LONG)
    } else {
      NavigationService.switchNavigate('App')
    }

    
  };


}


const Styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    padding: 20
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 240,
    height: 240
  },

  logoText: {
    // fontWeight: 300
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    
  },

  loginFormContainer: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
  },

  textInput: {
    color: 'black',
    height: 40,
    marginBottom: 20,
    paddingBottom: 20,
    borderColor: 'grey',
    borderWidth: 0.4,
    alignSelf: 'stretch'
  }
})

function mapStateToProps (state) {
  const { isLoading, errorMsg } = state.auth

  return { isLoading, errorMsg }
}

export default connect(mapStateToProps)(Login)