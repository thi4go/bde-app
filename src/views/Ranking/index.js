import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons';

class Ranking extends React.Component {
  static navigationOptions = {
    title: 'Ranking'
  };

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ranking Screen</Text>
      </View>
    );
  }

}


export default Ranking;