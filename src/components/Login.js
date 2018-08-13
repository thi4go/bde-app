import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {Transition} from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Input, Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';

const Login = ({ 
  isLoading, 
  errorMsg, 
  login, 
  handleSubmit, 
  navigation 
}) => {
  return (
    <View style={Styles.container} >

        <View style={Styles.logoContainer}>
          <Transition shared="logo">
            <Image source={require('../assets/img/004.png')} style={{width: 240, height: 240 }} />    
          </Transition>
        </View>

        <View style={Styles.loginFormContainer} >
          <Field 
            name='email' 
            type='email'
            component={({input}) => (
              <Input
                leftIcon={
                  <Icon
                    name='user-o'
                    color='black'
                    size={23}
                  />
                }
                onChangeText={input.onChange}
                placeholder='Email' 
                inputStyle={{marginLeft: 10, color: 'black'}}
                autoCapitalize='none'
                style={Styles.textInput}
                keyboardType='email-address'
                blurOnSubmit={true}
              />
            )}
          />
          
          <Field
            name='password'
            type='password'
            component={({input}) => (
              <Input 
                leftIcon={
                  <Icon
                    name='lock'
                    color='black'
                    size={23}
                  />
                }
                onChangeText={input.onChange}
                secureTextEntry={true}
                name='password'
                type='password'
                placeholder='Senha' 
                keyboardAppearance='light'
                inputStyle={{marginLeft: 10, color: 'black'}}
                containerStyle={{marginVertical: 10}}
                style={Styles.textInput}
                blurOnSubmit={true}
              />
            )}
          />
            

          <Button
            title='LOG IN'
            activeOpacity={1}
            underlayColor="white"
            loading={isLoading}
            keyboardAppearance='light'
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{alignSelf: 'stretch', marginTop: 20, height: 50, width: 330, backgroundColor: 'black', borderWidth: 1, borderColor: 'white', borderRadius: 5}}
            containerStyle={{marginVertical: 10}}
            titleStyle={{fontWeight: 'bold', color: 'white'}}
            onPress={handleSubmit}
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
            
            onPress={ () => navigation.navigate('Register')}
          />
        </View>  
      </View>
  )
}

Login = reduxForm({
  form: 'login'
})(Login);

export default Login;

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
});
