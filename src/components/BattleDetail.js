import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'



export default class BattleDetail extends Component {

  constructor (props) {
    super (props)
    console.log(props.navigation.state.params._id)
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text>BDE</Text>
        <Button title='back' onPress={ () => this.props.navigation.goBack() } />
      </View>    
    )
  }
}

