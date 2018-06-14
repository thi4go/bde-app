import React from 'react';
import { Dimensions, View, AsyncStorage, Image, ImageBackground, StyleSheet } from 'react-native';
import {Transition} from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Input, Button } from 'react-native-elements';


class Register extends React.Component {

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
            <Image source={require('../../assets/img/004.png')} style={{width: 200, height: 200 }} />    
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
            inputStyle={{color: 'black'}}
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
            
          <Input 
            leftIcon={
              <Icon
                name='lock'
                color='black'
                size={23}
              />
            }
            placeholder='Confirme sua senha' 
            value={this.state.confirmPassword} 
            keyboardAppearance='light'
            onChangeText={password => this.setState({confirmPassword})}
            inputStyle={{marginLeft: 10, color: 'black'}}
            containerStyle={{marginVertical: 10}}
            style={Styles.textInput}
            blurOnSubmit={true}
          />  

          <Button
            title='Cadastrar'
            activeOpacity={1}
            underlayColor="transparent"
            loading={this.state.isLoading}
            keyboardAppearance='light'
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{alignSelf: 'stretch', marginTop: 20, height: 50, width: 330, backgroundColor: 'black', borderWidth: 1, borderColor: 'white', borderRadius: 5}}
            // disabled={ this.state.password.length < 8 }
            containerStyle={{marginVertical: 10}}
            titleStyle={{fontWeight: 'bold', color: 'white'}}

          />

          
          <Button
            title='Voltar para o Login'
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
            
            onPress={ () => this.props.navigation.goBack()}
          />          
        </View>  

      </View>      
    );
  }

  
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

}

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


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

export default Register;