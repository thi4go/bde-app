import React from 'react'
import { View, Text } from 'react-native'

class HomeDetail extends React.Component {
  static navigationOptions = ({navigation}) =>  ({
		title: 'HomeDetail'
	});

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeDetail Screen</Text>
      </View>
    );
  }

}


export default HomeDetail