import React from 'react';
import { Dimensions, View, AsyncStorage, Image, ImageBackground, StyleSheet } from 'react-native';
import {Transition} from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Input, Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';


const Register = ({
  isLoading,
  errorMsg,
  handleSubmit,
  nav
}) => {

  return (
    <View style={Styles.container} >

        <View style={Styles.logoContainer}>
          <Transition shared="logo">
            <Image source={require('../assets/img/004.png')} style={{width: 200, height: 200 }} />    
          </Transition>
        </View>

        <View style={Styles.loginFormContainer} >
          <Field
            name='email'
            type='email'
            component={ ({input}) => (
              <Input
                leftIcon={
                  <Icon
                    name='user-o'
                    color='black'
                    size={23}
                  />
                } 
                placeholder='Email' 
                onChangeText={input.onChange}
                inputStyle={{color: 'black'}}
                autoCapitalize='none'
                style={Styles.textInput} 
                blurOnSubmit={true}
              />
            )}
          />
          
          <Field
            name='password'
            type='password'
            component={ ({input}) => (
              <Input 
                leftIcon={
                  <Icon
                    name='lock'
                    color='black'
                    size={23}
                  />
                }
                placeholder='Senha' 
                keyboardAppearance='light'
                onChangeText={input.onChange}
                inputStyle={{marginLeft: 10, color: 'black'}}
                containerStyle={{marginVertical: 10}}
                style={Styles.textInput}
                blurOnSubmit={true}
              />
            )}
          />
          
          <Field
            name='confirmpwd'
            type='password'
            component={ ({input}) => (
              <Input 
                leftIcon={
                  <Icon
                    name='lock'
                    color='black'
                    size={23}
                  />
                }
                placeholder='Confirme sua senha' 
                keyboardAppearance='light'
                onChangeText={input.onChange}
                inputStyle={{marginLeft: 10, color: 'black'}}
                containerStyle={{marginVertical: 10}}
                style={Styles.textInput}
                blurOnSubmit={true}
              />  
            )}
          />

          <Button
            title='Cadastrar'
            activeOpacity={1}
            underlayColor="transparent"
            loading={isLoading}
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
            
            onPress={ () => nav.goBack()}
          />          
        </View>  
      </View>
  )
}

Register = reduxForm({
  form: 'register'
})(Register);

export default Register;

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
