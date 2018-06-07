import React from 'react';
import { View, AsyncStorage, Image, ImageBackground } from 'react-native';
import Styles from './styles';
import { LogoContainer, Logo } from './shared';
import {Transition} from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Input, Button } from 'react-native-elements';


class SignIn extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      email: '',
      emailValid: true,
      password: '',
      confirmPassword: '',
      passwordValid: true,
      loginFailed: false,
      isLoading: false      
    }
  }

  render () {
    return (
      <View style={Styles.container} >

        <View style={Styles.logoContainer}>
          <Transition shared="logo">
            <Image source={require('../../images/004.png')} style={{width: 240, height: 240 }} />    
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
            loading={this.state.isLoading}
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

  submitLogin = () => {

    this.setState({
      isLoading: true
    });


    console.log('boraaa')

    this.props.navigation.navigate('App');
    

  };


}


export default SignIn;