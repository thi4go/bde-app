import React from 'react';
import { View, Text } from 'react-native';


class Media extends React.Component {
  static navigationOptions = {
    title: 'Media',
  };

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Media Screen</Text>
      </View>
    );
  }

}


export default Media;