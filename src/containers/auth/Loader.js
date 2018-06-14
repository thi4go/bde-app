import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import StorageService from '../../lib/StorageService'


class AuthLoader extends Component {

  constructor (props) {
    super (props)

    
  }

  async componentDidMount () {
    console.log('aqui') 

    await AsyncStorage.setItem('lol', 'lol')

    let result = await AsyncStorage.getItem('lol')

    console.log(result)
    
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}



export default AuthLoader