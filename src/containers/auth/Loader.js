import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StorageService from '../../lib/StorageService'

class AuthLoader extends Component {

  async componentDidMount () {
    console.log('aqui') 

    let session = await StorageService.get('session')

    if (session == null) {
      this.props.navigation.navigate('Auth')
    } else {
      this.props.navigation.navigate('App')
    }
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