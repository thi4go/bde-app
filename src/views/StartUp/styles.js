import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'

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

export default Styles
